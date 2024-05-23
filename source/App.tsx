import './App.css';
import Header from './componetns/header';
import { Route, Routes, Link} from 'react-router-dom';
import Api from './componetns/Api';
import MovieComponent from './componetns/movieComponent';
import Registration from './componetns/registration';


function App() {
  

  return (
    <>
     <Header/>
    <Routes>
      <Route path='/'>
        <Route index element={<Api/>}/>
        <Route path='/watch/:id' element={<MovieComponent />}/>
        <Route path='/registration' element={<Registration/>}/>
      </Route>
    
    </Routes>
   </>
  );
}

export default App;
