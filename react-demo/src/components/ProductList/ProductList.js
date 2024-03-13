import React, { useState } from 'react';

export default function ProductList(props){
   const [productList] = useState(props.productList)

    return (
    <>
      <div className='text-center'>
        <h5>My Products</h5>
      </div>
      <div className='container col-sm-12'>
        <table className='table table-bordered'>
          <thead>
            <tr>
                <th>Sr.No</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Qantity</th>
                <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productList && productList.map((product,index)=>(
                <tr key={index}>
                  <td>{(index+1)}</td>
                  <td>{product.productName}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className='btn btn-sm'>Edit</button>
                    <button className='btn btn-sm'>x</button>
                  </td>
                </tr>
            ))}
            
          </tbody>

        </table>
      </div>

    </>
    )
    
}