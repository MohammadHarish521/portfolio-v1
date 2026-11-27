import {
    Atom,
    Box,
    Braces,
    Code2,
    Container,
    Database,
    DatabaseBackup,
    Figma,
    FileCode,
    Globe,
    Package,
    Server,
    Wind,
    Zap,
} from "lucide-react";

const toolsRow1 = [
  { icon: FileCode, label: "CSS", color: "text-blue-500" },
  { icon: Wind, label: "Tailwind", color: "text-cyan-400" },
  { icon: Braces, label: "JavaScript", color: "text-yellow-400" },
  { icon: Atom, label: "React", color: "text-blue-400" },
  { icon: Zap, label: "Next.js", color: "text-white" },
  { icon: Database, label: "Node.js", color: "text-green-500" },
  { icon: Code2, label: "Python", color: "text-blue-500" },
];

const toolsRow2 = [
  { icon: Container, label: "Docker", color: "text-blue-600" },
  { icon: Box, label: "Solidity", color: "text-indigo-400" },
  { icon: DatabaseBackup, label: "PostgreSQL", color: "text-blue-300" },
  { icon: Server, label: "Bun", color: "text-amber-200" },
  { icon: Package, label: "Rust", color: "text-orange-500" },
  { icon: Globe, label: "Vercel", color: "text-white" },
  { icon: Figma, label: "Figma", color: "text-pink-500" },
];

export default function ToolsMarquee() {
  return (
    <section className="mt-32 overflow-hidden w-full relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

      <h2 className="text-lg font-figtree font-light text-white mb-8 text-left">
        Technologies & Tools
      </h2>

      {/* Row 1 */}
      <div className="flex gap-4 w-max animate-scroll hover:[animation-play-state:paused] mb-4">
        {/* Original */}
        <div className="flex gap-4">
          {toolsRow1.map((tool, index) => (
            <ToolItem key={index} {...tool} />
          ))}
        </div>
        {/* Duplicate */}
        <div className="flex gap-4">
          {toolsRow1.map((tool, index) => (
            <ToolItem key={`dup-${index}`} {...tool} />
          ))}
        </div>
      </div>

      {/* Row 2 (Reverse) */}
      <div className="flex gap-4 w-max animate-scroll-reverse hover:[animation-play-state:paused]">
        {/* Original */}
        <div className="flex gap-4">
          {toolsRow2.map((tool, index) => (
            <ToolItem key={index} {...tool} />
          ))}
        </div>
        {/* Duplicate */}
        <div className="flex gap-4">
          {toolsRow2.map((tool, index) => (
            <ToolItem key={`dup-${index}`} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ToolItem({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ElementType;
  label: string;
  color: string;
}) {
  return (
    <div className="w-32 h-20 bg-surface border border-white/5 rounded-lg flex flex-col items-center justify-center gap-2 group hover:border-white/20 transition-colors">
      <Icon className={`w-5 h-5 ${color} transition-colors`} />
      <span className="text-xs font-figtree text-neutral-500">{label}</span>
    </div>
  );
}
