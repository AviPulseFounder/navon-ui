import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Navon</h1>
      <p className="text-lg text-center mb-8 max-w-xl">
        Your personal command center for AI-powered insights, financial strategy, and smart execution.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link href="/dashboard" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-center shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Dashboard</h2>
          <p className="text-gray-300">Central control and navigation</p>
        </Link>
        <Link href="/nova" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-center shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Nova</h2>
          <p className="text-gray-300">Assistant tasks and updates</p>
        </Link>
        <Link href="/axiom" className="bg-gray-800 hover:bg-gray-700 p-6 rounded-xl text-center shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Axiom</h2>
          <p className="text-gray-300">Financial learning and tools</p>
        </Link>
      </div>
    </main>
  );
}