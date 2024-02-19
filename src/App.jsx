import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
