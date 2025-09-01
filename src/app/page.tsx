import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-24 text-center">
        <div className="w-24 h-24 mb-8">
          <Image
            src="/app_icon.png"
            alt="Todo App Icon"
            width={96}
            height={96}
            className="rounded-xl"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Todo App</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
          Kelola tugas dan catatanmu dengan mudah menggunakan aplikasi Todo modern kami
        </p>
        <a
          href="https://github.com/iyzidann/todo-app-flutter/releases/download/v0.2.4/app-release.apk"
          className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors mb-12"
        >
          Download Aplikasi
        </a>
        
        {/* App Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-4 rounded-2xl">
            <Image src="/screenshots/tasks.png" alt="Tasks Screen" width={300} height={600} className="rounded-xl" />
            <p className="mt-4 text-gray-400">Kelola Tugas</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl">
            <Image src="/screenshots/notes.png" alt="Notes Screen" width={300} height={600} className="rounded-xl" />
            <p className="mt-4 text-gray-400">Buat Catatan</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl">
            <Image src="/screenshots/calculator.png" alt="Calculator Screen" width={300} height={600} className="rounded-xl" />
            <p className="mt-4 text-gray-400">Kalkulator</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-2xl">
            <Image src="/screenshots/settings.png" alt="Settings Screen" width={300} height={600} className="rounded-xl" />
            <p className="mt-4 text-gray-400">Pengaturan</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Mode Gelap</h3>
            <p className="text-gray-400">Tampilan gelap yang nyaman untuk mata</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Multi Bahasa</h3>
            <p className="text-gray-400">Tersedia dalam Bahasa Indonesia & Inggris</p>
          </div>
          <div className="text-center p-6">
            <h3 className="text-xl font-semibold mb-4">Gratis</h3>
            <p className="text-gray-400">Tanpa biaya, tanpa iklan</p>
          </div>
        </div>
      </section>
    </main>
  )
}
