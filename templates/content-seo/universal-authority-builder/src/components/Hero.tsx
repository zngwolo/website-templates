import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-content-marketing.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Dominate Search Results &{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Attract More Customers
                </span>{' '}
                with Expert Content
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                We create SEO-optimized content that positions your business as the go-to authority in{' '}
                <span className="text-accent font-semibold">your industry</span>, driving qualified traffic and converting visitors into loyal customers.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="h-6 w-6 text-secondary mr-2" />
                  <span className="text-2xl font-bold text-foreground">300%</span>
                </div>
                <p className="text-sm text-muted-foreground">More Traffic</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-primary mr-2" />
                  <span className="text-2xl font-bold text-foreground">#1</span>
                </div>
                <p className="text-sm text-muted-foreground">Google Rankings</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="h-6 w-6 text-accent mr-2" />
                  <span className="text-2xl font-bold text-foreground">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Get Content Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                See Our Results
              </Button>
            </div>

            {/* Industry Examples */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
              <p className="text-sm text-muted-foreground mb-3">Trusted by businesses across industries:</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Law Firms</span>
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">Restaurants</span>
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full">Retail Stores</span>
                <span className="bg-premium/10 text-premium px-3 py-1 rounded-full">Healthcare</span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Home Services</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Content marketing performance dashboard showing SEO results"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent/20 to-premium/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;