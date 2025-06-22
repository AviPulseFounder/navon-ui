import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex space-x-6">
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/nova">Nova</Link>
      <Link href="/axiom">Axiom</Link>
    </nav>
  );
}