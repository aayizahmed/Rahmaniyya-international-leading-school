import Link from "next/link";

const Divider = () => (
  <div className="flex items-center gap-2 my-1">
    <div className="flex-1 h-[2px] bg-ink" />
    <div className="w-1.5 h-1.5 rotate-45 bg-ink flex-shrink-0" />
    <div className="flex-1 h-[2px] bg-ink" />
  </div>
);

export default function NewsPage2() {
  return (
    <div className="max-w-[1100px] mx-auto px-4 pb-20">

      {/* Masthead */}
      <header className="text-center py-6 border-b-[3px] border-ink mt-4">
        <div className="flex gap-1 mb-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className={`flex-1 bg-ink ${i === 1 ? "h-[3px]" : "h-[1px]"}`} />
          ))}
        </div>
        <p className="text-[10px] uppercase tracking-[0.35em] text-ink/60 font-sans mb-1">
          Est. 2018 · Kozhikode-Vatakara, Kerala
        </p>
        <h1 className="text-5xl md:text-7xl font-black text-ink uppercase tracking-tight leading-none my-2"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          ADMISSIONS OPEN
        </h1>
        <p className="text-xs uppercase tracking-[0.3em] text-ink/50 font-sans mt-3">
          Special Edition · Securing the Future of the Next Generation
        </p>
        <div className="flex items-center justify-between text-[10px] font-sans uppercase tracking-wider text-ink/60 mt-4 border-t border-b border-ink/30 py-1.5">
          <span>Academic Year 2026–27</span>
          <span className="font-bold text-ink">Limited Seats Available</span>
          <span>Rilscampus.com</span>
        </div>
        <div className="flex flex-col gap-[3px] mt-2">
          <div className="w-full h-[3px] bg-ink" />
          <div className="w-full h-[1px] bg-ink" />
        </div>
      </header>

      {/* Huge Call to Action Band */}
      <div className="text-center py-8 border-b-2 border-ink bg-ink text-[#F5F0E8]">
        <p className="text-[12px] font-sans uppercase tracking-[0.4em] text-white/60 mb-2">✦ The Rahmaniyya Advantage ✦</p>
        <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight uppercase"
          style={{ fontFamily: "'Georgia', serif" }}>
          Shape Your Child's Destiny
        </h2>
        <p className="text-[14px] text-white/80 font-serif mt-4 max-w-2xl mx-auto italic">
          Enroll at RILS and join a legacy of 100% board pass rates, outstanding moral development, and top-tier entrance coaching.
        </p>
        <Link
          href="/#contact"
          className="inline-block mt-6 border-2 border-[#F5F0E8] text-[#F5F0E8] px-10 py-3 font-bold text-sm uppercase tracking-widest hover:bg-[#F5F0E8] hover:text-ink transition-all font-sans"
        >
          Apply Now
        </Link>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-b-2 border-ink mt-0">

        {/* Col 1 — The RILS Promise */}
        <article className="md:col-span-5 border-r border-ink/30 pr-0 md:pr-6 py-6">
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Academic Excellence</p>
          <h3 className="text-2xl md:text-4xl font-black text-ink leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}>
            A Curriculum Built for the Leaders of Tomorrow
          </h3>
          <p className="text-[10px] uppercase tracking-[0.2em] text-ink/50 font-sans mt-2 mb-1">
            By <span className="font-bold text-ink/70">Admissions Director</span>
          </p>
          <Divider />

          <figure className="my-5">
            <img src="/images/classroom.webp" alt="RILS Classroom" className="w-full grayscale-[20%] contrast-[1.05]" />
            <div className="h-[1px] bg-ink/30 mt-1 mb-1" />
            <figcaption className="text-[10px] text-ink/60 font-sans uppercase tracking-wider leading-snug">
              Students engaged in an interactive learning session at the RILS campus.
            </figcaption>
          </figure>

          <p className="text-[15px] leading-[1.75] text-ink/90 font-serif mt-3 text-justify">
            <span className="float-left text-[4.5rem] leading-[0.75] font-bold text-ink mr-2 mt-1">T</span>
            he doors of Rahmaniyya International Leading School are officially open for the 2026–27 academic year. At RILS, academic excellence is not just an aspiration — it is a daily practice. We follow the Kerala State Board syllabus, enriched with a parallel programme in Islamic studies, moral education, and competitive entrance coaching for NEET, JEE, and other national examinations.
          </p>

          <p className="text-justify text-[14px] leading-[1.8] text-ink/80 font-serif mt-3">
            The RILS academic model is built on three pillars: rigorous classroom instruction, self-directed study periods in the evening, and one-on-one mentoring sessions with subject faculty. This tri-layer approach ensures that no student is left behind, and those with exceptional aptitude are stretched to their full potential.
          </p>

          <blockquote className="border-l-4 border-r-4 border-ink/30 px-6 py-3 my-5 text-center">
            <p className="font-serif text-xl md:text-2xl text-ink leading-snug italic">
              "We do not teach students to pass exams. We teach them to think."
            </p>
          </blockquote>
        </article>

        {/* Col 2 — Admission Process */}
        <article className="md:col-span-4 border-r border-ink/30 px-0 md:px-6 py-6">
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">The Application Process</p>
          <h3 className="text-xl md:text-2xl font-black text-ink leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}>
            How to Secure Your Child's Admission
          </h3>
          <Divider />

          <p className="text-[15px] leading-[1.75] text-ink/90 font-serif mt-3 text-justify">
            <span className="float-left text-[3.5rem] leading-[0.75] font-bold text-ink mr-2 mt-1">1</span>
            <b>Entrance Examination:</b> All prospective students must pass a written examination to assess foundational knowledge in core subjects.
          </p>
          <p className="text-[15px] leading-[1.75] text-ink/90 font-serif mt-3 text-justify">
            <span className="float-left text-[3.5rem] leading-[0.75] font-bold text-ink mr-2 mt-1">2</span>
            <b>Personal Interview:</b> Shortlisted candidates, along with their parents, will be invited for a personal interaction with the Principal and academic faculty.
          </p>
          <p className="text-[15px] leading-[1.75] text-ink/90 font-serif mt-3 text-justify">
            <span className="float-left text-[3.5rem] leading-[0.75] font-bold text-ink mr-2 mt-1">3</span>
            <b>Enrollment:</b> Upon successful selection, the final admission is granted following document verification and fee payment.
          </p>

          <div className="w-full h-[1px] bg-ink/20 my-6" />

          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Campus Life</p>
          <h3 className="text-xl font-black text-ink leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}>
            Residential Life: Where Discipline Meets Brotherhood
          </h3>
          <Divider />
          <figure className="my-4">
            <img src="/images/lab.webp" alt="RILS Science Lab" className="w-full grayscale-[20%] contrast-[1.05]" />
            <div className="h-[1px] bg-ink/30 mt-1 mb-1" />
            <figcaption className="text-[10px] text-ink/60 font-sans uppercase tracking-wider leading-snug">
              State-of-the-art facilities for hands-on learning.
            </figcaption>
          </figure>
          <p className="text-justify text-[14px] leading-[1.8] text-ink/80 font-serif mt-3">
            Life at RILS extends far beyond the classroom. Students reside on campus in well-maintained hostels, following a structured daily schedule that balances academic study, physical activity, spiritual practice, and recreation. The boarding environment fosters deep bonds of friendship and mutual accountability.
          </p>
        </article>

        {/* Col 3 — Sidebar / At a Glance */}
        <aside className="md:col-span-3 pl-0 md:pl-6 py-6 space-y-6">

          <div>
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-1">Why Choose RILS?</p>
            <ul className="space-y-3 mt-2">
              {[
                { stat: "100%", label: "Board pass rate consistently achieved" },
                { stat: "NEET/JEE", label: "Integrated competitive coaching" },
                { stat: "Hostels", label: "Premium residential facilities" },
                { stat: "Sports", label: "District-level athletic programs" },
              ].map((item, i) => (
                <li key={i} className="border-t border-ink/20 pt-3 first:border-0 first:pt-0 flex flex-col gap-1">
                  <span className="font-black text-2xl text-ink font-serif leading-none">{item.stat}</span>
                  <p className="text-[12px] text-ink/65 leading-snug font-serif">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>

          <Divider />

          <div className="bg-ink/5 border border-ink/20 p-4">
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-2">Important Notice</p>
            <p className="font-serif text-sm italic text-ink/80 leading-relaxed text-justify">
              "Seats for the upcoming academic year are strictly limited. We encourage parents to submit applications well before the deadline to ensure their child's place in the entrance examination."
            </p>
            <p className="text-[10px] font-sans mt-3 text-ink/60 uppercase tracking-wider">— Admissions Office</p>
          </div>

          <Divider />

          <div>
            <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-ink/50 mb-2">Contact</p>
            <ul className="space-y-2 text-[12px] text-ink/70 font-serif">
              <li>📍 Kozhikode-Vatakara, Kerala</li>
              <li>📞 +91 96052 70250</li>
              <li>🌐 Rilscampus.com</li>
            </ul>
          </div>

          <Divider />

          <div className="border-2 border-ink/30 p-4 flex flex-col items-center text-center">
            <img src="/logo.webp" alt="RILS Logo" className="w-14 h-14 object-contain grayscale mb-3" />
            <p className="font-black text-ink text-xs uppercase tracking-wide"
              style={{ fontFamily: "'Georgia', serif" }}>
              Rahmaniyya International Leading School
            </p>
            <p className="text-[10px] font-sans text-ink/50 mt-1">Kozhikode · Vatakara · Kerala</p>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="mt-8 pt-4 border-t-[3px] border-ink text-center">
        <div className="flex flex-col gap-[2px] mb-3">
          <div className="w-full h-[1px] bg-ink" />
          <div className="w-full h-[3px] bg-ink" />
        </div>
        <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-ink/50">
          The RILS Chronicle · Admissions Edition · <Link href="/" className="hover:text-ink transition-colors">Rilscampus.com</Link>
        </p>
        <p className="text-[9px] font-sans text-ink/30 mt-1">
          All content © {new Date().getFullYear()} RILS. For admissions enquiries, contact the school office.
        </p>
      </footer>
    </div>
  );
}

