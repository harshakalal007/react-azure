import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://testing-azure.onrender.com/")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">
      <h1>This project is deployed in netlify.</h1>
      <h2>First Continuous Integration Demo</h2>
    </div>
  );
}

export default App;
