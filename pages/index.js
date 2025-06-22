import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Navon</h1>
      <p className="mb-8 text-gray-300">Your personalized intelligence platform</p>
      <div className="space-x-4">
        <Link href="/dashboard" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">Go to Dashboard</Link>
        <Link href="/nova" className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded">Launch Nova</Link>
        <Link href="/axiom" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">Open Axiom</Link>
      </div>
    </div>
  );
}