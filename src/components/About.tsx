const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-earth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            EcoMind exists to bridge the gap between intention and action in sustainable living. 
            We believe that informed consumers and ethical producers can reshape our economy 
            towards environmental responsibility and social justice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-foreground">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Educate</h3>
            <p className="text-muted-foreground leading-relaxed">
              Provide clear, actionable information about sustainable practices and their environmental impact.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-accent-foreground">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Connect</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build a community of conscious consumers and ethical producers working together.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-primary-foreground">🌍</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Transform</h3>
            <p className="text-muted-foreground leading-relaxed">
              Drive systemic change through individual actions and collective movement.
            </p>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-lg shadow-nature">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Why Conscious Choices Matter
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Environmental Impact</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Consumer choices drive 60% of global greenhouse gas emissions. 
                  By making informed decisions, we can significantly reduce our environmental footprint.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Economic Power</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every purchase is a vote for the kind of world we want to live in. 
                  Supporting ethical businesses creates demand for sustainable practices.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Social Responsibility</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Conscious consumption supports fair labor practices, community development, 
                  and social equity throughout supply chains.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-card-foreground mb-3">Future Generations</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The choices we make today determine the world we leave for our children. 
                  Sustainable practices ensure resource availability for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;