import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-xl font-semibold">Navon</div>
      <div className="space-x-4">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/nova" className="hover:underline">Nova</Link>
        <Link href="/axiom" className="hover:underline">Axiom</Link>
      </div>
    </nav>
  );
}