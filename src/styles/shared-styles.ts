import { css } from 'lit';

// Shared component styles for Ahmadiyya Hospital PWA
export const sharedStyles = css`
  main {
    margin-top: var(--header-height);
    min-height: calc(100vh - var(--header-height));
    padding: var(--spacing-xl) 0;
  }

  .page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
  }

  @media (min-width: 1000px) {
    .card-content {
      width: 100%;
    }
  }
`;
