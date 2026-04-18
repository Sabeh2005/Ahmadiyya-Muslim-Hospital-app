import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('app-appointment')
export class AppAppointment extends LitElement {
  @state() private formData = {
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  };

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

    .appointment-container {
      padding: var(--spacing-3xl) var(--spacing-lg);
      max-width: 800px;
      margin: 0 auto;
    }

    .form-card {
      background: var(--gradient-card);
      border-radius: var(--radius-xl);
      padding: var(--spacing-2xl);
      box-shadow: var(--shadow-lg);
    }

    .form-group {
      margin-bottom: var(--spacing-lg);
    }

    .form-group label {
      display: block;
      color: var(--gray-700);
      font-weight: 600;
      margin-bottom: var(--spacing-sm);
      font-size: 14px;
    }

    @media (prefers-color-scheme: dark) {
      .form-group label {
        color: var(--gray-300);
      }
    }

    .form-group input,
    .form-group select,
    .form-group textarea {
      width: 100%;
      padding: var(--spacing-md);
      border: 2px solid var(--gray-200);
      border-radius: var(--radius-md);
      font-family: var(--font-family);
      font-size: 14px;
      transition: all var(--transition);
      background: white;
    }

    @media (prefers-color-scheme: dark) {
      .form-group input,
      .form-group select,
      .form-group textarea {
        background: var(--gray-800);
        border-color: var(--gray-700);
        color: var(--gray-200);
      }
    }

    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(13, 148, 136, 0.1);
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--spacing-lg);
    }

    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }

    .submit-btn {
      width: 100%;
      background: var(--gradient-primary);
      color: white;
      border: none;
      padding: var(--spacing-lg);
      border-radius: var(--radius-lg);
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all var(--transition);
      margin-top: var(--spacing-lg);
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    .info-box {
      background: var(--primary-50);
      border-left: 4px solid var(--primary-color);
      padding: var(--spacing-lg);
      border-radius: var(--radius-md);
      margin-bottom: var(--spacing-xl);
    }

    @media (prefers-color-scheme: dark) {
      .info-box {
        background: var(--gray-800);
      }
    }

    .info-box h4 {
      color: var(--primary-700);
      margin: 0 0 var(--spacing-sm);
    }

    @media (prefers-color-scheme: dark) {
      .info-box h4 {
        color: var(--primary-300);
      }
    }

    .info-box p {
      color: var(--gray-600);
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
    }

    @media (prefers-color-scheme: dark) {
      .info-box p {
        color: var(--gray-400);
      }
    }

    .success-message {
      background: var(--success-light);
      border-left: 4px solid var(--success);
      padding: var(--spacing-xl);
      border-radius: var(--radius-md);
      text-align: center;
    }

    @media (prefers-color-scheme: dark) {
      .success-message {
        background: var(--gray-800);
      }
    }

    .success-message h3 {
      color: var(--success);
      margin: 0 0 var(--spacing-md);
    }

    .success-message p {
      color: var(--gray-700);
      margin: 0;
    }

    @media (prefers-color-scheme: dark) {
      .success-message p {
        color: var(--gray-300);
      }
    }
  `;

  private isSubmitted = false;

  private handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    this.formData = {
      ...this.formData,
      [target.name]: target.value
    };
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    console.log('Form submitted:', this.formData);
    this.isSubmitted = true;
  }

  private resetForm() {
    this.isSubmitted = false;
    this.formData = {
      name: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    };
  }

  render() {
    if (this.isSubmitted) {
      return html`
        <section class="page-header">
          <h1>Appointment Booked!</h1>
          <p>Thank you for choosing Ahmadiyya Muslim Hospital</p>
        </section>

        <section class="appointment-container">
          <div class="success-message">
            <h3>✅ Appointment Confirmed</h3>
            <p>We have received your appointment request. Our team will contact you shortly to confirm your appointment details.</p>
            <button class="submit-btn" style="margin-top: 20px;" @click="${this.resetForm}">Book Another Appointment</button>
          </div>
        </section>
      `;
    }

    return html`
      <section class="page-header">
        <h1>Book an Appointment</h1>
        <p>Schedule your visit with our medical experts</p>
      </section>

      <section class="appointment-container">
        <div class="info-box">
          <h4>📋 Appointment Information</h4>
          <p>Fill out the form below and our team will confirm your appointment within 24 hours. For emergencies, please call our emergency line directly.</p>
        </div>

        <div class="form-card">
          <form @submit="${this.handleSubmit}">
            <div class="form-row">
              <div class="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value="${this.formData.name}"
                  @input="${this.handleChange}"
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div class="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value="${this.formData.email}"
                  @input="${this.handleChange}"
                  required
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value="${this.formData.phone}"
                  @input="${this.handleChange}"
                  required
                  placeholder="+256 XXX XXX XXX"
                />
              </div>
              <div class="form-group">
                <label>Department *</label>
                <select
                  name="department"
                  value="${this.formData.department}"
                  @input="${this.handleChange}"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="obgyn">Obstetrics & Gynecology</option>
                  <option value="ophthalmology">Ophthalmology</option>
                  <option value="dental">Dental Care</option>
                  <option value="general">General Medicine</option>
                </select>
              </div>
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>Preferred Date *</label>
                <input
                  type="date"
                  name="date"
                  value="${this.formData.date}"
                  @input="${this.handleChange}"
                  required
                />
              </div>
              <div class="form-group">
                <label>Preferred Time *</label>
                <select
                  name="time"
                  value="${this.formData.time}"
                  @input="${this.handleChange}"
                  required
                >
                  <option value="">Select Time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label>Additional Message</label>
              <textarea
                name="message"
                value="${this.formData.message}"
                @input="${this.handleChange}"
                placeholder="Describe your symptoms or reason for visit (optional)"
              ></textarea>
            </div>

            <button type="submit" class="submit-btn">
              📅 Confirm Appointment
            </button>
          </form>
        </div>
      </section>
    `;
  }
}
