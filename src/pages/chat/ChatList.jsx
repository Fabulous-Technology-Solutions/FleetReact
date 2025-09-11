
    import React from "react";
 
    const chats = Array(8).fill({
      name: "Lorem Ipsum",
      message: "Lorem Ipsum is simply dummy",
      time: "02:12 PM",
      avatar:
        "https://randomuser.me/api/portraits/men/32.jpg", // sample avatar
    });
    
    export default function ChatList() {
      return (
        <div className=" text-white w-[350px] h-[700px] rounded-2xl  p-4 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold c-primary">Support Chat</h2>
           
          </div>
    
          {/* Search */}
          <div className="relative mb-4">
            {/* <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" /> */}
            <input
              type="text"
              placeholder="Search here..."
              className=" c-primary w-full pl-10 pr-3 py-2 rounded-full bg-sidebar text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>
    
          {/* Chat list */}
          <div className="space-y-3 overflow-y-auto">
            {chats.map((chat, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-sidebar rounded-xl p-3 hover:bg-[#2a2a2a] cursor-pointer transition"
              >
                {/* Left side */}
                <div className="flex items-center space-x-3">
                  <img
                    src={chat.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold c-primary">{chat.name}</p>
                    <p className="text-xs text-gray-400 truncate w-[180px]">
                      {chat.message}
                    </p>
                  </div>
                </div>
                {/* Right side */}
                <span className="text-xs text-gray-400">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    