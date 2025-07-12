export default function ToolsMarquee() {
  const tools = [
    { name: "Canva", icon: "/src/icons/Canva_Logo_0.svg" },
    { name: "Adobe", icon: "/src/icons/Adobe_idLnet8cfu_0.svg" },
    { name: "CapCut", icon: "/src/icons/CapCut_Logo_0.svg" },
    { name: "VEED", icon: "/src/icons/VEED.png" },
    { name: "Figma", icon: "/src/icons/Figma_Symbol_0.svg" },
    { name: "Envato", icon: "/src/icons/Envato_Logo_0.svg" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Kullandığımız Araçlar
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Projelerinizi hayata geçirmek için endüstrinin en iyi araçlarını kullanıyoruz
          </p>
        </div>

        <div className="relative overflow-hidden hover-pause">
          {/* Gradient masks for smooth fade effect */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex items-center gap-16 animate-marquee whitespace-nowrap">
            {/* First set of tools */}
            {tools.map((tool, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors min-w-[120px] h-20"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors min-w-[120px] h-20"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Third set for extended seamless loop */}
            {tools.map((tool, index) => (
              <div
                key={`third-${index}`}
                className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors min-w-[120px] h-20"
              >
                <img
                  src={tool.icon}
                  alt={tool.name}
                  className="h-12 w-auto object-contain transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        .animate-marquee:hover,
        .hover-pause:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}