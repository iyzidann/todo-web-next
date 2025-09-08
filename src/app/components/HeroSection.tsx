import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-4 md:p-24 text-center relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* App Icon */}
        <div className="mb-12">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-6 p-1 border border-white/10 rounded-2xl backdrop-blur-sm hover:border-white/20 transition-all duration-300">
            <Image
              src="/app_icon.png"
              alt="Todo App Icon"
              width={100}
              height={100}
              className="rounded-xl w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-16 space-y-6">
          <h1 className="text-5xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Todo App
          </h1>
          <p className="text-xl md:text-1xl text-gray-300 font-light max-w-1xl mx-auto leading-relaxed">
            Aplikasi todo modern dengan fitur lengkap untuk produktivitas harian Anda
          </p>
        </div>

        {/* Download Button */}
        <div className="mb-20">
          <a
            href="https://github.com/iyzidann/todo-app-getx/releases/download/v0.2.5/app-release.apk"
            className="inline-flex items-center gap-3 bg-white text-black px-6 py-2 rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Aplikasi
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}