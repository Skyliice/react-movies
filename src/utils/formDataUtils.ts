import actorCreationDTO from "../actors/actors.model";
import { movieCreationDTO } from "../movies/Movies.model";

export function convertActorToFormData(actor: actorCreationDTO) : FormData
{
    const formData = new FormData();

    formData.append("name", actor.name);
    if(actor.biography)
    {
        formData.append("biography", actor.biography);
    }
    if(actor.dateOfBirth)
    {
        formData.append("dateOfBirth",formatDate(actor.dateOfBirth));
    }
    if(actor.picture)
    {
        formData.append("picture",actor.picture);
    }
    return formData;
}

export function convertMovieToFormData(movie: movieCreationDTO){
    const formDataInstance = new FormData();

    formDataInstance.append('title',movie.title);
    if(movie.summary){
        formDataInstance.append('summary',movie.summary);
    }
    formDataInstance.append('trailer',movie.trailer);
    formDataInstance.append('inTheaters',String(movie.inTheaters));
    if(movie.releaseDate){
        formDataInstance.append('releaseDate',formatDate(movie.releaseDate));
    }
    if(movie.poster){
        formDataInstance.append('poster',movie.poster);
    }
    formDataInstance.append('genresIds',JSON.stringify(movie.genresIds));
    formDataInstance.append('movieTheatersIds',JSON.stringify(movie.movieTheatersIds));
    formDataInstance.append('actors',JSON.stringify(movie.actors));


    return formDataInstance;
}

function formatDate(date: Date){
    date = new Date(date);
    const format = new Intl.DateTimeFormat("ru",{
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const [
        {value: month},,
        {value: day},,
        {value: year}
    ] = format.formatToParts(date);
    return `${year}-${month}-${day}`;
}