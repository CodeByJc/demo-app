import React, { useState } from 'react'

const ProductCard = (props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div style={{border: "2px solid black", margin: "10px"}}>
      <img src={props.img} height={ '300px'} width={'300px'}/>
      <p style={{fontWeight: 'bold'}}>Title : {props.title}</p>
      <p>Description : {props.description}</p>
      <p>Category : {props.category.charAt(0).toUpperCase() + props.category.slice(1)}</p>
      <p>Price : {props.price}</p>
      <div>
        <button onClick={() => setIsDialogOpen(true)} style={{ padding : '10px' , margin : '10px', color: 'yellow'}}>Add to Cart</button>
        <button style={{ padding : '10px' , margin : '10px', color: 'white'}}> Buy Now</button>
      </div>
      {isDialogOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid black',
            textAlign: 'center'
          }}>
            <p>Product added to cart!</p>
            <button onClick={() => setIsDialogOpen(false)} style={{ padding: '10px', marginTop: '10px' }}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductCard