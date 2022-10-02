import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
Sentry.init({
  dsn: "https://c1b7c10c133f45f6867d9e48b1b5279a@o1408070.ingest.sentry.io/6743473",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
