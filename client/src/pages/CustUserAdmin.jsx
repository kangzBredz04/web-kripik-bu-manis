import { useContext } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../utils";
// import { useNavigate } from "react-router-dom";

export default function CustUserAdmin() {
  const { popUp, setPopUp, editedUser, setEditedUser, user } =
    useContext(AdminContext);

    console.log()
  return (
    <div className="p-5 min-h-64">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <div>
          <button
            onClick={() => {
              setEditedUser({});
              setPopUp(!popUp);
            }}
            className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            <MdOutlineAddBox /> Add User
          </button>
        </div>
      </div>
      {/* Table for CRUD Data */}
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300">No</th>
            <th className="border border-gray-300 ">First Name</th>
            <th className="border border-gray-300 ">Last Name</th>
            <th className="border border-gray-300 ">Username</th>
            <th className="border border-gray-300 ">Email</th>
            <th className="border border-gray-300 ">Password</th>
            <th className="border border-gray-300 ">Role</th>
            <th className="border border-gray-300 ">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* Data rows */}
          {user?.map((u, index) => (
            <tr key={u.id}>
              <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {u.first_name ? u.first_name : "-"}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {u.last_name ? u.last_name : "-"}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {u.username}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {u.email.slice(0, 25)}
                {u.email.length > 25 && "..."}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                ******
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {u.role ? u.role : "user"}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                <button
                  onClick={() => {
                    setEditedUser(u);
                    setPopUp(!popUp);
                  }}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                >
                  <HiOutlinePencilAlt />
                </button>
                <button
                  onClick={() => {
                    if (
                      confirm(
                        `Apakah anda yakin ingin menghapus data atas username ${u.username}`
                      )
                    ) {
                      api
                        .delete(`/auth/delete/${u.id}`)
                        .then(async (res) => {
                          alert(res.msg);
                        })
                        .catch((e) => {
                          console.log(e);
                        });
                      window.location.href = "/admin/user";
                    }
                  }}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
          {/* More data rows */}
        </tbody>
      </table>
      {popUp && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white py-4 px-4 w-96 rounded-2xl shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4 text-center tracking-wider">
              {editedUser.id ? "EDIT" : "ADD NEW"} USER
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editedUser.id) {
                  api
                    .put(`/auth/update/${editedUser.id}`, editedUser)
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/user";
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                } else {
                  api
                    .post("/auth/add", editedUser)
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/user";
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }
                setPopUp(!popUp);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="first_name"
                  className="block text-black font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedUser.first_name}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      first_name: e.target.value,
                    })
                  }
                  autoFocus
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="last_name"
                  className="block text-black font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedUser.last_name}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      last_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-black font-bold mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedUser.username}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      username: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedUser.email}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-4 flex gap-4 items-center">
                {editedUser.id ? (
                  ""
                ) : (
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-black font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                      value={editedUser.password}
                      onChange={(e) =>
                        setEditedUser({
                          ...editedUser,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <label
                    htmlFor="role"
                    className="block text-black font-bold mb-2"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedUser.role == null ? "" : editedUser.role}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value={null}>User</option>
                    <option value={"admin"}>Admin</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setPopUp(!popUp)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
