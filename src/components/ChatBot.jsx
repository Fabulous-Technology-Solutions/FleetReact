import React, { useState } from "react";
import { FaPaperPlane, FaRobot } from "react-icons/fa";
import { HiPaperAirplane } from "react-icons/hi2";
import { MdCancel } from "react-icons/md";
import botProfile from "../assets/images/botProfile.png";
import { Avatar } from "@mui/material";

const ChatBot = ({ onHide }) => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm fine, how can I help you?" },
    { sender: "user", text: "What is the best programming language?" },
    {
      sender: "bot",
      text: "There are many programming languages in the market that are used in designing and building websites.",
    },
    { sender: "user", text: "So explain to me more" },
    {
      sender: "bot",
      text: "There are many programming languages in the market that are used in designing and building websites.",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div
      className="fixed bottom-6 right-6 w-[300px] sm:w-[360px] bg-body text-white rounded-xl flex flex-col z-40  shadow-[0px_4px_24px_rgba(96,165,250,0.2)]"
      style={{ border: "1px solid #0058E8" }}
    >
      <div className="bg-transparent flex justify-end">
        <MdCancel
          className="text-3xl c-primary cursor-pointer"
          onClick={() => onHide()}
        />
      </div>

      {/* Header */}
      {/* <div className="bg-cardcontainer px-4 py-3 flex items-center gap-2 border-b border-[#2a2d3b]">
        <FaRobot className="text-white text-lg" />
        <span className="font-medium text-sm">Support Chat Bot</span>
      </div> */}

      {/* Chat Body */}
      <div className=" overflow-y-auto p-4 space-y-4 bg-body h-[350px] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user"
                ? "justify-end"
                : "justify-start items-end gap-2"
            }`}
          >
            {msg.sender !== "user" && (
              <Avatar src={botProfile} sx={{ width: 30, height: 30 }} />
            )}
            <div
              className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${
                msg.sender === "user"
                  ? "bg-navlink text-white rounded-tr-none"
                  : "bg-cardcontainer c-secondary rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-body px-3 rounded-b-xl">
        <div className="px-3 py-2 mb-3 inline-flex items-center bg-cardcontainer rounded-full w-full">
          <textarea
            type="text"
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write your message"
            className="flex-1 bg-transparent text-sm c-primary placeholder-gray-400 px-3 rounded-md focus:outline-none resize-none"
          />
          <button
            onClick={sendMessage}
            className="ml-2 hover:bg-blue-700 transition"
          >
            <HiPaperAirplane className="text-2xl text-blue" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
