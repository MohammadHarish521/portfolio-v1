import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Reviving a Web3 founder’s X account | Mohammad Harish",
  description: "A 30-day ghostwriting case study following five posts from a founder’s personal story to a practical teaching thread.",
};

const posts = [
  { title: "Three years of progress", story: "We opened with a before-and-after story about skills, income and clients. Three years gave readers a concrete baseline for understanding what the founder had earned through practice.", metrics: ["93K", "1.3K", "84", "52", "8.9%", "3K", "96", "392"] },
  { title: "The decision to freelance", story: "Next, we explained why the founder chose freelance client work over an internship. That gave students and developers a specific career decision to discuss.", metrics: ["15K", "263", "27", "5", "9.0%", "514", "24", "117"] },
  { title: "Ask before teaching", story: "We invited readers to weigh in before developing educational content. This post drew the most replies and bookmarks of the five, giving us a reason to follow up with resources.", metrics: ["298K", "5.5K", "2.5K", "190", "5.1%", "3.2K", "335", "2.8K"] },
  { title: "Share the working toolkit", story: "We followed the conversation with a curated set of resources. Readers could save something useful from the founder’s experience and return to it during their own work.", metrics: ["132K", "1.7K", "1K", "39", "4.2%", "1.4K", "136", "724"] },
  { title: "Teach a practical lesson", story: "We closed the sequence with an educational thread. It had the smallest audience of the five, yet readers bookmarked it 229 times.", metrics: ["7.3K", "101", "5", "7", "6.1%", "Unreported", "42", "229"] },
];
const metricColors: Record<string, string> = {
  Views: "text-sky-300",
  Impressions: "text-sky-300",
  "New follows": "text-emerald-300",
  Bookmarks: "text-amber-300",
  "Engagement rate": "text-violet-300",
};

const columns = ["Views", "Likes", "Replies", "Reposts", "Engagement rate", "Profile visits", "New follows", "Bookmarks"];
const results = [
  ["Impressions", "504.9K"], ["Engagement rate", "5.8%"], ["Engagements", "29.4K"],
  ["Profile visits", "7.6K"], ["Replies", "2.8K"], ["Likes", "8K"],
  ["Reposts", "284"], ["Bookmarks", "3.9K"], ["Shares", "42"],
  ["Verified followers", "220 of 2.2K total followers"],
];

export default function CaseStudy() {
  return (
    <div className="min-h-screen bg-background font-figtree text-neutral-300">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <Link href="/case-studies" className="text-sm text-pink-400 hover:underline">← All case studies</Link>
        <article className="mt-10 space-y-12">
          <header className="max-w-3xl space-y-4">
            <p className="text-sm text-neutral-400">Ghostwriting case study · Month one · Mohammad Harish</p>
            <h1 className="text-4xl tracking-tight text-white md:text-6xl">Reviving a Web3 founder’s X account</h1>
            <p className="text-lg leading-relaxed">One of my current clients is a Web3 developer and founder who had posted on and off for years. The account’s growth had flattened, even as the founder gained skills and won clients. During our first 30 days working together, we turned those experiences into posts other builders could learn from.</p>
          </header>
          <section className="max-w-3xl space-y-4">
            <h2 className="text-2xl text-white">From a quiet account to a conversation</h2>
            <p>We wanted readers to see someone with firsthand experience building and freelancing, then feel comfortable asking that person for advice. I kept the writing conversational and built each post around a decision, a result or a resource.</p>
            <p>I published our first post on October 31. The account’s impressions began to spike as consistent posting resumed. The campaign ran organically, without ads, engagement pods or artificial amplification.</p>
          </section>
          <section>
            <h2 className="mb-5 text-2xl text-white">The five-post sequence</h2>
            <ol className="list-decimal space-y-5 pl-6 marker:text-pink-400">
              {posts.map(({ title, story }) => (
                <li key={title} className="max-w-3xl pl-2">
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="mt-1 leading-relaxed">{story}</p>
                </li>
              ))}
            </ol>
            <div className="mt-8 overflow-x-auto" tabIndex={0} role="region" aria-label="Post analytics">
              <table className="w-full text-left text-sm">
                <caption className="mb-3 text-left text-neutral-400">Client-reported metrics for each post</caption>
                <thead><tr>{["Post", ...columns].map(label => <th key={label} scope="col" className="p-2">{label}</th>)}</tr></thead>
                <tbody>{posts.map(({ title, metrics }) => (
                  <tr key={title} className="border-t border-white/10">
                    <th scope="row" className="p-2 font-normal text-white">{title}</th>
                    {metrics.map((value, i) => <td key={columns[i]} className={`p-2 tabular-nums ${metricColors[columns[i]] ?? ""}`}>{value}</td>)}
                  </tr>
                ))}</tbody>
              </table>
            </div>
          </section>
          <section>
            <h2 className="text-2xl text-white">Our first 30 days in numbers</h2>
            <p className="my-4 text-neutral-400">Reported from the client’s account analytics for the full period.</p>
            <dl className="grid grid-cols-2 gap-5 rounded-xl border border-white/10 p-5 md:grid-cols-3">
              {results.map(([label, value]) => <div key={label}><dt className="text-sm text-neutral-400">{label}</dt><dd className={`mt-1 text-xl tabular-nums ${metricColors[label] ?? "text-white"}`}>{value}</dd></div>)}
            </dl>
          </section>
          <section className="max-w-3xl space-y-3">
            <h2 className="text-2xl text-white">What I took from the campaign</h2>
            <p>The founder’s story gave readers a reason to listen. Asking what they wanted to learn gave us a direction for the next two posts. Replies helped us see where the conversation was, and bookmarks showed which material people wanted to keep.</p>
          </section>
        </article>
      </main>
    </div>
  );
}
