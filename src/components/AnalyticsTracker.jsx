import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

// Initialize GA once
const GA_MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
}

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with the current path
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything visually
};

export default AnalyticsTracker;
