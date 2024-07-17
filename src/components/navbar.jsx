import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Navbar({ page }) {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("username_login");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Success logout !",
    });
    navigate("/login");
  }

  return (
    <>
      <div className="w-screen bg-[#9bbefe] p-5">
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center">
            <img
              src="/blue-waves.png"
              alt="Logo"
              className="w-28 rounded-full"
            />
            <h1 className="text-2xl font-semibold ml-5">Lorem</h1>
          </div>
          <div className="flex gap-5 text-xl">
            {page === "home" ? (
              <h1 className="py-2 px-3 bg-sky-800 rounded cursor-pointer text-white">
                Home
              </h1>
            ) : (
              <h1
                className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
                onClick={() => navigate("/")}
              >
                Home
              </h1>
            )}
            {page === "add-user" ? (
              <h1 className="py-2 px-3 bg-sky-800 rounded cursor-pointer text-white">
                Add User
              </h1>
            ) : (
              <h1
                className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
                onClick={() => navigate("/add-user")}
              >
                Add User
              </h1>
            )}
            <h1
              className="py-2 px-3 hover:bg-sky-800 rounded cursor-pointer hover:text-white"
              onClick={handleLogout}
            >
              Log Out
            </h1>
          </div>
          <div>
            {page === "home" && (
              <form>
                <div className="flex items-center">
                  <input
                    type="text"
                    className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-500 text-lg"
                  />
                  <button className="py-2 px-3 bg-sky-800 text-base rounded font-semibold text-white ml-3">
                    Search
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
