"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function Home() {
  const { messages, sendMessage, status } = useChat();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() || status !== "ready") return;

    sendMessage({
      text: input,
    });

    setInput("");
  };

  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-white">

      {/* Header */}
      <header className="border-b border-zinc-800 px-5 py-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-xl font-semibold">
            Capone AI
          </h1>

          <p className="text-xs text-zinc-500">
            Your personal AI assistant
          </p>
        </div>
      </header>

      {/* Chat */}
      <section className="flex-1 px-5 py-8">
        <div className="mx-auto max-w-3xl space-y-6">

          {messages.length === 0 && (
            <div className="flex min-h-[55vh] items-center justify-center text-center">
              <div>
                <h2 className="text-3xl font-semibold">
                  สวัสดีครับ 👋
                </h2>

                <p className="mt-3 text-zinc-400">
                  ผมคือ Capone AI
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  ถามอะไรกับผมก็ได้
                </p>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={
                message.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <div
                className={
                  message.role === "user"
                    ? "max-w-[85%] rounded-2xl bg-white px-4 py-3 text-black"
                    : "max-w-[85%] rounded-2xl bg-zinc-900 px-4 py-3"
                }
              >
                <div className="mb-1 text-xs opacity-50">
                  {message.role === "user"
                    ? "คุณ"
                    : "Capone AI"}
                </div>

                <div className="whitespace-pre-wrap leading-7">
                  {message.parts.map((part, index) =>
                    part.type === "text" ? (
                      <span key={index}>
                        {part.text}
                      </span>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          ))}

          {status === "submitted" && (
            <div className="text-sm text-zinc-500">
              Capone AI กำลังคิด...
            </div>
          )}

          {status === "streaming" && (
            <div className="text-sm text-zinc-500">
              Capone AI กำลังพิมพ์...
            </div>
          )}

        </div>
      </section>

      {/* Input */}
      <footer className="sticky bottom-0 border-t border-zinc-800 bg-zinc-950 px-4 py-4">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-3xl"
        >
          <div className="flex items-end gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 p-2">

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              placeholder="ถามอะไรกับ Capone AI ก็ได้..."
              rows={1}
              className="min-h-[48px] flex-1 resize-none bg-transparent px-3 py-3 text-white outline-none placeholder:text-zinc-500"
            />

            <button
              type="submit"
              disabled={
                !input.trim() ||
                status !== "ready"
              }
              className="rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200 disabled:opacity-40"
            >
              ส่ง
            </button>

          </div>

          <p className="mt-2 text-center text-xs text-zinc-600">
            Capone AI อาจสร้างข้อมูลที่ไม่ถูกต้อง
          </p>
        </form>
      </footer>

    </main>
  );
}
