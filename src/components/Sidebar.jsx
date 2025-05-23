import { Home, MessageSquare, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  return (
    <aside className="w-16 bg-gray-900 text-white h-screen flex flex-col items-center py-4 space-y-8">
      <Home className="w-6 h-6" />
      <MessageSquare className="w-6 h-6" />
      <Settings className="w-6 h-6 mt-auto mb-4" />
    </aside>
  );
}
