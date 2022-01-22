import './App.css';
import Navbar from './components/navbar/navbar-component';
import HomePage from './pages/home.page';
import ProductsPage from './pages/product.page';
import ContactPage from './pages/contact.page';
import SurveyForm from './components/survey-form/survey-form.component';
import {
  Routes,
  Route, 
} from "react-router-dom";
import Footer from './components/footer/footer.component';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            <Route path="survey" element={<SurveyForm/>} />
            <Route path="services" element={<ProductsPage/>} />
            <Route path="contact" element={<ContactPage/>} />
          </Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
