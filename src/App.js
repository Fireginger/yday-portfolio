import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Navbar, Footer } from './component';
import Home from './pages/HomePage/Home';
import Entreprise from './pages/Entreprise/Entreprise';
import Blog from './pages/Blog/Blog';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/entreprises' element={<Entreprise />}/>
        <Route path='/blog' element={<Blog />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
