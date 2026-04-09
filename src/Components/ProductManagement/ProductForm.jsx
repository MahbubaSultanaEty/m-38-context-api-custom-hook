import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError]= useState("")
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        // console.log(name, price, quanity);


        if (name.length === 0) {
            setError("Please Provide a product name");
            return;
        } else if (price.length === 0) {
            setError("please provide a valid price");
            return;
        } else if (price < 0) {
            setError("please provide a valid price");
            return;
        } else {
            setError("");
        }

        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        if (!error) {
            handleAddProduct(newProduct);
        }
    }
    return (
        <div>
            <h3>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='product name' />
                <br />
                <input type="text" name='price' placeholder='product price' />
                <br />
                <input type="text" name='quantity' placeholder='product quanity' />
                <br />
                <input type="submit" value="submit" />
            </form>   
            <p style={{color: "red"}}>
                <small>{ error}</small>
            </p>
        </div>
    );
};

export default ProductForm;