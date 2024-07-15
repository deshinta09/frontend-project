export default function Login() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="p-7 md:p-10 shadow-md rounded h-3/5 md:h-1/3">
          <h1 className="text-center mb-12 font-semibold text-2xl">Login</h1>
          <form className="gap-4">
            <div className="grid">
              <label htmlFor="email">Email</label>
              <input type="email" className="rounded p-2 border" />
            </div>
            <div className="grid">
              <label htmlFor="password">Password</label>
              <input type="password" className="rounded p-2 border" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
