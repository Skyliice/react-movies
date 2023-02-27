import MovieTheaterForm from "./MovieTheaterForm";

export default function EditMovieTheater()
{
    return(
        <>
            <h3>Edit Movie Theater</h3>
            <MovieTheaterForm 
            model={{name: "Some movie theater", latitude:59.93358523219539,
             longitude: 30.34255385398865}}
            onSubmit={values => console.log(values)}
            />
        </>
    )
}