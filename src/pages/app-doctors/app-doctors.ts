import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { resolveRouterPath } from '../../router';

@customElement('app-doctors')
export class AppDoctors extends LitElement {
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

    .doctors-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 1200px;
      margin: 0 auto;
    }

    .doctors-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--spacing-xl);
    }

    .doctor-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all var(--transition);
      border: 2px solid transparent;
    }

    .doctor-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
      border-color: var(--primary-300);
    }

    .doctor-avatar {
      width: 100%;
      height: 200px;
      background: var(--gradient-primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 100px;
    }

    .doctor-info {
      padding: var(--spacing-xl);
    }

    .doctor-info h3 {
      color: var(--primary-800);
      font-size: 22px;
      margin: 0 0 var(--spacing-xs);
    }

    @media (prefers-color-scheme: dark) {
      .doctor-info h3 {
        color: var(--primary-200);
      }
    }

    .doctor-specialty {
      color: var(--primary-600);
      font-weight: 600;
      font-size: 14px;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .doctor-specialty {
        color: var(--primary-400);
      }
    }

    .doctor-bio {
      color: var(--gray-600);
      font-size: 14px;
      line-height: 1.6;
      margin: 0 0 var(--spacing-md);
    }

    @media (prefers-color-scheme: dark) {
      .doctor-bio {
        color: var(--gray-400);
      }
    }

    .doctor-details {
      display: flex;
      justify-content: space-between;
      padding-top: var(--spacing-md);
      border-top: 1px solid var(--gray-200);
    }

    @media (prefers-color-scheme: dark) {
      .doctor-details {
        border-top-color: var(--gray-700);
      }
    }

    .detail-item {
      text-align: center;
    }

    .detail-label {
      font-size: 12px;
      color: var(--gray-500);
      display: block;
    }

    .detail-value {
      font-size: 14px;
      color: var(--gray-800);
      font-weight: 600;
    }

    @media (prefers-color-scheme: dark) {
      .detail-label {
        color: var(--gray-400);
      }
      .detail-value {
        color: var(--gray-200);
      }
    }

    .book-btn {
      width: 100%;
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: var(--spacing-md);
      border-radius: var(--radius-md);
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition);
      margin-top: var(--spacing-md);
    }

    .book-btn:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .page-header h1 {
        font-size: 32px;
      }

      .doctors-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  private doctors = [
    {
      avatar: '👨‍⚕️',
      name: 'Dr. Ahmad Hassan',
      specialty: 'Cardiologist',
      bio: '20+ years of experience in cardiovascular medicine and interventional cardiology.',
      experience: '20+ years',
      patients: '5000+',
      rating: '4.9'
    },
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Fatima Ali',
      specialty: 'Pediatrician',
      bio: 'Specialized in child healthcare with a compassionate approach to pediatric medicine.',
      experience: '15+ years',
      patients: '8000+',
      rating: '4.8'
    },
    {
      avatar: '👨‍⚕️',
      name: 'Dr. Mohammed Yusuf',
      specialty: 'Orthopedic Surgeon',
      bio: 'Expert in joint replacement surgery and sports medicine with international training.',
      experience: '18+ years',
      patients: '4500+',
      rating: '4.9'
    },
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Aisha Rahman',
      specialty: 'Obstetrician & Gynecologist',
      bio: 'Dedicated to providing comprehensive women\'s healthcare and maternity services.',
      experience: '12+ years',
      patients: '6000+',
      rating: '4.9'
    },
    {
      avatar: '👨‍⚕️',
      name: 'Dr. Omar Said',
      specialty: 'Neurologist',
      bio: 'Specializes in brain and nervous system disorders with advanced diagnostic expertise.',
      experience: '16+ years',
      patients: '3500+',
      rating: '4.8'
    },
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Maryam Khalid',
      specialty: 'Ophthalmologist',
      bio: 'Expert in eye care and vision correction with advanced surgical skills.',
      experience: '10+ years',
      patients: '7000+',
      rating: '4.9'
    },
    {
      avatar: '👨‍⚕️',
      name: 'Dr. Ibrahim Bakr',
      specialty: 'General Physician',
      bio: 'Primary care specialist with extensive experience in preventive medicine.',
      experience: '25+ years',
      patients: '12000+',
      rating: '4.9'
    },
    {
      avatar: '👩‍⚕️',
      name: 'Dr. Zainab Hassan',
      specialty: 'Dentist',
      bio: 'Providing excellent dental care with focus on patient comfort and aesthetics.',
      experience: '8+ years',
      patients: '4000+',
      rating: '4.8'
    }
  ];

  render() {
    return html`
      <section class="page-header">
        <h1>Our Medical Team</h1>
        <p>Expert doctors committed to your health and wellbeing</p>
      </section>

      <section class="doctors-container">
        <div class="doctors-grid">
          ${this.doctors.map(doctor => html`
            <div class="doctor-card">
              <div class="doctor-avatar">${doctor.avatar}</div>
              <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p class="doctor-specialty">${doctor.specialty}</p>
                <p class="doctor-bio">${doctor.bio}</p>
                <div class="doctor-details">
                  <div class="detail-item">
                    <span class="detail-label">Experience</span>
                    <span class="detail-value">${doctor.experience}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Patients</span>
                    <span class="detail-value">${doctor.patients}</span>
                  </div>
                  <div class="detail-item">
                    <span class="detail-label">Rating</span>
                    <span class="detail-value">⭐ ${doctor.rating}</span>
                  </div>
                </div>
                <a href="${resolveRouterPath('appointment')}">
                  <button class="book-btn">Book Appointment</button>
                </a>
              </div>
            </div>
          `)}
        </div>
      </section>
    `;
  }
}
