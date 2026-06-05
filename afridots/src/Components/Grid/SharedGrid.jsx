import React from "react";

const SharedGrid = ({ items, ItemComponent: Item }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
    {items.map((item) => (
      React.createElement(Item, { key: item.id, id: item.id, data: item })
    ))}
  </div>
);

export default SharedGrid;
