import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import qr from "@/assets/steam-qr.png";

export const Route = createFileRoute("/")({
  component: SteamLogin,
  head: () => ({
    meta: [
      { title: "Sign In" },
      { name: "description", content: "Sign in to Steam" },
    ],
  }),
});

function SteamLogin() {
  const [remember, setRemember] = useState(true);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "linear-gradient(to bottom, #1b2838 0%, #1b2838 60%, #1b2838 100%)",
        color: "var(--steam-text)",
        fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif',
      }}
    >
      {/* Top bar */}
      <div style={{ background: "var(--steam-nav)" }}>
        <div className="mx-auto flex max-w-[940px] items-center justify-end px-4 py-2 text-[11px]">
          <button
            className="mr-3 flex items-center gap-1.5 rounded-sm px-3 py-1 text-white"
            style={{
              background:
                "linear-gradient(to bottom, #6aa028 5%, #4c7c1c 95%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <span
              className="inline-block h-3 w-3 rounded-full"
              style={{ background: "#a4d007" }}
            />
            <span className="font-semibold">Install Steam</span>
          </button>
          <a className="hover:text-white" style={{ color: "var(--steam-text-muted)" }} href="#">
            sign in
          </a>
          <span className="mx-2" style={{ color: "var(--steam-text-muted)" }}>
            |
          </span>
          <a className="hover:text-white" style={{ color: "var(--steam-text-muted)" }} href="#">
            language ▾
          </a>
        </div>
      </div>

      {/* Logo + main nav */}
      <header style={{ background: "var(--steam-bg-deep)" }}>
        <div className="mx-auto flex max-w-[940px] items-center gap-8 px-4 py-3">
          <a href="#" className="flex items-center">
            <svg width="176" height="44" viewBox="0 0 176 44" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" fill="#1b2838" stroke="#66c0f4" strokeWidth="1.5" />
              <circle cx="28" cy="16" r="6" fill="none" stroke="#66c0f4" strokeWidth="1.5" />
              <circle cx="18" cy="28" r="3.5" fill="none" stroke="#66c0f4" strokeWidth="1.5" />
              <text
                x="52"
                y="29"
                fill="#ffffff"
                fontFamily="Arial, sans-serif"
                fontSize="22"
                fontWeight="700"
                letterSpacing="2"
              >
                STEAM
              </text>
              <text x="160" y="18" fill="#8f98a0" fontSize="9">
                ®
              </text>
            </svg>
          </a>
          <nav className="flex items-end gap-6 pb-1 text-[15px] uppercase tracking-wide">
            <a
              href="#"
              className="relative pb-2 text-white"
              style={{ color: "var(--steam-link)" }}
            >
              Store
              <span
                className="absolute inset-x-0 -bottom-0 block h-[2px]"
                style={{ background: "var(--steam-link)" }}
              />
            </a>
            <a href="#" className="pb-2 text-white hover:text-[color:var(--steam-link)]">
              Community
            </a>
            <a href="#" className="pb-2 text-white hover:text-[color:var(--steam-link)]">
              About
            </a>
            <a href="#" className="pb-2 text-white hover:text-[color:var(--steam-link)]">
              Support
            </a>
          </nav>
        </div>
      </header>

      {/* Sub nav */}
      <div style={{ background: "var(--steam-subnav)" }}>
        <div className="mx-auto flex max-w-[940px] items-center gap-5 px-4 py-2 text-[12px]">
          {["Browse", "Recommendations", "Categories", "Hardware", "Ways to Play", "Special Sections"].map(
            (item) => (
              <a key={item} href="#" className="hover:text-white" style={{ color: "var(--steam-text)" }}>
                {item} ▾
              </a>
            ),
          )}
          <div className="ml-auto flex items-center">
            <input
              type="text"
              placeholder="Search the store"
              className="h-7 w-[210px] rounded-l-sm px-2 text-[12px] outline-none"
              style={{
                background: "linear-gradient(to bottom, #1c2a36 0%, #316282 100%)",
                color: "#ffffff",
                border: "none",
              }}
            />
            <button
              className="flex h-7 w-9 items-center justify-center rounded-r-sm"
              style={{
                background: "linear-gradient(to bottom, #1a9fff 5%, #0671b8 95%)",
              }}
              aria-label="Search"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <circle cx="10" cy="10" r="6" />
                <line x1="15" y1="15" x2="21" y2="21" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main */}
      <main className="mx-auto max-w-[940px] px-4 pt-10 pb-20">
        <h1
          className="mb-8 text-[26px] font-light"
          style={{ color: "var(--steam-text-bright)" }}
        >
          Sign in
        </h1>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_auto]">
          {/* Left: form */}
          <div className="max-w-[380px]">
            <div
              className="mb-2 text-[12px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--steam-link)" }}
            >
              Sign in with account name
            </div>
            <input
              type="text"
              className="mb-5 h-9 w-full rounded-sm px-2 text-[14px] text-white outline-none"
              style={{
                background:
                  "linear-gradient(to bottom, #1c2a36 0%, #316282 100%)",
                border: "1px solid #000",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
              }}
              autoFocus
            />

            <div
              className="mb-2 text-[12px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--steam-text)" }}
            >
              Password
            </div>
            <input
              type="password"
              className="mb-4 h-9 w-full rounded-sm px-2 text-[14px] text-white outline-none"
              style={{
                background:
                  "linear-gradient(to bottom, #1c2a36 0%, #316282 100%)",
                border: "1px solid #000",
                boxShadow: "inset 0 2px 4px rgba(0,0,0,0.4)",
              }}
            />

            <label className="mb-5 flex items-center gap-2 text-[13px]" style={{ color: "var(--steam-text)" }}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 accent-[#66c0f4]"
              />
              Remember me
            </label>

            <button
              className="h-11 w-full rounded-sm text-[16px] font-semibold text-white"
              style={{
                background:
                  "linear-gradient(to right, #06bfff 0%, #2d73ff 100%)",
                boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            >
              Sign in
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-[13px]" style={{ color: "var(--steam-link)" }}>
                Help, I can't sign in
              </a>
            </div>
          </div>

          {/* Right: QR */}
          <div className="flex flex-col items-center md:pl-8">
            <div
              className="mb-3 text-[12px] font-semibold uppercase tracking-wider"
              style={{ color: "var(--steam-link)" }}
            >
              Or sign in with QR
            </div>
            <div className="rounded-md bg-white p-3">
              <img src={qr} alt="QR code" className="h-[200px] w-[200px]" />
            </div>
            <p
              className="mt-3 max-w-[220px] text-center text-[12px] leading-snug"
              style={{ color: "var(--steam-text)" }}
            >
              Use the{" "}
              <a href="#" style={{ color: "var(--steam-link)" }}>
                Steam Mobile App
              </a>{" "}
              to sign in via QR Code
            </p>
          </div>
        </div>

        {/* New to Steam */}
        <div className="mt-20 grid grid-cols-1 items-center gap-6 md:grid-cols-[260px_1fr]">
          <div className="text-center">
            <div
              className="mb-3 text-[18px] font-semibold"
              style={{ color: "var(--steam-text-bright)" }}
            >
              New to Steam?
            </div>
            <button
              className="rounded-sm px-6 py-2 text-[14px] font-semibold text-white"
              style={{
                background:
                  "linear-gradient(to right, #06bfff 0%, #2d73ff 100%)",
              }}
            >
              Create an account
            </button>
          </div>
          <p className="text-[14px] leading-relaxed" style={{ color: "var(--steam-text)" }}>
            It's free and easy. Discover thousands of games to play with millions of new friends.{" "}
            <a href="#" style={{ color: "var(--steam-link)" }}>
              Learn more about Steam
            </a>
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "var(--steam-bg-deeper)" }}>
        <div className="mx-auto max-w-[940px] px-4 py-8">
          <div className="mb-6 flex items-center gap-6">
            <span className="text-[22px] font-bold tracking-widest text-[#8f98a0]">
              STEAM<sup className="text-[10px]">®</sup>
            </span>
            <span
              className="rounded-sm px-3 py-1 text-[16px] font-bold tracking-[0.3em] text-white"
              style={{ background: "#3a3a3a" }}
            >
              VALVE
            </span>
          </div>
          <p className="mb-6 text-[12px]" style={{ color: "var(--steam-text-muted)" }}>
            © 2026 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the
            US and other countries.
          </p>
          <div className="grid grid-cols-2 gap-6 text-[13px] md:grid-cols-4">
            {[
              { h: "STEAM", l: ["About Steam", "Steam SSA"] },
              { h: "VALVE", l: ["About Valve", "Jobs"] },
              { h: "LEGAL", l: ["Privacy", "Accessibility"] },
              { h: "MORE", l: ["Get Steam", "Get Mobile Apps"] },
            ].map((c) => (
              <div key={c.h}>
                <div
                  className="mb-2 text-[12px] font-semibold tracking-wider"
                  style={{ color: "var(--steam-text-bright)" }}
                >
                  {c.h}
                </div>
                {c.l.map((it) => (
                  <a
                    key={it}
                    href="#"
                    className="block py-0.5"
                    style={{ color: "var(--steam-link)" }}
                  >
                    {it}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
