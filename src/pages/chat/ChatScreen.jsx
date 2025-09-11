
    import React, { useState } from "react";
    import SendIcon from '@mui/icons-material/Send';
    const messagesData = [
      {
        id: 1,
        sender: "support",
        text: "Hello,i’m fine,how can i help you?",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 2,
        sender: "user",
        text: "Hello chatGPT,how are you today?",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 3,
        sender: "user",
        text: "What is the best programming language?",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 4,
        sender: "support",
        text: "There are many programming languages in the market that are used in designing and building websites.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 5,
        sender: "user",
        text: "So explain to me more",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      },
    ];
    
    export default function ChatScreen() {
      const [messages, setMessages] = useState(messagesData);
      const [newMessage, setNewMessage] = useState("");
    
      const sendMessage = () => {
        if (newMessage.trim() === "") return;
        setMessages([
          ...messages,
          {
            id: messages.length + 1,
            sender: "user",
            text: newMessage,
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          },
        ]);
        setNewMessage("");
      };
    
      return (
        <div className="bg-body text-white h-full border border-main rounded-2xl shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center space-x-3 p-4 border-b border-main">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold c-primary">Olivia</h2>
              <p className="text-sm text-green-400">Online</p>
            </div>
          </div>
    
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-end ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "support" && (
                  <img
                    src={msg.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                )}
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-br-none"
                      : "bg-sidebar c-primary rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <img
                    src={msg.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full ml-2"
                  />
                )}
              </div>
            ))}
          </div>
    
          {/* Input */}
          <div className="p-4 border-t border-main">
            <div className="flex items-center bg-sidebar c-primary rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Write your message"
                className="flex-1 bg-transparent outline-none text-sm"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition"
              >
                <SendIcon className="w-4 h-4" style={{color:"white"}}/>
              </button>
            </div>
          </div>
        </div>
      );
    }
    