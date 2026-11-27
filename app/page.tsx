import Link from "next/link";
import Contact from "@/components/Contact";
import ContributionGraph from "@/components/ContributionGraph";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LifeSection from "@/components/LifeSection";
import Navbar from "@/components/Navbar";
import RecentPosts from "@/components/RecentPosts";
import ToolsMarquee from "@/components/ToolsMarquee";
import WorkshopVideos from "@/components/WorkshopVideos";

export default function Home() {
  return (
    <div className="bg-background text-neutral-300 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Connecting Beam (Visual Noodle) */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-20 hidden lg:block"
        style={{ height: "4000px" }}
      >
        <path
          d="M 180 0 V 4000"
          stroke="#333"
          strokeWidth="1"
          fill="none"
        ></path>
        <path
          className="beam-path"
          d="M 180 0 V 4000"
          stroke="url(#beam-grad)"
          strokeWidth="2"
          fill="none"
        ></path>
        <defs>
          <linearGradient id="beam-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="transparent"></stop>
            <stop offset="50%" stopColor="#ec4899"></stop>
            <stop offset="100%" stopColor="transparent"></stop>
          </linearGradient>
        </defs>
      </svg>

      <Navbar />

      <main className="w-full max-w-6xl mx-auto px-6 pb-12 relative lg:[&>section]:pl-0 lg:[&>footer]:pl-0">
        <Hero />
        <section id="ghostwriting" className="mt-24 scroll-mt-24">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white">
            Ghostwriting results on X
          </h2>
          <p className="mb-8 max-w-xl text-neutral-400">
            Through shadoWritesX, I help founders share what they’re learning and
            building through content written in their voice.
          </p>
          <dl className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Founder account", period: "Oct 15 – Nov 14, 2026", impressions: "357.4K", outcome: "2K new follows" },
              { label: "Web3 founder", period: "First month", study: "/case-studies/web3-founder", impressions: "504.9K", outcome: "3.9K bookmarks" },
            ].map(({ label, period, impressions, outcome, study }) => (
              <div key={period} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <dt className="text-sm text-neutral-400">{label} · {period}</dt>
                <dd className="mt-2 text-2xl tracking-tight text-white">{impressions} impressions</dd>
                <dd className="mt-1 text-neutral-300">{outcome}</dd>
                {study && <dd className="mt-4"><Link href={study} className="text-sm text-pink-400 hover:underline">Read the case study →</Link></dd>}
              </div>
            ))}
          </dl>
          <a className="mt-6 inline-block text-sm text-pink-400 hover:text-white" href="https://www.shadowrites.in/">
            See the client-reported results on shadoWritesX
          </a>
        </section>
        <RecentPosts />
        <Contact />
        <FeaturedProjects />
        <ToolsMarquee />
        <ContributionGraph />
        <WorkshopVideos />
        <LifeSection />
        <Footer />
      </main>
    </div>
  );
}
