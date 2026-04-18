import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-emergency')
export class AppEmergency extends LitElement {
  static styles = css`
    .emergency-hero {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: var(--spacing-3xl) var(--spacing-lg);
      text-align: center;
      color: white;
    }

    .emergency-hero h1 {
      font-family: var(--font-display);
      font-size: 48px;
      margin: 0 0 var(--spacing-md);
      animation: pulse 2s infinite;
    }

    .emergency-hero p {
      font-size: 20px;
      opacity: 0.95;
      margin: 0 0 var(--spacing-xl);
    }

    .emergency-numbers {
      display: flex;
      gap: var(--spacing-lg);
      justify-content: center;
      flex-wrap: wrap;
      margin-top: var(--spacing-xl);
    }

    .emergency-number {
      background: white;
      color: #dc2626;
      padding: var(--spacing-lg) var(--spacing-2xl);
      border-radius: var(--radius-xl);
      text-decoration: none;
      font-weight: 700;
      font-size: 24px;
      box-shadow: var(--shadow-xl);
      transition: all var(--transition);
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .emergency-number:hover {
      transform: scale(1.05);
      box-shadow: 0 0 40px rgba(255, 255, 255, 0.4);
    }

    .emergency-services {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-3xl);
    }

    .service-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-md);
      border-left: 4px solid var(--danger);
      transition: all var(--transition);
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-xl);
    }

    .service-icon {
      font-size: 48px;
      margin-bottom: var(--spacing-md);
    }

    .service-card h3 {
      color: var(--danger);
      font-size: 20px;
      margin: 0 0 var(--spacing-sm);
    }

    .service-card p {
      color: var(--gray-600);
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .service-card p {
        color: var(--gray-400);
      }
    }

    .emergency-info {
      background: var(--warning-light);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      margin-bottom: var(--spacing-2xl);
    }

    @media (prefers-color-scheme: dark) {
      .emergency-info {
        background: var(--gray-800);
      }
    }

    .emergency-info h3 {
      color: var(--warning);
      font-size: 24px;
      margin: 0 0 var(--spacing-md);
    }

    .emergency-info ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .emergency-info li {
      padding: var(--spacing-sm) 0;
      color: var(--gray-700);
      font-size: 15px;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .emergency-info li {
        color: var(--gray-300);
      }
    }

    .emergency-info li::before {
      content: '⚠️';
    }

    .ambulance-section {
      background: var(--primary-50);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .ambulance-section {
        background: var(--gray-800);
      }
    }

    .ambulance-section h3 {
      color: var(--primary-700);
      font-size: 28px;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .ambulance-section h3 {
        color: var(--primary-300);
      }
    }

    .ambulance-section p {
      color: var(--gray-600);
      font-size: 16px;
      margin: 0 0 var(--spacing-lg);
    }

    @media (prefers-color-scheme: dark) {
      .ambulance-section p {
        color: var(--gray-400);
      }
    }

    .cta-button {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      border: none;
      padding: var(--spacing-lg) var(--spacing-2xl);
      border-radius: var(--radius-full);
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: var(--shadow-lg);
      animation: emergencyPulse 2s infinite;
    }

    .cta-button:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .emergency-hero h1 {
        font-size: 36px;
      }

      .emergency-number {
        font-size: 20px;
        padding: var(--spacing-md) var(--spacing-xl);
      }
    }
  `;

  render() {
    return html`
      <section class="emergency-hero">
        <h1>🚨 Emergency Services</h1>
        <p>24/7 Emergency Medical Care - We're Here When You Need Us Most</p>
        <div class="emergency-numbers">
          <a href="tel:+256123456789" class="emergency-number">
            📞 +256 123 456 789
          </a>
          <a href="tel:+256987654321" class="emergency-number">
            📞 +256 987 654 321
          </a>
        </div>
      </section>

      <section class="emergency-services">
        <div class="emergency-info">
          <h3>⚠️ When to Use Emergency Services</h3>
          <ul>
            <li>Chest pain or difficulty breathing</li>
            <li>Severe bleeding or injuries</li>
            <li>Stroke symptoms (facial drooping, arm weakness, speech difficulties)</li>
            <li>Loss of consciousness or fainting</li>
            <li>Severe allergic reactions</li>
            <li>Major fractures or broken bones</li>
            <li>Poisoning or overdose</li>
          </ul>
        </div>

        <h2 class="section-title">Emergency Services Available</h2>
        <div class="services-grid">
          <div class="service-card">
            <div class="service-icon">🚑</div>
            <h3>Ambulance Service</h3>
            <p>24/7 ambulance dispatch with trained paramedics and life support equipment.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🫀</div>
            <h3>Trauma Care</h3>
            <p>Immediate treatment for serious injuries and accidents with specialized trauma team.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">💊</div>
            <h3>Critical Care Unit</h3>
            <p>Intensive care unit with advanced monitoring and life support systems.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🩺</div>
            <h3>Emergency Physicians</h3>
            <p>Experienced emergency doctors available round the clock for immediate care.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">🔬</div>
            <h3>Emergency Diagnostics</h3>
            <p>24/7 laboratory and imaging services for rapid diagnosis and treatment.</p>
          </div>
          <div class="service-card">
            <div class="service-icon">💉</div>
            <h3>Emergency Surgery</h3>
            <p>Operating theaters ready for emergency surgical interventions at any time.</p>
          </div>
        </div>

        <div class="ambulance-section">
          <h3>🚑 Need an Ambulance?</h3>
          <p>Call our emergency number now for immediate ambulance dispatch</p>
          <a href="tel:+256123456789">
            <button class="cta-button">Call Ambulance Now</button>
          </a>
        </div>
      </section>
    `;
  }
}
