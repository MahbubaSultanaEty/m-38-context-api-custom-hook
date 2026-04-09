import React from 'react';

const ProductForm = () => {
    
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quanity = e.target.quantity.value;
        // console.log(name, price, quanity);

        const newProduct = {
            name,
            price,
            quanity
        }
        console.log(newProduct);
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
        </div>
    );
};

export default ProductForm;