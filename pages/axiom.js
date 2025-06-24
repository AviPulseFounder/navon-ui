import Layout from '../components/Layout';

export default function Axiom() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-900 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Financial Education Hub</h2>
          <p>Welcome to Axiom — your personalized financial learning and insight center.</p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Investment Analysis</h3>
            <p>Explore breakdowns, trends, and smart portfolio moves.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-lg font-medium mb-2">Financial Literacy</h3>
            <p>Grow your knowledge with curated education tracks and tools.</p>
          </div>
        </section>
      </div>
    </Layout>
  );
}