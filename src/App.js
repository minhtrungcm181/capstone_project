import logo from './logo.svg';
import './App.css';
import MainPage from './views/MainPage';
import UploadFilmForm from './components/UploadFilmForm';


function App() {

  return (
    <nav className="App">
      <header className="App-header">
        <MainPage/>
        <UploadFilmForm />
      </header>
    </nav>
  );
}

export default App;
