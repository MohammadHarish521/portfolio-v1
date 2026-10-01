import { NextResponse } from "next/server";

const NAMESPACE = "mdharish-portfolio";
const KEY = "visits";

export const dynamic = "force-dynamic";

async function readCount(increment: boolean) {
  const action = increment ? "hit" : "get";
  const response = await fetch(
    `https://abacus.jasoncameron.dev/${action}/${NAMESPACE}/${KEY}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error(`Counter request failed (${response.status})`);
  }

  const data = (await response.json()) as { value?: number };
  if (typeof data.value !== "number") {
    throw new Error("Counter response was invalid");
  }

  return data.value;
}

function json(body: { value: number } | { error: string }, status = 200) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function GET() {
  try {
    return json({ value: await readCount(false) });
  } catch {
    return json({ error: "unavailable" }, 502);
  }
}

export async function POST() {
  try {
    return json({ value: await readCount(true) });
  } catch {
    return json({ error: "unavailable" }, 502);
  }
}
