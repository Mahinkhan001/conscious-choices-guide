interface ArticleCardProps {
  title: string;
  excerpt: string;
  readTime: string;
  category: string;
  image: string;
}

const ArticleCard = ({ title, excerpt, readTime, category, image }: ArticleCardProps) => {
  return (
    <article className="bg-card rounded-lg shadow-gentle overflow-hidden hover:shadow-nature transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-3 py-1 text-xs font-semibold text-accent-foreground bg-accent rounded-full">
            {category}
          </span>
          <span className="text-sm text-muted-foreground">{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-card-foreground mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <button className="text-primary font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center">
          Read More
          <svg
            className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;