import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-72 rounded-lg shadow-lg border border-slate-200 p-3 mb-8">
        <img
          src={data.image}
          alt="image-profile"
          className="rounded-full w-11/12 m-auto"
        />
        <h1 className="text-xl font-semibold text-center">{data.username}</h1>
        <div className="text-slate-500 mt-4 text-base text-center">
          <p>{data.gender}</p>
          <h5>{data.birthDate}</h5>
          <h5>{data.email}</h5>
        </div>
        <div className="flex justify-around p-5">
          <button
            className="rounded py-2 px-4 bg-sky-500 text-white hover:bg-sky-800"
            onClick={() => navigate(`/user/${data.id}`)}
          >
            Detail
          </button>
          <button
            className="rounded py-2 px-4 border border-yellow-500 hover:text-white hover:bg-yellow-500"
            onClick={() => navigate(`/edit-user/${data.id}`)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
