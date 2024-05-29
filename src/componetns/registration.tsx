import axios from "axios"
import { useState, useRef } from "react"
import moviesTypes from "../types/types";




const Registration = () => {
  const [username, setUsername] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const sendData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    const dataObj = {
      username: username,
      name: name,
      password: password,
    };

    axios
      .post("http://localhost:4000/user/", dataObj)
      .then((res) => {


        console.log(res.data)

        
        
      localStorage.setItem('userId',res.data.id);

      const save =  localStorage.getItem("userId")
        console.log(save);

        
        
    })
      .catch((error) => {
        console.error("Error occurred:", error);
      });



   
  };

  return (
    <div>
      <form onSubmit={sendData}>
        {" "}
        {/* Attach onSubmit handler to the form */}
        <input
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          type="text"
          value={username} // Controlled input value
        />
        <input
          onChange={(e) => setName(e.target.value)}
          name="name"
          type="text"
          value={name} // Controlled input value
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          value={password} // Controlled input value
        />
        <button type="submit">Submit</button>{" "}
        {/* Use type="submit" to trigger form submission */}
      </form>
    </div>
  );
};

export default Registration;


