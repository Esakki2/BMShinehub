import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Car,
  Sparkles,
  Shield,
  Star,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Sun,
  Moon,
  ArrowRight,
  Check,
  Quote,
  Calendar,
  Home
} from 'lucide-react';

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    vehicle: '',
    service: '',
  });
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

 const services = [
  {
    imageUrl: '/ser1.jpg',
    icon: Shield,
    title: "Ceramic Coating",
    description: "Ultimate protection with our premium ceramic coating technology",
    features: ["9H Hardness", "5-Year Warranty", "Hydrophobic Properties", "UV Protection"],
    price: "From ₹ 30k to 50k"
  },
  {
    imageUrl: '/ser3.jpg',
    icon: Sparkles,
    title: "Car Polishing",
    description: "Professional paint correction and polishing for showroom finish",
    features: ["Paint Correction", "Scratch Removal", "Mirror Finish", "3k only for outside"],
    price: "From ₹ 3k to 5k "
  },
  {
    imageUrl: '/ser2.jpg',
    icon: Star,
    title: "Wax Polish",
    description: "Premium carnauba wax application for deep gloss and protection",
    features: ["Carnauba Wax", "6-Month Protection", "Deep Gloss", "Water Beading"],
    price: "From ₹ 999"
  },
  {
    imageUrl: '/ser4.jpg',
    icon: Car,
    title: "All-in-One Polish",
    description: "Complete detailing package for the ultimate car care experience",
    features: ["Full Exterior Detail", "Interior Clean", "Tire Shine", "Glass Treatment"],
    price: "From ₹ 5k"
  }
];

  const testimonials = [
    {
      name: "Vikram Singh",
      rating: 5,
      text: "My car looks brand new after the ceramic coating! The attention to detail is truly impressive.",
      service: "Ceramic Coating"
    },
    {
      name: "Harini Devi",
      rating: 4,
      text: "Exceptional service! My vehicle was transformed, and the team was very professional.",
      service: "Full Detail Package"
    },
    {
      name: "Mohan Kumar",
      rating: 4,
      text: "Highly recommend their paint correction service. My car's finish is flawless now!",
      service: "Paint Correction"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full border" />
                 <span className="font-bold text-xl text-gray-900 dark:text-white">BMShinehub</span>

            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('why-choose-us')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Why Choose Us
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('book-now')} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Book Now
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('why-choose-us')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Why Choose Us
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('book-now')} className="text-left bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors w-fit">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/1.png')`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Service Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">Get 5-Star Service At Home or At Our Shop</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Car Detailing
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent">
                BMShinehub
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your vehicle with our premium detailing services. Professional ceramic coating, paint correction, and complete car care solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('book-now')}
              className="bg-gray-900 hover:bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl min-w-[200px]"
            >
              Get Free Quote
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[200px]"
            >
              Learn More
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Premium Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the ultimate in automotive care with our comprehensive range of professional detailing services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl cursor-pointer border border-gray-200 dark:border-gray-600"
                onClick={() => setActiveService(index)}
              >
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-xl">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose BMShinehub?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're passionate about delivering exceptional results that exceed your expectations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                <Car className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Free Pick and Drop Service</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Enjoy the convenience of our complimentary pick-up and drop-off service for your vehicle.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                <Home className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Doorstep Service</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We bring our premium detailing services right to your doorstep for ultimate convenience.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-blue-700 group-hover:to-blue-900 transition-all duration-300">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our certified technicians have years of experience and attention to detail that guarantees showroom-quality results every time.
              </p>
            </div>

            
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-200 dark:border-gray-600">
                <Quote className="w-10 h-10 text-blue-600 mb-6" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.service}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Now Section */}
      <section id="book-now" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 dark:from-blue-950 dark:via-blue-900 dark:to-purple-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Book Your Service Today
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Ready to give your car the premium treatment it deserves? Schedule your appointment now!
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <form className="grid md:grid-cols-2 gap-6" onSubmit={async (e) => {
              e.preventDefault();
              try {
                const { data, error } = await supabase
                  .from('customer_bookings')
                  .insert([{
                    name: formData.fullName,
                    phone: formData.phoneNumber,
                    email: formData.email,
                    vehicle: formData.vehicle,
                    service: formData.service,
                    created_at: new Date().toISOString()
                  }]);
                
                if (error) throw error;
                
                setFormMessage('Booking submitted successfully!');
                setFormData({
                  fullName: '',
                  phoneNumber: '',
                  email: '',
                  vehicle: '',
                  service: ''
                });
              } catch (err) {
                setFormMessage('Error submitting booking. Please try again.');
                console.error(err);
              }
            }}>
              {formMessage && (
                <div className="md:col-span-2 p-4 bg-blue-500/20 rounded-lg text-blue-100">
                  {formMessage}
                </div>
              )}
              <div>
                <label className="block text-white font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Your phone number"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Vehicle Make & Model</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="e.g., BMW X5 2023"
                  value={formData.vehicle}
                  onChange={(e) => setFormData({...formData, vehicle: e.target.value})}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-white font-medium mb-2">Service Required</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  required
                >
                  <option value="" className="text-gray-900">Select a service</option>
                  <option value="ceramic-coating" className="text-gray-900">Ceramic Coating</option>
                  <option value="car-polishing" className="text-gray-900">Car Polishing</option>
                  <option value="wax-polish" className="text-gray-900">Wax Polish</option>
                  <option value="all-in-one" className="text-gray-900">All-in-One Polish</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Schedule My Appointment</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img src="logo.png" alt="DetailPro Logo" className="w-8 h-8 rounded-full border" />
                <span className="font-bold text-xl">BMShinehub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Premium car detailing services that make your vehicle shine beyond limits. Professional, reliable, and passionate about perfection.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Ceramic Coating</li>
                <li className="hover:text-white transition-colors cursor-pointer">Car Polishing</li>
                <li className="hover:text-white transition-colors cursor-pointer">Wax Polish</li>
                <li className="hover:text-white transition-colors cursor-pointer">All-in-One Polish</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact Info</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>9585064800</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>BMshinehub@gmail.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>5/408,
                    Ilango Nagar,Kottivakkam
                    chennai:600041</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Business Hours</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>8:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>8:00 AM - 4:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 BMShinehub. All rights reserved. Crafted with passion for automotive excellence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;