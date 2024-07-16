import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [],
    detail: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.list = action.payload;
    },
    setDetailUser: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { setUser, setDetailUser } = userSlice.actions;

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

export const fetchDetailUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://dummyjson.com/users/${id}`);
      const responseBody = await response.json();

      if (response.ok) {
        dispatch(setDetailUser(responseBody));
        // console.log(responseBody, "<<< hasil fetch detail user");
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
        title: "Oops...",
        text: `Error get detail user id ${id}`,
        icon: "error",
      });
    }
  };
};

export default userSlice.reducer;
