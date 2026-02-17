import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_API_TOKEN;
  const username = "MUKE-coder";

  try {
    // Authenticated request returns total_private_repos + public_repos
    if (token) {
      const res = await fetch("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 3600 },
      });
      const data = await res.json();
      const total = (data.public_repos ?? 0) + (data.total_private_repos ?? 0);
      return NextResponse.json({ repos: total });
    }

    // Fallback: unauthenticated (public repos only)
    const res = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    return NextResponse.json({ repos: data.public_repos ?? 0 });
  } catch {
    return NextResponse.json({ repos: 0 }, { status: 500 });
  }
}
