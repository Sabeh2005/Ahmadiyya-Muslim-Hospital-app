import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-contact')
export class AppContact extends LitElement {
  static styles = css`
    .page-header {
      background: var(--gradient-hero);
      padding: var(--spacing-3xl) var(--spacing-lg);
      text-align: center;
      color: white;
    }

    .page-header h1 {
      font-family: var(--font-display);
      font-size: 42px;
      margin: 0 0 var(--spacing-md);
    }

    .page-header p {
      font-size: 18px;
      opacity: 0.95;
      margin: 0;
    }

    .contact-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-2xl);
      margin-bottom: var(--spacing-3xl);
    }

    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    .contact-info {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
    }

    .contact-info h2 {
      color: var(--primary-700);
      font-family: var(--font-display);
      font-size: 28px;
      margin: 0 0 var(--spacing-xl);
    }

    @media (prefers-color-scheme: dark) {
      .contact-info h2 {
        color: var(--primary-300);
      }
    }

    .info-item {
      display: flex;
      gap: var(--spacing-lg);
      margin-bottom: var(--spacing-xl);
      padding: var(--spacing-lg);
      background: var(--primary-50);
      border-radius: var(--radius-md);
    }

    @media (prefers-color-scheme: dark) {
      .info-item {
        background: var(--gray-800);
      }
    }

    .info-icon {
      font-size: 32px;
      flex-shrink: 0;
    }

    .info-content h4 {
      color: var(--primary-700);
      margin: 0 0 var(--spacing-xs);
      font-size: 16px;
    }

    @media (prefers-color-scheme: dark) {
      .info-content h4 {
        color: var(--primary-300);
      }
    }

    .info-content p {
      color: var(--gray-700);
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .info-content p {
        color: var(--gray-300);
      }
    }

    .info-content a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: 600;
    }

    .info-content a:hover {
      text-decoration: underline;
    }

    .hours-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
    }

    .hours-card h2 {
      color: var(--primary-700);
      font-family: var(--font-display);
      font-size: 28px;
      margin: 0 0 var(--spacing-xl);
    }

    @media (prefers-color-scheme: dark) {
      .hours-card h2 {
        color: var(--primary-300);
      }
    }

    .hours-item {
      display: flex;
      justify-content: space-between;
      padding: var(--spacing-md) 0;
      border-bottom: 1px solid var(--gray-200);
    }

    @media (prefers-color-scheme: dark) {
      .hours-item {
        border-bottom-color: var(--gray-700);
      }
    }

    .hours-item:last-child {
      border-bottom: none;
    }

    .day {
      color: var(--gray-700);
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .day {
        color: var(--gray-300);
      }
    }

    .time {
      color: var(--primary-600);
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .time {
        color: var(--primary-400);
      }
    }

    .emergency-badge {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      padding: var(--spacing-xl);
      border-radius: var(--radius-lg);
      text-align: center;
      margin-top: var(--spacing-xl);
    }

    .emergency-badge h4 {
      margin: 0 0 var(--spacing-sm);
      font-size: 18px;
    }

    .emergency-badge p {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }

    .emergency-badge a {
      color: white;
      text-decoration: none;
    }

    .map-section {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
    }

    .map-section h2 {
      color: var(--primary-700);
      font-family: var(--font-display);
      font-size: 28px;
      margin: 0 0 var(--spacing-xl);
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .map-section h2 {
        color: var(--primary-300);
      }
    }

    .map-placeholder {
      background: var(--gray-100);
      border-radius: var(--radius-lg);
      padding: var(--spacing-3xl);
      text-align: center;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    @media (prefers-color-scheme: dark) {
      .map-placeholder {
        background: var(--gray-800);
      }
    }

    .map-placeholder .map-icon {
      font-size: 80px;
      margin-bottom: var(--spacing-lg);
    }

    .map-placeholder p {
      color: var(--gray-600);
      font-size: 16px;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .map-placeholder p {
        color: var(--gray-400);
      }
    }

    .directions-btn {
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: var(--spacing-md) var(--spacing-xl);
      border-radius: var(--radius-full);
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition);
      text-decoration: none;
      display: inline-block;
    }

    .directions-btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .social-section {
      text-align: center;
      padding: var(--spacing-2xl);
      background: var(--primary-50);
      border-radius: var(--radius-xl);
      margin-top: var(--spacing-2xl);
    }

    @media (prefers-color-scheme: dark) {
      .social-section {
        background: var(--gray-800);
      }
    }

    .social-section h3 {
      color: var(--primary-700);
      font-size: 24px;
      margin: 0 0 var(--spacing-lg);
    }

    @media (prefers-color-scheme: dark) {
      .social-section h3 {
        color: var(--primary-300);
      }
    }

    .social-links {
      display: flex;
      gap: var(--spacing-lg);
      justify-content: center;
      flex-wrap: wrap;
    }

    .social-link {
      background: white;
      padding: var(--spacing-md) var(--spacing-xl);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--gray-700);
      font-weight: 600;
      transition: all var(--transition);
      box-shadow: var(--shadow);
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .social-link {
        background: var(--gray-700);
        color: var(--gray-200);
      }
    }

    .social-link:hover {
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 32px;
      }
    }
  `;

