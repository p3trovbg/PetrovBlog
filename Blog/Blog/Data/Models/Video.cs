﻿namespace Blog.Data.Models
{
    public class Video
    {
        public Video()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

        public string Url { get; set; }

        public Post? Post { get; set; }

        public bool IsDeleted { get; set; }
    }
}