import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">404</h1>
      <p className="mb-6 text-xl">Page not found</p>
      <Link
        href="/"
        className="bg-primary hover:bg-secondary rounded px-4 py-2 font-semibold text-white"
      >
        Тази страница не съществува, върнете се към началната страница.
      </Link>
    </div>
  );
}
