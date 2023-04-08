import { actorMovieDTO } from "../actors/actors.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import { genreDTO } from "../genres/genres.model";

export interface movieDTO {
    id: number;
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    summary?: string; 
    poster?: string;
    genres: genreDTO[];
    movieTheaters:movieTheaterDTO[];
    actors: actorMovieDTO[];
}

export interface movieCreationDTO{
    title: string;
    inTheaters: boolean;
    trailer: string;
    releaseDate?: Date;
    summary?: string; 
    poster?: File;
    posterURL?: string;
    genresIds?: number[];
    movieTheatersIds?:number[];
    actors?: actorMovieDTO[];
}

export interface landingPageDTO {
    inTheaters?: movieDTO[];
    upcomingReleases?: movieDTO[];
}

export interface moviesPostGetDTO{
    genres: genreDTO[];
    movieTheaters: movieTheaterDTO[];
}