import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Medation from './Components/Meditation/Meditation';
import Publication from './Components/Publication/Publication';
import Gallery from './Components/Gallery/Gallery';
import Donation from './Components/Donation/Donation';
import Contact from './Components/Contact/Contact';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="meditation" element={<Medation />} />
        <Route path="publication" element={<Publication />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="donation" element={<Donation />} />
        <Route path="contacts" element={<Contact />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
