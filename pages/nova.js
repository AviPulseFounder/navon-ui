import Layout from '../components/Layout';

export default function Nova() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Assistant Updates Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Assistant Updates</h2>
          <p className="text-gray-500 dark:text-gray-400">Latest updates and insights from Nova will appear here.</p>
        </section>

        {/* Tasks & Actions Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Tasks & Actions</h2>
          <p className="text-gray-500 dark:text-gray-400">Your current tasks and suggested actions will be listed here.</p>
        </section>

        {/* Knowledge & Learning Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Knowledge & Learning</h2>
          <p className="text-gray-500 dark:text-gray-400">Explore curated learning resources from Nova here.</p>
        </section>
      </div>
    </Layout>
  );
}