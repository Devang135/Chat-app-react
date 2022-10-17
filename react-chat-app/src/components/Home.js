import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.scss'

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="Home">
      <h1>Home Page</h1>
      <div>
        <input 
          placeholder="Name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div>
        <input
          placeholder="Room"
          type="text"
          onChange={(event) => setRoom(event.target.value)}
          required
        />
      </div>
      <Link
        onClick={(e) => (!name || !room ? e.preventDefault() : null)}
        to={`/chat?name=${name}&room=${room}`}
      >
        <button type="submit" classname="btn" >Sign In</button>
      </Link>
    </div>
  );
};

export default Home;
