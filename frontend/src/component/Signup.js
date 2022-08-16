import React, { useState } from "react";

const Signup = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const collectData= async ()=>{
        let result = await fetch('http://localhost:4000/signup',{
          method:"post",
          body:JSON.stringify({name,email,password}),
          headers:{
            'Content-Type':'application/json'
          },
        })
        result = await result.json();
        console.log(result);
    }
  return(
      
      <div className="main_div">
        <h1>Register</h1>
        <input className="inputbox" type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Enter name"/>
        <input className="inputbox" type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter email"/>
        <input className="inputbox" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="Enter password"/>
        <button type="button" className="input_button" onClick={collectData}>Signup</button>
      </div>
      
  );
};

export default Signup;