  render() {
    return html`
      <section class="page-header">
        <h1>Contact Us</h1>
        <p>We're here to help - Get in touch with our team</p>
      </section>

      <section class="contact-container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>📞 Contact Information</h2>
            
            <div class="info-item">
              <div class="info-icon">📍</div>
              <div class="info-content">
                <h4>Address</h4>
                <p>Ahmadiyya Muslim Hospital<br>Mbale City, Eastern Uganda<br>Plot 123, Republic Road</p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📞</div>
              <div class="info-content">
                <h4>Phone Numbers</h4>
                <p>
                  Main: <a href="tel:+256123456789">+256 123 456 789</a><br>
                  Emergency: <a href="tel:+256987654321">+256 987 654 321</a>
                </p>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon">📧</div>
              <div class="info-content">
                <h4>Email</h4>
                <p>
                  General: <a href="mailto:info@ahmadiyyahospitalmbale.ug">info@ahmadiyyahospitalmbale.ug</a><br>
                  Appointments: <a href="mailto:appointments@ahmadiyyahospitalmbale.ug">appointments@ahmadiyyahospitalmbale.ug</a>
                </p>
              </div>
            </div>

            <div class="emergency-badge">
              <h4>🚨 24/7 Emergency Line</h4>
              <p><a href="tel:+256123456789">+256 123 456 789</a></p>
            </div>
          </div>

          <div class="hours-card">
            <h2>🕐 Operating Hours</h2>
            
            <div class="hours-item">
              <span class="day">Emergency Department</span>
              <span class="time">24/7</span>
            </div>
            <div class="hours-item">
              <span class="day">Monday - Friday</span>
              <span class="time">8:00 AM - 6:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="day">Saturday</span>
              <span class="time">9:00 AM - 4:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="day">Sunday</span>
              <span class="time">10:00 AM - 2:00 PM</span>
            </div>
            <div class="hours-item">
              <span class="day">Pharmacy</span>
              <span class="time">24/7</span>
            </div>
            <div class="hours-item">
              <span class="day">Laboratory</span>
              <span class="time">24/7</span>
            </div>

            <div class="emergency-badge">
              <h4>💡 Note</h4>
              <p>Emergency services are available 24 hours a day, 7 days a week</p>
            </div>
          </div>
        </div>

        <div class="map-section">
          <h2>📍 Find Us on Map</h2>
          <div class="map-placeholder">
            <div class="map-icon">🗺️</div>
            <p>Ahmadiyya Muslim Hospital Mbale</p>
            <p>Mbale City, Eastern Uganda</p>
            <a href="https://maps.google.com/?q=Mbale+Uganda+hospital" target="_blank" class="directions-btn">
              🧭 Get Directions
            </a>
          </div>
        </div>

        <div class="social-section">
          <h3>Follow Us on Social Media</h3>
          <div class="social-links">
            <a href="#" class="social-link">📘 Facebook</a>
            <a href="#" class="social-link">🐦 Twitter</a>
            <a href="#" class="social-link">📸 Instagram</a>
            <a href="#" class="social-link">📺 YouTube</a>
          </div>
        </div>
      </section>
    `;
  }
}
