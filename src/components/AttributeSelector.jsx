import React from "react";

const AttributeSelector = ({
  heading,
  attribute,
  setAttribute,
  attributeTypes,
}) => {
  return (
    <div className='d-flex align-items-center gap-3'>
      <h2>{heading}:</h2>
      <select value={attribute} onChange={(e) => setAttribute(e.target.value)}>
        {attributeTypes.map((item, idx) => (
          <option value={idx} key={idx}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AttributeSelector;
