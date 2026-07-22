// If you need type declarations for react-dom/client, install @types/react-dom
// (or ensure your React/React-DOM types are present). The explicit module
// augmentation caused a TypeScript error and was removed.

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);