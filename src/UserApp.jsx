import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Hero from "./pages/userPannel/hero/hero";
import SignIn from "./pages/userPannel/hero/signin";
import SignUp from "./pages/userPannel/hero/signup";
import Cart from "./pages/userPannel/hero/cart";
import NavProducts from "./pages/userPannel/hero/products";
import About from "./pages/userPannel/hero/about";
import Contact from "./pages/userPannel/hero/contact";

export default function UserApp() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/nProducts" element={<NavProducts />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}
