import { useForm } from "react-hook-form";
import Navbar from "../components/navbar";

export default function Add() {
  const { register, handleSubmit } = useForm();

  async function onSubmit(data) {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        body: JSON.stringify(data),
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
          text: "Success create new user !",
        });
      } else {
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

  return (
    <>
      <Navbar page={id ? "edit-user" : "add-user"} />
      <div className="w-screen p-10">
        <div className="w-2/5 border border-slate-200 shadow m-auto rounded mt-5">
          <h1 className="pt-8 text-center text-2xl font-semibold">
            {id ? "Edit User" : "Add New User"}
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="mt-4 p-7">
            <div className="flex">
              {/* first name */}
              <div className="text-xl font-semibold grid">
                <label className="text-slate-600" htmlFor="first name">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("first name")}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* first name end */}

              {/* last name */}
              <div className="text-xl font-semibold grid ml-10">
                <label className="text-slate-600" htmlFor="last name">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("last name")}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* last name end */}
            </div>
            <div className="w-3/4">
              {/* jenis kelamin */}
              <div className="text-xl font-semibold grid mt-3">
                <label className="text-slate-600" htmlFor="jenis kelamin">
                  Jenis Kelamin
                </label>
                <input
                  type="text"
                  {...register("jenis kelamin")}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
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
                  {...register("usia")}
                  className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                />
              </div>
              {/* usia end */}
            </div>

            <button
              className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
              type="submit"
            >
              Create new user
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
