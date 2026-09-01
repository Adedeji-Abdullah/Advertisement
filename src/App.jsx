import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/home/Home";
import Browse from "./pages/browse/Browse";
import Insights from "./pages/insights/Insights";

import Header from "./components/Header";
import "./App.css";

function App() {
  // const [backendData, setBackendData] = useState("Loading...");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/api/data");
  //       setBackendData(response.data.message);
  //     } catch (error) {
  //       console.error("Error: failed to fetch data", error);
  //       setBackendData("Failed to fetch backend");
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <BrowserRouter>
      {/* <div>{backendData}</div> */}
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
