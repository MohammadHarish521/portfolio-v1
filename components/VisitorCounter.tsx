"use client";

import { useEffect, useState } from "react";

const VISIT_TRACKED_KEY = "portfolio-visit-tracked";

let sharedCountRequest: Promise<number> | null = null;

async function loadSharedCount(): Promise<number> {
  const alreadyCounted = sessionStorage.getItem(VISIT_TRACKED_KEY) === "1";
  const response = await fetch("/api/visits", {
    method: alreadyCounted ? "GET" : "POST",
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Counter unavailable");
  }

  const data = (await response.json()) as { value?: number };
  if (typeof data.value !== "number") {
    throw new Error("Invalid counter response");
  }

  sessionStorage.setItem(VISIT_TRACKED_KEY, "1");
  return data.value;
}

export default function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    if (!sharedCountRequest) {
      sharedCountRequest = loadSharedCount().catch((error) => {
        sharedCountRequest = null;
        throw error;
      });
    }

    sharedCountRequest
      .then((count) => {
        if (!cancelled) {
          setVisitorCount(count);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setHasError(true);
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Helper function to add ordinal suffix (1st, 2nd, 3rd, etc.)
  const getOrdinalSuffix = (num: number): string => {
    const lastDigit = num % 10;
    const lastTwoDigits = num % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
      return "th";
    }

    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format number with commas
  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  if (hasError) {
    return null; // Don't show anything if completely failed
  }

  return (
    <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-sm transition-all hover:border-neutral-700 hover:bg-neutral-900">
      {/* Eye Icon */}
      <div className="flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-neutral-400"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </div>

      {/* Visitor Text */}
      <span className="text-sm text-neutral-400">
        {isLoading ? (
          <span className="animate-pulse">Counting visitors...</span>
        ) : visitorCount !== null ? (
          <>
            You are the{" "}
            <span className="text-pink-400 font-semibold">
              {formatNumber(visitorCount)}
              <sup className="text-xs">{getOrdinalSuffix(visitorCount)}</sup>
            </span>{" "}
            visitor
          </>
        ) : (
          <>
            Welcome,{" "}
            <span className="text-pink-400 font-semibold">visitor</span>!
          </>
        )}
      </span>
    </div>
  );
}
