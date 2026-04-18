import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import { resolveRouterPath, router } from '../router';

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property({ type: String }) title = 'Ahmadiyya Muslim Hospital Mbale';
  @property({ type: Boolean }) enableBack: boolean = false;
  @state() private isDrawerOpen = false;
  @state() private currentPath = window.location.pathname;

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--gradient-primary);
      color: white;
      padding: 0 var(--spacing-xl);
      height: var(--header-height);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      box-shadow: var(--header-shadow);
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .logo-icon {
      width: 45px;
      height: 45px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: var(--radius-lg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      backdrop-filter: blur(10px);
    }

    .logo-text h1 {
      margin: 0;
      font-size: 18px;
      font-weight: 700;
      font-family: var(--font-display);
      letter-spacing: 0.5px;
    }

    .logo-text p {
      margin: 0;
      font-size: 11px;
      opacity: 0.9;
      font-weight: 400;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .menu-btn {
      display: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      background: none;
      border: none;
      padding: var(--spacing-sm);
    }

    nav {
      display: flex;
      gap: var(--spacing-sm);
    }

    nav a {
      color: white;
      text-decoration: none;
      padding: var(--spacing-sm) var(--spacing-md);
      border-radius: var(--radius);
      font-weight: 500;
      font-size: 14px;
      transition: all var(--transition);
      position: relative;
    }

    nav a:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    nav a.active {
      background: rgba(255, 255, 255, 0.25);
    }

    .emergency-btn {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      padding: var(--spacing-sm) var(--spacing-lg);
      border-radius: var(--radius-lg);
      font-weight: 600;
      font-size: 13px;
      animation: emergencyPulse 2s infinite;
      display: flex;
      align-items: center;
      gap: var(--spacing-sm);
    }

    .emergency-btn:hover {
      background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%) !important;
    }

    @media (max-width: 1024px) {
      nav {
        display: none;
      }

      .menu-btn {
        display: block;
      }

      .logo-text h1 {
        font-size: 16px;
      }

      .logo-text p {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .logo-icon {
        width: 38px;
        height: 38px;
        font-size: 20px;
      }

      .logo-text h1 {
        font-size: 14px;
      }

      header {
        padding: 0 var(--spacing-md);
      }
    }

    /* Drawer Styles */
    .drawer-content {
      padding: var(--spacing-lg);
    }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm);
    }

    .drawer-nav a {
      color: var(--gray-800);
      text-decoration: none;
      padding: var(--spacing-md);
      border-radius: var(--radius-md);
      font-weight: 500;
      transition: all var(--transition);
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    .drawer-nav a:hover,
    .drawer-nav a.active {
      background: var(--primary-50);
      color: var(--primary-color);
    }

    .drawer-emergency {
      margin-top: var(--spacing-lg);
      padding: var(--spacing-md);
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      color: white;
      border-radius: var(--radius-lg);
      text-align: center;
      font-weight: 600;
      text-decoration: none;
      display: block;
    }

    @media (prefers-color-scheme: dark) {
      .drawer-nav a {
        color: var(--gray-200);
      }

      .drawer-nav a:hover,
      .drawer-nav a.active {
        background: var(--gray-800);
        color: var(--primary-light);
      }
    }
  `;

  private toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  private closeDrawer() {
    this.isDrawerOpen = false;
  }

  connectedCallback() {
    super.connectedCallback();
    router.addEventListener('route-changed', this.handleRouteChange);
  }

  disconnectedCallback() {
    router.removeEventListener('route-changed', this.handleRouteChange);
    super.disconnectedCallback();
  }

  private handleRouteChange = () => {
    this.currentPath = window.location.pathname;
  };

  private normalizePath(path: string): string {
    if (path.length > 1 && path.endsWith('/')) {
      return path.slice(0, -1);
    }
    return path;
  }

  private isActive(path?: string): boolean {
    const targetPath = this.normalizePath(resolveRouterPath(path));
    const activePath = this.normalizePath(this.currentPath);
    return targetPath === activePath;
  }

  render() {
    return html`
      <header>
        <div class="header-left">
          <button class="menu-btn" @click="${this.toggleDrawer}">
            <sl-icon name="list" library="default"></sl-icon>
          </button>
          <div class="logo-section">
            <div class="logo-icon">🏥</div>
            <div class="logo-text">
              <h1>AMH Mbale</h1>
              <p>Excellence in Healthcare</p>
            </div>
          </div>
        </div>

        <div class="header-right">
          <nav>
            <a href="${resolveRouterPath()}" class="${this.isActive() ? 'active' : ''}">Home</a>
            <a
              href="${resolveRouterPath('departments')}"
              class="${this.isActive('departments') ? 'active' : ''}"
              >Departments</a
            >
            <a href="${resolveRouterPath('doctors')}" class="${this.isActive('doctors') ? 'active' : ''}"
              >Doctors</a
            >
            <a
              href="${resolveRouterPath('services')}"
              class="${this.isActive('services') ? 'active' : ''}"
              >Services</a
            >
            <a href="${resolveRouterPath('contact')}" class="${this.isActive('contact') ? 'active' : ''}"
              >Contact</a
            >
          </nav>
          <a href="${resolveRouterPath('emergency')}" class="emergency-btn">
            <sl-icon name="telephone-fill" library="default"></sl-icon>
            Emergency
          </a>
        </div>
      </header>

      <sl-drawer
        label="Navigation Menu"
        .open="${this.isDrawerOpen}"
        @sl-hide="${() => this.closeDrawer()}"
        placement="start"
      >
        <div class="drawer-content">
          <div class="drawer-nav">
            <a
              href="${resolveRouterPath()}"
              class="${this.isActive() ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              🏠 Home
            </a>
            <a
              href="${resolveRouterPath('departments')}"
              class="${this.isActive('departments') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              🏢 Departments
            </a>
            <a
              href="${resolveRouterPath('doctors')}"
              class="${this.isActive('doctors') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              👨‍⚕️ Doctors
            </a>
            <a
              href="${resolveRouterPath('appointment')}"
              class="${this.isActive('appointment') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              📅 Book Appointment
            </a>
            <a
              href="${resolveRouterPath('services')}"
              class="${this.isActive('services') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              ⚕️ Services
            </a>
            <a
              href="${resolveRouterPath('emergency')}"
              class="${this.isActive('emergency') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              🚨 Emergency
            </a>
            <a
              href="${resolveRouterPath('about')}"
              class="${this.isActive('about') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              ℹ️ About Us
            </a>
            <a
              href="${resolveRouterPath('contact')}"
              class="${this.isActive('contact') ? 'active' : ''}"
              @click="${this.closeDrawer}"
            >
              📞 Contact
            </a>
          </div>
          <a href="${resolveRouterPath('emergency')}" class="drawer-emergency">
            🚑 Emergency: Call Now
          </a>
        </div>
      </sl-drawer>
    `;
  }
}
