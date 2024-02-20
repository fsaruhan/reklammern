import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import SignIn from "../pages/SignIn";

function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Reklam</span>
            <span className="text-slate-900">Senin</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Reklam ilanı ara..."
            className="bg-transparent focus: outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600"></FaSearch>
        </form>
        <ul className="flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="hidden sm:inline text-slate-700 hover:underline">
            <Link to="/profile">Profile</Link>
          </li>
          <li className=" text-slate-700 hover:underline">
            <Link to="/sign-in">Giriş Yap</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
