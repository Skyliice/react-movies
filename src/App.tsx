import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { movieDTO } from './movies/Movies.model';

function App() {

  const testMovie: movieDTO ={
    id: 1,
    title: 'Spider-Man: Far From Home',
    poster: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg'
  }
  return(
    <>
      <IndividualMovie {...testMovie} />
    </>
  );
}

export default App;
