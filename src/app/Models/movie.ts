import { Media } from "./media";

export interface Movie extends Media{

    'adult': boolean;
    'release_date': string;
    'title': string;
    
    'video': boolean;
    'original_title': string;
}
