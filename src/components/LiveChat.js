import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";

import { addMessage } from "../utils/chatSlice";
import { generateRandomMesage, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  const [Livemessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    let timer = setInterval(() => {
      console.log("Api Polling");
      dispatch(
        addMessage({
          name: generateRandomName() + " : ",
          message: generateRandomMesage(10),
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <>
      <div className="p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 border border-black flex"
        onSubmit={(e) => {
          console.log(Livemessage);
          setLiveMessage("");
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Ashish Kumar",
              message: Livemessage,
            })
          );
        }}
      >
        <input
          type="text"
          value={Livemessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          className="w-[350px] mr-3 border border-black flex p-2"
        />{" "}
        <button className="bg-green-500 p-2">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
