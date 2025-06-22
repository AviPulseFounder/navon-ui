import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Overview</h2>
          <p>Summary stats or charts go here.</p>
        </section>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Recent Activity</h2>
          <p>Latest updates or logs will display here.</p>
        </section>
      </div>
    </Layout>
  );
}