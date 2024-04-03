"use client";
import { usePathname } from "next/navigation";

export default function VideoBackground() {
  const path = usePathname();
  return (
    <div style={{ opacity: path === "/" ? "1" : "0" }}>
      <div className="overlay"></div>
      <video
        src={"/bgvideo.mp4"}
        height={200}
        autoPlay
        muted
        loop
        className="w-screen overflow-clip object-cover h-screen"
      />
    </div>
  );
}
