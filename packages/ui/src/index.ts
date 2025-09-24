// Shared UI components for Arka Inspection

export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';

// Placeholder component implementations
import React from 'react';

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <button>{children}</button>
);

const Input: React.FC<{ placeholder?: string }> = ({ placeholder }) => (
  <input placeholder={placeholder} />
);

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ border: '1px solid #ccc', padding: '16px' }}>{children}</div>
);

export default { Button, Input, Card };
