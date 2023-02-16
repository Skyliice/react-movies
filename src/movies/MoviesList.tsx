import IndividualMovie from "./IndividualMovie";
import { movieDTO } from "./Movies.model";
import css from './MoviesList.module.css'

export default function MoviesList(props: moviesListProps)
{
    return(
        <div className={css.div}>
            {props.movies.map(movie =>
                <IndividualMovie{...movie} key={movie.id} />)}
        </div>
    )
}
interface moviesListProps{
    movies: movieDTO[];
}