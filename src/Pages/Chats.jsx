import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import NavBar from "../components/Chats/NavBar";
import Messagebox from "../components/Chats/Messagebox";

function Chats() {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newsocket = io("http://localhost:5000", {
      auth: {
        token: {
          wabaid: "275986335588625",
          // phonenumberid: "268715066317890",
        },
      },
    }); // Replace "your-server-address" with your actual server address
    setSocket(newsocket);
    // Example event listeners
    socket?.on("connect", () => {
      console.log("Connected to server");
    });

    socket?.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket?.disconnect(); // Clean up the socket connection when component unmounts
    };
  }, []); // Empty dependency array ensures this effect runs only once
  const [chatId, setChatId] = useState(null);

  const sendMessage = (message) => {
    console.log(socket);
    console.log(message);
    socket?.emit("sendmessage", message);
  };
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          flex: "0 0 20%",
          height: "100%",
          overflow: "scrollY",
        }}
      >
        <NavBar setChatId={setChatId} />
      </div>
      <div
        style={{
          flex: 1,
          height: "100%",
        }}
      >
        <Messagebox chatId={chatId} sendMessage={sendMessage} socket={socket} />
      </div>
    </div>
  );
}

export default Chats;
