import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';

import './pages/app-home';
import './components/header';
import './styles/global.css';
import { router } from './router';

@customElement('app-index')
export class AppIndex extends LitElement {
  private deferredInstallPrompt: BeforeInstallPromptEvent | null = null;
  private showInstallDialog = false;
  private installHelpMessage = '';

  static styles = css`
    main {
      padding: 0;
      min-height: calc(100vh - var(--header-height));
    }

    .page-wrapper {
      animation: fadeIn 0.5s ease-out;
    }

    .install-dialog-content {
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .install-dialog-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.75rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt as EventListener);
    window.addEventListener('appinstalled', this.handleAppInstalled);
  }

  disconnectedCallback() {
    window.removeEventListener('beforeinstallprompt', this.handleBeforeInstallPrompt as EventListener);
    window.removeEventListener('appinstalled', this.handleAppInstalled);
    super.disconnectedCallback();
  }

  firstUpdated() {
    router.addEventListener('route-changed', () => {
      if ("startViewTransition" in document) {
        (document as any).startViewTransition(() => this.requestUpdate());
      }
      else {
        this.requestUpdate();
      }
    });

    if (!this.isRunningAsInstalledApp()) {
      this.showInstallDialog = true;
    }
  }

  private handleBeforeInstallPrompt = (event: BeforeInstallPromptEvent) => {
    event.preventDefault();
    this.deferredInstallPrompt = event;
    this.requestUpdate();
  };

  private handleAppInstalled = () => {
    this.deferredInstallPrompt = null;
    this.showInstallDialog = false;
    this.requestUpdate();
  };

  private isRunningAsInstalledApp(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches || (window.navigator as NavigatorWithStandalone).standalone === true;
  }

  private closeInstallDialog = () => {
    this.showInstallDialog = false;
  };

  private promptInstall = async () => {
    if (!this.deferredInstallPrompt) {
      this.installHelpMessage = 'Your browser does not expose an install popup right now. Use the browser menu and choose "Install app" or "Add to Home screen".';
      this.requestUpdate();
      return;
    }

    this.installHelpMessage = '';
    this.deferredInstallPrompt.prompt();
    const choice = await this.deferredInstallPrompt.userChoice;
    if (choice.outcome === 'accepted') {
      this.showInstallDialog = false;
    }
    this.deferredInstallPrompt = null;
    this.requestUpdate();
  };

  render() {
    return html`
      <app-header></app-header>
      <main>
        <div class="page-wrapper">
          ${router.render()}
        </div>
      </main>
      <sl-dialog label="Install this app" ?open=${this.showInstallDialog} @sl-after-hide=${this.closeInstallDialog}>
        <div class="install-dialog-content">
          Install Ahmadiyya Hospital app for faster access and an app-like experience.
        </div>
        ${this.installHelpMessage
          ? html`<p class="install-dialog-content">${this.installHelpMessage}</p>`
          : null}
        <div slot="footer" class="install-dialog-actions">
          <sl-button variant="default" @click=${this.closeInstallDialog}>Not now</sl-button>
          <sl-button variant="primary" @click=${this.promptInstall}>Install app</sl-button>
        </div>
      </sl-dialog>
    `;
  }
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}
