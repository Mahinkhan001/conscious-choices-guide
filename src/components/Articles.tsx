import ArticleCard from './ArticleCard';

const Articles = () => {
  const articles = [
    {
      title: "The Hidden Environmental Cost of Fast Fashion",
      excerpt: "Discover how the fashion industry impacts our planet and learn practical steps to build a more sustainable wardrobe without breaking the bank.",
      readTime: "5 min read",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      title: "Zero Waste Kitchen: A Beginner's Guide",
      excerpt: "Transform your kitchen into a zero-waste zone with simple swaps and mindful practices that reduce food waste and packaging.",
      readTime: "7 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop"
    },
    {
      title: "Ethical Production: What Labels Really Mean",
      excerpt: "Navigate the confusing world of ethical certifications and learn which labels you can trust when making conscious purchasing decisions.",
      readTime: "6 min read",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
    },
    {
      title: "Building Circular Economy in Your Community",
      excerpt: "Explore how individuals and communities can create closed-loop systems that minimize waste and maximize resource efficiency.",
      readTime: "8 min read",
      category: "Community",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop"
    },
    {
      title: "The Psychology of Mindful Consumption",
      excerpt: "Understand the mental triggers behind impulse buying and develop strategies for more intentional purchasing decisions.",
      readTime: "6 min read",
      category: "Psychology",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      title: "Renewable Energy for Everyday Life",
      excerpt: "Simple ways to incorporate renewable energy into your daily routine, from solar chargers to community energy programs.",
      readTime: "5 min read",
      category: "Energy",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section id="articles" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Explore Conscious Living
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deep into articles that explore sustainable practices, ethical production, 
            and mindful consumption. Each piece offers practical insights for creating positive change.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-foreground bg-primary hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-gentle">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Articles;