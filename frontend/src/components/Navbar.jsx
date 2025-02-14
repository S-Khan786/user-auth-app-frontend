import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-xl font-bold">
          User Auth App
        </Link>
        <div className="space-x-4">
          {!token && (
            <>
              <Link to="/register" className="hover:text-blue-200">
                Register
              </Link>
              <Link to="/login" className="hover:text-blue-200">
                Login
              </Link>
            </>
          )}
          {token && (
            <>
              <Link to="/search" className="hover:text-blue-200">
                Search User
              </Link>
              <button onClick={handleLogout} className="hover:text-blue-200">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;