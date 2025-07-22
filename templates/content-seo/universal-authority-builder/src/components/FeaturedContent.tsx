import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import blogImage from '@/assets/blog-workspace.jpg';

const FeaturedContent = () => {
  const articles = [
    {
      title: "10 SEO Strategies That Actually Work in 2024",
      excerpt: "Discover the latest SEO techniques that are driving real results for businesses across all industries. From technical optimization to content strategy.",
      category: "SEO Strategy",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      author: "Sarah Johnson",
      image: blogImage,
      featured: true
    },
    {
      title: "Content Marketing ROI: How to Measure What Matters",
      excerpt: "Learn how to track the metrics that actually impact your bottom line and prove the value of your content marketing investment.",
      category: "Analytics",
      readTime: "6 min read",
      publishDate: "Dec 12, 2024",
      author: "Mike Chen",
      image: blogImage,
      featured: false
    },
    {
      title: "Local SEO for Small Businesses: Complete Guide",
      excerpt: "Everything you need to know about dominating local search results and attracting customers in your area.",
      category: "Local SEO",
      readTime: "12 min read",
      publishDate: "Dec 10, 2024",
      author: "Emma Davis",
      image: blogImage,
      featured: false
    }
  ];

  const categories = ["All", "SEO Strategy", "Content Marketing", "Local SEO", "Analytics", "Case Studies"];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Insights & Industry Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Stay ahead of the competition with actionable strategies, industry insights, and proven tactics from our content marketing experts.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  category === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={index}
              className={`bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group ${
                article.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                {article.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className={`font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-200 ${
                  article.featured ? "text-xl" : "text-lg"
                }`}>
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <span className="font-medium text-foreground">{article.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Never Miss a Content Marketing Insight
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get weekly tips, strategies, and case studies delivered to your inbox. Join 10,000+ marketers who rely on our expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Button variant="default">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;