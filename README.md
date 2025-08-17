# ⌨️ Typing Speed Tester

## 🚀 Overview
A fully typed **Next.js** app for practicing typing speed and accuracy. The UI is **responsive and mobile-first**, the logic is organized into **custom hooks** behind a single **Context Provider**, styling uses **Tailwind CSS v4 theme tokens**, and all display text is **centralized in JSON** for DRY edits and easy localization.



## ⭐ Highlights
- **Responsive UX:** Fluid layout, touch-friendly targets, and an overlay input so tapping text opens the mobile keyboard instantly.
- **Fast by default:** Static export served via CDN; declarative rendering (no imperative DOM mutations); minimal runtime work.
- **Single source of truth:** Content (titles, labels, hints, button text, stat order) lives in one JSON file and is strictly typed.
- **Clean state management:** `TypingGameProvider` exposes one typed surface (no prop drilling).
- **Reusable components:** Atoms → molecules → organisms (e.g., TypingText, TypingInput, ResultsAria, ButtonMain, Tooltip).
- **Custom hooks (typed):** `useTypingState`, `useGameTimer`, `useParagraphLoader`, `useGameLogic`, `useGameEffects`, `useTypingStats`, `useInputFocus`.
- **Accessible:** Clear caret, high-contrast correctness feedback, `aria-label` + screen-reader text, predictable focus.
- **CI/CD:** GitHub Actions builds and deploys to GitHub Pages; asset paths are handled for project-page URLs.

## 🧰 Tech Stack
**Next.js (App Router)** • **TypeScript** • **Tailwind CSS v4 (@theme tokens)** • **next/font** • **ESLint** • **Prettier** • **GitHub Actions & Pages**

## 🔗 Live Demo
https://putkovamariia.github.io/typing-speed-tester/

## ❤️ Author
Built with care by **Mariia Putkova**.
