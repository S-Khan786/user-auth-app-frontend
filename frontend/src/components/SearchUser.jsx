import { useState } from "react";
import axios from "axios";

const SearchUser = () => {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/api/auth/search/${query}`, {
        headers: { "x-auth-token": token },
      });
      setUser(res.data);
    } catch (err) {
      alert(err.response.data.message || "User not found");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Search User</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter username or email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleSearch}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
        {user && (
          <div className="mt-6">
            <h3 className="text-xl font-bold">User Details</h3>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Full Name: {user.fullName}</p>
            <p>Gender: {user.gender}</p>
            <p>Date of Birth: {new Date(user.dateOfBirth).toLocaleDateString()}</p>
            <p>Country: {user.country}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchUser;