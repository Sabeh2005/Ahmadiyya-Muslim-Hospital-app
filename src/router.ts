// docs for router https://github.com/thepassle/app-tools/blob/master/router/README.md

import { html } from 'lit';

if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { Router } from '@thepassle/app-tools/router.js';
import { lazy } from '@thepassle/app-tools/router/plugins/lazy.js';

// @ts-ignore
import { title } from '@thepassle/app-tools/router/plugins/title.js';

import './pages/app-home.js';

const baseURL: string = (import.meta as any).env.BASE_URL;

export const router = new Router({
    routes: [
      {
        path: resolveRouterPath(),
        title: 'Home - Ahmadiyya Muslim Hospital Mbale',
        render: () => html`<app-home></app-home>`
      },
      {
        path: resolveRouterPath('departments'),
        title: 'Departments - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-departments/app-departments.js')),
        ],
        render: () => html`<app-departments></app-departments>`
      },
      {
        path: resolveRouterPath('doctors'),
        title: 'Our Doctors - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-doctors/app-doctors.js')),
        ],
        render: () => html`<app-doctors></app-doctors>`
      },
      {
        path: resolveRouterPath('appointment'),
        title: 'Book Appointment - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-appointment/app-appointment.js')),
        ],
        render: () => html`<app-appointment></app-appointment>`
      },
      {
        path: resolveRouterPath('emergency'),
        title: 'Emergency Services - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-emergency/app-emergency.js')),
        ],
        render: () => html`<app-emergency></app-emergency>`
      },
      {
        path: resolveRouterPath('services'),
        title: 'Our Services - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-services/app-services.js')),
        ],
        render: () => html`<app-services></app-services>`
      },
      {
        path: resolveRouterPath('contact'),
        title: 'Contact Us - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-contact/app-contact.js')),
        ],
        render: () => html`<app-contact></app-contact>`
      },
      {
        path: resolveRouterPath('about'),
        title: 'About Us - AMH Mbale',
        plugins: [
          lazy(() => import('./pages/app-about/app-about.js')),
        ],
        render: () => html`<app-about></app-about>`
      }
    ]
  });

  // This function will resolve a path with whatever Base URL was passed to the vite build process.
  // Use of this function throughout the starter is not required, but highly recommended, especially if you plan to use GitHub Pages to deploy.
  // If no arg is passed to this function, it will return the base URL.

  export function resolveRouterPath(unresolvedPath?: string) {
    var resolvedPath = baseURL;
    if(unresolvedPath) {
      resolvedPath = resolvedPath + unresolvedPath;
    }

    return resolvedPath;
  }
