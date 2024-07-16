import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

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
        navigate("/login");
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Success create account !",
        });
      } else {
        Swal.fire({
          title: "Oops...",
          icon: "error",
          text: responseBody.message,
        });
      }

      console.log(response);
      console.log(JSON.stringify(data));
    } catch (error) {
      console.log(error, "<< error login");
      Swal.fire({
        title: "Oops...",
        icon: "error",
        text: error.response.data.message,
      });
    }
  }
  // const onSubmit = (d) => console.log(JSON.stringify(d));
  return (
    <>
      <div className="w-screen h-screen bg-cover flex bg-[#9bbefe]">
        <div className="bg-white rounded-lg w-11/12 h-11/12 m-5">
          <div className="p-5">
            <img src="/blue-waves.png" alt="logo" className="w-1/4 m-3" />
            <h1 className="text-5xl font-bold">Buat Akun</h1>
            <p className="text-slate-600 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
              enim.
            </p>
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

                {/* email */}
                <div className="text-xl font-semibold grid mt-3">
                  <label className="text-slate-600" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 invalid:text-pink-700 invalid:ring-pink-700 text-lg"
                  />
                </div>
                {/* email end */}

                {/* password */}
                <div className="text-xl font-semibold grid mt-3">
                  <label className="text-slate-600" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    className="rounded p-2 border mt-2 focus:outline-none focus:ring-1 ring-sky-400 text-lg"
                  />
                </div>
                {/* password end */}
              </div>

              <button
                className="py-2 px-4 bg-sky-800 text-xl rounded font-semibold text-white mt-11"
                type="submit"
              >
                Create account
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-screen h-screen bg-cover bg-center p-10"
          style={{ backgroundImage: "url('/login.jpg')" }}
        ></div>
      </div>
    </>
  );
}
