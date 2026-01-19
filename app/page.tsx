"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);


  const photos = [
    "/z7445093432467_ecf82043905e97bbac88542b143526f0.jpg",
    "/z7445093450841_518a2b71805758cd637a95dd49fb80f3.jpg",
    "/z7445093450842_20d5723c2cd7980035679af710970360.jpg",
    "/z7445093450923_856a21bd845ad9d0298f8e80d4800b8b.jpg",
    "/z7446095978531_25e818359139bec513688c95cb34632e.jpg",
    "/z7446096013664_5be88bfeaed7c9386a82da08a413ddc8.jpg",
    "/z7446096033458_bc68603b4c1d30e880dd13c0b110eba8.jpg",
    "/z7446096051823_1d1b5cf1d148217c8088eed785c4ab00.jpg",
    "/z7446096092908_b267c9bdb8d9af269ec18959108cb2ab.jpg",
    "/z7446096200341_c8013499b461a3220c8ff8fa9ef7ea02.jpg",
    "/z7446096243088_7fc4ee24d5f33e7fb3b930cfd37d0e4c.jpg",
    "/z7446096265681_58029efdd6175e40d307afc56082df2a.jpg",
    "/z7446096299015_e9227a12699118dc504e2ad330996ca4.jpg",
    "/z7446096347550_6a84d81e438101f6e868569a24fa8c56.jpg",
    "/z7446096382935_9a5b6d5bb6cdcc5cd258389376818f13.jpg",
    "/z7446099966524_3250805e4f15a435bd6702bd22cfd2be.jpg",
    "/z7446100011155_ee0d818aef0042ff777d93013d752a5b.jpg",
    "/z7446100048697_17e4ad04c9db508a661a0f1a0fe59792.jpg",
    "/z7446100094561_05932e348524a307791a74593149e007.jpg",
    "/z7446100122172_6ad32739af0c3d504c1f0eb3d5135c14.jpg",
    "/z7446100162162_d711d889085190477aa5fab6df323013.jpg",
    "/z7446100188291_ed9ae9634d3f164d7ac2bec3fe4ce4a9.jpg",
  ];

  // Floating hearts animation
  useEffect(() => {
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach((heart, index) => {
      const delay = index * 0.5;
      (heart as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);

  // Swipe gesture handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (selectedPhoto !== null) {
      if (isLeftSwipe) {
        // Swipe left - next photo
        setSelectedPhoto((selectedPhoto + 1) % photos.length);
      }
      if (isRightSwipe) {
        // Swipe right - previous photo
        setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
      }
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;

      if (e.key === 'ArrowLeft') {
        setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
      } else if (e.key === 'ArrowRight') {
        setSelectedPhoto((selectedPhoto + 1) % photos.length);
      } else if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhoto, photos.length]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 dark:from-pink-950 dark:via-rose-950 dark:to-pink-900">
      {/* Floating Hearts Background - Optimized for Mobile */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40 sm:opacity-60">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute text-pink-400/40 dark:text-pink-300/30"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 15}px`,
              animationDuration: `${Math.random() * 8 + 12}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>



      <main className="max-w-6xl mx-auto px-3 py-6 sm:px-4 sm:py-8 relative z-10">
        {/* Compact Hero Section - Mobile Optimized */}
        <div className="text-center mb-8 sm:mb-10 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-pink-400 to-pink-500"></div>
            <span className="text-3xl animate-pulse">💕</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent via-pink-400 to-pink-500"></div>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 bg-clip-text text-transparent mb-2 animate-gradient px-2">
            Thanh Tùng & Đoan
          </h2>

          <p className="text-pink-700 dark:text-pink-300 text-sm sm:text-base mt-3 px-4">
            📍 Nhà Đoan
          </p>
        </div>

        {/* Photo Gallery - Mobile First with Enhanced Effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl shadow-lg active:scale-95 sm:hover:scale-105 transition-all duration-500 ease-out animate-slide-up cursor-pointer touch-manipulation"
              style={{ animationDelay: `${index * 30}ms` }}
              onClick={() => setSelectedPhoto(index)}
            >
              <div className="relative aspect-[3/4] bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800">
                <Image
                  src={photo}
                  alt={`Ảnh cưới ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-active:scale-110 sm:group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={index < 6}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-transparent opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Sparkle effect on corners */}
                <div className="absolute top-2 right-2 text-xl opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-all duration-300 animate-pulse">
                  ✨
                </div>
              </div>

              {/* Heart overlay - Touch & Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-active:opacity-100 sm:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-4xl sm:text-5xl transform scale-0 group-active:scale-100 sm:group-hover:scale-100 transition-transform duration-300 drop-shadow-lg animate-bounce-slow">
                  💖
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Footer */}
        <div className="text-center py-8 mt-6">
          <p className="text-pink-600 dark:text-pink-400 text-sm sm:text-base">
            Rất hân hạnh được đón tiếp! 💕
          </p>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl sm:text-5xl hover:text-pink-400 transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
            aria-label="Đóng"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 text-white text-3xl sm:text-4xl hover:text-pink-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
            }}
            aria-label="Ảnh trước"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 text-white text-3xl sm:text-4xl hover:text-pink-400 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto((selectedPhoto + 1) % photos.length);
            }}
            aria-label="Ảnh sau"
          >
            ›
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image
              src={photos[selectedPhoto]}
              alt={`Ảnh cưới ${selectedPhoto + 1}`}
              width={1200}
              height={1600}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-white text-sm sm:text-base mb-1">
              {selectedPhoto + 1} / {photos.length}
            </p>
            <p className="text-white/60 text-xs sm:hidden">
              ← Vuốt để xem ảnh →
            </p>
          </div>
        </div>
      )}

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
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .floating-heart {
          animation: float-up linear infinite;
          will-change: transform, opacity;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 1s ease-in-out infinite;
        }

        /* Optimize for mobile performance */
        @media (max-width: 640px) {
          .floating-heart {
            animation-duration: 20s;
          }
        }
      `}</style>
    </div>
  );
}
