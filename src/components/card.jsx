export default function Card() {
  return (
    <>
      <div className="w-64 rounded-lg shadow-lg border border-slate-200 p-3">
        <img
          src="/blue-waves.png"
          alt="image-profile"
          className="rounded-full w-11/12 m-auto"
        />
        <h1 className="text-xl font-semibold text-center">Username</h1>
        <div className="text-slate-500 mt-4 text-base text-center">
          <p>gender</p>
          <h5>1982-11-6</h5>
          <h5>email@mail.com</h5>
        </div>
        <div className="flex justify-around p-5">
          <button className="rounded py-2 px-4 bg-sky-500 text-white">
            Delete
          </button>
          <button className="rounded py-2 px-4 bg-red-500 text-white">
            Detail
          </button>
        </div>
      </div>
    </>
  );
}
