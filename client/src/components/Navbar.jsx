import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight"
        >
          🧠 MentalForge
        </Link>

        <div className="space-x-6 flex items-center">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 font-medium transition duration-150"
          >
            Home
          </Link>

          {user && (
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-indigo-600 font-medium transition duration-150"
            >
              Dashboard
            </Link>
          )}

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-1 border border-indigo-600 text-indigo-600 font-medium rounded hover:bg-indigo-600 hover:text-white transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition duration-200"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-1 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition duration-200"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
