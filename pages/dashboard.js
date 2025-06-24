import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-2">Welcome to the Dashboard</h2>
          <p>This is your control center. Use the sections below to access key features.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-1">Nova Assistant</h3>
            <p>AI assistant insights and actions.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
            <h3 className="text-lg font-medium mb-1">Axiom Insights</h3>
            <p>Personalized financial education and summaries.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}