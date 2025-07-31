import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Restaurant Owner",
      company: "Urban Bistro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b567?w=150&h=150&fit=crop&crop=face",
      content: "DataInsight helped us identify our peak hours and optimize our staff scheduling. We reduced labor costs by 20% while improving customer satisfaction. The ROI was immediate.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Retail Manager",
      company: "StyleHub Boutique",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The inventory optimization features are game-changing. We went from frequent stockouts to perfect inventory levels. Sales increased 35% and waste dropped dramatically.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "Marketing Director",
      company: "TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: "Finally, marketing attribution that actually works! We cut our customer acquisition cost in half by focusing on channels that deliver real ROI. Best investment we've made.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Smart Business Owners
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of businesses that have transformed their decision-making process 
            and achieved remarkable results with our analytics platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    className="w-5 h-5 text-chart-tertiary fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in">
          <div className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">Customer Rating</div>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold text-chart-secondary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold text-chart-tertiary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;