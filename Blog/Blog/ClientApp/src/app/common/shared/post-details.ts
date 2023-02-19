import { IPost } from "./post";

export interface IPostDetail extends IPost{
    content: string;
    images: { url: string, image: string, thumbImage: string }[];
    videos: { url: string, image: string, thumbImage: string }[];

}
