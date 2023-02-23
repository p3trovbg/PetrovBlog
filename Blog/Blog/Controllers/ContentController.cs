using Blog.Models.PostContent;
using Blog.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Blog.Controllers
{
    [Authorize]
    public class ContentController : ApiController
    {
        private readonly IImageService imageService;

        public ContentController(IImageService imageService)
        {
            this.imageService = imageService;
        }

        [HttpPost]
        public async Task<IActionResult> Upload([FromForm] UploadContentModel data)
        {
            if (data.ContentFiles == null)
            {
                return NotFound(data);
            }

            var images = await this.imageService.UploadImages<ContentViewModel>(data.ContentFiles!);

            return this.Ok(images);
        }
    }
}
