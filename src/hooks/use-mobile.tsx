import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    // Standardize to match exactly against your breakpoint
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // PERFORMANCE FIX: Check mql.matches instead of window.innerWidth
    // This ensures the hook ONLY updates when crossing the 768px line,
    // completely ignoring address bar resizing glitches while scrolling!
    const onChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}