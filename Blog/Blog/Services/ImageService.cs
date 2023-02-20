using Blog.Data.EfRepository;
using Blog.Data.Models;

namespace Blog.Services
{
    public class ImageService : IImageService
    {
        private readonly IRepository<Image> imageRepository;
        private readonly ICloudinaryService cloudinaryService;

        public ImageService(IRepository<Image> imageRepository, ICloudinaryService cloudinaryService)
        {
            this.imageRepository = imageRepository;
            this.cloudinaryService = cloudinaryService;
        }

        public async Task<Image> UploadImage(IFormFile imageFile, Post post)
        {
            var image = new Image();

            var result = await this.cloudinaryService.UploadImageAsync(imageFile, image.Id.ToString());

            if (result.Error != null)
            {
                throw new InvalidOperationException(result.Error.Message);
            }

            image.Url = result.Url.ToString();
            image.Post = post;

            await this.imageRepository.AddAsync(image);
            return image;
        }
    }
}
