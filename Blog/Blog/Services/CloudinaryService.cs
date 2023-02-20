using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Blog.Services
{
    public class CloudinaryService : ICloudinaryService
    {
        private const string ImageFolder = "images";
        private const string VideoFolder = "videos";
        private readonly Cloudinary cloudinary;

        public CloudinaryService(Cloudinary cloudinary)
        {
            this.cloudinary = cloudinary;
        }

        public async Task<ImageUploadResult> UploadImageAsync(IFormFile image, string imageId)
        {
            using var stream = image.OpenReadStream();

            var uploadParams = new ImageUploadParams()
            {
                File = new FileDescription(imageId, stream),
                Folder = ImageFolder,
            };

            return await this.cloudinary.UploadAsync(uploadParams);
        }

        public async Task<VideoUploadResult> UploadVideoAsync(IFormFile video, string videoId)
        {
            using var stream = video.OpenReadStream();

            var uploadParams = new VideoUploadParams()
            {
                File = new FileDescription(videoId, stream),
                Folder = VideoFolder,
            };

            return await this.cloudinary.UploadAsync(uploadParams);
        }
    }
}
