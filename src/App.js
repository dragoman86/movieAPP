import NavBar from './components/NavBar';
import './App.css';
import MovieCard from './components/MovieCard';
import StreamTest from './components/StreamTest';
import MoviesApp from './components/MoviesApp';
import SeriesApp from './components/SeriesApp';
import { movies } from './data/MoviesData';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState("")
  const [moviesData, setMoviesData] = useState(movies)


  //get the input value
  const handleSearch = e => { setSearch(e.target.value) }

  //filtred moviesData by title
  const filtredMovies = moviesData.filter((movie) => {
    return movie.title.toLowerCase().includes(search.toLocaleLowerCase())
  })
  return (
    <div className="App">
      <header>
        <NavBar
          search={search}
          handleSearch={handleSearch}
        />
      </header>
      <body>
        <div className='MoviesPart'>
          <h1>MOVIES</h1>
          <MoviesApp
            moviesData={filtredMovies}
            setMoviesData={setMoviesData}
          />
          <hr style={{ width: '85%' }} />
          <h1>TV SHOWS</h1>
          <SeriesApp />
        </div>
      </body>
    </div>
  );
}

export default App;
