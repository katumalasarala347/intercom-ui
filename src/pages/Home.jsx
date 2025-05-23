import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatPanel from "../components/ChatPanel";
import ContactList from "../components/ContactList";

export default function Home({ toggleTheme }) {
  const [selectedContact, setSelectedContact] = useState("John Doe");

  return (
    <div className="flex h-screen flex-col md:flex-row bg-white dark:bg-gray-900 text-black dark:text-white">
      <Sidebar toggleTheme={toggleTheme} />
      <div className="flex flex-1 flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
          <ChatPanel selectedContact={selectedContact} />
          <ContactList onSelect={setSelectedContact} />
        </div>
      </div>
    </div>
  );
}
