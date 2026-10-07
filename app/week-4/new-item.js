"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((q) => (q < 20 ? q + 1 : q));
  };

  const decrement = () => {
    setQuantity((q) => (q > 1 ? q - 1 : q));
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-slate-800 border border-slate-700 p-4 w-fit">
      <span className="text-2xl font-bold text-teal-300 w-10 text-center">
        {quantity}
      </span>
      <button
        onClick={decrement}
        disabled={quantity === 1}
        className="w-10 h-10 rounded bg-teal-600 text-white text-xl font-bold hover:bg-teal-500 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed"
      >
        -
      </button>
      <button
        onClick={increment}
        disabled={quantity === 20}
        className="w-10 h-10 rounded bg-teal-600 text-white text-xl font-bold hover:bg-teal-500 disabled:bg-slate-600 disabled:text-slate-400 disabled:cursor-not-allowed"
      >
        +
      </button>
    </div>
  );
}
