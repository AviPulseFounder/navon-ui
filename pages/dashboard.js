import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <p className="text-gray-300">Welcome to your command center.</p>
      </div>
    </Layout>
  );
}