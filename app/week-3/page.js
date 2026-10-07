import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">Shopping List</h1>
        <ItemList />
      </div>
    </main>
  );
}
