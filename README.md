<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=80&pause=1000&color=FF2D4E&center=true&vCenter=true&width=600&height=120&lines=RAWVE" alt="RAWVE" />

### **Lower Cut. Full Control. Open Source.**
*The official web client for the RAWVE Live Streaming Platform.*

<br/>

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-FF2D4E?style=for-the-badge)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-00C853?style=for-the-badge&logo=github&logoColor=white)](CONTRIBUTING.md)

<br/>

> This repository contains the **Frontend Web Application** for RAWVE.
> Built with Next.js App Router, it provides a lightning-fast viewing experience,
> real-time chat, and a comprehensive creator studio.

<br/>

[**Get Started**](#-getting-started) · [**Architecture**](#-architecture) · [**Roadmap**](#-roadmap) · [**Contributing**](#-contributing) · [**Backend Repository**](https://github.com/Adibayuluthfiansyah/RAWVE-LiveStream-Platform)

</div>

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 + Shadcn UI (Radix) |
| **Authentication** | Clerk (`@clerk/nextjs` v7) |
| **Server State** | TanStack Query v5 |
| **Client State** | Zustand v5 |
| **Video Player** | HLS.js v1 |
| **Real-time** | Native WebSockets |

---

## 📁 Architecture

This project follows a modern **Feature-Driven Design** suitable for large-scale Next.js applications.

```
src/
├── app/                    # 📍 Next.js Routing (Pages, Layouts, Middleware)
├── features/               # 🚀 Core Business Domains (auth, chat, stream)
├── components/             # 🧩 Global UI Kit & Providers (Shadcn, QueryProvider)
├── hooks/                  # 🎣 Global custom hooks
├── lib/                    # 🛠️ Utility functions & API clients
└── types/                  # 🪪 Shared TypeScript interfaces (mirrors Golang structs)
```

### Data Flow

```
User Interaction
      │
      ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Features  │────▶│   TanStack  │────▶│  API Client │────▶│   Backend   │
│  (UI/Logic) │     │    Query    │     │   (lib/)    │     │  (Go/Gin)   │
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
      ▲                   │                                        │
      │                   ▼                                        ▼
      │            ┌─────────────┐                        ┌─────────────┐
      └────────────│   Zustand   │                        │  WebSocket  │
       UI Update   │   (Store)   │                        │   (Chat)    │
                   └─────────────┘                        └─────────────┘
```

---

## 🚀 Roadmap

| Status | Feature | Description |
|---|---|---|
| ✅ | **Core Setup** | Next.js App Router, Tailwind v4, Shadcn UI init |
| ✅ | **Authentication** | Clerk Provider integration and Protected Routes |
| ✅ | **Data Management** | TanStack Query & Zustand integration |
| 🔧 | **Video Player** | HLS.js integration for media playback |
| 🔧 | **Real-time Chat** | WebSocket client, auto-scroll, and chat UI |
| 📋 | **UI: Homepage** | Active streams showcase grid |
| 📋 | **Creator Dashboard** | Stream key management, title updates, and analytics |
| 📋 | **Monetization UI** | Tip/donation flow integrated with backend engine |
| 📋 | **Analytics Dashboard** | Real-time viewers, revenue, and engagement display |

> `✅ Done` · `🔧 In Progress` · `📋 Planned`

---

## ⚡ Getting Started

### Prerequisites

- [Node.js 18.17+](https://nodejs.org)
- `npm`, `pnpm`, or `yarn`
- A [Clerk](https://clerk.com) account (free tier works)
- A running instance of the [RAWVE Backend](https://github.com/Adibayuluthfiansyah/RAWVE-LiveStream-Platform)

### 1. Clone the Repository

```bash
git clone https://github.com/Adibayuluthfiansyah/rawve-frontend.git
cd rawve-frontend
```

### 2. Configure Environment

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your values:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Backend API
NEXT_PUBLIC_API_URL=http://localhost:8080/api
NEXT_PUBLIC_WS_URL=ws://localhost:8080/api/ws
```

> 🔑 Get your Clerk keys from [Clerk Dashboard](https://dashboard.clerk.com) → API Keys

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application. 🚀

---

## 🤝 Contributing

We welcome contributions from everyone — bug fixes, new features, or documentation improvements.

```bash
# 1. Fork this repository

# 2. Create your feature branch
git checkout -b feature/your-awesome-feature

# 3. Commit your changes
git commit -m "feat: add your awesome feature"

# 4. Push to the branch
git push origin feature/your-awesome-feature

# 5. Open a Pull Request
```

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Use for |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `refactor:` | Code refactoring |
| `test:` | Adding tests |
| `chore:` | Build process or tooling |

---

## 👨‍💻 Creator

<div align="center">

<br/>

<img src="https://github.com/adibayuluthfiansyah.png" width="100" height="100" style="border-radius:50%" alt="Adibayu Luthfiansyah"/>

### **Adibayu Luthfiansyah**

*Founder & Lead Developer of RAWVE*

[![Website](https://img.shields.io/badge/Website-adibayuluthfiansyah.dev-FF2D4E?style=for-the-badge&logo=safari&logoColor=white)](https://adibayuluthfiansyah.dev)
[![GitHub](https://img.shields.io/badge/GitHub-adibayuluthfiansyah-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/adibayuluthfiansyah)

<br/>

> *"I built RAWVE because creators deserve a platform that's honest with them —
> about what it takes, what it costs, and what they get in return."*

<br/>

</div>

---

## 📄 License

RAWVE is open-source software licensed under the [MIT License](LICENSE).

Self-hosting is always free and always will be. The 15% platform fee only applies to creators using RAWVE's hosted infrastructure.

---

<div align="center">

Built with ❤️ for creators who deserve better.

**[rawve.live](https://rawve.live)** · [@rawve](https://github.com/rawve)

<br/>

*"Lower Cut. Full Control. Open Source."*

</div>