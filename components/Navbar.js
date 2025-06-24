import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/nova">Nova</Link></li>
        <li><Link href="/axiom">Axiom</Link></li>
      </ul>
    </nav>
  );
}