using AutoMapper;
using Blog.Data.EfRepository;
using Blog.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Blog.Services
{
    public class ImageService : IImageService
    {
        private readonly IRepository<Image> imageRepository;
        private readonly ICloudinaryService cloudinaryService;
        private readonly IMapper mapper;

        public ImageService(
            IRepository<Image> imageRepository, 
            ICloudinaryService cloudinaryService,
            IMapper mapper)
        {
            this.imageRepository = imageRepository;
            this.cloudinaryService = cloudinaryService;
            this.mapper = mapper;
        }

        public async Task Delete(string id)
        {
            var image = await this.imageRepository.All().Where(x => x.Id.ToString() == id).FirstOrDefaultAsync();
            
            if (image != null)
            {
                this.imageRepository.HardDelete(image);
                await imageRepository.SaveChangesAsync();
            }
        }

        public async Task<Image> UploadImage(IFormFile imageFile)
        {
            var image = new Image();

            var result = await this.cloudinaryService.UploadImageAsync(imageFile, image.Id.ToString());

            if (result.Error != null)
            {
                throw new InvalidOperationException(result.Error.Message);
            }

            image.Url = result.Url.ToString();

            await this.imageRepository.AddAsync(image);
            return image;
        }

        public async Task<IEnumerable<T>> UploadImages<T>(ICollection<IFormFile> imageFile)
        {
            var images = new List<Image>();
            foreach (var file in imageFile)
            {
                var image = new Image();
                var result = await this.cloudinaryService.UploadImageAsync(file, image.Id.ToString());
                if (result.Error != null)
                {
                    throw new InvalidOperationException(result.Error.Message);
                }

                image.Url = result.Url.ToString();
                images.Add(image);

                await this.imageRepository.AddAsync(image);
            }

            await this.imageRepository.SaveChangesAsync();
            return this.mapper.Map<IEnumerable<T>>(images);
        }
    }
}
