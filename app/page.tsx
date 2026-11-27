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

      <main className="w-full max-w-6xl mx-auto px-6 pb-12 relative">
        <Hero />
        <section id="ghostwriting" className="mt-24 scroll-mt-24 lg:pl-12">
          <h2 className="mb-4 text-3xl font-light tracking-tight text-white">
            Ghostwriting results on X
          </h2>
          <p className="mb-8 max-w-xl text-neutral-400">
            Through ShadowRites, I help founders share what they’re learning and
            building through content written in their voice.
          </p>
          <dl className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Client account in 20 days", result: "400 → 2,100" },
              { label: "Client account in 30 days", result: "0 → 356" },
              { label: "My personal account in 295 days", result: "0 → 12,000" },
            ].map(({ label, result }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <dt className="text-sm text-neutral-400">{label}</dt>
                <dd className="mt-2 text-2xl tracking-tight text-white">
                  {result} <span className="text-sm text-neutral-400">followers</span>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a className="text-pink-400 hover:text-white" href="https://www.shadowrites.in/">
              Explore ShadowRites
            </a>
            <a className="text-neutral-400 hover:text-white" href="https://www.linkedin.com/posts/mdharish84_if-youre-a-founder-looking-for-a-ghostwriter-activity-7470479483104292864-icf9">
              Read the results on LinkedIn
            </a>
          </div>
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
