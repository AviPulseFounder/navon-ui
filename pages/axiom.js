import Layout from '../components/Layout';

export default function Axiom() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Daily Lessons Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Daily Lessons</h2>
          <p className="text-gray-500 dark:text-gray-400">Your daily financial learning modules will appear here.</p>
        </section>

        {/* Deep Dives Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Deep Dives</h2>
          <p className="text-gray-500 dark:text-gray-400">Explore in-depth topics and strategic concepts here.</p>
        </section>

        {/* Practical Tools Section */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Practical Tools</h2>
          <p className="text-gray-500 dark:text-gray-400">Access calculators, templates, and practical resources here.</p>
        </section>
      </div>
    </Layout>
  );
}