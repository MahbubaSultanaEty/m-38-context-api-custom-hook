import React, { useRef } from 'react';

const UnControlledFIeld = () => {
    const emailRef = useRef(" ");
    const passwordRef = useRef("");

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" />
                <br />
                <input type="text" name='' />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default UnControlledFIeld;