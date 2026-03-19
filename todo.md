# 🚀 RAWVE LiveStream Frontend - Master TODO List

## 🛠️ 1. Setup & Architecture
- [x] Inisialisasi Next.js (App Router), Tailwind CSS, TypeScript.
- [x] Setup struktur folder (components, app, lib, hooks, types).
- [x] Konfigurasi warna tema dan *font* di `tailwind.config.ts` (Dark Mode default).
- [ ] Setup State Management (misal: Zustand atau Redux) untuk global state.
- [ ] Setup React Query / SWR Provider untuk *data fetching*.

## 🎨 2. Shared UI Components (Presentational)
- [x] Buat komponen Navbar Global (`components/layout/Navbar.tsx`).
- [x] Buat komponen Sidebar Navigasi (`components/layout/Sidebar.tsx`).
- [x] Buat komponen Stream Card / Video Grid (`components/ui/StreamCard.tsx`).
- [ ] Buat UI Button, Input, dan Modal yang *reusable* (Bisa pakai shadcn/ui).
- [ ] Buat komponen Hero Banner / Featured Stream Carousel.
- [ ] Buat Loading Skeleton untuk *state* saat *fetching* data.

## 📺 3. Public Pages (Penonton)
- [x] Buat Halaman **Browse / Home** (`app/browse/page.tsx`).
- [x] Buat Halaman **Watch Stream** (`app/[username]/page.tsx`).
  - [x] Layout Video Player utama.
  - [x] Informasi Stream (Judul, Kategori, Jumlah Viewer).
  - [x] Profil singkat Streamer & Tombol Follow/Subscribe.
  - [x] Layout Live Chat Box di sisi kanan layar.
- [x] Buat Halaman **Creator Public Profile** (`app/[username]/profile/page.tsx`).
  - [x] Header/Cover Image & Avatar Streamer.
  - [x] Tab Video VODs, Clips, dan About/Bio.

## 🔐 4. Authentication & Onboarding
- [x] Buat UI Halaman **Login** (`app/(auth)/login/page.tsx`).
- [x] Buat UI Halaman **Onboarding Profile Setup** (`app/onboarding/profile/page.tsx`).
- [ ] Buat UI Halaman **Onboarding Stream Setup** (Go Live Configuration).
- [ ] Buat UI Halaman **Error** & **Not Found** (404) custom bergaya RAWVE.

## 🎛️ 5. Creator Studio (Dashboard Khusus Streamer)
- [x] Buat Layout Route Group khusus Creator (`app/(dashboard)/creator/layout.tsx`).
- [x] Buat komponen **Creator Sidebar** (`components/dashboard/CreatorSidebar.tsx`).
- [x] Buat Halaman **Creator Home / Live Control** (`app/(dashboard)/creator/page.tsx`).
  - [x] Komponen Stat Cards (Viewers, Revenue, Followers).
  - [x] Komponen Live Preview Box (WebRTC/OBS monitor).
  - [x] Komponen Stream Configuration Form (Judul, Kategori).
  - [x] Komponen Top Donors List.
  - [x] Komponen Live Chat Monitor (Moderator View).
- [x] Buat Halaman **Detail Analytics** (`app/(dashboard)/creator/analytics/page.tsx`).
  - [x] Integrasi UI Chart placeholder untuk metrik performa.
- [x] Buat Halaman **Revenue & Monetization** (`app/(dashboard)/creator/revenue/page.tsx`).
  - [x] UI Daftar Donasi, Subscriptions, dan Payout Summary.
  - [x] Pecah UI Revenue menjadi komponen modular (Overview, Chart, Top Supporters, Payout).
- [ ] Buat Halaman **Settings** (Stream Key, OBS Setup, Profile Update).

## ⚙️ 6. API Integration & Logic (Backend Go)
- [ ] Integrasi Autentikasi dengan **Clerk**.
  - [ ] Protect rute `/creator` dan `/onboarding` menggunakan middleware Clerk.
  - [ ] Sinkronisasi user ID Clerk ke Backend Go via *Webhook* atau API Setup Profile.
- [ ] Setup Axios / Fetch instance dengan interceptor (menempelkan Bearer Token).
- [ ] Integrasi GET `/api/streams/live` untuk halaman Browse.
- [ ] Integrasi GET `/api/users/profile` untuk sidebar dan profil.
- [ ] Integrasi PUT `/api/profile/setup` untuk halaman Onboarding.
- [ ] Fetch data statistik *real-time* untuk Creator Dashboard.

## 🔴 7. Live Streaming & Real-time Features
- [ ] **Live Chat Integration (WebSocket)**:
  - [ ] Buat koneksi WebSocket ke `ws://localhost:8080/api/ws/chat/:stream_id`.
  - [ ] *Listen* *incoming messages* dan *render* ke dalam daftar chat (Penonton & Creator).
  - [ ] Fungsi *Send Message* ke server WebSocket.
  - [ ] Fitur *Auto-scroll* chat ke pesan terbaru.
- [ ] **Video Player Integration**:
  - [ ] Pilih dan pasang *library* *player* (Video.js, HLS.js, atau WebRTC player).
  - [ ] Tampilkan aliran video (HLS/WebRTC) dari media server ke Halaman Watch Stream.
  - [ ] Tampilkan aliran *preview* video di dalam Creator Studio.

## 🚀 8. Finishing & Deployment
- [ ] Testing *responsive design* (Mobile, Tablet, Desktop) untuk semua halaman.
- [ ] Pastikan tidak ada *error/warning* di terminal Next.js.
- [ ] Konfigurasi `next.config.ts` untuk optimasi *images* (domain luar).
- [ ] Deployment Frontend 