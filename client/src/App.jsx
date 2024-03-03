import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register, Profile, Login} from "./pages";
import TopBar from "./components/TopBar";


export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
