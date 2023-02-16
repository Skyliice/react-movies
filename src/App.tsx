import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/Movies.model';
import MoviesList from './movies/MoviesList';

function App() {

  const inTheaters: movieDTO[] =[{
    id: 1,
    title: 'Spider-Man: Far From Home',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  },
  {
    id: 2,
    title: 'Spider-Man: Into the Spider-Verse',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Spider-Man_Into_the_Spider-Verse_poster.png'
  }];

  const upcomingReleases: movieDTO[] = [
    {
      id: 3,
      title: 'Spider-Man: Across the Spider-Verse',
      poster: 'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/395586f4-38b6-4d88-8e54-0d1abaee6924/1920x'
    }
  ]
  return(
    <>
      <h3>In Theaters</h3>
      <MoviesList movies={inTheaters}/>
      <h3>Upcoming Releases</h3>
      <MoviesList movies={upcomingReleases} />
    </>
  );
}

export default App;
