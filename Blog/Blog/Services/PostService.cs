using Blog.Data.EfRepository;
using Blog.Data.Models;
using Blog.Models.Post;
using Microsoft.EntityFrameworkCore;

namespace Blog.Services
{
    public class PostService : IPostService
    {
        private readonly IRepository<Post> postRepository;

        public PostService(IRepository<Post> postRepository)
        {
            this.postRepository = postRepository;
        }

        public async Task<string> Add(ImportPostView model)
        {
            var newPost = new Post();
            newPost.Title = model.Title;
            newPost.Content = model.Content;
            newPost.CreatedOn = DateTime.UtcNow;
            newPost.AuthorId = model.AuthorId;

            await this.postRepository.AddAsync(newPost);
            await this.postRepository.SaveChangesAsync();

            return newPost.Id.ToString();
        }

        public async Task Delete(string id)
        {
            var targetPost = await this.postRepository.All().Where(x => x.Id.ToString() == id).FirstOrDefaultAsync();

            if (targetPost != null)
            {
                targetPost.IsDeleted = true;
            }

            await this.postRepository.SaveChangesAsync();
        }

        public async Task Edit(EditPostView model)
        {
            var targetPost = await this.postRepository.All().Where(x => x.Id.ToString() == model.Id).FirstOrDefaultAsync();

            if (targetPost != null)
            {
                targetPost.UpdatedOn = DateTime.UtcNow;
                targetPost.Title = model.Title;
                targetPost.Content = model.Content;
            }

            await this.postRepository.SaveChangesAsync();
        }
    }
}
