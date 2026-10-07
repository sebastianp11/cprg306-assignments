import Item from "./item";

export default function ItemList() {
  const items = [
    { name: "milk, 4 L", quantity: 1, category: "dairy" },
    { name: "bread", quantity: 2, category: "bakery" },
    { name: "eggs, 12 count", quantity: 2, category: "dairy" },
    { name: "bananas", quantity: 6, category: "produce" },
    { name: "broccoli", quantity: 3, category: "produce" },
    { name: "chicken breasts, 1 kg", quantity: 1, category: "meat" },
    { name: "pasta sauce", quantity: 3, category: "canned goods" },
    { name: "spaghetti", quantity: 2, category: "dry goods" },
    { name: "frozen pizza", quantity: 2, category: "frozen foods" },
    { name: "dish soap", quantity: 1, category: "household" },
    { name: "orange juice", quantity: 2, category: "beverages" },
    { name: "granola bars", quantity: 5, category: "snacks" },
  ];

  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <Item
          key={item.name}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
}
