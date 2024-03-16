import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@mantine/core/styles.css";
// import "../src/fonts/Satoshi_Complete/Fonts/WEB/fonts/Satoshi-Black.ttf"; // Import other font weights/styles if necessary

import Home from "./components/Home";
import Courses from "./components/Courses";
import Values from "./components/Values";
import Gallery from "./components/Gallery";
import Carousel from "./components/Carosel";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage/ContactPage";
import Who from "./components/Who/Who";
import CoursePage from "./components/coursepage/CoursePage";
import Navigation from "./components/Navigation/Navigation";
import Toppers from "./components/Toppers/Toppers";
// import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <Home />
                <Courses />
                <Values />
                <Gallery />
                <Carousel />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navigation />
                <ContactPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navigation />
                <Who />
                <Values />
                <Carousel />
                <Footer />
              </>
            }
          />
          <Route
            path="/courses"
            element={
              <>
                <Navigation />
                <CoursePage />
                <Footer />
              </>
            }
          />
          <Route
            path="/toppers"
            element={
              <>
                <Navigation />
                <Toppers />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
