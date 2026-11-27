import { blogPosts } from "@/data/blog";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RecentPosts() {
  return (
    <section id="blog" className="mt-32 lg:pl-12 relative">
      <h2 className="text-3xl font-figtree font-light tracking-tight text-white mb-12">
        Writing samples
      </h2>

      <div className="flex flex-col gap-10">
        {blogPosts.map((post, index) => {
          const Icon = post.icon;
          const themes = [
            { icon: "group-hover:text-cyan-400", title: "group-hover:text-cyan-300", tags: "text-cyan-400" },
            { icon: "group-hover:text-violet-400", title: "group-hover:text-violet-300", tags: "text-violet-400" },
            { icon: "group-hover:text-amber-400", title: "group-hover:text-amber-300", tags: "text-amber-400" },
            { icon: "group-hover:text-emerald-400", title: "group-hover:text-emerald-300", tags: "text-emerald-400" },
            { icon: "group-hover:text-pink-400", title: "group-hover:text-pink-300", tags: "text-pink-400" },
          ];
          const theme = themes[index % themes.length];

          return (
            <Link
              key={index}
              href={post.link}
              target={post.link.startsWith("http") ? "_blank" : undefined}
              rel={post.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col md:flex-row gap-6 items-start hover:bg-white/5 p-4 -mx-4 rounded-xl transition-colors"
            >
              <div className="w-full md:w-48 aspect-video bg-neutral-900 border border-white/10 rounded-lg overflow-hidden shrink-0 relative">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
                    <Icon className={`text-neutral-700 w-8 h-8 ${theme.icon} transition-colors`} />
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className={`text-lg font-figtree font-light text-white ${theme.title} transition-colors leading-snug`}>
                  {post.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-neutral-500 font-figtree tracking-wide">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 font-figtree font-normal line-clamp-2 mt-1 leading-relaxed">
                  {post.description}
                </p>
                <div className={`flex gap-2 text-xs font-figtree tracking-wider ${theme.tags} mt-2 flex-wrap`}>
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
