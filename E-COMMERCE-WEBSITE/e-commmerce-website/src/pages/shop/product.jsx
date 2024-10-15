 /*import React  from 'react'; */
 import PropTypes from 'prop-types';
 import { ShopContext } from './context/shop-context'
import { useContext } from 'react';
 
 
 export const Product = ({ data }) => {
   const { id, productName, price, productImage } = data;
   const {addToCart, cartItems} = useContext(ShopContext)

   const cartItemAmount = cartItems[id]
   return (
     <div  key={id} className="product">
       <img src={productImage} alt={productName} />
       <div className="description">
         <p> <b>{productName}</b></p>
         <p>${price}</p>
       </div>
       <button className='addToCartBttn' onClick={() => addToCart(id)}>Add to cart {cartItemAmount > 0 &&  <> ({cartItemAmount}) </>} </button>
     </div>
   );
 };

 Product.propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      productImage: PropTypes.string.isRequired,
    }).isRequired,
  };
