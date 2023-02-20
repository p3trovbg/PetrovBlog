using Blog.Data.Models;

namespace Blog.Services
{
    public interface IImageService
    {
        public Task<Image> UploadImage(IFormFile imageFile, Post post);
    }
}
