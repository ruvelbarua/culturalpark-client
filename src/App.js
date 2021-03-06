import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Medation from './Components/Meditation/Meditation';
import Publication from './Components/Publication/Publication';
import Membership from './Components/Membership/Membership';
import Contact from './Components/Contact/Contact';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Notfound from "./Components/Notfound/Notfound";
import Photos from "./Components/Photos/Photos";
import Cultur from "./Components/Cultur/Cultur";
function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cultural Park</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="culturalpark icon and titel" />
      </Helmet>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="meditation" element={<Medation />} />
          <Route path="publication" element={<Publication />} />
          <Route path="photos" element={<Photos />} />
          <Route path="membership" element={<Membership />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cultur" element={<Cultur />} />
          <Route path="*" element={<Notfound />} />
          {/* <Route path="users/*" element={<Users />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
