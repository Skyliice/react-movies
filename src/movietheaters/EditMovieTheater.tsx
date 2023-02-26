import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater()
{
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
            model={{name: "Some movie theater"}}
            onSubmit={values => console.log(values)}
            />
        </>
    )
}