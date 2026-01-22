import dayjs from "dayjs";
import type { MetadataRoute } from "next";

import { SITE_INFO } from "@/config/site";
import { getAllPosts, getPostsByCategory } from "@/data/blog";
import { goCourse } from "@/lib/courseData";
import { roadmapPhases } from "@/lib/roadmap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${SITE_INFO.url}/blog/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));

  const components = getPostsByCategory("components").map((post) => ({
    url: `${SITE_INFO.url}/components/${post.slug}`,
    lastModified: dayjs(post.metadata.updatedAt).toISOString(),
  }));
  const phases = roadmapPhases.map((phase) => ({
    url: `${SITE_INFO.url}/devops/phase/${phase.id}`,
    lastModified: new Date(),
  }));
  const sections = goCourse.sections.map((section) => ({
    url: `${SITE_INFO.url}/golang/section/${section.id}`,
    lastModified: new Date(),
  }));

  const routes = [
    "",
    "/courses",
    "/devops",
    "/ebooks",
    "/tools",
    "/mentorship",
    "/blog",
    "/components",
    "/golang",
    "/golang/features",
    "/golang/playground",
  ].map((route) => ({
    url: `${SITE_INFO.url}${route}`,
    lastModified: dayjs().toISOString(),
  }));

  return [...routes, ...posts, ...components, ...phases, ...sections];
}
