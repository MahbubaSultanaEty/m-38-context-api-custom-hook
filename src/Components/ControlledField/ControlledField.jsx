import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState(" ")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted");
    }
    const handlePasswordOnchange = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name='email' id='' placeholder='email'  required/>
                <br />
                <input type="password" name='password' id=" " placeholder='password' onChange={handlePasswordOnchange} defaultValue="abcns" required/> 
                <br />
                <input type="color" name='color' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledField;