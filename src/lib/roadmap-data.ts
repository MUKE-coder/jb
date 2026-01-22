export interface Resource {
  title: string;
  url: string;
  type: "article" | "video" | "course" | "documentation";
}

export interface Project {
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
}

export interface Phase {
  id: string;
  number: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  skills: string[];
  resources: Resource[];
  projects: Project[];
  subtopics: string[];
}

export const roadmapPhases: Phase[] = [
  {
    id: "git",
    number: 1,
    title: "Learn Git",
    description:
      "Master version control with Git, the foundation of modern DevOps",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-500",
    skills: ["Commits", "Branching", "Merging", "Pull Requests", "Rebasing"],
    subtopics: [
      "Basic commands",
      "Pull request workflow",
      "Branching strategies",
      "Conflict resolution",
    ],
    resources: [
      {
        title: "Git Official Documentation",
        url: "https://git-scm.com/doc",
        type: "documentation",
      },
      {
        title: "Pro Git Book",
        url: "https://git-scm.com/book/en/v2",
        type: "article",
      },
      {
        title: "GitHub Learning Lab",
        url: "https://github.com/skills",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Personal Portfolio Repo",
        description:
          "Create a Git repository for your portfolio with proper branching strategy",
        difficulty: "beginner",
      },
      {
        title: "Collaborative Project",
        description: "Contribute to an open-source project using Git workflows",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "programming",
    number: 2,
    title: "Learn Programming Language",
    description:
      "Choose and master a programming language for scripting and automation",
    icon: "📝",
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "Go", "JavaScript", "Bash", "Ruby"],
    subtopics: [
      "Variables and data types",
      "Functions and modules",
      "Error handling",
      "File operations",
    ],
    resources: [
      {
        title: "Python Official Docs",
        url: "https://docs.python.org/",
        type: "documentation",
      },
      {
        title: "Go Tour",
        url: "https://go.dev/tour/welcome/1",
        type: "course",
      },
      {
        title: "Codecademy Programming Courses",
        url: "https://codecademy.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Automation Script",
        description: "Write scripts to automate repetitive tasks",
        difficulty: "beginner",
      },
      {
        title: "CLI Tool",
        description: "Build a command-line tool with argument parsing",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "linux",
    number: 3,
    title: "Learn Linux",
    description:
      "Understand the Linux operating system and command-line operations",
    icon: "🐧",
    color: "from-blue-500 to-cyan-500",
    skills: [
      "Shell commands",
      "File system",
      "Networking",
      "Permissions",
      "Processes",
    ],
    subtopics: [
      "Command-line basics",
      "File and directory management",
      "User and permissions",
      "System monitoring",
    ],
    resources: [
      {
        title: "Linux Command Line Basics",
        url: "https://ubuntu.com/tutorials/command-line-for-beginners",
        type: "article",
      },
      {
        title: "Linux Academy",
        url: "https://linuxacademy.com",
        type: "course",
      },
      {
        title: "The Linux Documentation Project",
        url: "https://tldp.org",
        type: "documentation",
      },
    ],
    projects: [
      {
        title: "Linux Server Setup",
        description: "Set up a Linux VM and configure basic services",
        difficulty: "beginner",
      },
      {
        title: "Shell Script Automation",
        description: "Create shell scripts for system administration tasks",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "networking",
    number: 4,
    title: "Learn Networking & Security",
    description: "Master networking concepts and security principles",
    icon: "🔒",
    color: "from-amber-500 to-orange-500",
    skills: ["OSI Model", "DNS", "HTTP/HTTPS", "SSH", "Security basics"],
    subtopics: [
      "DNS and domain names",
      "HTTP/HTTPS protocols",
      "SSL/TLS certificates",
      "Firewall basics",
    ],
    resources: [
      {
        title: "Networking Fundamentals",
        url: "https://www.coursera.org/learn/networking-basics",
        type: "course",
      },
      {
        title: "OWASP Security Guidelines",
        url: "https://owasp.org",
        type: "documentation",
      },
      {
        title: "SANS Internet Storm Center",
        url: "https://isc.sans.edu",
        type: "article",
      },
    ],
    projects: [
      {
        title: "SSL Certificate Setup",
        description: "Configure SSL certificates for a web server",
        difficulty: "intermediate",
      },
      {
        title: "Firewall Configuration",
        description: "Set up and manage firewall rules",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "servers",
    number: 5,
    title: "Learn Server Management",
    description: "Deploy and manage web servers and databases",
    icon: "🖥️",
    color: "from-pink-500 to-rose-500",
    skills: ["Nginx", "Apache", "PostgreSQL", "MySQL", "Load balancing"],
    subtopics: [
      "Web server configuration",
      "Reverse proxying",
      "Database administration",
      "Backup strategies",
    ],
    resources: [
      {
        title: "Nginx Documentation",
        url: "https://nginx.org/en/docs/",
        type: "documentation",
      },
      {
        title: "PostgreSQL Tutorial",
        url: "https://www.postgresql.org/docs/",
        type: "documentation",
      },
      {
        title: "Linux Server Administration Course",
        url: "https://pluralsight.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Deploy Web Application",
        description: "Deploy a web app using Nginx reverse proxy",
        difficulty: "intermediate",
      },
      {
        title: "Database Backup Strategy",
        description: "Implement automated database backups",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "containers",
    number: 6,
    title: "Learn Containers",
    description: "Containerize applications using Docker",
    icon: "🐳",
    color: "from-amber-400 to-amber-600",
    skills: [
      "Docker",
      "Container images",
      "Docker Compose",
      "Registry",
      "Best practices",
    ],
    subtopics: [
      "Docker fundamentals",
      "Dockerfile creation",
      "Docker Compose",
      "Container registries",
    ],
    resources: [
      {
        title: "Docker Official Documentation",
        url: "https://docs.docker.com",
        type: "documentation",
      },
      {
        title: "Docker for Beginners",
        url: "https://docker.com/101-tutorial",
        type: "course",
      },
      {
        title: "Play with Docker",
        url: "https://labs.play-with-docker.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Containerize an Application",
        description: "Create a Dockerfile and containerize a simple app",
        difficulty: "beginner",
      },
      {
        title: "Multi-Container Setup",
        description: "Use Docker Compose for multi-service applications",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "orchestration",
    number: 7,
    title: "Learn Container Orchestration",
    description: "Manage containerized applications at scale with Kubernetes",
    icon: "⎈",
    color: "from-yellow-400 to-yellow-600",
    skills: [
      "Kubernetes basics",
      "Pods",
      "Services",
      "Deployments",
      "StatefulSets",
    ],
    subtopics: [
      "K8s architecture",
      "Pods and services",
      "Deployments",
      "ConfigMaps and Secrets",
    ],
    resources: [
      {
        title: "Kubernetes Official Documentation",
        url: "https://kubernetes.io/docs/",
        type: "documentation",
      },
      {
        title: "Kubernetes for Beginners",
        url: "https://kubernetes.io/docs/tasks/",
        type: "course",
      },
      {
        title: "KodeKloud Kubernetes Course",
        url: "https://kodekloud.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Deploy to Kubernetes",
        description: "Deploy a containerized app to a K8s cluster",
        difficulty: "intermediate",
      },
      {
        title: "K8s Networking",
        description: "Set up services and networking in Kubernetes",
        difficulty: "advanced",
      },
    ],
  },
  {
    id: "iac",
    number: 8,
    title: "Learn Infrastructure as Code",
    description:
      "Define infrastructure programmatically with Terraform and Ansible",
    icon: "📦",
    color: "from-orange-500 to-red-500",
    skills: [
      "Terraform",
      "Ansible",
      "CloudFormation",
      "Provisioning",
      "Configuration management",
    ],
    subtopics: [
      "Terraform basics",
      "Ansible playbooks",
      "Cloud providers",
      "State management",
    ],
    resources: [
      {
        title: "Terraform Documentation",
        url: "https://terraform.io/docs",
        type: "documentation",
      },
      {
        title: "Ansible Documentation",
        url: "https://docs.ansible.com",
        type: "documentation",
      },
      {
        title: "HashiCorp Learn",
        url: "https://learn.hashicorp.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Terraform AWS Setup",
        description: "Create AWS infrastructure using Terraform",
        difficulty: "intermediate",
      },
      {
        title: "Ansible Configuration",
        description: "Automate server configuration with Ansible",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "cicd",
    number: 9,
    title: "Learn CI/CD",
    description: "Build continuous integration and deployment pipelines",
    icon: "🔄",
    color: "from-gray-600 to-gray-800",
    skills: [
      "GitHub Actions",
      "GitLab CI",
      "Jenkins",
      "Testing",
      "Deployment pipelines",
    ],
    subtopics: [
      "CI/CD concepts",
      "Pipeline design",
      "Testing strategies",
      "Deployment automation",
    ],
    resources: [
      {
        title: "GitHub Actions Documentation",
        url: "https://docs.github.com/en/actions",
        type: "documentation",
      },
      {
        title: "Jenkins Documentation",
        url: "https://www.jenkins.io/doc/",
        type: "documentation",
      },
      {
        title: "CI/CD Best Practices",
        url: "https://martinfowler.com/articles/continuousIntegration.html",
        type: "article",
      },
    ],
    projects: [
      {
        title: "GitHub Actions Pipeline",
        description: "Create a CI/CD pipeline with GitHub Actions",
        difficulty: "beginner",
      },
      {
        title: "Multi-Stage Deployment",
        description: "Build a multi-stage CI/CD pipeline",
        difficulty: "advanced",
      },
    ],
  },
  {
    id: "monitoring",
    number: 10,
    title: "Learn Monitoring & Observability",
    description: "Monitor systems and applications for reliability",
    icon: "📊",
    color: "from-purple-600 to-purple-800",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Logging", "Alerting"],
    subtopics: [
      "Metrics collection",
      "Visualization",
      "Log aggregation",
      "Alert management",
    ],
    resources: [
      {
        title: "Prometheus Documentation",
        url: "https://prometheus.io/docs/",
        type: "documentation",
      },
      {
        title: "Grafana Documentation",
        url: "https://grafana.com/docs/",
        type: "documentation",
      },
      {
        title: "Observability Engineering",
        url: "https://www.oreilly.com/library/view/observability-engineering/",
        type: "article",
      },
    ],
    projects: [
      {
        title: "Set Up Prometheus",
        description: "Configure Prometheus for application monitoring",
        difficulty: "intermediate",
      },
      {
        title: "Grafana Dashboards",
        description: "Create monitoring dashboards with Grafana",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "cloud",
    number: 11,
    title: "Learn Cloud Provider",
    description: "Master cloud platforms like AWS, Google Cloud, or Azure",
    icon: "☁️",
    color: "from-teal-500 to-green-500",
    skills: [
      "AWS/GCP/Azure",
      "Compute",
      "Storage",
      "Networking",
      "Cost optimization",
    ],
    subtopics: [
      "Cloud services overview",
      "Compute options",
      "Database services",
      "Security in cloud",
    ],
    resources: [
      {
        title: "AWS Documentation",
        url: "https://docs.aws.amazon.com/",
        type: "documentation",
      },
      {
        title: "Google Cloud Learning Path",
        url: "https://cloud.google.com/learn",
        type: "course",
      },
      {
        title: "A Cloud Guru",
        url: "https://acloudguru.com",
        type: "course",
      },
    ],
    projects: [
      {
        title: "Deploy on Cloud",
        description: "Deploy an application to AWS, GCP, or Azure",
        difficulty: "intermediate",
      },
      {
        title: "Serverless Application",
        description: "Build and deploy a serverless application",
        difficulty: "intermediate",
      },
    ],
  },
  {
    id: "practices",
    number: 12,
    title: "Learn Software Engineering Practices",
    description: "Master DevOps best practices and methodologies",
    icon: "📋",
    color: "from-red-500 to-rose-500",
    skills: [
      "Agile",
      "Testing",
      "Documentation",
      "Code review",
      "DevOps culture",
    ],
    subtopics: [
      "Agile methodologies",
      "Testing strategies",
      "Documentation",
      "Team collaboration",
    ],
    resources: [
      {
        title: "The DevOps Handbook",
        url: "https://www.oreilly.com/library/view/the-devops-handbook/",
        type: "article",
      },
      {
        title: "Site Reliability Engineering",
        url: "https://sre.google/books/",
        type: "article",
      },
      {
        title: "Agile Manifesto",
        url: "https://agilemanifesto.org",
        type: "article",
      },
    ],
    projects: [
      {
        title: "Implement Best Practices",
        description: "Apply DevOps practices to a real project",
        difficulty: "advanced",
      },
      {
        title: "DevOps Culture Workshop",
        description: "Lead a workshop on DevOps culture in your team",
        difficulty: "advanced",
      },
    ],
  },
];
