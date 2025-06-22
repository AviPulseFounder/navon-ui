import Head from "next/head";

export default function Nova() {
  return (
    <>
      <Head>
        <title>Nova – Your Assistant</title>
      </Head>
      <main className="min-h-screen bg-gray-950 text-white p-6">
        <h1 className="text-4xl font-bold mb-6">Welcome to Nova</h1>
        <p className="text-lg text-gray-300 mb-4">
          Nova is your customized AI assistant. Here you’ll be able to interact, manage tasks, and build workflows.
        </p>
        <div className="mt-6">
          <p className="text-md text-gray-400">Nova’s full capabilities are coming soon...</p>
        </div>
      </main>
    </>
  );
}