"use client";

import Image from "next/image";

export default function Home() {
  const photos = [
    {
      src: "/z7445093432467_ecf82043905e97bbac88542b143526f0.jpg",
      alt: "Our precious moment 1"
    },
    {
      src: "/z7445093450841_518a2b71805758cd637a95dd49fb80f3.jpg",
      alt: "Our precious moment 2"
    },
    {
      src: "/z7445093450842_20d5723c2cd7980035679af710970360.jpg",
      alt: "Our precious moment 3"
    },
    {
      src: "/z7445093450923_856a21bd845ad9d0298f8e80d4800b8b.jpg",
      alt: "Our precious moment 4"
    }
  ];

  return (
    <div className="min-h-screen py-6 px-3 sm:py-12 sm:px-6 lg:px-8">
      <main className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-pink-900 dark:text-pink-200 mb-3 sm:mb-4 tracking-tight px-2">
            Đoan béo
          </h1>
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent via-pink-500 to-pink-500"></div>
            <span className="text-3xl sm:text-4xl">💕</span>
            <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent via-pink-500 to-pink-500"></div>
          </div>

        </div>

        {/* Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl hover:shadow-pink-500/50 transition-all duration-500 ease-out hover:scale-[1.02] animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-full bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-950 dark:to-pink-900">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Heart overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="text-5xl sm:text-6xl transform scale-0 group-hover:scale-100 transition-transform duration-500 drop-shadow-lg">
                  ❤️
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Message */}

      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}
