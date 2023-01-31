import {useReducer,useEffect } from "react";
import React from "react";
import AuthReducer from "./AuthReducer";

/* const INITIAL_STATE = {
  //user:null,
  user:{
    _id: "62dbb479f5a4bfa854baec8b",
    username: "Rony",
    email: "rony3@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers:[],
    followings: [],
    isAdmin: false,
},
  isFetching: false,
  error: false,
}; */

const INITIAL_STATE = {
  user:JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
   
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])
    
    return (
      <AuthContext.Provider value={{ user: state.user, isFetching: state.isFetching, error: state.error, dispatch}}>
          {children}
      </AuthContext.Provider>
    );
  }

