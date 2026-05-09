"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import NewsPage2 from "./NewsPage2";

/* ── helpers ── */
const Divider = () => (
  <div className="flex items-center gap-2 my-1">
    <div className="flex-1 h-[2px] bg-ink" />
    <div className="w-1.5 h-1.5 rotate-45 bg-ink flex-shrink-0" />
    <div className="flex-1 h-[2px] bg-ink" />
  </div>
);

const ThinDivider = () => <div className="w-full h-[1px] bg-ink/20 my-4" />;

/* ── drop-cap article lead paragraph ── */
function Lead({ children }: { children: string }) {
  const [first, ...rest] = children;
  return (
    <p className="text-justify text-[15px] leading-[1.75] text-ink/90 font-serif mt-3">
      <span className="float-left text-[4.5rem] leading-[0.75] font-bold text-ink mr-2 mt-1 font-newspaper">
        {first}
      </span>
      {rest.join("")}
    </p>
  );
}

function Body({ children }: { children: string }) {
  return (
    <p className="text-justify text-[14px] leading-[1.8] text-ink/80 font-serif mt-3">
      {children}
    </p>
  );
}

function Byline({ author, date }: { author: string; date: string }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 font-sans mt-2 mb-1">
      By <span className="font-bold text-ink/70">{author}</span> · {date}
    </p>
  );
}

function PullQuote({ children }: { children: string }) {
  return (
    <blockquote className="border-l-4 border-r-4 border-ink/30 px-6 py-3 my-5 text-center">
      <p className="font-newspaper text-xl md:text-2xl text-ink leading-snug italic">
        "{children}"
      </p>
    </blockquote>
  );
}

