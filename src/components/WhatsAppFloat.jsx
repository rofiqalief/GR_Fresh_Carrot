"use client";

import { useRef, useState } from "react";

export default function WhatsAppFloat() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isSnapping, setIsSnapping] = useState(false);

  const dragRef = useRef(null);
  const draggedRef = useRef(false);

  const phone = "6287716704421";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${phone}?text=Halo%20GR%20Fresh%20Carrot,%20saya%20ingin%20menanyakan%20produk.`,
      "_blank"
    );
  };

  const getBounds = () => {
    const frameWidth = window.innerWidth;
    const buttonSize = 56;
    const padding = 20;

    const leftX = -(frameWidth - buttonSize - padding * 2);
    const rightX = 0;
    const topY = -(window.innerHeight - buttonSize - padding * 2);
    const bottomY = 0;

    return { leftX, rightX, topY, bottomY };
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsSnapping(false);
    e.currentTarget.setPointerCapture(e.pointerId);

    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      originalX: position.x,
      originalY: position.y,
    };

    draggedRef.current = false;
  };

  const handlePointerMove = (e) => {
    if (!dragRef.current) return;
    e.preventDefault();

    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      draggedRef.current = true;
    }

    let newX = dragRef.current.originalX + dx;
    let newY = dragRef.current.originalY + dy;

    const { leftX, rightX, topY, bottomY } = getBounds();

    newX = Math.max(leftX, Math.min(newX, rightX));
    newY = Math.max(topY, Math.min(newY, bottomY));

    setPosition({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!dragRef.current) return;
    const wasDragged = draggedRef.current;
    dragRef.current = null;

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (!wasDragged) {
      openWhatsApp();
      return;
    }

    const { leftX, rightX } = getBounds();
    const currentX = position.x;

    const distanceLeft = Math.abs(currentX - leftX);
    const distanceRight = Math.abs(currentX - rightX);
    const snapX = distanceLeft < distanceRight ? leftX : rightX;

    setIsSnapping(true);
    setPosition((current) => ({ x: snapX, y: current.y }));

    setTimeout(() => {
      setIsSnapping(false);
    }, 300);
  };

  return (
    <button
      type="button"
      aria-label="Chat WhatsApp"
      draggable={false}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className={`fixed z-[9999] w-14 h-14 rounded-full bg-[#25D366] shadow-2xl flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none ${
        isSnapping ? "transition-transform duration-300 ease-out" : ""
      }`}
      style={{
        right: "20px", // Mepet ke pojok kanan layar
        bottom: "20px",
        transform: `translate(${position.x}px, ${position.y}px)`,
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      <img
        src="/images/WhatsAppLogo.png"
        alt="WhatsApp"
        draggable={false}
        className="w-8 h-8 object-contain pointer-events-none"
      />
    </button>
  );
}