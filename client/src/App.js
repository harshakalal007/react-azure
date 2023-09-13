import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://sample-testing.azurewebsites.net/check")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="App">
      <h1>{users}</h1>
      <h1>This project is deployed in netlify.</h1>
    </div>
  );
}

export default App;
