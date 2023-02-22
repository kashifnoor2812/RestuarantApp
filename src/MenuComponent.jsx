import React from "react";

const MenuComponent = ({ data }) => {
  return (
    <>
      <div className="mainDiv">
        {data.map((maradata, index) => {
          const { name, image, description, price } = maradata;
          return (
            <div key={index} className="card">
              <div className="imgDiv">
                <img src={image} alt="" />
              </div>
              <div className="contantDiv">
                <h2>{name}</h2>
                <p>{description}</p>
                <div className="pricebtn">
                  <h4>Price:{price}</h4>
                  <button>Order</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuComponent;
