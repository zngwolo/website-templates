import { useState } from 'react';
import { ShoppingCart, Search, Menu, X, Star, Shield, Truck, RefreshCw, Phone, Mail, MapPin, ChevronRight, ArrowRight, Check, Users, Heart, Award, Zap, Package, CreditCard, Gift } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroProduct from '@/assets/hero-product.jpg';
import productGrid from '@/assets/product-grid.jpg';
import customerService from '@/assets/customer-service.jpg';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [email, setEmail] = useState('');

  const navigation = ['Home', 'Shop', 'About', 'Reviews', 'Contact'];
  
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      description: "Crystal clear sound with noise cancellation",
      price: 199.99,
      salePrice: 149.99,
      rating: 4.8,
      reviews: 124,
      image: "photo-1505740420928-5e560c06d30e"
    },
    {
      id: 2,
      name: "Smart Fitness Tracker",
      description: "Track your health and fitness goals",
      price: 89.99,
      rating: 4.6,
      reviews: 89,
      image: "photo-1544117519-31a4b719223d"
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      description: "Sustainable and comfortable everyday wear",
      price: 34.99,
      rating: 4.9,
      reviews: 156,
      image: "photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 4,
      name: "Artisan Coffee Mug Set",
      description: "Handcrafted ceramic mugs for coffee lovers",
      price: 45.99,
      rating: 4.7,
      reviews: 67,
      image: "photo-1514228742587-6b1558fcf93a"
    }
  ];

  const categories = [
    { name: "New Arrivals", icon: Gift, count: "50+ items" },
    { name: "Best Sellers", icon: Award, count: "25+ items" },
    { name: "Sale Items", icon: Zap, count: "30+ items" },
    { name: "Electronics", icon: Package, count: "100+ items" },
    { name: "Fashion", icon: Heart, count: "200+ items" },
    { name: "Home & Garden", icon: Users, count: "75+ items" }
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Carefully curated products from trusted brands and artisans worldwide"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $75, with express delivery options available"
    },
    {
      icon: RefreshCw,
      title: "Easy Returns",
      description: "30-day hassle-free returns with full refund guarantee"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Knowledgeable customer service team ready to help 7 days a week"
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      review: "Amazing quality and fast shipping! The product exceeded my expectations and customer service was incredibly helpful.",
      product: "Wireless Headphones",
      image: "photo-1494790108755-2616b612b786"
    },
    {
      name: "Mike Chen",
      rating: 5,
      review: "Best online shopping experience I've had. Easy returns process and the products are exactly as described.",
      product: "Fitness Tracker",
      image: "photo-1507003211169-0a1dd7228f2d"
    },
    {
      name: "Emily Davis",
      rating: 5,
      review: "Love the sustainable approach and quality craftsmanship. Will definitely be ordering more!",
      product: "Cotton T-Shirt",
      image: "photo-1438761681033-6461ffad8d80"
    }
  ];

  const addToCart = (productId: number) => {
    setCartCount(prev => prev + 1);
  };

  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle email signup
      setEmail('');
      alert('Thank you for subscribing! Check your email for your 10% off code.');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">YourStore</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-10 w-full"
                />
              </div>
            </div>

            {/* Cart and CTA */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <ShoppingCart className="h-6 w-6 text-foreground cursor-pointer hover:text-primary transition-colors" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                    {cartCount}
                  </Badge>
                )}
              </div>
              <Button className="hidden md:inline-flex">Shop Now</Button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
                <div className="pb-3">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    className="w-full"
                  />
                </div>
                {navigation.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="pt-2">
                  <Button className="w-full">Shop Now</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Discover Products That Transform Your Life
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-xl">
                Premium quality products delivered directly to your door with satisfaction guaranteed. Shop with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Learn Our Story
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5" />
                  <span className="text-sm font-medium">Free Shipping Over $75</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  <span className="text-sm font-medium">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  <span className="text-sm font-medium">Secure Checkout</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroProduct}
                alt="Featured Product"
                className="w-full h-auto rounded-lg shadow-elevated"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-product">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular products loved by thousands of customers worldwide
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-elevated transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&h=300`}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.salePrice && (
                    <Badge className="absolute top-2 left-2 bg-warning text-warning-foreground">
                      Sale
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-warning fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-1">
                      ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.salePrice ? (
                        <>
                          <span className="text-lg font-bold text-success">
                            ${product.salePrice}
                          </span>
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.price}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-bold text-foreground">
                          ${product.price}
                        </span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      onClick={() => addToCart(product.id)}
                      className="hover:shadow-glow transition-all duration-200"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="px-8">
              View All Products
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose YourStore
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional products and service that exceeds your expectations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-16 bg-gradient-product">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find exactly what you're looking for in our curated collections
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="group cursor-pointer hover:shadow-elevated transition-all duration-300 bg-gradient-to-br from-card to-card/50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.count}
                  </p>
                  <Button variant="ghost" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground">
                    Browse Category
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us for their shopping needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={`https://images.unsplash.com/${review.image}?auto=format&fit=crop&w=100&h=100`}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-foreground">{review.name}</h3>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-warning fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3 italic">
                    "{review.review}"
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Verified purchase: {review.product}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Read More Reviews
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Shipping & Returns Section */}
      <section className="py-16 bg-gradient-trust">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Shopping Made Simple
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              We've made online shopping easy, secure, and worry-free
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Free Shipping</h3>
              <p className="text-white/90 mb-4">
                Enjoy free standard shipping on all orders over $75. Express delivery available for urgent orders.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                <span>No minimum order for express shipping</span>
              </div>
            </div>

            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <RefreshCw className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Easy Returns</h3>
              <p className="text-white/90 mb-4">
                Not satisfied? Return any item within 30 days for a full refund. No questions asked policy.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                <span>Free return shipping included</span>
              </div>
            </div>

            <div className="text-center text-white">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Secure Payment</h3>
              <p className="text-white/90 mb-4">
                Shop with confidence using our encrypted checkout. We accept all major payment methods.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Check className="h-4 w-4" />
                <span>SSL encrypted & PCI compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get Exclusive Deals & New Product Updates
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join our newsletter and get 10% off your first order plus early access to sales and new arrivals
            </p>

            <form onSubmit={handleEmailSignup} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                Get 10% Off
              </Button>
            </form>

            <p className="text-sm text-muted-foreground">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Support Section */}
      <section className="py-16 bg-gradient-product">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Customer Service Info */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Need Help? We're Here for You
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our dedicated support team is ready to assist you with any questions or concerns.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone Support</h3>
                    <p className="text-muted-foreground mb-1">1-800-YOURSTORE (1-800-968-7786)</p>
                    <p className="text-sm text-muted-foreground">Mon-Fri 9AM-8PM, Sat-Sun 10AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email Support</h3>
                    <p className="text-muted-foreground mb-1">support@yourstore.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Live Chat</h3>
                    <p className="text-muted-foreground mb-1">Available 24/7 on our website</p>
                    <p className="text-sm text-muted-foreground">Instant support for urgent questions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-elevated">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Name *
                      </label>
                      <Input placeholder="Your full name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Email *
                      </label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Order Number (Optional)
                    </label>
                    <Input placeholder="If this is about an existing order" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Subject *
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option>General Question</option>
                      <option>Order Issue</option>
                      <option>Product Question</option>
                      <option>Return Request</option>
                      <option>Technical Support</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">
                      Message *
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground h-32 resize-none"
                      placeholder="How can we help you today?"
                      required
                    ></textarea>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">YourStore</h3>
              <p className="text-background/80 mb-4">
                Your trusted online destination for premium products with exceptional service and guaranteed satisfaction.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-background/30 transition-colors">
                  <span className="text-sm font-semibold">f</span>
                </div>
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-background/30 transition-colors">
                  <span className="text-sm font-semibold">t</span>
                </div>
                <div className="w-8 h-8 bg-background/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-background/30 transition-colors">
                  <span className="text-sm font-semibold">in</span>
                </div>
              </div>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Returns & Exchanges</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Support</a></li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Sale Items</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Gift Cards</a></li>
                <li><a href="#" className="hover:text-background transition-colors">All Products</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
              <div className="space-y-3 text-background/80 mb-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">1-800-YOURSTORE</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-sm">support@yourstore.com</span>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-background/80 mb-2">Newsletter signup:</p>
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                  />
                  <Button variant="secondary" size="sm">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment & Security */}
          <div className="border-t border-background/20 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-background/80">We accept:</span>
                <div className="flex items-center gap-2">
                  {['Visa', 'MC', 'PayPal', 'Apple Pay', 'Google Pay'].map((payment) => (
                    <div key={payment} className="bg-background/20 px-3 py-1 rounded text-xs font-medium">
                      {payment}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-background/80">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>SSL Secured</span>
                </div>
                <span>•</span>
                <span>© 2024 YourStore. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
