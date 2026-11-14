"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function StickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleScrollToTop}
        variant="default"
        className="bg-white text-black shadow-lg cursor-pointer"
      >
        Move Top
      </Button>
    </div>
  );
}
