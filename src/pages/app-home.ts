import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../router';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

@customElement('app-home')
export class AppHome extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    /* Hero Section */
    .hero {
      background: var(--gradient-hero);
      padding: var(--spacing-3xl) var(--spacing-lg);
      text-align: center;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.3;
    }

    .hero-content {
      position: relative;
      z-index: 1;
      max-width: 900px;
      margin: 0 auto;
    }

    .hero-icon {
      font-size: 72px;
      margin-bottom: var(--spacing-lg);
      animation: float 3s ease-in-out infinite;
    }

    .hero h1 {
      font-family: var(--font-display);
      font-size: 48px;
      font-weight: 700;
      margin: 0 0 var(--spacing-md);
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .hero .subtitle {
      font-size: 20px;
      font-weight: 300;
      margin: 0 0 var(--spacing-xl);
      opacity: 0.95;
    }

    .hero-buttons {
      display: flex;
      gap: var(--spacing-md);
      justify-content: center;
      flex-wrap: wrap;
      margin-top: var(--spacing-xl);
    }

    .hero-buttons a {
      text-decoration: none;
    }

    .btn-hero {
      background: white;
      color: var(--primary-color);
      padding: var(--spacing-md) var(--spacing-xl);
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 16px;
      border: none;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: var(--shadow-lg);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    .btn-hero:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-xl);
    }

    .btn-hero-outline {
      background: transparent;
      color: white;
      padding: var(--spacing-md) var(--spacing-xl);
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 16px;
      border: 2px solid white;
      cursor: pointer;
      transition: all var(--transition);
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    .btn-hero-outline:hover {
      background: white;
      color: var(--primary-color);
      transform: translateY(-3px);
    }

    /* Quick Actions */
    .quick-actions {
      padding: var(--spacing-3xl) var(--spacing-lg);
      background: var(--primary-50);
    }

    @media (prefers-color-scheme: dark) {
      .quick-actions {
        background: var(--gray-800);
      }
    }

    .section-title {
      text-align: center;
      font-family: var(--font-display);
      font-size: 36px;
      color: var(--primary-900);
      margin: 0 0 var(--spacing-xl);
    }

    @media (prefers-color-scheme: dark) {
      .section-title {
        color: var(--gray-100);
      }
    }

    .actions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--spacing-xl);
      max-width: 1200px;
      margin: 0 auto;
    }

    .action-card {
      background: var(--gradient-card);
      padding: var(--spacing-xl);
      border-radius: var(--radius-xl);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: all var(--transition);
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      display: block;
      border: 2px solid transparent;
    }

    .action-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-300);
    }

    .action-icon {
      font-size: 48px;
      margin-bottom: var(--spacing-md);
    }

    .action-card h3 {
      color: var(--primary-700);
      font-size: 20px;
      margin: 0 0 var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .action-card h3 {
        color: var(--primary-300);
      }
    }

    .action-card p {
      color: var(--gray-600);
      font-size: 14px;
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .action-card p {
        color: var(--gray-400);
      }
    }

    /* Features Section */
    .features {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
      margin-top: var(--spacing-xl);
    }

    .feature-item {
      display: flex;
      gap: var(--spacing-lg);
      padding: var(--spacing-lg);
      background: var(--gradient-card);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow);
      transition: all var(--transition);
    }

    .feature-item:hover {
      box-shadow: var(--shadow-md);
      transform: translateX(5px);
    }

    .feature-icon {
      font-size: 40px;
      flex-shrink: 0;
    }

    .feature-content h4 {
      color: var(--primary-800);
      margin: 0 0 var(--spacing-sm);
      font-size: 18px;
    }

    @media (prefers-color-scheme: dark) {
      .feature-content h4 {
        color: var(--primary-200);
      }
    }

    .feature-content p {
      color: var(--gray-600);
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .feature-content p {
        color: var(--gray-400);
      }
    }

    /* Emergency Banner */
    .emergency-banner {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: var(--spacing-xl) var(--spacing-lg);
      text-align: center;
      color: white;
    }

    .emergency-banner h3 {
      margin: 0 0 var(--spacing-sm);
      font-size: 24px;
    }

    .emergency-banner p {
      margin: 0 0 var(--spacing-md);
      opacity: 0.95;
    }

    .emergency-phone {
      font-size: 32px;
      font-weight: 800;
      display: inline-block;
      margin-top: var(--spacing-md);
    }

    .emergency-phone a {
      color: white;
      text-decoration: none;
    }

    /* Stats Section */
    .stats {
      background: var(--gradient-primary);
      padding: var(--spacing-3xl) var(--spacing-lg);
      color: white;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-xl);
      max-width: 1000px;
      margin: 0 auto;
      text-align: center;
    }

    .stat-item h3 {
      font-size: 48px;
      font-weight: 800;
      margin: 0;
      font-family: var(--font-display);
    }

    .stat-item p {
      margin: var(--spacing-sm) 0 0;
      font-size: 16px;
      opacity: 0.9;
    }

    /* Footer CTA */
    .cta-section {
      padding: var(--spacing-3xl) var(--spacing-lg);
      text-align: center;
      background: var(--primary-50);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section {
        background: var(--gray-800);
      }
    }

    .cta-section h2 {
      font-family: var(--font-display);
      font-size: 36px;
      color: var(--primary-900);
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section h2 {
        color: var(--gray-100);
      }
    }

    .cta-section p {
      color: var(--gray-600);
      font-size: 18px;
      margin: 0 0 var(--spacing-xl);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section p {
        color: var(--gray-400);
      }
    }

    /* Responsive */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 36px;
      }

      .hero .subtitle {
        font-size: 18px;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .section-title {
        font-size: 28px;
      }

      .stat-item h3 {
        font-size: 36px;
      }
    }
  `;

  render() {
    return html`
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-icon">🏥</div>
          <h1>Ahmadiyya Muslim Hospital Mbale</h1>
          <p class="subtitle">Providing compassionate healthcare with excellence and Islamic values</p>
          <div class="hero-buttons">
            <a href="${resolveRouterPath('appointment')}">
              <button class="btn-hero">
                📅 Book Appointment
              </button>
            </a>
            <a href="${resolveRouterPath('emergency')}">
              <button class="btn-hero-outline">
                🚨 Emergency Services
              </button>
            </a>
          </div>
        </div>
      </section>

      <!-- Quick Actions -->
      <section class="quick-actions">
        <h2 class="section-title">Quick Access</h2>
        <div class="actions-grid">
          <a href="${resolveRouterPath('departments')}" class="action-card">
            <div class="action-icon">🏢</div>
            <h3>Our Departments</h3>
            <p>Explore our specialized medical departments</p>
          </a>
          <a href="${resolveRouterPath('doctors')}" class="action-card">
            <div class="action-icon">👨‍⚕️</div>
            <h3>Meet Our Doctors</h3>
            <p>Expert medical professionals at your service</p>
          </a>
          <a href="${resolveRouterPath('services')}" class="action-card">
            <div class="action-icon">⚕️</div>
            <h3>Medical Services</h3>
            <p>Comprehensive healthcare solutions</p>
          </a>
          <a href="${resolveRouterPath('contact')}" class="action-card">
            <div class="action-icon">📞</div>
            <h3>Contact Us</h3>
            <p>Get in touch with our team</p>
          </a>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features">
        <h2 class="section-title">Why Choose Us</h2>
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">🌟</div>
            <div class="feature-content">
              <h4>Excellence in Care</h4>
              <p>State-of-the-art medical facilities with the latest technology and equipment</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💚</div>
            <div class="feature-content">
              <h4>Compassionate Service</h4>
              <p>Patient-centered care with empathy and respect for all</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">👨‍⚕️</div>
            <div class="feature-content">
              <h4>Expert Medical Staff</h4>
              <p>Highly qualified doctors and medical professionals</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🕐</div>
            <div class="feature-content">
              <h4>24/7 Emergency</h4>
              <p>Round-the-clock emergency services for critical care</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">☪️</div>
            <div class="feature-content">
              <h4>Islamic Values</h4>
              <p>Healthcare delivered with Islamic principles of compassion</p>
            </div>
          </div>
          <div class="feature-item">
            <div class="feature-icon">💰</div>
            <div class="feature-content">
              <h4>Affordable Care</h4>
              <p>Quality healthcare accessible to all members of the community</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats">
        <div class="stats-grid">
          <div class="stat-item">
            <h3>20+</h3>
            <p>Years of Service</p>
          </div>
          <div class="stat-item">
            <h3>50+</h3>
            <p>Expert Doctors</p>
          </div>
          <div class="stat-item">
            <h3>15+</h3>
            <p>Departments</p>
          </div>
          <div class="stat-item">
            <h3>100k+</h3>
            <p>Patients Served</p>
          </div>
        </div>
      </section>

      <!-- Emergency Banner -->
      <section class="emergency-banner">
        <h3>🚑 24/7 Emergency Services</h3>
        <p>Immediate medical attention when you need it most</p>
        <div class="emergency-phone">
          <a href="tel:+256123456789">📞 +256 123 456 789</a>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta-section">
        <h2>Ready to Experience Quality Healthcare?</h2>
        <p>Book your appointment today and let us take care of your health</p>
        <a href="${resolveRouterPath('appointment')}">
          <button class="btn-hero">
            📅 Schedule Your Visit
          </button>
        </a>
      </section>
    `;
  }
}
