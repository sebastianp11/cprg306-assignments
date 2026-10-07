import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-6">New Item</h1>
        <NewItem />
      </div>
    </main>
  );
}
