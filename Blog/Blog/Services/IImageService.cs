using Blog.Data.Models;

namespace Blog.Services
{
    public interface IImageService
    {
        public Task<Image> UploadImage(IFormFile imageFile);

        public Task<IEnumerable<T>> UploadImages<T>(ICollection<IFormFile> files);

        public Task Delete(string id);
    }
}
