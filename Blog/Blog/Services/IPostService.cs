﻿using Blog.Models.Post;

namespace Blog.Services
{
    public interface IPostService
    {
        Task<string> Add(ImportPostView model, string userId);

        Task Edit(EditPostView model);

        Task Delete(string id);

        int Count();

        Task<IEnumerable<T>> All<T>();

        Task<T> GetById<T>(string id);

        Task<IEnumerable<T>> GetFiveRecentPosts<T>();
    }
}
