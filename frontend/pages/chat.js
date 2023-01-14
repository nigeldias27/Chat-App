import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import io from "socket.io-client";
let socket;
export default function Chat(props) {
  const messages = useRef([]);
  const [rerender, setRerender] = useState("");
  const router = useRouter();
  useEffect(() => {
    var username = localStorage.getItem("username");
    var rooms = localStorage.getItem("rooms");
    socket = io.connect("http://localhost:4000");
    if (router.query.status == "Joining") {
      console.log(["Joining", username, rooms]);
      console.log("Joining");
      socket.emit("join_room", { username, rooms });
    }
    socket.on("receive_message", (data) => {
      console.log(messages);
      messages.current = [...messages.current, data.message];
      setRerender(Math.random().toString());
      console.log(Math.random().toString());
      //setMessages([...messages, data.message]);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  /*
  useEffect(() => {
    console.log(messages);
    socket.on("receive_message", (data) => {
      console.log(messages);
        setMessages([...messages, data.message]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, [socket]);*/
  console.log(messages);
  return (
    <div
      className="flex flex-col justify-center items-center bg-netral-100"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div style={{ width: "30vw", height: "90vh", overflow: "scroll" }}>
        {messages.current.map((message, i) => {
          return <div className="bg-white-500 shadow-md py-6">{message}</div>;
        })}
      </div>
      <div className="flex flex-row">
        <input
          placeholder="Message"
          id="message"
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-96 text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-5 ring-1 ring-slate-200 shadow-sm"
        />
        <button
          onClick={() => {
            var message = document.getElementById("message").value;
            var username = localStorage.getItem("username");
            var rooms = localStorage.getItem("rooms");
            socket.emit("send_message", { username, rooms, message });
            messages.current = [...messages.current, message];
            setRerender(Math.random().toString());
            console.log(Math.random().toString());
            console.log(messages.current);
            //setMessages([...messages, message]);
          }}
          className="text-white bg-blue-500 mx-2 px-5 rounded-md py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
}
