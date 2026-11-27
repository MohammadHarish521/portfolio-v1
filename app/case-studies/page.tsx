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
    accent: "text-emerald-300",
    outcome: { label: "New follows", value: "2K" },
    impressions: "357.4K",
  },
  {
    title: "Writing posts readers saved",
    period: "October 2026",
    summary: "A second founder tracked how often readers saved posts for later. Across October, the account recorded 3,900 bookmarks alongside 504,900 impressions.",
    accent: "text-amber-300",
    outcome: { label: "Bookmarks", value: "3.9K" },
    impressions: "504.9K",
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
        {studies.map(({ title, period, summary, accent, outcome, impressions }) => (
          <article key={title} className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-[minmax(0,1fr)_16rem] md:gap-12">
            <div>
              <p className="mb-3 flex items-center gap-3 text-sm text-neutral-400">
                <span aria-hidden="true" className={`h-0.5 w-6 bg-current ${accent}`} />
                {period}
              </p>
              <h2 className="text-3xl font-light tracking-tight text-white">{title}</h2>
              <p className="mt-4 max-w-xl leading-relaxed text-neutral-400">{summary}</p>
            </div>
            <dl className="rounded-xl border border-white/10 bg-neutral-900 px-5 py-4">
              <div>
                <dt className="text-sm font-medium text-neutral-200">{outcome.label}</dt>
                <dd className={`mt-1 text-5xl font-medium tracking-tight tabular-nums ${accent}`}>
                  {outcome.value}
                </dd>
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-white/10 pt-3">
                <dt className="text-sm text-neutral-400">Impressions</dt>
                <dd className="font-medium tabular-nums text-neutral-200">{impressions}</dd>
              </div>
            </dl>
          </article>
        ))}
        <Footer />
      </main>
    </div>
  );
}
