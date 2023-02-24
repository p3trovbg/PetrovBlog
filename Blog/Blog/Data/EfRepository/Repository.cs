using Microsoft.EntityFrameworkCore;

namespace Blog.Data.EfRepository
{
    public class Repository<TEntity> : IRepository<TEntity>
        where TEntity : class
    {
        public Repository(ApplicationDbContext context)
        {
            this.Context = context ?? throw new ArgumentNullException(nameof(context));
            this.DbSet = this.Context.Set<TEntity>();
        }

        protected DbSet<TEntity> DbSet { get; set; }

        protected ApplicationDbContext Context { get; set; }

        public int Count => this.DbSet.Count();

        public Task AddAsync(TEntity entity) => this.DbSet.AddAsync(entity).AsTask();

        public void HardDelete(TEntity entity) => this.DbSet.Remove(entity);

        public IQueryable<TEntity> All() => this.DbSet;

        public IQueryable<TEntity> AllAsNoTracking() => this.DbSet.AsNoTracking();

        public Task<int> SaveChangesAsync() => this.Context.SaveChangesAsync();

        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        } 

        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                this.Context?.Dispose();
            }
        }

    }
}
