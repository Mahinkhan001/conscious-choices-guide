import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Articles from '@/components/Articles';
import Tips from '@/components/Tips';
import About from '@/components/About';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Articles />
      <Tips />
      <About />
      <Footer />
    </div>
  );
};

export default Index;
