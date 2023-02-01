﻿namespace Blog.Data.Models
{
    public class Post
    {
        public Guid Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Content { get; set; } = string.Empty;

        public string MainImageUrl { get; set; } = string.Empty;

        public ApplicationUser Author { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime UpdatedOn { get; set; }

        public ICollection<Image>? Images { get; set; }

        public ICollection<Video>? Videos { get; set; }
    }
}
