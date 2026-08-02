import { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [backendData, setBackendData] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        setBackendData(response.data.message);
      } catch (error) {
        console.error("Error: failed to fetch data", error);
        setBackendData("Failed to fetch backend");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* <div>{backendData}</div> */}
      <Header />
      <Home />
    </>
  );
}

export default App;
