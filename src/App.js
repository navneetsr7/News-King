import './css/App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import ArticleDetails from './pages/ArticleDetails';
import Search from './pages/Search';

function App() {
  return (
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path="/news/:uri" element={<ArticleDetails/>}/>
    <Route path="/search/:query" element={<Search/>}/>
      </Routes>
      <Footer/>
  </BrowserRouter>
  );
}

export default App;
