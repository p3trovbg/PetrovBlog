import { IPost } from "./post";

export interface IPostDetail extends IPost{
    content: string;
    images: { id: string, url: string, image: string, thumbImage: string }[];
    videos: { id: string, url: string, image: string, thumbImage: string }[];

}
