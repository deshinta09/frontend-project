import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../feature/userSlice";
import Card from "../components/card";

export default function Home() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.list);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <>
      <h1 className="text-2xl text-center my-10 font-bold">List User</h1>
      <div className="container mx-auto flex flex-wrap gap-8 justify-around">
        {users.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </>
  );
}
