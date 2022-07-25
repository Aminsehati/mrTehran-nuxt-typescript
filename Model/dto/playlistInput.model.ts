import { Pagination } from "../pagination.model";

export class PlayListInput extends Pagination {
    name?: number;
    Followers?: number;
    createdAt?: number;
}