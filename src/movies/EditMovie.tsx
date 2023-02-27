import { actorMovieDTO } from "../actors/actors.model";
import { genreDTO } from "../genres/genres.model";
import { movieTheaterDTO } from "../movietheaters/movieTheater.model";
import MovieForm from "./MovieForm";

export default function EditMovie()
{
    const nonSelectedGenres: genreDTO[]=[{id: 2,name: "Drama"}];
    const selectedGenres: genreDTO[]=[{id: 1, name:"Comedy"}];

    const nonSelectedMovieTheaters: movieTheaterDTO[] =[{id: 1, name:"Cinema Park"}];
    const selectedMovieTheaters: movieTheaterDTO[]=[{id:2,name:"Kino-Zvezda"}];

    const selectedActors: actorMovieDTO[] =[
        { id: 1, name: "Bogdan", character: "Debil", picture: "https://pp.userapi.com/c841122/v841122176/7713e/_VP2r0E-J8I.jpg" },
        { id: 2, name: "Vlad", character: "", picture: "https://sun9-85.userapi.com/c9817/u62741640/-6/w_6b1233d6.jpg" }
    ]

    return(
        <>
            <h3>Edit Movie</h3>
            <MovieForm model={{title: "Toy Story", inTheaters: true,
             trailer: "url", 
             releaseDate: new Date("2019-01-01T00:00:00")}} 
             onSubmit={values =>console.log(values)}
             nonSelectedGenres={nonSelectedGenres}
             selectedGenres={selectedGenres}
             nonSelectedMovieTheaters={nonSelectedMovieTheaters}
             selectedMovieTheaters={selectedMovieTheaters}
             selectedActors={selectedActors}
             />
        </>
    )
}