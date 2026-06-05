import React from "react";

const SharedGrid = ({ items, ItemComponent: Item }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
    {items.map((item, idx) => React.createElement(Item, { key: idx, data: item }))}
  </div>
);
  
  export default SharedGrid;
  
