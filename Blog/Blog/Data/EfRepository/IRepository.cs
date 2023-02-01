namespace Blog.Data.EfRepository
{
    public interface IRepository<TEntity> : IDisposable 
        where TEntity : class
    {
        int Count { get; }

        Task AddAsync(TEntity entity);

        Task<int> SaveChangesAsync();

        IQueryable<TEntity> AllAsNoTracking();

        IQueryable<TEntity> All();
    }
}
