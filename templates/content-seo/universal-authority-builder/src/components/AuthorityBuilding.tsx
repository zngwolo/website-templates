import { Award, Users, BookOpen, Mic, Star, TrendingUp } from 'lucide-react';

const AuthorityBuilding = () => {
  const credentials = [
    {
      icon: Award,
      title: "Industry Recognition",
      items: [
        "Google Partner Certified",
        "Content Marketing Institute Member",
        "SEMrush Certified Professional",
        "HubSpot Content Marketing Certified"
      ],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Proven Track Record",
      items: [
        "500+ Successful Client Campaigns",
        "8+ Years Content Marketing Experience",
        "95% Client Retention Rate",
        "$2.5M+ Revenue Generated for Clients"
      ],
      color: "text-secondary"
    },
    {
      icon: BookOpen,
      title: "Published Expertise",
      items: [
        "Featured in Search Engine Journal",
        "Contributing Author at Content Marketing Institute",
        "Guest on 25+ Marketing Podcasts",
        "500+ Published SEO Articles"
      ],
      color: "text-accent"
    },
    {
      icon: Mic,
      title: "Speaking & Teaching",
      items: [
        "Digital Marketing Conference Speaker",
        "University Guest Lecturer",
        "Workshop Leader at Industry Events",
        "Webinar Host for 10,000+ Marketers"
      ],
      color: "text-premium"
    }
  ];

  const testimonials = [
    {
      quote: "ContentPro doesn't just write content—they understand our business and create strategies that actually drive results. Our organic traffic has tripled since we started working together.",
      author: "Sarah Martinez",
      title: "Marketing Director",
      company: "TechStart Solutions",
      rating: 5
    },
    {
      quote: "The quality of their content and the depth of their SEO knowledge is unmatched. They've helped us become the go-to authority in our local market.",
      author: "David Chen",
      title: "Owner",
      company: "Premier Law Group",
      rating: 5
    },
    {
      quote: "Finally, a content marketing agency that delivers what they promise. Our lead generation has increased by 400% in just 6 months.",
      author: "Emily Rodriguez",
      title: "CEO",
      company: "HomeVantage Services",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Recognized Content & SEO Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our credentials, experience, and results speak for themselves. When you work with us, you're partnering with industry-recognized experts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => {
            const IconComponent = credential.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-lg bg-background shadow-sm mb-4`}>
                  <IconComponent className={`h-6 w-6 ${credential.color}`} />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {credential.title}
                </h3>
                
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {credential.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-center">
                      <div className={`w-1.5 h-1.5 rounded-full bg-current mr-2 ${credential.color}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Client Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            What Our Clients Say About Our Expertise
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  <div className="text-sm text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Authority Stats */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Industry Leadership by the Numbers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">8+</div>
              <p className="text-muted-foreground">Years of Expertise</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <p className="text-muted-foreground">Successful Campaigns</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">80+</div>
              <p className="text-muted-foreground">Industries Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-premium mb-2">95%</div>
              <p className="text-muted-foreground">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityBuilding;