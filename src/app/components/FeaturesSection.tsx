import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 md:px-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Fitur Aplikasi</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Jelajahi berbagai fitur yang dirancang untuk meningkatkan produktivitas Anda
          </p>
        </div>

        {/* App Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/screenshots/tasks.png" 
                alt="Tasks Screen" 
                width={300} 
                height={600} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Kelola Tugas</h3>
            <p className="text-gray-400 leading-relaxed">Organisir dan prioritaskan tugas harian anda dengan mudah</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/screenshots/notes.png" 
                alt="Notes Screen" 
                width={300} 
                height={600} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Buat Catatan</h3>
            <p className="text-gray-400 leading-relaxed">Simpan catatan penting dan ide-ide kreatif kapan saja</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/screenshots/calculator.png" 
                alt="Calculator Screen" 
                width={300} 
                height={600} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Kalkulator</h3>
            <p className="text-gray-400 leading-relaxed">Hitung dengan cepat dan mudah untuk keperluan sehari-hari</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group">
            <div className="mb-4 overflow-hidden rounded-xl">
              <Image 
                src="/screenshots/settings.png" 
                alt="Settings Screen" 
                width={300} 
                height={600} 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
            <h3 className="text-xl font-medium mb-3 text-white">Pengaturan</h3>
            <p className="text-gray-400 leading-relaxed">Kustomisasi aplikasi sesuai kebutuhan anda</p>
          </div>
        </div>

        {/* Detailed Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white border-b border-white/10 pb-3">Todo Management</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                Create, edit, and delete todos
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                Mark todos as completed
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white border-b border-white/10 pb-3">Notes & Calculator</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                Create and manage notes
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                Basic arithmetic operations
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-medium text-white border-b border-white/10 pb-3">Customization</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                English and Indonesian languages
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1 h-1 bg-white rounded-full mt-3 flex-shrink-0"></span>
                Dark and Light mode themes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}