import { useEffect, useState } from "react";
import { landingPageDTO } from "./movies/Movies.model";
import MoviesList from "./movies/MoviesList";

export default function LandingPage()
{

    const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    
  },[]);

    return(
        <>
        <h3>In Theaters</h3>
              <MoviesList movies={movies.inTheaters} />
              <h3>Upcoming Releases</h3>
              <MoviesList movies={movies.upcomingReleases} />  
        </>
    );
}