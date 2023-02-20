using AutoMapper;
using Blog.Data.EfRepository;
using Blog.Data.Models;
using Blog.Models.Post;
using Microsoft.EntityFrameworkCore;

namespace Blog.Services
{
    public class PostService : IPostService
    {
        private const string NullPostException = "The post does not exist!";

        private readonly IRepository<Post> postRepository;
        private readonly IImageService imageService;
        private readonly IMapper mapper;

        public PostService(
            IRepository<Post> postRepository,
            IImageService imageService,
            IMapper mapper)
        {
            this.imageService = imageService;
            this.postRepository = postRepository;
            this.mapper = mapper;
        }


        public async Task<string> Add(ImportPostView model, string userId)
        {
            var newPost = this.mapper.Map<Post>(model);
            newPost.AuthorId = userId;

            var newImage = await this.imageService.UploadImage(model.MainImage!, newPost);
            newPost.MainImageUrl = newImage.Url;
            await AddImageCollection(model, newPost);

            // TODO: Add for videos

            await this.postRepository.AddAsync(newPost);
            await this.postRepository.SaveChangesAsync();

            return newPost.Id.ToString();
        }

        private async Task AddImageCollection(ImportPostView model, Post newPost)
        {
            if (model.Images != null)
            {
                foreach (var image in model.Images)
                {
                    var newUploadedImage = await this.imageService.UploadImage(image, newPost);
                    newPost.Images!.Add(newUploadedImage);
                }
            }
        }

        public async Task<T> GetById<T>(string id)
        {
            var post = await this.postRepository.AllAsNoTracking()
                .Where(x => x.Id.ToString() == id)
                .Include(x => x.Author)
                .Include(x => x.Videos)
                .Include(x => x.Images)
                .FirstOrDefaultAsync();

            IsNull(post);
            return this.mapper.Map<T>(post);
        }

        public async Task<IEnumerable<T>> All<T>()
        {
            var posts = await this.postRepository.AllAsNoTracking()
                .Where(x => x.IsDeleted == false)
                .Include(x => x.Author)
                .ToListAsync();

            return this.mapper.Map<IEnumerable<T>>(posts);
        }

        public async Task Delete(string id)
        {
            var targetPost = await this.postRepository.All().Where(x => x.Id.ToString() == id).FirstOrDefaultAsync();
            IsNull(targetPost);
            targetPost!.IsDeleted = true;

            await this.postRepository.SaveChangesAsync();
        }


        public async Task Edit(EditPostView model)
        {
            var targetPost = await this.postRepository.All().Where(x => x.Id.ToString() == model.Id).FirstOrDefaultAsync();

            IsNull(targetPost);

            targetPost!.UpdatedOn = DateTime.UtcNow;
            targetPost.Title = model.Title;
            targetPost.Content = model.Content;

            await this.postRepository.SaveChangesAsync();
        }

        private void IsNull(Post? targetPost)
        {
            if (targetPost == null)
            {
                throw new NullReferenceException(NullPostException);
            }
        }

    }
}
