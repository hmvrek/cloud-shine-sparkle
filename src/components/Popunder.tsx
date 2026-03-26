import { useEffect } from "react";

export function Popunder() {
  useEffect(() => {
    const existing = document.querySelector('script[src*="497d9b3c2ab2cf18721f5e947e7a649c"]');
    if (existing) return;

    const script = document.createElement("script");
    script.src = "https://pl28984284.profitablecpmratenetwork.com/49/7d/9b/497d9b3c2ab2cf18721f5e947e7a649c.js";
    document.body.appendChild(script);

    return () => {
      try { document.body.removeChild(script); } catch {}
    };
  }, []);

  return null;
}
