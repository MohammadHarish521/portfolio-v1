import Contact from "@/components/Contact";
import ExperienceItem from "@/components/ExperienceItem";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialStats from "@/components/SocialStats";
import { educationData, experienceData } from "@/data/experience";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-background text-neutral-300 font-figtree antialiased selection:bg-pink-500/20 selection:text-white relative overflow-x-hidden min-h-screen">
      {/* Ambient Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <Navbar />

      <main className="w-full max-w-4xl mx-auto px-6 py-32 relative">
        {/* Intro */}
        <section className="mb-24 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-figtree font-normal tracking-tight text-white mb-6 leading-tight">
            Ghostwriter and founder of <span className="text-pink-500">shadoWritesX</span>
          </h1>
          <p className="text-neutral-400 max-w-xl text-lg leading-relaxed">
            I help founders write about what they’re building on X. My background
            in frontend development helps me understand the products and decisions
            behind the stories they want to share.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Experience
          </h2>
          <div className="flex flex-col">
            {experienceData.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Education
          </h2>
          <div className="flex flex-col">
            {educationData.map((item, index) => (
              <ExperienceItem key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        {/* Social Impact Section */}
        <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Social Impact
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-12">
            Grew X (Twitter) to 9M impressions in just 68 days. Now helping
            others amplify their digital presence.
          </p>

          <div className="bg-neutral-900/30 border border-white/5 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-pink-500 font-figtree font-medium text-2xl">
                <Image
                src="/assets/face.png"
                alt="Panekka"
                width={50}
                height={50}
                className="rounded-full "
              />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-figtree font-medium tracking-tight text-white">
                    Harish_521
                  </h3>
                  <span className="bg-blue-500/10 text-blue-400 text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider border border-blue-500/20">
                    Verified
                  </span>
                </div>
                <p className="text-neutral-400 text-sm font-figtree">
                  Ghostwriter & Content Creator
                </p>
              </div>
            </div>

            <SocialStats />
            
            <p className="mt-8 text-neutral-400 text-sm border-t border-white/5 pt-6">
              <Link href="/case-studies" className="text-pink-400 hover:text-white">
                See my ghostwriting results
              </Link>
            </p>
          </div>
        </section>
        
         {/* Idoltime Section */}
         <section className="mb-24">
          <h2 className="text-2xl font-figtree font-light text-white mb-8 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-pink-500"></span>
            Idoltime
          </h2>
          <p className="text-neutral-400 max-w-xl text-lg leading-relaxed">
             When I’m not at the computer You can find me watching <span className="text-white">Messi</span>, binging <span className="text-white">One Piece</span> and capturing <span className="text-white">Nature</span>.
          </p>
        </section>

        <Contact />
        <Footer />
      </main>
    </div>
  );
}
