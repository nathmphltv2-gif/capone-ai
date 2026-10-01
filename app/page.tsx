"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 px-5 py-4">
        <div className="mx-auto flex max-w-4xl items-center">
          <h1 className="text-xl font-semibold">
            Capone AI
          </h1>
        </div>
      </header>

      {/* Chat area */}
      <section className="flex flex-1 items-center justify-center px-5">
        <div className="w-full max-w-3xl">

          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold">
              สวัสดีครับ 👋
            </h2>

            <p className="mt-3 text-zinc-400">
              ผมคือ Capone AI
            </p>
          </div>

          {/* Input */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-2">
            <div className="flex items-end gap-2">

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ถามอะไรกับ Capone AI ก็ได้..."
                rows={1}
                className="min-h-[48px] flex-1 resize-none bg-transparent px-3 py-3 text-white outline-none placeholder:text-zinc-500"
              />

              <button
                className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200 disabled:opacity-50"
                disabled={!message.trim()}
              >
                ส่ง
              </button>

            </div>
          </div>

          <p className="mt-3 text-center text-xs text-zinc-600">
            Capone AI อาจสร้างข้อมูลที่ไม่ถูกต้อง ควรตรวจสอบข้อมูลสำคัญ
          </p>

        </div>
      </section>
    </main>
  );
}
