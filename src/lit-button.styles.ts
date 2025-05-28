import { css } from 'lit';

export const buttonStyles = css`
  :host {
    display: inline-block;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    border-radius: 0.375rem;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: var(--lit-button-bg, #3b82f6);
    color: var(--lit-button-color, white);
  }

  button:hover {
    background-color: var(--lit-button-hover-bg, #2563eb);
  }

  button:active {
    transform: translateY(1px);
  }

  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button[variant="secondary"] {
    background-color: var(--lit-button-secondary-bg, #e5e7eb);
    color: var(--lit-button-secondary-color, #374151);
  }

  button[variant="secondary"]:hover {
    background-color: var(--lit-button-secondary-hover-bg, #d1d5db);
  }

  button[size="small"] {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  button[size="large"] {
    padding: 0.75rem 1.5rem;
    font-size: 1.125rem;
  }
`;