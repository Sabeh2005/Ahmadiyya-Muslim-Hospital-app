import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('app-departments')
export class AppDepartments extends LitElement {
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

    .departments-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .dept-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--spacing-xl);
    }

    .dept-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-xl);
      box-shadow: var(--shadow-md);
      transition: all var(--transition);
      border: 2px solid transparent;
    }

    .dept-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-300);
    }

    .dept-icon {
      font-size: 56px;
      margin-bottom: var(--spacing-md);
    }

    .dept-card h3 {
      color: var(--primary-700);
      font-size: 22px;
      margin: 0 0 var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .dept-card h3 {
        color: var(--primary-300);
      }
    }

    .dept-card p {
      color: var(--gray-600);
      font-size: 14px;
      line-height: 1.6;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .dept-card p {
        color: var(--gray-400);
      }
    }

    .dept-features {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .dept-features li {
      padding: var(--spacing-sm) 0;
      color: var(--gray-700);
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .dept-features li {
        color: var(--gray-300);
      }
    }

    .dept-features li::before {
      content: '✓';
      color: var(--success);
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 32px;
      }

      .dept-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private departments = [
    {
      icon: '🫀',
      name: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic and treatment facilities.',
      features: ['ECG & Echo', 'Angiography', 'Cardiac Rehab', 'Preventive Care']
    },
    {
      icon: '🧠',
      name: 'Neurology',
      description: 'Expert care for brain, spine, and nervous system disorders.',
      features: ['Brain Imaging', 'EEG Testing', 'Stroke Care', 'Epilepsy Treatment']
    },
    {
      icon: '🦴',
      name: 'Orthopedics',
      description: 'Complete bone and joint care from fractures to joint replacement.',
      features: ['Fracture Treatment', 'Joint Replacement', 'Sports Medicine', 'Physiotherapy']
    },
    {
      icon: '👶',
      name: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      features: ['Well-baby Checks', 'Vaccinations', 'Growth Monitoring', 'Child Nutrition']
    },
    {
      icon: '🤰',
      name: 'Obstetrics & Gynecology',
      description: 'Complete women\'s health and maternity care services.',
      features: ['Prenatal Care', 'Delivery Services', 'Gynecological Exams', 'Family Planning']
    },
    {
      icon: '👁️',
      name: 'Ophthalmology',
      description: 'Comprehensive eye care and vision services.',
      features: ['Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment', 'LASIK']
    },
    {
      icon: '🦷',
      name: 'Dental Care',
      description: 'Complete dental services from routine care to surgery.',
      features: ['Cleanings', 'Fillings', 'Root Canals', 'Cosmetic Dentistry']
    },
    {
      icon: '🩺',
      name: 'General Medicine',
      description: 'Primary healthcare for common medical conditions.',
      features: ['Health Screenings', 'Chronic Disease Management', 'Infections', 'Preventive Care']
    },
    {
      icon: '🚨',
      name: 'Emergency Medicine',
      description: '24/7 emergency care for critical and urgent conditions.',
      features: ['Trauma Care', 'Critical Care', 'Ambulance Service', 'Rapid Response']
    }
  ];

  render() {
    return html`
      <section class="page-header">
        <h1>Our Departments</h1>
        <p>Specialized medical departments serving your healthcare needs</p>
      </section>

      <section class="departments-container">
        <div class="dept-grid">
          ${this.departments.map(dept => html`
            <div class="dept-card">
              <div class="dept-icon">${dept.icon}</div>
              <h3>${dept.name}</h3>
              <p>${dept.description}</p>
              <ul class="dept-features">
                ${dept.features.map(f => html`<li>${f}</li>`)}
              </ul>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}
