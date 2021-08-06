import './index.css';

export function reportWebVitals(metric) {
  switch (metric.name) {
    case "FCP":
      // handle FCP results
      break;
    case "LCP":
      // handle LCP results
      break;
    case "CLS":
      // handle CLS results
      break;
    case "FID":
      // handle FID results
      break;
    case "TTFB":
      // handle TTFB results
      break;
    default:
      break;
  }
}

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}