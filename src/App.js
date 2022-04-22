import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import {
  AboutUs,
  Collections,
  Gallery,
  Header,
  Inquiry,
  Offer,
  Popular,
  Testimonials,
} from "./pages";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Collections />
      <Gallery />
      <Popular />
      <AboutUs />
      <Offer />
      <Testimonials />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default App;
