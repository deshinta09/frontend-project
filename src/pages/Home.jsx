import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../feature/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  // console.log(users, "<<< data users");
  return (
    <>
      <h1 className="text-2xl text-center my-10 font-bold">List User</h1>
      <div className="w-screen"></div>
    </>
  );
}
