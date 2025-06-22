export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="max-w-6xl mx-auto p-4">
        {children}
      </main>
    </div>
  )
}