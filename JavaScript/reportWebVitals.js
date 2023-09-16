// src/reportWebVitals.js
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, delta, id }) {
  // You can replace this function with your own logic for reporting metrics
  console.log(`${name}: ${delta}ms`);
  // Send the metric data to an analytics service if desired
}

// Register each metric for reporting
getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getLCP(sendToAnalytics);
getFCP(sendToAnalytics);
getTTFB(sendToAnalytics);
