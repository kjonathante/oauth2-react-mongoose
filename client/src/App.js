import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("")
  useEffect(() => {
    fetch("/auth/whoami")
      .then(r => r.json())
      .then(data => {
        console.log(data)
        console.log(process.env.NODE_ENV)
        if (data.displayName)
          setName(data.displayName)
      })
      .catch(e => console.log(e));
  },[name]);
  return (
    <div>
      Hello{ name && `, ${name}`}
      <div>
        <a href="http://localhost:3002/auth/google">Login</a>
      </div>
      <div>
        <a href="http://localhost:3002/auth/logout">Logout</a>
      </div>
    </div>
  );
}

export default App;
