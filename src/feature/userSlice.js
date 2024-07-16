import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      let response = await fetch("https://dummyjson.com/users");
      let responseBody = await response.json();

      if (response.ok) {
        dispatch(setUser(responseBody.users));
        // console.log(responseBody, "<<< hasil fetch user");
      } else {
        console.log(response, "<< respon error");
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error to get data User",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error to get data User",
      });
    }
  };
};

export default userSlice.reducer;
