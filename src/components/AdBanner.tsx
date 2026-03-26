import { useEffect, useRef } from "react";

interface AdBannerProps {
  type: "native" | "banner468";
  className?: string;
}

export function AdBanner({ type, className = "" }: AdBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current || !containerRef.current) return;
    loaded.current = true;

    if (type === "native") {
      const script = document.createElement("script");
      script.async = true;
      script.setAttribute("data-cfasync", "false");
      script.src = "https://pl28984285.profitablecpmratenetwork.com/d477bcc94fdf6df4a2c0d58b8f18ca56/invoke.js";
      containerRef.current.appendChild(script);
    }

    if (type === "banner468") {
      const win = window as any;
      win.atOptions = {
        key: "647549552edf378d8474c8271e3e5f13",
        format: "iframe",
        height: 60,
        width: 468,
        params: {},
      };
      const script = document.createElement("script");
      script.src = "https://www.highperformanceformat.com/647549552edf378d8474c8271e3e5f13/invoke.js";
      containerRef.current.appendChild(script);
    }
  }, [type]);

  if (type === "native") {
    return (
      <div className={`flex justify-center ${className}`}>
        <div ref={containerRef}>
          <div id="container-d477bcc94fdf6df4a2c0d58b8f18ca56"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex justify-center overflow-hidden ${className}`} ref={containerRef} />
  );
}
