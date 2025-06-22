import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header/Nav */}
      <header className="bg-gray-800 p-4 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Navon</h1>
          <nav className="space-x-6 text-sm">
            <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link href="/nova" className="hover:text-blue-400">Nova</Link>
            <Link href="/axiom" className="hover:text-blue-400">Axiom</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}