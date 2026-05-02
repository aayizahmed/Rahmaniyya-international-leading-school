"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";

/*
  VideoPreview — a full-width cinematic banner.
  ─────────────────────────────────────────────
  Usage options (in priority order):
  1. Set VIDEO_SRC to a local video file in /public  e.g. "/campus-reel.mp4"
  2. Set YOUTUBE_ID to a YouTube video ID           e.g. "dQw4w9WgXcQ"
  3. Falls back to a photo background if neither is set.

  ▸ Change these two constants to configure the section:
*/
const VIDEO_SRC: string | null = null;         // e.g. "/campus-reel.mp4"
const YOUTUBE_ID: string | null = null;        // e.g. "your-youtube-id"
const FALLBACK_IMAGE = "/images/campus.jpg";   // used when no video is provided

export default function VideoPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  // Auto-play muted local video when it enters viewport
  useEffect(() => {
    if (!VIDEO_SRC || !videoRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play();
          setPlaying(true);
        } else {
          videoRef.current?.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-black">

      {/* ── Background layer ─────────────────────────── */}

      {/* Option A: Local video */}
      {VIDEO_SRC && (
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Option B: YouTube embed (autoplay, muted, loop) */}
      {!VIDEO_SRC && YOUTUBE_ID && (
        <iframe
          className="absolute inset-0 w-full h-full pointer-events-none scale-[1.15]"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`}
          allow="autoplay; fullscreen"
          allowFullScreen
          title="RILS Campus Video"
        />
      )}

      {/* Option C: Fallback static image */}
      {!VIDEO_SRC && !YOUTUBE_ID && (
        <img
          src={FALLBACK_IMAGE}
          alt="RILS Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ── Dark overlay ─────────────────────────────── */}
      <div className="absolute inset-0 bg-black/55" />

      {/* ── Centered text overlay ────────────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-10 bg-gold/70" />
            <span className="text-gold text-xs font-bold uppercase tracking-[0.35em]">
              Rahmaniyya International Leading School
            </span>
            <div className="h-[1px] w-10 bg-gold/70" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl mx-auto">
            Excellence in <br />
            <span className="italic font-light text-white/90">Residential Education</span>
          </h2>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 text-white/70 font-sans text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Where knowledge, discipline, and character are shaped together — every single day.
          </motion.p>
        </motion.div>
      </div>

      {/* ── Mute / unmute toggle (only for local video) ─ */}
      {VIDEO_SRC && (
        <button
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 right-6 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all z-10"
        >
          {muted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </button>
      )}


    </section>
  );
}
