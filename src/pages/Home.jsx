// pages/Home.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatPanel from "../components/ChatPanel";
import ContactList from "../components/ContactList";

const contacts = ["Sarah", "Sree Anu", "Virat"];

function Home({ toggleTheme, darkMode }) {
  const [selectedContact, setSelectedContact] = useState("Sarah");

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar toggleTheme={toggleTheme} />
      <div className="flex flex-col flex-1 ml-0 md:ml-16">
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
          <ContactList
            contacts={contacts}
            selectedContact={selectedContact}
            onSelect={setSelectedContact}
          />
          <ChatPanel selectedContact={selectedContact} />
        </div>
      </div>
    </div>
  );
}

export default Home;
