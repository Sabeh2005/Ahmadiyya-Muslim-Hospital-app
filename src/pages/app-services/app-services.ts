import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../../router';

@customElement('app-services')
export class AppServices extends LitElement {
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

    .services-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .service-category {
      margin-bottom: var(--spacing-3xl);
    }

    .category-title {
      color: var(--primary-700);
      font-size: 28px;
      font-family: var(--font-display);
      margin: 0 0 var(--spacing-xl);
      padding-bottom: var(--spacing-md);
      border-bottom: 3px solid var(--primary-300);
    }

    @media (prefers-color-scheme: dark) {
      .category-title {
        color: var(--primary-300);
        border-bottom-color: var(--primary-700);
      }
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
    }

    .service-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-md);
      transition: all var(--transition);
      border: 2px solid transparent;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-300);
    }

    .service-icon {
      font-size: 48px;
      margin-bottom: var(--spacing-md);
    }

    .service-card h3 {
      color: var(--primary-700);
      font-size: 20px;
      margin: 0 0 var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .service-card h3 {
        color: var(--primary-300);
      }
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

    .service-features {
      list-style: none;
      padding: 0;
      margin: var(--spacing-md) 0 0;
    }

    .service-features li {
      padding: var(--spacing-xs) 0;
      color: var(--gray-700);
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .service-features li {
        color: var(--gray-300);
      }
    }

    .service-features li::before {
      content: '✓';
      color: var(--success);
      font-weight: bold;
    }

    .cta-section {
      background: var(--primary-50);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      text-align: center;
      margin-top: var(--spacing-2xl);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section {
        background: var(--gray-800);
      }
    }

    .cta-section h3 {
      color: var(--primary-700);
      font-size: 24px;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section h3 {
        color: var(--primary-300);
      }
    }

    .cta-section p {
      color: var(--gray-600);
      margin: 0 0 var(--spacing-lg);
    }

    @media (prefers-color-scheme: dark) {
      .cta-section p {
        color: var(--gray-400);
      }
    }

    .cta-button {
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: var(--spacing-md) var(--spacing-2xl);
      border-radius: var(--radius-full);
      font-weight: 600;
      font-size: 16px;
      cursor: pointer;
      transition: all var(--transition);
      box-shadow: var(--shadow-md);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 32px;
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <section class="page-header">
        <h1>Our Medical Services</h1>
        <p>Comprehensive healthcare solutions for you and your family</p>
      </section>

      <section class="services-container">
        <div class="service-category">
          <h2 class="category-title">🏥 Diagnostic Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🔬</div>
              <h3>Laboratory Services</h3>
              <p>Full range of diagnostic tests with state-of-the-art equipment.</p>
              <ul class="service-features">
                <li>Blood tests</li>
                <li>Urine analysis</li>
                <li>Pathology</li>
                <li>Microbiology</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">📊</div>
              <h3>Radiology & Imaging</h3>
              <p>Advanced imaging services for accurate diagnosis.</p>
              <ul class="service-features">
                <li>X-Ray</li>
                <li>Ultrasound</li>
                <li>CT Scan</li>
                <li>MRI</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">❤️</div>
              <h3>Cardiac Diagnostics</h3>
              <p>Comprehensive heart testing and monitoring.</p>
              <ul class="service-features">
                <li>ECG</li>
                <li>Echocardiogram</li>
                <li>Stress tests</li>
                <li>Holter monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-category">
          <h2 class="category-title">💊 Treatment Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🏥</div>
              <h3>Inpatient Care</h3>
              <p>Comfortable rooms with 24/7 nursing care.</p>
              <ul class="service-features">
                <li>Private rooms</li>
                <li>General wards</li>
                <li>ICU facilities</li>
                <li>Post-surgery care</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">🩺</div>
              <h3>Outpatient Services</h3>
              <p>Walk-in consultations with specialist doctors.</p>
              <ul class="service-features">
                <li>General consultations</li>
                <li>Specialist clinics</li>
                <li>Follow-up visits</li>
                <li>Health screenings</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">🔪</div>
              <h3>Surgical Services</h3>
              <p>Modern operating theaters with expert surgeons.</p>
              <ul class="service-features">
                <li>General surgery</li>
                <li>Minimally invasive</li>
                <li>Orthopedic surgery</li>
                <li>Cosmetic surgery</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="service-category">
          <h2 class="category-title">🌟 Specialized Services</h2>
          <div class="services-grid">
            <div class="service-card">
              <div class="service-icon">🤰</div>
              <h3>Maternity Care</h3>
              <p>Complete prenatal and postnatal care.</p>
              <ul class="service-features">
                <li>Antenatal checkups</li>
                <li>Normal delivery</li>
                <li>C-section</li>
                <li>Postnatal care</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">👶</div>
              <h3>Neonatal Care</h3>
              <p>Specialized care for newborns.</p>
              <ul class="service-features">
                <li>NICU facilities</li>
                <li>Newborn screening</li>
                <li>Vaccinations</li>
                <li>Lactation support</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">💆</div>
              <h3>Physiotherapy</h3>
              <p>Rehabilitation and physical therapy.</p>
              <ul class="service-features">
                <li>Post-surgery rehab</li>
                <li>Sports injuries</li>
                <li>Chronic pain</li>
                <li>Mobilization therapy</li>
              </ul>
            </div>
            <div class="service-card">
              <div class="service-icon">💊</div>
              <h3>Pharmacy</h3>
              <p>Fully stocked hospital pharmacy.</p>
              <ul class="service-features">
                <li>Prescription drugs</li>
                <li>OTC medications</li>
                <li>Medical supplies</li>
                <li>Drug counseling</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h3>Need More Information?</h3>
          <p>Contact us to learn more about our services or to schedule a consultation</p>
          <a href="${resolveRouterPath('contact')}">
            <button class="cta-button">📞 Contact Us</button>
          </a>
        </div>
      </section>
    `;
  }
}
