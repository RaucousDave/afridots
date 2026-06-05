const SharedGrid = ({ items, ItemComponent }) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
      {items.map((item, idx) => (
        <ItemComponent key={idx} data={item} />
      ))}
    </div>
  );
  
  export default SharedGrid;
  