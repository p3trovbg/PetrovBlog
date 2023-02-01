using Blog.Models.Post;

namespace Blog.Services
{
    public interface IPostService
    {
        Task<string> Add(ImportPostView model);

        Task Edit(EditPostView model);

        Task Delete(string id);
    }
}
