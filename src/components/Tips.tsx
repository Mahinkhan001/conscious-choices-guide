const Tips = () => {
  const tips = [
    {
      category: "Energy",
      icon: "⚡",
      title: "Switch to LED Bulbs",
      description: "LED bulbs use 75% less energy and last 25 times longer than incandescent bulbs.",
      impact: "Save $75/year on electricity"
    },
    {
      category: "Water",
      icon: "💧",
      title: "Fix Leaky Faucets",
      description: "A single dripping faucet can waste over 3,000 gallons of water per year.",
      impact: "Save 3,000+ gallons annually"
    },
    {
      category: "Food",
      icon: "🥬",
      title: "Plan Your Meals",
      description: "Meal planning reduces food waste by up to 40% and saves money on groceries.",
      impact: "Reduce waste by 40%"
    },
    {
      category: "Transport",
      icon: "🚲",
      title: "Bike or Walk Short Trips",
      description: "Replace car trips under 2 miles with walking or biking for health and environment.",
      impact: "Reduce CO2 by 2.6 tons/year"
    },
    {
      category: "Waste",
      icon: "♻️",
      title: "Compost Organic Waste",
      description: "Composting reduces methane emissions and creates nutrient-rich soil for plants.",
      impact: "Divert 30% of household waste"
    },
    {
      category: "Shopping",
      icon: "🛍️",
      title: "Buy Secondhand First",
      description: "Check thrift stores and online marketplaces before buying new items.",
      impact: "Save 80% on purchases"
    }
  ];

  return (
    <section id="tips" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Simple Changes, Big Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start your sustainability journey with these practical tips. 
            Small actions compound into meaningful environmental and financial benefits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg shadow-gentle hover:shadow-nature transition-all duration-300 transform hover:-translate-y-1 border border-border"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{tip.icon}</span>
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-accent-foreground bg-accent rounded-full mb-2">
                    {tip.category}
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground">
                    {tip.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {tip.description}
              </p>
              
              <div className="pt-4 border-t border-border">
                <span className="text-sm font-semibold text-primary">
                  Impact: {tip.impact}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-nature p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-cream/90 mb-6 max-w-2xl mx-auto">
              Join thousands of conscious consumers who are making sustainable choices every day. 
              Start with one tip and build your eco-friendly habits gradually.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary bg-cream hover:bg-white transition-all duration-300 transform hover:scale-105">
              Get Weekly Tips
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;