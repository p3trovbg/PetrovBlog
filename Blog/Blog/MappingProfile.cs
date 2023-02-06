using AutoMapper;
using Blog.Data.Models;
using Blog.Models.Identity;
using Blog.Models.Post;
using Blog.Models.PostContent;

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

            CreateMap<Post, DetailPostViewModel>();

            CreateMap<Post, BasePostViewModel>();

            CreateMap<ApplicationUser, BaseUserViewModel>();

            CreateMap<Video, ContentViewModel>();

            CreateMap<Image, ContentViewModel>();
        }
    }
}