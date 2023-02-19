import { IAuthor } from "./author";

export interface IPost {
    id: string;
    title: string;
    mainImageUrl: string;
    summary: string;
    author: IAuthor;
    createdOn: string;
    updatedOn: string;
  }