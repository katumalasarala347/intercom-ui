import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Home toggleTheme={() => setDarkMode(!darkMode)} />
    </div>
  );
}
export default App;