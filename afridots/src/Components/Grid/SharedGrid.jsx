const SharedGrid = ({ items, ItemComponent }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
    {items.map((item) => (
      <ItemComponent key={item.id} id={item.id} data={item} />
    ))}
  </div>
);

export default SharedGrid;
