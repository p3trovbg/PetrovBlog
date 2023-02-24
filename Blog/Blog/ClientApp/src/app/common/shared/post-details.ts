import { IContent } from "./content";
import { IPost } from "./post";

export interface IPostDetail extends IPost{
    content: string;
    images: IContent[];
    videos: IContent[];

}
