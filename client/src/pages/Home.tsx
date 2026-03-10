import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import { initializeAnimations } from '../scripts/animations';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Initialize all animations
    initializeAnimations();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="saffron-container">
      {/* Custom Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />
      <div 
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">Saffron Table</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#story">Story</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reservations">Reservations</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background" data-parallax>
          <img 
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/hero-saffron-dish-f9b4NcrGK9T5GWpXwWyT9W.webp" 
            alt="Saffron Table Hero" 
            className="hero-image"
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Saffron Table</h1>
          <p className="hero-tagline">A Fine Dining Experience of Modern Indian Cuisine</p>
          <div className="hero-cta">
            <a href="#reservations" className="cta-button primary">Reserve Table</a>
            <a href="#menu" className="cta-button secondary">Explore Menu</a>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section id="menu" className="signature-dishes">
        <div className="section-header">
          <h2>Signature Dishes</h2>
          <div className="header-line" />
        </div>
        <div className="dishes-grid">
          {/* Dish 1 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-1-XU2nVPDUDfrXkfPgKthujp.webp" 
                alt="Saffron Scallop" 
              />
            </div>
            <div className="dish-content">
              <h3>Saffron Scallop</h3>
              <p className="dish-description">Pan-seared scallop with saffron beurre blanc, edible flowers, and microgreens</p>
              <p className="dish-price">$48</p>
            </div>
          </div>

          {/* Dish 2 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-2-QrN8hNdcNBipB87qXXQ2GV.webp" 
                alt="Golden Saffron Sphere" 
              />
            </div>
            <div className="dish-content">
              <h3>Golden Saffron Sphere</h3>
              <p className="dish-description">Delicate saffron-infused dessert with gold leaf, passion fruit coulis, and crispy tuile</p>
              <p className="dish-price">$22</p>
            </div>
          </div>

          {/* Dish 3 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-3-RXAtno2M24bw5iGAfYEcxn.webp" 
                alt="Saffron Risotto" 
              />
            </div>
            <div className="dish-content">
              <h3>Saffron Risotto</h3>
              <p className="dish-description">Creamy saffron risotto with truffle, caviar, and premium seafood selection</p>
              <p className="dish-price">$56</p>
            </div>
          </div>

          {/* Dish 4 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-1-XU2nVPDUDfrXkfPgKthujp.webp" 
                alt="Saffron Broth" 
              />
            </div>
            <div className="dish-content">
              <h3>Saffron Broth</h3>
              <p className="dish-description">Delicate saffron consommé with seasonal vegetables and aromatic herbs</p>
              <p className="dish-price">$32</p>
            </div>
          </div>

          {/* Dish 5 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-2-QrN8hNdcNBipB87qXXQ2GV.webp" 
                alt="Saffron Tart" 
              />
            </div>
            <div className="dish-content">
              <h3>Saffron Tart</h3>
              <p className="dish-description">Crispy pastry with saffron custard, candied citrus, and vanilla cream</p>
              <p className="dish-price">$24</p>
            </div>
          </div>

          {/* Dish 6 */}
          <div className="dish-card">
            <div className="dish-image">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-3-RXAtno2M24bw5iGAfYEcxn.webp" 
                alt="Saffron Reduction" 
              />
            </div>
            <div className="dish-content">
              <h3>Saffron Reduction</h3>
              <p className="dish-description">Prime beef with saffron-infused reduction, seasonal vegetables, and truffle oil</p>
              <p className="dish-price">$68</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="story">
        <div className="story-container">
          <div className="story-image">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/restaurant-interior-UD9G4G5KPQaqSvyaGvPLFk.webp" 
              alt="Restaurant Interior" 
            />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>Saffron Table is more than just a restaurant—it's a culinary journey. Founded in 2020, we've dedicated ourselves to creating unforgettable dining experiences through innovative cuisine and impeccable service.</p>
            <p>Our philosophy centers on the transformative power of saffron, the world's most precious spice. Each dish is carefully crafted to showcase this golden ingredient in new and unexpected ways, creating a narrative of flavor that evolves throughout your meal.</p>
            <div className="chef-intro">
              <h3>Chef's Philosophy</h3>
              <p>"Cooking is about respecting ingredients and honoring the craft. At Saffron Table, we believe that every plate tells a story—a story of passion, precision, and the pursuit of perfection."</p>
              <p className="chef-name">— Chef Alexandra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery">
        <div className="section-header">
          <h2>Gallery</h2>
          <div className="header-line" />
        </div>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-1-XU2nVPDUDfrXkfPgKthujp.webp" 
              alt="Gallery 1" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-2-QrN8hNdcNBipB87qXXQ2GV.webp" 
              alt="Gallery 2" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-3-RXAtno2M24bw5iGAfYEcxn.webp" 
              alt="Gallery 3" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/hero-saffron-dish-f9b4NcrGK9T5GWpXwWyT9W.webp" 
              alt="Gallery 4" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/restaurant-interior-UD9G4G5KPQaqSvyaGvPLFk.webp" 
              alt="Gallery 5" 
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663412199668/LncRswLkqBs5XajQKVGrfs/signature-dish-1-XU2nVPDUDfrXkfPgKthujp.webp" 
              alt="Gallery 6" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <h2>Guest Reviews</h2>
          <div className="header-line" />
        </div>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p className="testimonial-text">"An extraordinary culinary experience. Every dish was a masterpiece of flavor and presentation. The attention to detail is unmatched."</p>
            <p className="testimonial-author">— Sarah Mitchell</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"Saffron Table redefined what fine dining means to us. The service was impeccable, and the food was simply transcendent."</p>
            <p className="testimonial-author">— James Chen</p>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"A journey through flavor and artistry. This is not just dinner; it's an experience that will stay with you forever."</p>
            <p className="testimonial-author">— Emma Rodriguez</p>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservations" className="reservations">
        <div className="section-header">
          <h2>Make a Reservation</h2>
          <div className="header-line" />
        </div>
        <form className="reservation-form">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <input 
                type="date" 
                required 
              />
            </div>
            <div className="form-group">
              <input 
                type="time" 
                required 
              />
            </div>
          </div>
          <div className="form-group">
            <select required>
              <option value="">Number of Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5 Guests</option>
              <option value="6">6 Guests</option>
              <option value="7">7 Guests</option>
              <option value="8">8+ Guests</option>
            </select>
          </div>
          <div className="form-group">
            <textarea 
              placeholder="Special Requests (allergies, preferences, etc.)" 
              rows={4}
            />
          </div>
          <button type="submit" className="submit-button">Reserve Now</button>
        </form>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Saffron Table</h4>
            <p>123 Culinary Lane<br />San Francisco, CA 94105<br />United States</p>
          </div>
          <div className="footer-section">
            <h4>Hours</h4>
            <p>Tuesday - Thursday: 5:00 PM - 11:00 PM<br />
            Friday - Saturday: 5:00 PM - 12:00 AM<br />
            Sunday: 5:00 PM - 10:00 PM<br />
            Monday: Closed</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Phone: (415) 555-0123<br />
            Email: hello@saffrontable.com</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Saffron Table. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
