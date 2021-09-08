import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
      const{id, title, image, price, category} = product
    return (
    <div className="four column wide m-3 col-3 w-25" key={id}>
    <Link 
    to={`/product/${id}`}>
           <div className="ui link cards row">
          <div className="card h-50">
            <div className="image">
                <img src={image} alt={title}/>
            </div>
            <div className="content">
              <div className="header">{title}</div>
              <div className="meta price">#{price}</div>
              <div className="meta">{category}</div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });
   return<>{renderList}</>
};

export default ProductComponent;
