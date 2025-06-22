import Layout from '../components/Layout';

export default function Axiom() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Welcome to Axiom</h1>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Financial Insights</h2>
          <p>Market news, macro trends, and economic briefings tailored for you.</p>
        </section>
        <section className="bg-white rounded-lg p-4 shadow">
          <h2 className="text-xl font-semibold mb-2">Education Modules</h2>
          <p>Guided content on investing, modeling, and financial strategy.</p>
        </section>
      </div>
    </Layout>
  );
}