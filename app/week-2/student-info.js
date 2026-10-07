import Link from "next/link";

export default function StudentInfo() {
  return (
    <div className="rounded-lg bg-slate-800 p-4 border border-slate-700">
      <p className="text-lg">
        Name: <span className="font-semibold">Sebastian Pedersen</span>
      </p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/sebastianp11/cprg306-assignments"
          className="text-teal-300 underline hover:text-teal-200"
        >
          github.com/sebastianp11/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
