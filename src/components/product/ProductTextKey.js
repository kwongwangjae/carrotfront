import React from "react";
import ProductText from "./ProductText";

const ProductTextKey = ({ ProductTextList }) => {
  return (
    <div>
      {ProductTextList &&
        ProductTextList.map((v, index) => (
          <ProductText
            key={index}
            title={v.title}
            location={v.location}
            text={v.text}
          />
        ))}
    </div>
  );
};

export default ProductTextKey;
