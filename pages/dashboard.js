import Layout from '../components/Layout';

export default function Dashboard() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {/* Section: Market Feed */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Market Feed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted p-4 rounded-xl shadow">S&P 500: Loading...</div>
            <div className="bg-muted p-4 rounded-xl shadow">Nasdaq: Loading...</div>
          </div>
        </section>

        {/* Section: Watchlist */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Watchlist</h2>
          <div className="bg-muted p-4 rounded-xl shadow">Watchlist component coming soon...</div>
        </section>

        {/* Section: Activity */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="bg-muted p-4 rounded-xl shadow">No recent activity.</div>
        </section>
      </div>
    </Layout>
  )
}