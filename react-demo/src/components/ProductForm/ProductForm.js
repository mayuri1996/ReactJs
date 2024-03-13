import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import ProductApiService from "../services/ProductApiService";


const ProductForm = () => {

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const [errors, setErrors] = useState({
        productName: '',
        price: '',
        quantity: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const newError = {};
        if (!productName.trim()) {
            newError.productName = "Product Name is Required"
        }

        if (!price.trim()) {
            newError.price = "Price is Required"
        } else if (isNaN(price) || price <=0) {
            newError.price = "Price must be a number"
        }

        if (!quantity.trim()) {
            newError.quantity = "Quantity is Required"
        } else if (isNaN(quantity) || quantity <= 0) {
            newError.quantity = "Quantity must be a positive number"
        }

        if (Object.keys(newError).length > 0) {
            setErrors(newError)
            return
        }

        //reset error
        setErrors({})

       const formData = {
            "name":productName,
            "price":price,
            "quantity":quantity
          }

          ProductApiService.postProductData(formData)
          .then(result => {
            alert(result.msg)
            console.log(result);
          })
          .catch(error => {
            console.log(error);
          });
        // Reset form fields after submission
        setProductName('');
        setPrice('');
        setQuantity('');

    }

    return (
        <>
            <div className="container">
                <div className="col-sm-6 mx-auto card">
                    <div className="card-body">
                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="productName">
                                <Form.Label>*Enter Product Name</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter product Name" value={productName}
                                    onChange={(e) => setProductName(e.target.value)}
                                    isInvalid={!!errors.productName}
                                />
                                <Form.Control.Feedback type="invalid">{errors.productName}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="price">
                                <Form.Label>*Enter Price</Form.Label>
                                <Form.Control type="number"
                                    placeholder="Enter Price" value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    isInvalid={!!errors.price}
                                />
                                <Form.Control.Feedback type="invalid">{errors.price}</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="quantity">
                                <Form.Label>*Enter Quantity</Form.Label>
                                <Form.Control type="text"
                                    placeholder="Enter Quantity" value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    isInvalid={!!errors.quantity}
                                />
                                <Form.Control.Feedback type="invalid">{errors.quantity}</Form.Control.Feedback>
                            </Form.Group>

                            <div className="row">
                             <div className="col-12 text-center">
                            <Button variant="primary" type="submit" className="text-center">
                                Submit
                            </Button>
                            </div>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ProductForm;