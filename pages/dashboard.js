import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Market Overview Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Market Overview</h2>
          <p className="text-gray-500 dark:text-gray-400">Live updates coming soon...</p>
        </section>

        {/* AI Insights Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Insights</h2>
          <p className="text-gray-500 dark:text-gray-400">Your AI-driven analysis will appear here.</p>
        </section>

        {/* Financial Tools Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Financial Tools</h2>
          <p className="text-gray-500 dark:text-gray-400">Access calculators, models, and planners here.</p>
        </section>
      </div>
    </Layout>
  );
}