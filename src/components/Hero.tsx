import heroImage from '@/assets/hero-sustainability.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-leaf/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Choose
          <span className="block text-cream">Consciously</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cream/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover how your daily choices shape the future. Learn sustainable practices, 
          ethical production, and mindful consumption for a better tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#articles"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-cream hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-nature"
          >
            Explore Articles
          </a>
          <a
            href="#tips"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-cream border-2 border-cream hover:bg-cream hover:text-primary transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cream"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;