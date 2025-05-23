import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ChatPanel({ selectedContact }) {
  const defaultMessages = {
    "John Doe": [
      { from: "bot", text: "Hello John! How can I help?", time: "10:00 AM" },
      { from: "user", text: "Need help with invoice.", time: "10:01 AM" },
    ],
    "Jane Smith": [
      { from: "bot", text: "Hi Jane, what's up?", time: "11:15 AM" },
      { from: "user", text: "My tracking isn’t updating.", time: "11:16 AM" },
    ],
    "Alex Turner": [
      { from: "bot", text: "Hey Alex!", time: "12:00 PM" },
      { from: "user", text: "Account access issue.", time: "12:01 PM" },
    ],
  };

  const [messages, setMessages] = useState(defaultMessages[selectedContact]);
  const [newMsg, setNewMsg] = useState("");
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setMessages(defaultMessages[selectedContact]);
  }, [selectedContact]);

  const handleSend = () => {
    if (newMsg.trim() === "") return;
    const updated = [...messages, { from: "user", text: newMsg, time: "Now" }];
    setMessages(updated);
    setNewMsg("");
    setTyping(true);
    setTimeout(() => {
      setMessages([...updated, { from: "bot", text: "Thanks, noted!", time: "Now" }]);
      setTyping(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1 flex flex-col p-4 space-y-2 overflow-auto">
        <div className="text-center text-sm text-gray-500 mb-2">
          Chatting with <strong>{selectedContact}</strong>
        </div>
        {messages.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`max-w-xs p-2 rounded flex gap-2 items-start text-sm ${
              msg.from === "user"
                ? "bg-blue-100 ml-auto text-right"
                : "bg-gray-200"
            }`}
          >
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${msg.from}`}
              className="w-6 h-6 rounded-full"
              alt="avatar"
            />
            <div>
              <div>{msg.text}</div>
              <div className="text-[10px] text-gray-400">{msg.time}</div>
            </div>
          </motion.div>
        ))}
        {typing && (
          <div className="text-xs text-gray-500 italic">Bot is typing...</div>
        )}
      </div>

      <div className="p-4 border-t flex gap-2">
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
