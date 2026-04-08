import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.color.value);
        console.log(e.target.email.value);
        console.log("form submit");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder='your name' name="name" type='text' />
                <br />
                <input type="color" name='color' />
                <br />
                <input type="email" name='email' />
                
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;