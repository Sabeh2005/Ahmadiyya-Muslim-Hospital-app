import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../../router';

@customElement('app-about')
export class AppAbout extends LitElement {
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

    .about-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1000px;
      margin: 0 auto;
    }

    .about-section {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      margin-bottom: var(--spacing-2xl);
      box-shadow: var(--shadow-md);
    }

    .about-section h2 {
      color: var(--primary-700);
      font-family: var(--font-display);
      font-size: 32px;
      margin: 0 0 var(--spacing-lg);
    }

    @media (prefers-color-scheme: dark) {
      .about-section h2 {
        color: var(--primary-300);
      }
    }

    .about-section p {
      color: var(--gray-700);
      font-size: 16px;
      line-height: 1.8;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .about-section p {
        color: var(--gray-300);
      }
    }

    .mission-vision {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-2xl);
    }

    @media (max-width: 768px) {
      .mission-vision {
        grid-template-columns: 1fr;
      }
    }

    .mission-card, .vision-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-md);
      border-top: 4px solid var(--primary-color);
    }

    .vision-card {
      border-top-color: var(--accent-gold);
    }

    .mission-card h3, .vision-card h3 {
      color: var(--primary-700);
      font-size: 24px;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .mission-card h3, .vision-card h3 {
        color: var(--primary-300);
      }
    }

    .mission-card p, .vision-card p {
      color: var(--gray-700);
      font-size: 15px;
      line-height: 1.8;
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .mission-card p, .vision-card p {
        color: var(--gray-300);
      }
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg);
      margin-top: var(--spacing-xl);
    }

    .value-item {
      text-align: center;
      padding: var(--spacing-lg);
    }

    .value-icon {
      font-size: 48px;
      margin-bottom: var(--spacing-md);
    }

    .value-item h4 {
      color: var(--primary-700);
      font-size: 18px;
      margin: 0 0 var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .value-item h4 {
        color: var(--primary-300);
      }
    }

    .value-item p {
      color: var(--gray-600);
      font-size: 14px;
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .value-item p {
        color: var(--gray-400);
      }
    }

    .history-timeline {
      position: relative;
      padding-left: var(--spacing-2xl);
    }

    .history-timeline::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: var(--primary-300);
    }

    .timeline-item {
      position: relative;
      margin-bottom: var(--spacing-xl);
      padding-left: var(--spacing-xl);
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: -26px;
      top: 8px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: var(--primary-color);
      border: 3px solid white;
    }

    @media (prefers-color-scheme: dark) {
      .timeline-item::before {
        border-color: var(--gray-900);
      }
    }

    .timeline-year {
      color: var(--primary-600);
      font-weight: 700;
      font-size: 18px;
      margin: 0 0 var(--spacing-xs);
    }

    @media (prefers-color-scheme: dark) {
      .timeline-year {
        color: var(--primary-400);
      }
    }

    .timeline-text {
      color: var(--gray-700);
      font-size: 14px;
      line-height: 1.6;
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .timeline-text {
        color: var(--gray-300);
      }
    }

    .cta-section {
      background: var(--primary-50);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .cta-section {
        background: var(--gray-800);
      }
    }

    .cta-section h3 {
      color: var(--primary-700);
      font-size: 28px;
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
      margin: 0 var(--spacing-sm);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 32px;
      }

      .about-section h2 {
        font-size: 24px;
      }
    }
  `;

  render() {
    return html`
      <section class="page-header">
        <h1>About Our Hospital</h1>
        <p>Learn about our mission, values, and commitment to healthcare excellence</p>
      </section>

      <section class="about-container">
        <div class="mission-vision">
          <div class="mission-card">
            <h3>🎯 Our Mission</h3>
            <p>To provide compassionate, high-quality healthcare services to all members of the community, guided by Islamic principles of mercy, compassion, and service to humanity. We strive to promote wellness, prevent disease, and restore health through excellence in medical care, education, and research.</p>
          </div>
          <div class="vision-card">
            <h3>👁️ Our Vision</h3>
            <p>To be the leading healthcare institution in Eastern Uganda, recognized for medical excellence, patient-centered care, and Islamic values. We envision a community where quality healthcare is accessible to all, regardless of background or financial status.</p>
          </div>
        </div>

        <div class="about-section">
          <h2>🏥 Who We Are</h2>
          <p>Ahmadiyya Muslim Hospital Mbale is a faith-based healthcare institution established by the Ahmadiyya Muslim Community. Located in the heart of Mbale City in Eastern Uganda, we have been serving the community for over two decades with dedication and excellence.</p>
          <p>Our hospital provides comprehensive medical services ranging from primary care to specialized treatments. With state-of-the-art facilities, experienced medical professionals, and a commitment to continuous improvement, we ensure that every patient receives the best possible care.</p>
          <p>We welcome patients of all faiths and backgrounds, embodying the Islamic principle that service to humanity is service to God. Our diverse staff reflects the multicultural community we serve, creating an environment of mutual respect and understanding.</p>
        </div>

        <div class="about-section">
          <h2>💎 Our Core Values</h2>
          <div class="values-grid">
            <div class="value-item">
              <div class="value-icon">☪️</div>
              <h4>Islamic Ethics</h4>
              <p>Guided by Islamic principles of compassion, dignity, and service</p>
            </div>
            <div class="value-item">
              <div class="value-icon">💚</div>
              <h4>Compassion</h4>
              <p>Treating every patient with empathy and kindness</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🌟</div>
              <h4>Excellence</h4>
              <p>Striving for the highest standards in medical care</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🤝</div>
              <h4>Integrity</h4>
              <p>Upholding honesty and transparency in all we do</p>
            </div>
            <div class="value-item">
              <div class="value-icon">🌍</div>
              <h4>Inclusivity</h4>
              <p>Serving all people regardless of background or belief</p>
            </div>
            <div class="value-item">
              <div class="value-icon">📚</div>
              <h4>Education</h4>
              <p>Continuous learning and professional development</p>
            </div>
          </div>
        </div>

        <div class="about-section">
          <h2>📜 Our History</h2>
          <div class="history-timeline">
            <div class="timeline-item">
              <div class="timeline-year">2000</div>
              <p class="timeline-text">Ahmadiyya Muslim Hospital Mbale was established with a vision to provide quality healthcare to the people of Eastern Uganda.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2005</div>
              <p class="timeline-text">Expanded facilities to include specialized departments and modern diagnostic equipment.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2010</div>
              <p class="timeline-text">Launched community health outreach programs serving rural areas around Mbale.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2015</div>
              <p class="timeline-text">Achieved recognition as a center of excellence in regional healthcare delivery.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">2020</div>
              <p class="timeline-text">Introduced digital health records and telemedicine capabilities for better patient care.</p>
            </div>
            <div class="timeline-item">
              <div class="timeline-year">Present</div>
              <p class="timeline-text">Continuing to grow and serve with over 50 medical professionals and 15+ specialized departments.</p>
            </div>
          </div>
        </div>

        <div class="cta-section">
          <h3>Experience Our Care</h3>
          <p>Whether you need medical consultation, emergency care, or health screening, our team is ready to serve you with excellence and compassion.</p>
          <div>
            <a href="${resolveRouterPath('appointment')}">
              <button class="cta-button">📅 Book Appointment</button>
            </a>
            <a href="${resolveRouterPath('contact')}">
              <button class="cta-button">📞 Contact Us</button>
            </a>
          </div>
        </div>
      </section>
    `;
  }
}
