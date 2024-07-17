import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailUser } from "../feature/userSlice";
import Navbar from "../components/navbar";
import Swal from "sweetalert2";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    "first name": "",
    "last name": "",
    usia: 0,
    "jenis kelamin": "",
  });

  const dispatch = useDispatch();
  const detail = useSelector((state) => state.user.detail);

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const jenisKelamin = formData.get("jenisKelamin");
    const usia = formData.get("usia");

    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        body: JSON.stringify({ firstName, lastName, jenisKelamin, usia }),
        // body: input,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await response.json();

      if (response.ok) {
        navigate("/");
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Success edit user !",
        });
      } else {
        console.log(responseBody.message, "<<< errornya");
        console.log(responseBody, "<<< errornya tanpa message");
        Swal.fire({
          title: "Oops...",
          icon: "error",
          text: responseBody.message,
        });
      }
    } catch (error) {
      console.log(error, "<< error add new user");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }

  useEffect(() => {
    dispatch(fetchDetailUser(id));
    setInput({
      "first name": detail.firstName,
      "last name": detail.lastName,
      usia: detail.age,
      "jenis kelamin": detail.gender,
    });
  }, []);

  return (
    <>
      <Navbar page="edit-user" />
      <div className="w-screen p-10">
        <div className="w-2/5 border border-slate-200 shadow m-auto rounded mt-5">
          <h1 className="pt-8 text-center text-2xl font-semibold">Edit User</h1>
          <form onSubmit={onSubmit} className="mt-4 p-7">
            <div className="flex">
              {/* first name */}
              <div className="text-xl font-semibold grid">
                <label className="text-slate-600" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  onChange={(e) =>
                    setInput({ ...input, "first name": e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                  value={input["first name"]}
                />
              </div>
              {/* first name end */}

              {/* last name */}
              <div className="text-xl font-semibold grid ml-10">
                <label className="text-slate-600" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  onChange={(e) =>
                    setInput({ ...input, "last name": e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                  value={input["last name"]}
                />
              </div>
              {/* last name end */}
            </div>
            <div className="w-3/4">
              {/* jenis kelamin */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="jenisKelamin">
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  name="jenisKelamin"
                  onChange={(e) =>
                    setInput({ ...input, "jenis kelamin": e.target.value })
                  }
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                  value={input["jenis kelamin"]}
                />
              </div>
              {/* jenis kelamin end */}

              {/* usia */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="usia">
                  Usia
                </label>
                <input
                  type="number"
                  name="usia"
                  onChange={(e) => setInput({ ...input, usia: e.target.value })}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                  value={input.usia}
                />
              </div>
              {/* usia end */}
            </div>

            <button
              className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
              type="submit"
            >
              Edit user
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
