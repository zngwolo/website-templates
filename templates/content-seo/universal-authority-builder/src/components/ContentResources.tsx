import { FileText, Calendar, MapPin, Search, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContentResources = () => {
  const resources = [
    {
      icon: FileText,
      title: "SEO Checklist for Your Industry",
      description: "Complete audit tool with 50+ checkpoints to optimize your website for search engines",
      type: "PDF Guide",
      pages: "12 pages",
      downloads: "2,300+",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Calendar,
      title: "Content Calendar Template",
      description: "Professional planning template with editorial calendar, keyword tracking, and performance metrics",
      type: "Excel Template",
      pages: "Multi-sheet",
      downloads: "1,850+",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: MapPin,
      title: "Local SEO Domination Guide",
      description: "Step-by-step blueprint to rank #1 in local search results and attract nearby customers",
      type: "PDF Guide",
      pages: "18 pages",
      downloads: "3,100+",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      icon: Search,
      title: "Keyword Research Worksheet",
      description: "DIY research tool with competitor analysis templates and keyword opportunity finder",
      type: "PDF Worksheet",
      pages: "8 pages",
      downloads: "2,750+",
      color: "text-premium",
      bgColor: "bg-premium/10"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Free Resources to Grow Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download our proven templates, guides, and worksheets to start improving your content marketing and SEO results today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg ${resource.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-6 w-6 ${resource.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-foreground">
                        {resource.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${resource.bgColor} ${resource.color} font-medium`}>
                        {resource.type}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>{resource.pages}</span>
                      <span>{resource.downloads} downloads</span>
                    </div>
                    
                    <div className="bg-muted/50 border border-border rounded-lg p-4">
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Business email"
                          className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                        />
                        <select className="w-full px-3 py-2 border border-border rounded-md bg-background focus:ring-2 focus:ring-primary focus:border-transparent text-sm">
                          <option>Select your industry</option>
                          <option>Professional Services</option>
                          <option>Retail & E-commerce</option>
                          <option>Healthcare</option>
                          <option>Real Estate</option>
                          <option>Home Services</option>
                          <option>Restaurant & Food</option>
                          <option>Technology</option>
                          <option>Other</option>
                        </select>
                        <Button variant="default" className="w-full">
                          <Download className="mr-2 h-4 w-4" />
                          Download Free
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Lead Generation Benefits */}
        <div className="bg-card border border-border rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Why Download Our Resources?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <div className="text-primary text-2xl font-bold mb-2">Proven</div>
              <p className="text-sm text-muted-foreground">Battle-tested strategies used by 1,000+ successful businesses</p>
            </div>
            <div>
              <div className="text-secondary text-2xl font-bold mb-2">Actionable</div>
              <p className="text-sm text-muted-foreground">Step-by-step instructions you can implement immediately</p>
            </div>
            <div>
              <div className="text-accent text-2xl font-bold mb-2">Results</div>
              <p className="text-sm text-muted-foreground">See improvements in your SEO and content performance within 30 days</p>
            </div>
          </div>
          <p className="text-muted-foreground">
            Plus, get exclusive access to our weekly newsletter with advanced strategies and industry insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentResources;