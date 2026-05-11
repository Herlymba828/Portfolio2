import { projects, type Project } from "@/data/projects";

/**
 * GitHub repository interface matching GitHub API response
 */
interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

/**
 * Fetches GitHub projects from the GitHub API with 24h cache
 * Falls back to static projects data if API is unavailable
 * 
 * @returns Promise<Project[]> - Array of projects
 */
export async function getGithubProjects(): Promise<Project[]> {
  try {
    // Extract username from GitHub URL
    const githubUsername = "Herlymba828";
    
    const res = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`,
      {
        next: { revalidate: 86400 }, // Cache for 24 hours (86400 seconds)
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned status ${res.status}`);
    }

    const repos: GithubRepo[] = await res.json();

    // Transform GitHub repos to Project interface
    const githubProjects: Project[] = repos.map((repo, index) => ({
      id: repo.id,
      title: repo.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      description: repo.description || "No description available",
      stack: repo.topics.length > 0 ? repo.topics : [repo.language || "Unknown"],
      features: [],
      architecture: "",
      results: [`${repo.stargazers_count} stars on GitHub`],
      image: `/projects/github-${index + 1}.png`,
      github: repo.html_url,
      demo: repo.homepage,
      featured: false,
      category: determineCategory(repo.topics, repo.language),
    }));

    return githubProjects;
  } catch (error) {
    console.warn(
      "GitHub API unavailable, falling back to static projects:",
      error instanceof Error ? error.message : "Unknown error"
    );
    
    // Fallback to static projects from projects.ts
    return projects;
  }
}

/**
 * Determines project category based on topics and language
 */
function determineCategory(
  topics: string[],
  language: string | null
): Project["category"] {
  const topicsLower = topics.map((t) => t.toLowerCase());
  
  if (
    topicsLower.some((t) =>
      ["devops", "docker", "kubernetes", "ci-cd", "infrastructure"].includes(t)
    )
  ) {
    return "infra";
  }
  
  if (
    topicsLower.some((t) =>
      ["react-native", "mobile", "ios", "android"].includes(t)
    )
  ) {
    return "mobile";
  }
  
  if (
    topicsLower.some((t) => ["ai", "ml", "machine-learning", "deep-learning"].includes(t)) ||
    language?.toLowerCase() === "rust" ||
    language?.toLowerCase() === "c++"
  ) {
    return "ai";
  }
  
  return "web";
}
