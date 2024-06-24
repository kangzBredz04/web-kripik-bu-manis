import Loading from "../components/Loading";
import { api } from "../utils";
import { useNavigate } from "react-router-dom";

export default function ProfileAdmin() {
  const navigate = useNavigate();

  if (localStorage.getItem("id")) {
    return (
      <div className="py-6 px-7 font-KumbhSans bg-gray-100">
        <h2 className="text-2xl font-extrabold mb-4 text-brown-dark">
          My Account
        </h2>
        <form>
          <div className="flex gap-5">
            <div className="grow mb-4">
              <label
                htmlFor="name"
                className="block text-brown-dark font-extrabold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={localStorage.getItem("name")}
                disabled
                className="w-full border-2 text-brown-dark font-bold border-brown-dark px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
            <div className="grow mb-4">
              <label
                htmlFor="role"
                className="block text-brown-dark font-extrabold mb-2"
              >
                Role
              </label>
              <input
                type="text"
                id="role"
                name="role"
                value={localStorage.getItem("role")}
                disabled
                className="w-full border-2 text-brown-dark font-bold border-brown-dark px-2 py-2 focus:outline-none focus:border-gray-600"
              />
            </div>
          </div>
          {/* Username */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-brown-dark font-extrabold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={localStorage.getItem("username")}
              disabled
              className="w-full border-2 text-brown-dark font-bold border-brown-dark px-2 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-brown-dark font-extrabold mb-2"
            >
              Password
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="* * * * * *"
              disabled
              className="w-full border-2 text-brown-dark font-bold border-brown-dark px-2 py-2 focus:outline-none focus:border-gray-600"
            />
          </div>
        </form>

        <div className="w-full flex mt-5 justify-end gap-3">
          {localStorage.getItem("id") != 1 && (
            <button
              className="w-1/3 bg-brown-dark text-white font-bold tracking-widest py-3 hover:bg-white hover:text-black outline"
              onClick={() => {
                if (confirm("Apakah yakin anda akan menghapus akun anda ?")) {
                  api
                    .delete(`/auth/delete/${localStorage.getItem("id")}`)
                    .then((res) => {
                      alert(res.msg);
                      window.location.reload();
                      //   setUser();
                      localStorage.removeItem("token");
                      localStorage.removeItem("role");
                      localStorage.removeItem("id");
                      navigate("/login");
                    });
                }
              }}
            >
              Delete Account
            </button>
          )}
          <button
            onClick={() => {
              if (confirm("Apakah yakin anda akan logout")) {
                api.get("/auth/logout").then((res) => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("role");
                  localStorage.removeItem("id");
                  alert(res.msg);
                  window.location.href = "/login";
                });
              }
            }}
            className="w-1/3 bg-brown-dark text-white font-bold  py-3 hover:bg-white hover:text-brown-dark outline"
          >
            Logout
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Loading />;
        {setTimeout(() => {
          navigate("/login");
        }, 1000)}
      </div>
    );
  }
}
