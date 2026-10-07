export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-lg bg-slate-800 border border-slate-700 px-4 py-3">
      <span className="font-semibold text-teal-300 capitalize">{name}</span>
      <span className="text-sm text-slate-300">
        Qty: {quantity} · <span className="capitalize">{category}</span>
      </span>
    </li>
  );
}
