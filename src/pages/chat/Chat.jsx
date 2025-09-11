import React, { useState } from "react";
import ChatList from "./ChatList";
import ChatScreen from "./ChatScreen";

export default function SupportChatApp() {
  const [selectedChat, setSelectedChat] = useState(1);

  return (
    <div className="flex items-center justify-center ">
      <div className="bg-body rounded-2xl shadow-lg flex w-full gap-6 overflow-hidden">
        {/* Left panel - Chat List */}
        <div className="w-[350px] border border-main rounded-2xl ">
          <ChatList onSelectChat={(chat) => setSelectedChat(chat)} />
        </div>

        {/* Right panel - Chat Window */}
        <div className="flex-1">
          {selectedChat ? (
            <ChatScreen chat={selectedChat} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              <p>Select a chat to start conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
