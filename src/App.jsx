// App.jsx
import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
      <Home toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
    </div>
  );
}

export default App;
