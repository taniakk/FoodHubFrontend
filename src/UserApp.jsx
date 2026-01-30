import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Hero from "./pages/userPannel/hero/hero";
import SignIn from "./pages/userPannel/hero/signin";
import SignUp from "./pages/userPannel/hero/signup";
import Cart from "./pages/userPannel/hero/cart";

export default function UserApp() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}
