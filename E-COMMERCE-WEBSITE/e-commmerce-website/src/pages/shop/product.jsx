 /*import React  from 'react'; */
 import PropTypes from 'prop-types';
 
 
 export const Product = ({ data }) => {
   const { id, productName, price, productImage } = data;
   return (
     <div  key={id} className="product">
       <img src={productImage} alt={productName} />
       <div className="description">
         <p> <b>{productName}</b></p>
         <p>${price}</p>
       </div>
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
