import Layout from '../components/Layout';

export default function Nova() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
          <p>Welcome to Nova — your intelligent assistant for strategic growth and clarity.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Daily Briefings</h3>
            <p>Receive curated updates relevant to your professional focus and market trends.</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">Strategic Tasks</h3>
            <p>Track, prioritize, and execute your high-leverage actions with clarity and precision.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}