import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDetailUser } from "../feature/userSlice";
import Navbar from "../components/navbar";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.user.detail);

  useEffect(() => {
    dispatch(fetchDetailUser(id));
  }, []);

  return (
    <>
      <Navbar page="detail" />
      <div className="container mt-10">
        <div className="w-screen px-10 grid content-evenly">
          <div className="flex p-5 items-center rounded border border-slate-200 shadow-sm">
            <img
              src={detail.image}
              alt="image-profile"
              className="w-20 rounded-full"
            />
            <h1 className="text-2xl font-semibold ml-5">{detail.username}</h1>
          </div>
          <div className="flex p-8 rounded border border-slate-200 shadow-sm mt-10 text-slate-700">
            <div className="w-1/2">
              <div className="flex gap-10 w-6/7">
                <div className="w-32">
                  <h1 className="text-xl font-semibold">First Name</h1>
                  <h4 className="text-xl">{detail.firstName}</h4>
                </div>
                <div className="w-32">
                  <h1 className="text-xl font-semibold">Last Name</h1>
                  <h4 className="text-xl">{detail.lastName}</h4>
                </div>
                {detail.maidenName && (
                  <div>
                    <h1 className="text-xl font-semibold">Maiden Name</h1>
                    <h4 className="text-xl">{detail.maidenName}</h4>
                  </div>
                )}
              </div>
              <div className="flex gap-10 w-6/7 mt-10">
                <div className="w-32">
                  <h1 className="text-xl font-semibold">Age</h1>
                  <h4 className="text-xl">{detail.age}</h4>
                </div>
                <div className="w-32">
                  <h1 className="text-xl font-semibold">Gender</h1>
                  <h4 className="text-xl">{detail.gender}</h4>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Date Birth</h1>
                  <h4 className="text-xl">{detail.birthDate}</h4>
                </div>
              </div>
              <div className="grid gap-3 mt-10">
                <div className="flex">
                  <h1 className="text-xl font-semibold w-16">Role :</h1>
                  <h4 className="text-xl">{detail.role}</h4>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Email : </h1>
                  <h4 className="text-xl">{detail.email}</h4>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Phone : </h1>
                  <h4 className="text-xl">{detail.phone}</h4>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Password : </h1>
                  <h4 className="text-xl">{detail.password}</h4>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-xl font-semibold ml-16 mb-10">Address</h1>
              <div className="grid gap-3 mt-10">
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">Address</h1>
                  <h4 className="text-xl">: {detail?.address?.address}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">City</h1>
                  <h4 className="text-xl">: {detail?.address?.city}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">State</h1>
                  <h4 className="text-xl">: {detail?.address?.state}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">State Code</h1>
                  <h4 className="text-xl">: {detail?.address?.stateCode}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">Postal Code</h1>
                  <h4 className="text-xl">: {detail?.address?.postalCode}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">Country</h1>
                  <h4 className="text-xl">: {detail?.address?.country}</h4>
                </div>
                <div className="flex">
                  <h1 className="text-xl font-semibold w-40">Coordinate :</h1>
                  <div className="grid gap-3 w-6/7 ml-10 mt-3">
                    <div className="flex">
                      <h1 className="text-xl font-semibold">Iat</h1>
                      <h4 className="text-xl">
                        : {detail?.address?.coordinates?.lat}
                      </h4>
                    </div>
                    <div className="flex">
                      <h1 className="text-xl font-semibold">Ing</h1>
                      <h4 className="text-xl">
                        : {detail?.address?.coordinates?.lng}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
