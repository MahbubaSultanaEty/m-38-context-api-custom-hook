import React from 'react';
import UseInputField from '../../Hooks/UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = UseInputField(" ");
    const [email, emailOnChange]= UseInputField(" ")
    const [password , passwordOnChange]= UseInputField(" ")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={name} type="text" onChange={nameOnChange} />
                <br />
                <input defaultValue={email} type="email" onChange={emailOnChange} />
                <br />
                <input defaultValue={password} type="password" onChange={passwordOnChange} />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;