import './styles/css/bootstrap.min.css';
import './styles/css/App.css';
import Login from './page/login';
import Home from './page/home'
import hinh1 from './image/173281189.jpg';
import hinh2 from './image/1651729679291.jpg';
import hinh3 from './image/hinh1_dxxx.jpg';
import body1 from './image/body_img.jpeg';
// const element = <img src={'./image/173281189.jpg'}></img>;
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>,
    </main>
  );
}

export default App;
