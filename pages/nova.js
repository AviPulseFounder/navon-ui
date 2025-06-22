import Layout from '../components/Layout';

export default function Nova() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to Nova</h1>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Assistant Settings</h2>
          <p>Customize your Nova assistant here.</p>
        </section>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Recent Commands</h2>
          <p>Your assistant activity and logs will show here.</p>
        </section>
      </div>
    </Layout>
  );
}