import Layout from '../components/Layout'

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-white mb-4">Dashboard</h1>
        <p className="text-lg text-gray-300">
          This is your central hub for financial news, portfolio tracking, and alerts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-800 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-2">Market News</h2>
            <p className="text-gray-400">Latest financial headlines and updates will go here.</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-semibold text-white mb-2">Portfolio Snapshot</h2>
            <p className="text-gray-400">Overview of your assets and allocations.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}