import logo from './logo.svg';
import './App.scss';
import MainPage from './views/MainPage';
import UploadFilmForm from './components/UploadFilmForm';
import { BrowserRouter } from 'react-router-dom';
import CustomNav from './components/CustomNav';


function App() {

  return (
    <BrowserRouter>
    <CustomNav
        li={[
          ["Movie Manager"],
          ["Service Manager"],
          ["Device Manager"],
        ]}
      />
     <div className='Content'>
     <button className='ButtonCreateNewMovie'>Create New Movie</button>
    </div>
    </BrowserRouter>
  );
}

export default App;
