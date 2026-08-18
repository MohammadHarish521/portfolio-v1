import Image from "next/image";
import Link from "next/link";
import CodingStatusDot from "./CodingStatus";
import StudentBadge from "./StudentBadge";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mt-10">
      {/* Left Content */}
      <div className="flex flex-col gap-8 lg:flex-1">
        {/* Small Profile Image with Status Dot */}
        <div className="relative w-20 h-20 lg:w-28 lg:h-28 aspect-square rounded-full overflow-visible">
          <div className="w-full h-full aspect-square rounded-full overflow-hidden border-2 border-neutral-800">
            <Image
              src="/assets/face.png"
              alt="Mohammad Harish"
              fill
              className="object-cover rounded-full"
            />
          </div>
          {/* Status Dot Overlay */}
          <CodingStatusDot />
        </div>

        {/* Name and Title */}
        <div>
          <h1 className="text-4xl lg:text-7xl font-geist font-normal tracking-tight text-white mb-4">
            Mohammad Harish
          </h1>
          <p className="text-sm font-geist text-neutral-500 uppercase tracking-widest">
            Developer • Ghostwriter
          </p>
        </div>

        {/* Description Content */}
        <div className="max-w-3xl flex flex-col gap-6 text-lg font-light text-neutral-300 leading-relaxed">
          <p>
            I build{" "}
            <span className="text-pink-400">innovative digital solutions</span>{" "}
            and teach others to amplify their{" "}
            <span className="text-pink-400">digital presence</span> through{" "}
            <span className="text-pink-400">code, design, and content</span>.
          </p>

          <div className="flex flex-col gap-1 text-base">
            <p>
              <span className="text-pink-400 font-medium">Founder</span> @{" "}
              <Link
                href="https://www.infinitestudiox.art/"
                target="_blank"
                className="hover:text-pink-400 transition-colors"
              >
                InfiniteStudioX
              </Link>{" "}
              &{" "}
              <Link
                href="https://www.shadowrites.in/"
                target="_blank"
                className="hover:text-pink-400 transition-colors"
              >
                ShadowRites
              </Link>
            </p>
            <a
              href="mailto:xharish52@gmail.com"
              className="text-neutral-400 hover:text-pink-400 transition-colors w-fit"
            >
              xharish52@gmail.com
            </a>
          </div>

          <p className="flex flex-wrap items-center gap-4">
            <Link
              href="https://calendly.com/xharish52/30min"
              target="_blank"
              className="group relative inline-block text-pink-400 hover:text-white transition-colors"
            >
              <span className="relative z-10">Book a Call</span>
              {/* Micro animation underline effect */}
              <span className="absolute bottom-[-2px] left-0 w-0 h-[0.5px] bg-pink-400/60 group-hover:w-full transition-all duration-300 ease-out"></span>
              {/* Hover tooltip */}
              <span className="absolute bottom-full left-0 mb-2 px-2 py-1 text-xs text-neutral-400 bg-neutral-900 border border-neutral-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                for clients
              </span>
            </Link>

            {/* Student Badge */}
            <StudentBadge />
          </p>
        </div>
      </div>

      {/* Right Side - Large Image */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:flex-shrink-0">
        <div className="relative w-72 xl:w-80 aspect-[3/4]">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-transparent rounded-3xl blur-2xl"></div>

          {/* Image Container */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm">
            <Image
              src="/assets/face.jpg"
              alt="Mohammad Harish"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
