import React, { useState } from 'react';

const ControlledField = () => {
    const [name, setName]= useState(" ")
    const [email, setEmail] = useState(" ")
    const [password, setPassword] = useState(" ");
    const [error, setError] = useState(" ");

    const handlePasswordOnchange = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        if (password.length <= 6) {
            setError("Password must be 6 characters or longer")
        }
        else {
            setError(" ")
        }
    }


    const handleEmailOnChange = (e) => {
        setEmail(e.target.value)
    }

    const handleNameOnchange = (e) => {
        setName(e.target.value)
        console.log(name);

    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(email, password, name);
        console.log("submitted");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailOnChange} type="email" name='email' defaultValue={email} placeholder='email'  required/>
                <br />
                <input type="password" name='password' placeholder='password' onChange={handlePasswordOnchange} defaultValue="abcns" required/> 
                <br />
                <input type="text" name='name' onChange={handleNameOnchange} />
                <br />
                
                <input type="submit" value="submit" />
            </form>
            <p style={{color: "red"}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;