import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  /*useEffect(()=>{
    socket = io.connect('http://localhost:4000');
  },[]);*/
  return (
    <div
      className="flex justify-center items-center bg-netral-100"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="w-96 h-96 shadow-lg rounded-lg bg-white flex flex-col">
        <h1 className="text-3xl font-bold text-center mt-10 mb-10">
          Nigel'sApp
        </h1>
        <input
          placeholder="Username"
          id="username"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-90/100 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 mx-5 ring-1 ring-slate-200 shadow-sm mt-4"
        />
        <input
          placeholder="Rooms"
          id="rooms"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-90/100 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 mx-5 ring-1 ring-slate-200 shadow-sm mt-6"
        />
        <button
          onClick={() => {
            var username = document.getElementById("username").value;
            var rooms = document.getElementById("rooms").value;
            localStorage.setItem("username", username);
            localStorage.setItem("rooms", rooms);
            router.push(
              { pathname: "/chat", query: { status: "Joining" } },
              "/chat"
            );
          }}
          className="text-white bg-blue-500 mx-5 rounded-md py-2 mt-10"
        >
          Join
        </button>
      </div>
    </div>
  );
}
