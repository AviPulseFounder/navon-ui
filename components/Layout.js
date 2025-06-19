import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <main>{children}</main>
      <footer className="mt-8 text-sm text-gray-400">
        © 2025 Navon. All rights reserved.
      </footer>
    </div>
  );
}
