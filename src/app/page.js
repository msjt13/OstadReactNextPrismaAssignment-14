import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-4">
        <Link href="/register" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">
            Register
        </Link>
        <Link href="/dashboard" className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200">
            Dashboard
        </Link>
    </main>
  )
}
