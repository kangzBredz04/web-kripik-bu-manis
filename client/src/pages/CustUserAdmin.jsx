/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { AdminContext } from "./Admin";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { api } from "../utils";
// import { useNavigate } from "react-router-dom";

export default function CustUserAdmin() {
  const {
    popUp,
    setPopUp,
    popUp2,
    setPopUp2,
    editedUser,
    setEditedUser,
    user,
    customer,
    editedCustomer,
    setEditedCustomer,
  } = useContext(AdminContext);

  useEffect(() => {
    const randomCode = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    // setCustomerCode(`CS${randomCode}`);
    setEditedCustomer({
      ...editedCustomer,
      customer_code: `CS${randomCode}`,
    });
  }, []);

  return (
    <div className="p-5 min-h-64">
      {localStorage.getItem("role") == "Super Admin" ? (
        <div>
          {/* ADMIN DAN SUPER ADMIN */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Admin List</h2>
            <div>
              <button
                onClick={() => {
                  setEditedUser({});
                  setPopUp(!popUp);
                }}
                className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                <MdOutlineAddBox /> Add Admin
              </button>
            </div>
          </div>
          {/* Table for CRUD Data */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300">No</th>
                <th className="border border-gray-300 ">Name</th>
                <th className="border border-gray-300 ">Username</th>
                <th className="border border-gray-300 ">Password</th>
                <th className="border border-gray-300 ">Role</th>
                <th className="border border-gray-300 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Data rows */}
              {user?.map((u, index) => (
                <tr key={u.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {u.name ? u.name : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {u.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ******
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {u.role}
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
                      disabled={u.id == 1}
                      onClick={() => {
                        if (u.id == 1) {
                          alert("Tidak dapat menghapus data pemilik toko");
                        } else {
                          if (
                            confirm(
                              `Apakah anda yakin ingin menghapus data atas nama ${u.name}`
                            )
                          ) {
                            api
                              .delete(`/auth/delete-user/${u.id}`)
                              .then(async (res) => {
                                alert(res.msg);
                              })
                              .catch((e) => {
                                console.log(e);
                              });
                            window.location.href = "/admin/customer-user";
                          }
                        }
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          {/* CUSTOMER */}
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold mb-4">Customer List</h2>
            <div>
              <button
                onClick={() => {
                  setEditedCustomer({});
                  setPopUp2(!popUp2);
                }}
                className="flex justify-between gap-2 items-center bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
              >
                <MdOutlineAddBox /> Add Customer
              </button>
            </div>
          </div>
          {/* Table for CRUD Data */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300">No</th>
                <th className="border border-gray-300 ">Customer Code</th>
                <th className="border border-gray-300 ">Name</th>
                <th className="border border-gray-300 ">Password</th>
                <th className="border border-gray-300 ">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Data rows */}
              {customer?.map((c, index) => (
                <tr key={c.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {c.customer_code ? c.customer_code : "-"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {c.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    ******
                  </td>
                  <td className="border border-gray-300 px-4 py-2 flex justify-evenly">
                    <button
                      onClick={() => {
                        setEditedCustomer(c);
                        console.log(c);
                        setPopUp2(!popUp2);
                      }}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    >
                      <HiOutlinePencilAlt />
                    </button>
                    <button
                      onClick={() => {
                        if (
                          confirm(
                            `Apakah anda yakin ingin menghapus data atas nama ${c.name}`
                          )
                        ) {
                          api
                            .delete(`/auth/delete/${c.id}`)
                            .then(async (res) => {
                              alert(res.msg);
                            })
                            .catch((e) => {
                              console.log(e);
                            });
                          window.location.href = "/admin/customer-user";
                        }
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
                    >
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {popUp2 && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white py-4 px-4 w-96 rounded-2xl shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4 text-center tracking-wider">
              {editedCustomer.id ? "EDIT" : "ADD NEW"} CUSTOMER
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (editedCustomer.id) {
                  api
                    .put(
                      `/auth/update-user/${editedCustomer.id}`,
                      editedCustomer
                    )
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/customer-user";
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                } else {
                  api
                    .post("/customer/add-account-customer", editedCustomer)
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/customer-user";
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                }
                setPopUp2(!popUp2);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="customer_code"
                  className="block text-black font-bold mb-2"
                >
                  Customer Code
                </label>
                <input
                  type="text"
                  disabled
                  id="customer_code"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedCustomer.customer_code}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedCustomer.name}
                  onChange={(e) =>
                    setEditedCustomer({
                      ...editedCustomer,
                      name: e.target.value,
                    })
                  }
                  autoFocus
                />
              </div>
              <div className="mb-4">
                {editedCustomer.id ? (
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
                      value={editedCustomer.password}
                      onChange={(e) =>
                        setEditedCustomer({
                          ...editedCustomer,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setPopUp2(!popUp2)}
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
                    .put(`/auth/update-user/${editedUser.id}`, editedUser)
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/customer-user";
                    })
                    .catch((e) => {
                      console.log(e);
                    });
                } else {
                  api
                    .post("/auth/add-account-user", editedUser)
                    .then(async (res) => {
                      alert(res.msg);
                      window.location.href = "/admin/customer-user";
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
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                  value={editedUser.name}
                  onChange={(e) =>
                    setEditedUser({
                      ...editedUser,
                      name: e.target.value,
                    })
                  }
                  autoFocus
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
                    disabled={editedUser.id == 1}
                    className="w-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-gray-500"
                    value={editedUser.role == null ? "" : editedUser.role}
                    onChange={(e) =>
                      setEditedUser({
                        ...editedUser,
                        role: e.target.value,
                      })
                    }
                  >
                    <option value={"Super Admin"}>Super Admin</option>
                    <option value={"Admin"}>Admin</option>
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
