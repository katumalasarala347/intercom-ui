import { Home, MessageSquare, Settings, Moon } from "lucide-react";

export default function Sidebar({ toggleTheme }) {
  return (
    <aside className="w-16 bg-gray-900 text-white h-screen flex flex-col items-center justify-around py-4 space-y-8 fixed top-0 left-0 z-10">
      <Home className="w-6 h-6 hover:scale-110 transition-transform" />
      <MessageSquare className="w-6 h-6 hover:scale-110 transition-transform" />
      <Moon className="w-6 h-6 hover:scale-110 transition-transform" onClick={toggleTheme} />
      <Settings className="w-6 h-6 hover:scale-110 transition-transform" />
    </aside>
  );
}
