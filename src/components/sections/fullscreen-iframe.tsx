"use client";
import React from "react";
import { Maximize2, Minimize2 } from "lucide-react";

export const FullscreenIframe = ({ src, title }: { src: string; title: string }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [scale, setScale] = React.useState(1);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  React.useEffect(() => {
    if (isFullscreen) {
      setScale(1);
      return;
    }
    const updateScale = () => {
      if (!containerRef.current) return;
      const containerWidth = containerRef.current.clientWidth;
      const virtualWidth = 1024;
      setScale(containerWidth / virtualWidth);
    };

    updateScale();
    // Delay to let the parent dialog animate and render its final width
    const timer = setTimeout(updateScale, 150);

    window.addEventListener("resize", updateScale);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateScale);
    };
  }, [isFullscreen]);

  const virtualWidth = 1024;
  const virtualHeight = 576;

  return (
    <div 
      ref={containerRef}
      className={`relative w-full rounded-xl overflow-hidden border border-border/50 dark:border-border/30 shadow-xl bg-black transition-all group mt-6 ${
        isFullscreen ? "h-screen w-screen rounded-none border-none" : ""
      }`}
      style={
        isFullscreen 
          ? {} 
          : { height: `${virtualHeight * scale}px` }
      }
    >
      <div
        style={
          isFullscreen
            ? { width: "100%", height: "100%" }
            : {
                width: `${virtualWidth}px`,
                height: `${virtualHeight}px`,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }
        }
        className="w-full h-full"
      >
        <iframe
          src={src}
          className="w-full h-full border-none"
          title={title}
          loading="lazy"
          allowFullScreen
        />
      </div>
      <button
        onClick={toggleFullscreen}
        className="absolute bottom-4 right-4 z-30 p-3 rounded-lg bg-black/70 hover:bg-black/90 text-white border border-white/20 transition-all shadow-md hover:scale-105 flex items-center justify-center gap-2"
        title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Preview"}
      >
        {isFullscreen ? (
          <>
            <Minimize2 className="w-4 h-4" />
            <span className="text-xs font-medium">Exit Fullscreen</span>
          </>
        ) : (
          <>
            <Maximize2 className="w-4 h-4" />
            <span className="text-xs font-medium">Click to Preview Full Screen</span>
          </>
        )}
      </button>
    </div>
  );
};
