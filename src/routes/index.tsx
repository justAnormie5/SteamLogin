import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import qr from "@/assets/steam-qr.svg";
import steamLogo from "@/assets/steam-logo.svg";

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
  const [storeHover, setStoreHover] = useState(false);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        background:
          "radial-gradient(ellipse at top, #1b2838 0%, #1b2838 50%, #1b2838 100%)",
        color: "var(--steam-text)",
        fontFamily: '"Motiva Sans", Arial, Helvetica, sans-serif',
      }}
    >
      {/* Top bar */}
      <div style={{ background: "#171a21" }}>
        <div className="mx-auto flex max-w-[940px] items-center justify-end px-4 py-2 text-[11px]">
          <button
            className="mr-3 flex items-center gap-1.5 rounded-sm px-3 py-[3px] text-white"
            style={{
              background:
                "linear-gradient(to bottom, #6aa028 5%, #4c7c1c 95%)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="white">
              <path d="M8 1l-1.5 4H3l3 2.5L4.5 12 8 9.5 11.5 12 10 7.5 13 5h-3.5z" />
            </svg>
            <span className="font-semibold tracking-wide">Install Steam</span>
          </button>
          <a className="hover:text-white transition-colors" style={{ color: "#b8b6b4" }} href="#">
            login
          </a>
          <span className="mx-2" style={{ color: "#56707f" }}>
            |
          </span>
          <a className="hover:text-white transition-colors flex items-center gap-1" style={{ color: "#b8b6b4" }} href="#">
            language
            <svg width="8" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0l5 6 5-6z"/></svg>
          </a>
        </div>
      </div>

      {/* Logo + main nav */}
      <header style={{ background: "#171a21" }}>
        <div className="mx-auto flex max-w-[940px] items-end gap-8 px-4 pt-3 pb-0">
          <a href="#" className="block pb-3">
            <img src={steamLogo} alt="Steam" className="h-[44px] w-auto" />
          </a>
          <nav className="flex items-end gap-5 text-[14px] uppercase tracking-wide">
            <a
              href="#"
              onMouseEnter={() => setStoreHover(true)}
              onMouseLeave={() => setStoreHover(false)}
              className="relative pb-3"
              style={{
                color: storeHover ? "#ffffff" : "#66c0f4",
                textShadow: "0 0 5px rgba(0,0,0,0.5)",
              }}
            >
              Store
              <span
                className="absolute inset-x-0 bottom-0 block h-[2px]"
                style={{ background: "#66c0f4" }}
              />
            </a>
            {["Community", "About", "Support"].map((item) => (
              <a
                key={item}
                href="#"
                className="pb-3 text-white transition-colors hover:text-[#66c0f4]"
                style={{ textShadow: "0 0 5px rgba(0,0,0,0.5)" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Sub nav */}
      <div
        style={{
          background:
            "linear-gradient(to right, #7193a6 0%, #223c50 100%)",
        }}
      >
        <div className="mx-auto flex max-w-[940px] items-center gap-1 px-4 py-[6px] text-[12px]">
          {["Your Store", "New & Noteworthy", "Categories", "Points Shop", "News", "Labs"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="rounded-sm px-3 py-1 text-white transition-colors hover:bg-white/10"
                style={{ textShadow: "1px 1px 0 rgba(0,0,0,0.3)" }}
              >
                {item}
              </a>
            ),
          )}
          <div className="ml-auto flex items-center">
            <input
              type="text"
              placeholder="search the store"
              className="h-[25px] w-[170px] rounded-l-sm px-2 text-[12px] outline-none"
              style={{
                background:
                  "linear-gradient(to right, #1c2a36 0%, #316282 100%)",
                color: "#ffffff",
                border: "1px solid rgba(0,0,0,0.4)",
              }}
            />
            <button
              className="flex h-[25px] w-[30px] items-center justify-center rounded-r-sm"
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

      {/* Background hero overlay */}
      <div
        className="relative"
        style={{
          background:
            "linear-gradient(to bottom, rgba(23,26,33,0.9) 0%, rgba(27,40,56,0.95) 100%)",
        }}
      >
        {/* Faux game tiles backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, transparent 0 80px, rgba(102,192,244,0.15) 80px 81px), repeating-linear-gradient(115deg, transparent 0 160px, rgba(255,255,255,0.05) 160px 240px)",
          }}
        />

        {/* Main */}
        <main className="relative mx-auto max-w-[940px] px-4 pt-8 pb-24">
          <h1
            className="mb-6 text-[26px] font-light"
            style={{ color: "#ffffff" }}
          >
            Sign in
          </h1>

          <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-[minmax(0,380px)_auto]">
            {/* Left: form */}
            <div>
              <div
                className="mb-2 text-[12px] font-semibold uppercase tracking-wider"
                style={{ color: "#66c0f4" }}
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
                style={{ color: "#dde6ee" }}
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

              <label
                className="mb-5 flex items-center gap-2 text-[13px]"
                style={{ color: "#dde6ee" }}
              >
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4 accent-[#66c0f4]"
                />
                Remember me
              </label>

              <button
                className="h-11 w-full rounded-sm text-[16px] font-semibold text-white transition-all hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(to right, #06bfff 0%, #2d73ff 100%)",
                  boxShadow: "0 2px 8px rgba(6,191,255,0.25)",
                }}
              >
                Sign in
              </button>

              <div className="mt-4 text-center">
                <a href="#" className="text-[13px] hover:text-white" style={{ color: "#66c0f4" }}>
                  Help, I can't sign in
                </a>
              </div>
            </div>

            {/* Right: QR */}
            <div className="flex flex-col items-center md:pl-4">
              <div
                className="mb-3 text-[12px] font-semibold uppercase tracking-wider"
                style={{ color: "#66c0f4" }}
              >
                Or sign in with QR
              </div>
              <div
                className="rounded-md bg-white p-3"
                style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.4)" }}
              >
                <img src={qr} alt="QR code" className="h-[200px] w-[200px]" />
              </div>
              <p
                className="mt-3 max-w-[220px] text-center text-[12px] leading-snug"
                style={{ color: "#dde6ee" }}
              >
                Use the{" "}
                <a href="#" className="hover:text-white" style={{ color: "#66c0f4" }}>
                  Steam Mobile App
                </a>{" "}
                to sign in via QR Code
              </p>
            </div>
          </div>

          {/* New to Steam */}
          <div
            className="mt-16 grid grid-cols-1 items-center gap-6 rounded-sm p-6 md:grid-cols-[260px_1fr]"
            style={{
              background:
                "linear-gradient(to right, rgba(62,87,108,0.4) 0%, rgba(62,87,108,0.1) 100%)",
            }}
          >
            <div className="text-center">
              <div
                className="mb-3 text-[18px] font-light"
                style={{ color: "#ffffff" }}
              >
                New to Steam?
              </div>
              <button
                className="rounded-sm px-6 py-2 text-[14px] font-semibold text-white transition-all hover:brightness-110"
                style={{
                  background:
                    "linear-gradient(to right, #06bfff 0%, #2d73ff 100%)",
                }}
              >
                Create an account
              </button>
            </div>
            <p className="text-[14px] leading-relaxed" style={{ color: "#dde6ee" }}>
              It's free and easy. Discover thousands of games to play with millions of new friends.{" "}
              <a href="#" className="hover:text-white" style={{ color: "#66c0f4" }}>
                Learn more about Steam
              </a>
            </p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer style={{ background: "#171a21" }}>
        <div className="mx-auto max-w-[940px] px-4 py-10">
          <div className="mb-6 flex items-center gap-6">
            <img src={steamLogo} alt="Steam" className="h-[36px] w-auto opacity-60" />
            <span
              className="rounded-sm px-3 py-1 text-[16px] font-bold tracking-[0.3em] text-white"
              style={{ background: "#3a3a3a" }}
            >
              VALVE
            </span>
          </div>
          <p className="mb-8 text-[12px] leading-relaxed" style={{ color: "#8f98a0" }}>
            © 2026 Valve Corporation. All rights reserved. All trademarks are property of their respective owners in the
            US and other countries.
            <br />
            VAT included in all prices where applicable.
          </p>
          <div className="grid grid-cols-2 gap-6 text-[12px] md:grid-cols-4">
            {[
              { h: "STEAM", l: ["About Steam", "Steam Subscriber Agreement", "Steamworks", "Refunds"] },
              { h: "VALVE", l: ["About Valve", "Jobs", "Steamworks", "Steam Distribution"] },
              { h: "LEGAL", l: ["Privacy Policy", "Legal", "Cookies", "Accessibility"] },
              { h: "MORE", l: ["Get Steam", "Get Mobile Apps", "@steam_games", "Gift Cards"] },
            ].map((c) => (
              <div key={c.h}>
                <div
                  className="mb-2 text-[12px] font-semibold tracking-wider"
                  style={{ color: "#ffffff" }}
                >
                  {c.h}
                </div>
                {c.l.map((it) => (
                  <a
                    key={it}
                    href="#"
                    className="block py-0.5 hover:text-white"
                    style={{ color: "#67c1f5" }}
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
