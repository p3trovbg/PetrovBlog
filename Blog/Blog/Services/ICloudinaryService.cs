using CloudinaryDotNet.Actions;

namespace Blog.Services
{
    public interface ICloudinaryService
    {
        Task<ImageUploadResult> UploadImageAsync(IFormFile image, string imageId);

        Task<VideoUploadResult> UploadVideoAsync(IFormFile video, string videoid);
    }
}
