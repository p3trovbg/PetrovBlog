using AutoMapper;
using Blog.Data.Models;
using Blog.Models.Post;

namespace Blog
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ImportPostView, Post>()
                .ForMember(
                d => d.CreatedOn,
                mo => mo.MapFrom(x => DateTime.UtcNow));
        }
    }
}