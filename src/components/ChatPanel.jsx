import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function ChatPanel({ selectedContact }) {
  const defaultMessages = {
    "Sarah": [
      { from: "bot", text: "Hello Sarah! How can I help?", time: "10:00 AM" },
      { from: "user", text: "Need help with invoice.", time: "10:01 AM" },
    ],
    "Sree Anu": [
      { from: "bot", text: "Hi Sree, what's up?", time: "11:15 AM" },
      { from: "user", text: "My tracking isn’t updating.", time: "11:16 AM" },
    ],
    "Virat": [
      { from: "bot", text: "Hey Virat!", time: "12:00 PM" },
      { from: "user", text: "Account access issue.", time: "12:01 PM" },
    ],
  };

  const [messages, setMessages] = useState(defaultMessages[selectedContact]);
  const [newMsg, setNewMsg] = useState("");
  const [file, setFile] = useState(null);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages(defaultMessages[selectedContact]);
    setFile(null);
    setNewMsg("");
  }, [selectedContact]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getTimeNow = () =>
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const handleSend = () => {
    if (!newMsg.trim() && !file) return;

    const time = getTimeNow();
    const updated = [...messages];

    if (newMsg.trim()) {
      updated.push({ from: "user", text: newMsg, time });
    }

    if (file) {
      updated.push({ from: "user", text: `📎 ${file.name}`, time });
      setFile(null);
    }

    setMessages(updated);
    setNewMsg("");
    setTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Thanks, noted!", time: getTimeNow() },
      ]);
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
                ? "bg-blue-100 dark:bg-blue-700 ml-auto text-right"
                : "bg-gray-200 dark:bg-gray-600"
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

        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-black w-full">
        {/* Show selected file */}
        {file && (
          <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
            📎 {file.name}
            <button
              onClick={() => setFile(null)}
              className="text-red-500 text-xs underline"
            >
              Remove
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 w-full">
          {/* File Picker */}
          <label className="cursor-pointer text-xl">
            📎
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          {/* Message Input */}
          <input
            value={file ? `📎 ${file.name}` : newMsg}
            onChange={(e) => !file && setNewMsg(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            type="text"
            className="flex-grow border px-3 py-2 rounded bg-white dark:bg-gray-800 min-w-0"
            placeholder={file ? "" : "Type your message..."}
            readOnly={!!file}
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition flex-shrink-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