function PhotoCaption({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-5">
      <div className="relative w-full aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={75}
          className="object-cover grayscale-[20%] contrast-[1.05]"
        />
      </div>
      <div className="h-[1px] bg-ink/30 mt-1 mb-1" />
      <figcaption className="text-[10px] text-ink/60 font-sans uppercase tracking-wider leading-snug">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function NewsPage() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });

  const [page, setPage] = useState(0);
  const [dir, setDir] = useState(1);
  const dragStart = useRef<number | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("page") === "2") setPage(1);
  }, []);

  const goTo = (next: number) => {
    setDir(next > page ? 1 : -1);
    setPage(next);
  };

  const foldVariants = {
    enter: (d: number) => ({
      rotateY: d > 0 ? 80 : -80,
      rotateX: d > 0 ? 2 : -2,
      opacity: 0,
      scale: 0.9,
      filter: "brightness(0.5) blur(4px)",
      transformOrigin: d > 0 ? "left center" : "right center"
    }),
    center: {
      rotateY: 0,
      rotateX: 0,
      opacity: 1,
      scale: 1,
      filter: "brightness(1) blur(0px)",
      transformOrigin: "center center"
    },
    exit: (d: number) => ({
      rotateY: d > 0 ? -80 : 80,
      rotateX: d > 0 ? -2 : 2,
      opacity: 0,
      scale: 0.9,
      filter: "brightness(0.5) blur(4px)",
      transformOrigin: d > 0 ? "right center" : "left center"
    }),
  };

  return (
    <main
      className="min-h-screen bg-[#F5F0E8]"
      style={{ fontFamily: "'Georgia', serif", perspective: "2500px" }}
      onMouseDown={(e) => { dragStart.current = e.clientX; }}
      onMouseUp={(e) => {
        if (dragStart.current !== null) {
          const delta = e.clientX - dragStart.current;
          if (delta < -80 && page < 1) goTo(1);
          if (delta > 80 && page > 0) goTo(0);
        }
        dragStart.current = null;
      }}
      onTouchStart={(e) => { dragStart.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (dragStart.current !== null) {
          const delta = e.changedTouches[0].clientX - dragStart.current;
          if (delta < -80 && page < 1) goTo(1);
          if (delta > 80 && page > 0) goTo(0);
        }
        dragStart.current = null;
      }}
    >
      {/* Back nav */}
      <div className="max-w-[1100px] mx-auto px-4 pt-6 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-ink/50 hover:text-ink transition-colors text-xs font-sans uppercase tracking-widest group">
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        {/* Page indicator */}
        <div className="flex items-center gap-3">
          <button onClick={() => page > 0 && goTo(0)} disabled={page === 0}
            className="w-8 h-8 rounded-full border border-ink/30 flex items-center justify-center text-ink/50 hover:border-ink hover:text-ink transition-all disabled:opacity-20">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {[0, 1].map(i => (
              <button key={i} onClick={() => goTo(i)}
                className={`rounded-full transition-all duration-300 ${i === page ? "w-5 h-2 bg-ink" : "w-2 h-2 bg-ink/30 hover:bg-ink/60"}`}
              />
            ))}
          </div>
          <button onClick={() => page < 1 && goTo(1)} disabled={page === 1}
            className="w-8 h-8 rounded-full border border-ink/30 flex items-center justify-center text-ink/50 hover:border-ink hover:text-ink transition-all disabled:opacity-20">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <span className="text-[10px] font-sans uppercase tracking-widest text-ink/40">Page {page + 1} of 2</span>
      </div>

      {/* Animated pages */}
      <div style={{ perspective: "2500px", overflow: "hidden" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={page}
            custom={dir}
            variants={foldVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {page === 0 ? (
              <div className="max-w-[1100px] mx-auto px-4 pb-20">
        {/* ════════════════════════════════════════
            MASTHEAD
        ════════════════════════════════════════ */}
        <header className="text-center py-6 border-b-[3px] border-ink mt-4">
          {/* Top rule */}
          <div className="flex gap-1 mb-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`flex-1 bg-ink ${i === 1 ? "h-[3px]" : "h-[1px]"}`} />
            ))}
          </div>

          <p className="text-[10px] uppercase tracking-[0.35em] text-ink/60 font-sans mb-1">
            Est. 2018 · Kozhikode-Vatakara, Kerala
          </p>

          <h1
            className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tight leading-none my-2"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif", letterSpacing: "-0.01em" }}
          >
            The RILS Chronicle
          </h1>

          <p className="text-xs uppercase tracking-[0.3em] text-ink/50 font-sans">
            Rahmaniyya International Leading School — Official School Journal
          </p>

          {/* Meta row */}
          <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider text-ink/60 mt-3 border-t border-b border-ink/30 py-1.5">
            <span>Vol. VII, No. 4</span>
            <span className="font-bold text-ink">{today}</span>
            <span>Complimentary Issue</span>
          </div>

          {/* Bottom double rule */}
          <div className="flex flex-col gap-[3px] mt-2">
            <div className="w-full h-[3px] bg-ink" />
            <div className="w-full h-[1px] bg-ink" />
          </div>
        </header>

        {/* ════════════════════════════════════════
            HEADLINE BAND
        ════════════════════════════════════════ */}
        <div className="text-center py-5 border-b-2 border-ink">
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-2">
            ✦ Today's Headlines ✦
          </p>
          <h2
            className="text-3xl md:text-5xl font-black text-ink leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            100% Pass Rate · Cultural Triumph · Athletics Gold
          </h2>
          <p className="text-[12px] text-ink/60 font-sans mt-2 tracking-wide">
            A remarkable year of achievement, culture, and excellence at RILS
          </p>
        </div>

        {/* ════════════════════════════════════════
            MAIN GRID — 3 newspaper columns
        ════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b-2 border-ink mt-0">

          {/* ── COL 1: Feature story ── */}
          <article className="md:col-span-5 border-r border-ink/30 pr-0 md:pr-6 py-6">
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Feature · Leadership &amp; Culture</p>
            <h3
              className="text-2xl md:text-3xl font-black text-ink leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Handala Arts Festival Electrifies RILS Campus in Grand Cultural Spectacle
            </h3>
            <Byline author="Chronicle Staff Reporter" date="November 2024" />
            <Divider />

            <PhotoCaption
              src="/images/cultfest-1.webp"
              alt="Students performing at Handala Arts Festival"
              caption="Students deliver a stirring group performance at the Handala Arts Festival 2024, held at the RILS main auditorium."
            />

            <Lead>
              The corridors of Rahmaniyya International Leading School rang with music, laughter, and spirited competition as the institution hosted its eagerly awaited Annual Arts Festival — Handala 2024. Students from all grades showcased their finest talents in a multi-day celebration that left the entire campus community inspired and uplifted.
            </Lead>

            <Body>
              From eloquent speeches delivered at the ornate stage podium to melodious group nasheeds that echoed through the auditorium, Handala 2024 was more than a competition — it was a testament to the well-rounded character that RILS strives to cultivate in every student.
            </Body>

            <PullQuote>
              Every child who stepped onto that stage carried the spirit of Rahmaniyya with them.
            </PullQuote>

            <Body>
              The festival, organised annually under the banner of the RILS Arts Committee, saw participation from over 200 students across categories including oratory, poetry recitation, debate, drama, and Islamic calligraphy. A panel of esteemed judges evaluated each performance with rigour and encouragement, ensuring that every participant left with both a critique and a sense of pride.
            </Body>

            <PhotoCaption
              src="/images/cultfest-2.webp"
              alt="Student at Handala mic"
              caption="A participant delivers a passionate speech during the public-speaking round of Handala 2024."
            />

            <Body>
              The closing ceremony saw the coveted Handala Championship Trophy presented to the winning house, amid thunderous applause from students, faculty, and parents in attendance. School Principal remarked, "This festival is the heartbeat of our campus. It reminds us that academic excellence and creative brilliance can — and must — coexist."
            </Body>
          </article>

          {/* ── COL 2: Academic + pull stories ── */}
          <article className="md:col-span-4 border-r border-ink/30 px-0 md:px-6 py-6">

            {/* Story A */}
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Academic Excellence</p>
            <h3
              className="text-xl md:text-2xl font-black text-ink leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              RILS Records Flawless 100% Pass Rate in State Board Examinations
            </h3>
            <Byline author="Academic Desk" date="March 2025" />
            <Divider />

            <PhotoCaption
              src="/images/achievement-board.webp"
              alt="Board results celebration"
              caption="RILS students celebrate after the announcement of historic Kerala State Board results."
            />

            <Lead>
              In a result that sent waves of pride through the institution, every single student who appeared for the Kerala State Board Examinations from Rahmaniyya International Leading School secured a passing grade — with a record proportion of students attaining the coveted Full A+ distinction.
            </Lead>

            <Body>
              The achievement reflects years of disciplined study, dedicated mentorship by faculty, and the unwavering moral and motivational support provided within RILS's residential model. "When a student lives, eats, and breathes learning in a structured environment, results like this become inevitable," said a senior faculty member.
            </Body>

            <ThinDivider />

            {/* Story B */}
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1 mt-2">Sports &amp; Athletics</p>
            <h3
              className="text-xl font-black text-ink leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              RILS Athletes Clinch Gold at District-Level Championship
            </h3>
            <Byline author="Sports Correspondent" date="January 2025" />
            <Divider />

            <Body>
              The school's athletics contingent returned victorious from the district-level Inter-School Athletics Championship, having secured multiple gold medals in track and field events. The triumph marks the first time in the school's history that RILS has topped the athletics podium at this prestigious level of competition.
            </Body>

            <PullQuote>
              These victories belong to every student, teacher, and parent who believed in us.
            </PullQuote>

            <Body>
              Coaches credited the school's disciplined daily routine and dedicated physical training periods — a cornerstone of the RILS residential programme — for building the stamina and determination that powered the team's gold-medal run.
            </Body>
          </article>

          {/* ── COL 3: Sidebar stories ── */}
          <aside className="md:col-span-3 pl-0 md:pl-6 py-6 space-y-6">

            {/* Sidebar 1 — NEET */}
            <div>
              <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Medical Admissions</p>
              <h4 className="text-lg font-black text-ink leading-tight" style={{ fontFamily: "'Georgia', serif" }}>
                RILS Student Secures Exceptional NEET Score
              </h4>
              <Byline author="Admissions Desk" date="June 2024" />
              <ThinDivider />
              <Body>
                A student of Rahmaniyya International Leading School secured a remarkable score in the NEET 2024 national medical entrance examination, paving the way to one of India's top medical institutions. The achievement underlines the effectiveness of the school's integrated science coaching alongside its moral and character development curriculum.
              </Body>
            </div>

            <Divider />

            {/* Sidebar 2 — Principal's Note */}
            <div className="bg-ink/5 border border-ink/20 p-4">
              <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-2">Principal's Note</p>
              <p className="font-serif text-sm italic text-ink/80 leading-relaxed">
                "At RILS, we do not merely educate — we shape souls. Every milestone our students achieve is a reflection of the values we plant within them: faith, discipline, and the relentless pursuit of excellence."
              </p>
              <p className="text-[10px] font-sans mt-3 text-ink/60 uppercase tracking-wider">— Principal, RILS</p>
            </div>

            <Divider />

            {/* Sidebar 3 — Upcoming */}
            <div>
              <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-2">Notice Board</p>
              <ul className="space-y-3">
                {[
                  { title: "Admissions Open 2026–27", note: "Applications are now being accepted for the new academic session." },
                  { title: "Annual Sports Day", note: "The annual sports meet is scheduled for January 2026. All students are encouraged to participate." },
                  { title: "Parent-Teacher Meet", note: "Quarterly PTM to be held in the school auditorium. Parents are warmly invited." },
                ].map((item, i) => (
                  <li key={i} className="border-t border-ink/20 pt-3 first:border-0 first:pt-0">
                    <p className="font-black text-ink text-sm" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</p>
                    <p className="text-[12px] text-ink/65 leading-snug mt-0.5 font-serif">{item.note}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Divider />

            {/* School logo box */}
            <div className="border-2 border-ink/30 p-4 flex flex-col items-center text-center">
              <Image src="/logo.webp" alt="RILS Logo" width={64} height={64} quality={80} className="object-contain grayscale mb-3" />
              <p className="font-black text-ink text-sm uppercase tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
                Rahmaniyya International Leading School
              </p>
              <p className="text-[10px] font-sans text-ink/50 mt-1 tracking-wide">Kozhikode · Vatakara · Kerala</p>
              <Link
                href="/#contact"
                className="mt-3 text-[10px] font-sans uppercase tracking-widest border border-ink text-ink px-4 py-1.5 hover:bg-ink hover:text-[#F5F0E8] transition-all"
              >
                Apply Now →
              </Link>
            </div>

          </aside>
        </div>





        {/* ════════════════════════════════════════
            FOOTER RULE
        ════════════════════════════════════════ */}
        <footer className="mt-8 pt-4 border-t-[3px] border-ink text-center">
          <div className="flex flex-col gap-[2px] mb-3">
            <div className="w-full h-[1px] bg-ink" />
            <div className="w-full h-[3px] bg-ink" />
          </div>
          <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-ink/50">
            The RILS Chronicle · Published by Rahmaniyya International Leading School ·{" "}
            <Link href="/" className="hover:text-ink transition-colors">Rilscampus.com</Link>
          </p>
          <p className="text-[9px] font-sans text-ink/30 mt-1">
            All content © {new Date().getFullYear()} RILS. For admissions enquiries, contact the school office.
          </p>
        </footer>
              </div>
            ) : (
              <NewsPage2 />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom page nav */}
      <div className="max-w-[1100px] mx-auto px-4 pb-10 flex items-center justify-center gap-6">
        <button onClick={() => page > 0 && goTo(0)} disabled={page === 0}
          className="inline-flex items-center gap-2 border border-ink/30 text-ink/60 hover:border-ink hover:text-ink transition-all px-5 py-2.5 text-xs font-sans uppercase tracking-widest disabled:opacity-20">
          <ChevronLeft className="w-4 h-4" /> Prev Page
        </button>
        <div className="flex gap-2">
          {[0, 1].map(i => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === page ? "w-6 h-2.5 bg-ink" : "w-2.5 h-2.5 bg-ink/30 hover:bg-ink/60"}`}
            />
          ))}
        </div>
        <button onClick={() => page < 1 && goTo(1)} disabled={page === 1}
          className="inline-flex items-center gap-2 border border-ink/30 text-ink/60 hover:border-ink hover:text-ink transition-all px-5 py-2.5 text-xs font-sans uppercase tracking-widest disabled:opacity-20">
          Next Page <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Global styles */}
      <style>{`
        :root { --ink: #1a1410; }
        .text-ink { color: #1a1410; }
        .bg-ink { background-color: #1a1410; }
        .border-ink { border-color: #1a1410; }
        .font-newspaper { font-family: 'Georgia', 'Times New Roman', serif; }
      `}</style>
    </main>
  );
}
