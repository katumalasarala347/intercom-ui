// components/Sidebar.jsx
import { Home, MessageSquare, Settings, Moon } from "lucide-react";

export default function Sidebar({ toggleTheme }) {
  return (
    <aside className="w-full md:w-16 bg-gray-900 text-white h-16 md:h-screen flex md:flex-col items-center justify-around md:py-4 space-x-6 md:space-x-0 md:space-y-8 fixed bottom-0 md:top-0 md:left-0 z-10">
      <Home className="w-6 h-6 hover:scale-110 transition-transform" />
      <MessageSquare className="w-6 h-6 hover:scale-110 transition-transform" />
      <Moon className="w-6 h-6 hover:scale-110 transition-transform" onClick={toggleTheme} />
      <Settings className="w-6 h-6 hover:scale-110 transition-transform" />
    </aside>
  );
}