import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Ghostwriting case studies | Mohammad Harish",
  description: "Two founders share the results of their ghostwriting work with shadoWritesX on X.",
};

const studies = [
  {
    title: "Growing a founder’s audience",
    period: "October 15 – November 14, 2026",
    summary: "Over the reporting period, the first founder’s account gained 2,000 new follows. The account’s posts appeared 357,400 times on X.",
    metrics: [["Impressions", "357.4K"], ["New follows", "2K"]],
  },
  {
    title: "Writing posts readers saved",
    period: "October 2026",
    summary: "A second founder tracked how often readers saved posts for later. Across October, the account recorded 3,900 bookmarks alongside 504,900 impressions.",
    metrics: [["Impressions", "504.9K"], ["Bookmarks", "3.9K"]],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background font-figtree text-neutral-300 antialiased selection:bg-pink-500/20 selection:text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 pb-16 pt-16 md:pt-24">
        <header className="mb-16">
          <h1 className="mb-5 text-4xl font-normal tracking-tight text-white md:text-5xl">
            Ghostwriting case studies
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-neutral-400">
            At shadoWritesX, I help founders write about what they’re building in
            their own voice. Two clients shared these results from their X accounts.
          </p>
        </header>
        {studies.map(({ title, period, summary, metrics }) => (
          <article key={title} className="border-t border-white/10 py-10">
            <p className="mb-3 text-sm text-pink-400">{period}</p>
            <h2 className="text-3xl font-light tracking-tight text-white">{title}</h2>
            <p className="my-5 max-w-xl leading-relaxed text-neutral-400">{summary}</p>
            <dl className="grid max-w-xl gap-4 sm:grid-cols-2">
              {metrics.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <dt className="text-sm text-neutral-400">{label}</dt>
                  <dd className="mt-2 text-3xl tracking-tight text-white">{value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
        <Footer />
      </main>
    </div>
  );
}
