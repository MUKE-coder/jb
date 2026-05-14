export type TechStack = {
  key: string; // Unique identifier used to fetch the corresponding icon
  title: string; // Display name of the technology
  href: string; // Official website URL of the technology
  categories: string[];
  theme?: boolean; // If `true`, the icon switches between -light.svg / -dark.svg
  isLocal?: boolean; // If `true`, the icon is loaded from /public/icons/
  // Override the local icon filename when it doesn't follow the
  // default `${key}.png` convention. Lets you use .svg, .jpeg, or
  // a name that differs from the key (e.g. "cloudflare-icon.svg" for
  // key "cloudflare"). Only used when `isLocal: true`.
  iconFile?: string;
  // Icon resolution order when rendered:
  // - theme=true → https://assets.chanhdai.com/images/tech-stack-icons/[key]-{light,dark}.svg
  // - isLocal + iconFile → /icons/[iconFile]
  // - isLocal (no iconFile) → /icons/[key].png
  // - default → https://assets.chanhdai.com/images/tech-stack-icons/[key].svg
};
