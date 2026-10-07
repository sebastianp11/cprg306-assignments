import StudentInfo from "./student-info";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-4">Shopping List</h1>
        <StudentInfo />
      </div>
    </main>
  );
}
