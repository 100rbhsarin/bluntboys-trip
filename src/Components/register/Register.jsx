import React, { useState } from "react";
import {Link} from "react-router-dom"
import './register.css'
import axios from "axios";



function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/auth/register", {
        username,
        email,
        phone,
        country,
        city,
        password,
      });

      console.log(response.data); // handle success response
      
    } catch (error) {
      console.error(error); // handle error response
    }
  };

  return (
   
    <form onSubmit={handleSubmit}>
        
         <div className="register">
        <div className="Container">
      <label>
      <h1>REGISTRATION</h1>
       
        <input
        className="Input"
          type="text"
          placeholder=" Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>

      <label>
       
        <input
         className="Input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label>
       
        <input
         className="Input"
          type="tel"
          placeholder=" Phone"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>

      <label>
       
        <input
         className="Input"
          type="text"
          placeholder=" Country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </label>

      <label>
   
        <input
         className="Input"
          type="text"
          placeholder=" City"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>

      <label>
        
        <input
         className="Input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      <button className="Button" type="submit">Register</button>
      <p>If you are already register than</p> <Link to="/login">login</Link>
      </div>
    </div>
    </form>
    

  );
}

export default RegisterPage;
