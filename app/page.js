import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-teal-400 mb-4">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <p className="mb-6 text-slate-300">
          Weekly assignments for CPRG 306. Select a week below to view it.
        </p>
        <ul className="space-y-2">
          <li>
            <Link href="/week-2" className="text-teal-300 underline hover:text-teal-200">
              Week 2
            </Link>
          </li>
          <li>
            <Link href="/week-3" className="text-teal-300 underline hover:text-teal-200">
              Week 3
            </Link>
          </li>
          <li>
            <Link href="/week-4" className="text-teal-300 underline hover:text-teal-200">
              Week 4
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
