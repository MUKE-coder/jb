"use client";
import Head from "next/head";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";

const DevOpsRoadmap = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (section: string | null) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const roadmapData = [
    {
      id: "git",
      title: "Git",
      duration: "1-2 weeks",
      description:
        "Git is a version control system that lets you track changes in your code and collaborate with others.",
      details: [
        "Basic Git commands like clone, commit, push, and pull",
        "Branching and merging",
        "Resolving merge conflicts",
        "Working with remote repositories",
      ],
      resources: [
        {
          name: "Pro Git Book",
          url: "https://git-scm.com/book/en/v2",
          type: "free",
        },
        {
          name: "Learn Git by Atlassian",
          url: "https://www.atlassian.com/git",
          type: "free",
        },
        {
          name: "Learn Git Branching",
          url: "https://learngitbranching.js.org/",
          type: "free",
        },
        {
          name: "Git Command Explorer",
          url: "https://gitexplorer.com/",
          type: "free",
        },
      ],
    },
    {
      id: "programming",
      title: "Programming Languages",
      duration: "4-6 weeks",
      description:
        "Programming languages are used to automate tasks and manage configurations.",
      details: [
        "Next.js for full-stack applications",
        "Node.js for server-side scripting",
        "Hono for lightweight API development",
        "Golang for systems programming and performance-critical tasks",
      ],
      resources: [
        {
          name: "The Modern JavaScript Tutorial",
          url: "https://javascript.info/",
          type: "free",
        },
        {
          name: "Go by Example",
          url: "https://gobyexample.com/",
          type: "free",
        },
        {
          name: "Learn Go with Tests",
          url: "https://quii.gitbook.io/learn-go-with-tests",
          type: "free",
        },
      ],
    },
    {
      id: "linux",
      title: "Linux & Scripting",
      duration: "2-3 weeks",
      description:
        "Linux is the backbone of servers and development environments as a DevOps engineer.",
      details: [
        "Learn bash scripting language",
        "Basic Linux commands for working with the file system",
        "Permissions and ownership",
        "Processes and signals",
        "Managing packages",
      ],
      resources: [
        {
          name: "Shell Scripting Tutorial",
          url: "https://www.shellscript.sh/",
          type: "free",
        },
        {
          name: "Bash Reference Manual",
          url: "https://www.gnu.org/savannah-checkouts/gnu/bash/manual/bash.html",
          type: "free",
        },
        {
          name: "Linux command handbook",
          url: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
          type: "free",
        },
      ],
    },
    {
      id: "networking",
      title: "Networking & Security",
      duration: "2 weeks",
      description:
        "Networking is all about how computers communicate with each other.",
      details: [
        "OSI and TCP/IP models",
        "IP addressing and subnetting",
        "DNS and DHCP",
        "Networking protocols like HTTP, HTTPS, FTP, and SSH",
        "Firewalls and security groups",
        "Basic network troubleshooting using tools like Ping, trace route, and netstat",
      ],
      resources: [
        {
          name: "OSI Model Explained",
          url: "https://www.cloudflare.com/en-gb/learning/ddos/glossary/open-systems-interconnection-model-osi/",
          type: "free",
        },
        { name: "How DNS works", url: "https://howdns.works/", type: "free" },
        {
          name: "How HTTPS works",
          url: "https://howhttps.works/",
          type: "free",
        },
      ],
    },
    {
      id: "server-management",
      title: "Server Management",
      duration: "2-3 weeks",
      description:
        "Server management includes infrastructure monitoring and maintenance required for servers to operate reliably.",
      details: [
        "Forward and reverse proxies",
        "Caching servers",
        "Web Servers (Nginx, Apache, IIS)",
        "Load balancing",
        "Firewall configuration",
      ],
      resources: [
        {
          name: "What is a reverse proxy?",
          url: "https://www.cloudflare.com/en-gb/learning/cdn/glossary/reverse-proxy/",
          type: "free",
        },
        {
          name: "The NGINX Handbook",
          url: "https://www.freecodecamp.org/news/the-nginx-handbook/",
          type: "free",
        },
        {
          name: "What is load balancing?",
          url: "https://www.cloudflare.com/en-gb/learning/performance/what-is-load-balancing/",
          type: "free",
        },
      ],
    },
    {
      id: "containerization",
      title: "Containerization",
      duration: "3-4 weeks",
      description:
        "Containerization is about packaging an application and its dependencies into a container.",
      details: [
        "Docker as the primary tool",
        "Create Docker images",
        "Starting, stopping, and managing containers",
        "Write Dockerfiles",
        "Define and run multi-container applications using Docker Compose",
      ],
      resources: [
        {
          name: "Docker Crash Course",
          url: "https://www.youtube.com/watch?v=pg19Z8LL06w",
          type: "free",
        },
        {
          name: "Docker Tutorial for Beginners",
          url: "https://www.youtube.com/watch?v=3c-iBn73dDE",
          type: "free",
        },
        {
          name: "Ultimate Docker Compose Tutorial",
          url: "https://www.youtube.com/watch?v=SXwC9fSwct8",
          type: "free",
        },
      ],
    },
    {
      id: "orchestration",
      title: "Container Orchestration",
      duration: "4-6 weeks",
      description:
        "Orchestration tools help automate the deployment, scaling, and management of containerized applications.",
      details: [
        "Kubernetes as the primary orchestration tool",
        "Overall architecture including master node and worker nodes",
        "Key components such as pods, services, and deployments",
        "Managing resources",
        "Scaling applications",
        "Networking model in Kubernetes",
      ],
      resources: [
        {
          name: "Kubernetes Crash Course",
          url: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
          type: "free",
        },
        {
          name: "Kubernetes Learning Path",
          url: "https://azure.microsoft.com/en-us/resources/kubernetes-learning-path/",
          type: "free",
        },
        {
          name: "DevOps with Kubernetes",
          url: "https://devopswithkubernetes.com/",
          type: "free",
        },
      ],
    },
    {
      id: "iac",
      title: "Infrastructure as Code (IaC)",
      duration: "3-4 weeks",
      description:
        "Managing and provisioning computing infrastructure through machine-readable configuration files.",
      details: [
        "Terraform for its flexibility and widespread use",
        "Basic concepts like providers and resources",
        "Write Terraform configuration files",
        "Use Terraform modules",
        "Advanced concepts such as workspaces and remote state",
      ],
      resources: [
        {
          name: "Official Terraform Tutorials",
          url: "https://learn.hashicorp.com/terraform",
          type: "free",
        },
        {
          name: "A Comprehensive Guide to Terraform",
          url: "https://blog.gruntwork.io/a-comprehensive-guide-to-terraform-b3d32832baca",
          type: "free",
        },
        {
          name: "Getting Started With Ansible",
          url: "https://docs.ansible.com/ansible/latest/getting_started/",
          type: "free",
        },
      ],
    },
    {
      id: "ci-cd",
      title: "Continuous Integration/Continuous Deployment (CI/CD)",
      duration: "3-4 weeks",
      description:
        "CI/CD automates the integration and deployment of code changes.",
      details: [
        "Jenkins for its versatility and strong community support",
        "GitHub Actions for seamless integration with GitHub repositories",
        "Create and manage pipelines",
        "Integrate automated tests into pipelines",
        "Automate build and deployment processes",
      ],
      resources: [
        {
          name: "CI/CD Pipeline: A Gentle Introduction",
          url: "https://semaphoreci.com/blog/cicd-pipeline",
          type: "free",
        },
        {
          name: "Learn GitHub Actions",
          url: "https://learn.microsoft.com/en-us/users/githubtraining/collections/n5p4a5z7keznp5",
          type: "free",
        },
        {
          name: "GitHub Actions Tutorial",
          url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
          type: "free",
        },
        {
          name: "GitLab CI/CD Tutorial",
          url: "https://www.youtube.com/watch?v=qP8kir2GUgo",
          type: "free",
        },
      ],
    },
    {
      id: "monitoring",
      title: "Monitoring & Observability",
      duration: "3-4 weeks",
      description:
        "Tracking the performance and health of your applications and infrastructure.",
      details: [
        "Prometheus and Grafana as primary tools",
        "Architecture and data model of Prometheus",
        "Collect metrics from various sources",
        "Write queries to extract and analyze metrics data",
        "Set up alerts",
      ],
      resources: [
        {
          name: "What Is Observability?",
          url: "https://devopscube.com/what-is-observability/",
          type: "free",
        },
        {
          name: "Learn Prometheus",
          url: "https://prometheus.io/docs/tutorials/getting_started/",
          type: "free",
        },
        {
          name: "Learn Grafana",
          url: "https://grafana.com/tutorials/",
          type: "free",
        },
        {
          name: "Beautiful Dashboards with Grafana",
          url: "https://www.youtube.com/watch?v=fzny5uUaAeY",
          type: "free",
        },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Providers",
      duration: "4-6 weeks",
      description:
        "Cloud providers offer a range of services for building and deploying applications.",
      details: [
        "Focus on one cloud provider (AWS recommended)",
        "Launch, configure, and manage virtual servers",
        "Store and manage data",
        "Managing users, groups, and roles",
        "Set up and manage isolated networks",
      ],
      resources: [
        {
          name: "Serverless 101",
          url: "https://serverlessland.com/learn/serverless-101",
          type: "free",
        },
        {
          name: "AWS Well-Architected",
          url: "https://aws.amazon.com/architecture/well-architected/",
          type: "free",
        },
        {
          name: "Google Cloud Well-Architected Framework",
          url: "https://cloud.google.com/architecture/framework",
          type: "free",
        },
      ],
    },
    {
      id: "engineering-practices",
      title: "Software Engineering Practices",
      duration: "2-3 weeks",
      description: "Understanding SDLC and working effectively in Agile teams.",
      details: [
        "Scrum methodology",
        "All phases of SDLC",
        "Automation testing",
        "Agile project management tools",
      ],
      resources: [
        {
          name: "What is Scrum?",
          url: "https://www.atlassian.com/agile/scrum",
          type: "free",
        },
        {
          name: "Software Development Life Cycle (SDLC)",
          url: "https://www.guru99.com/software-development-life-cycle-tutorial.html",
          type: "free",
        },
        {
          name: "Learn Automation Testing",
          url: "https://blog.testproject.io/2020/03/26/automation-testing-for-beginners-ultimate-guide/",
          type: "free",
        },
      ],
    },
    {
      id: "devsecops",
      title: "DevSecOps Fundamentals",
      duration: "2-3 weeks",
      description: "Integrating security throughout the DevOps lifecycle.",
      details: [
        "Automate security testing (SAST and DAST)",
        "Manage secrets and credentials",
        "Set up security policies",
        "Supply chain security",
      ],
      resources: [
        {
          name: "OWASP DevSecOps Guideline",
          url: "https://owasp.org/www-project-devsecops-guideline/",
          type: "free",
        },
        { name: "SLSA Framework", url: "https://slsa.dev/", type: "free" },
        {
          name: "HashiCorp Vault Documentation",
          url: "https://developer.hashicorp.com/vault/docs",
          type: "free",
        },
      ],
    },
  ];

  const books = [
    {
      title: "The DevOps Handbook",
      author: "Gene Kim, Patrick Debois, John Willis, Jez Humble",
      url: "https://amzn.to/3IJPv0h",
    },
    {
      title: "Accelerate",
      author: "Nicole Forsgren, Jez Humble, Gene Kim",
      url: "https://amzn.to/3XRShoA",
    },
    {
      title: "Continuous Delivery",
      author: "Jez Humble, David Farley",
      url: "https://amzn.to/3XRShoA",
    },
    {
      title: "Site Reliability Engineering",
      author: "Betsy Beyer, Chris Jones, Jennifer Petoff, Niall Richard Murphy",
      url: "https://sre.google/books/",
    },
    {
      title: "Team Topologies",
      author: "Matthew Skelton, Manuel Pais",
      url: "https://amzn.to/3Zb83fl",
    },
  ];

  const tools = [
    {
      category: "Work Tracking",
      items: ["Asana", "Monday", "Jira", "Trello", "Azure Boards"],
    },
    {
      category: "Source Code Control",
      items: ["Git", "GitHub", "GitLab", "BitBucket", "Azure DevOps"],
    },
    {
      category: "CI/CD",
      items: [
        "Jenkins",
        "Team City",
        "GitHub Actions",
        "Travis CI",
        "Bamboo",
        "Circle CI",
        "Azure Pipelines",
      ],
    },
    {
      category: "Configuration Management",
      items: ["Terraform", "Ansible", "Puppet", "Chef"],
    },
    {
      category: "Container Orchestration",
      items: ["Docker", "Kubernetes", "Red Hat OpenShift"],
    },
    {
      category: "Monitoring",
      items: ["Prometheus", "Grafana", "Splunk", "Dynatrace", "Kibana"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Head>
        <title>
          Complete DevOps Roadmap 2025 | Master DevOps Tools & Technologies
        </title>
        <meta
          name="description"
          content="Comprehensive roadmap to become a DevOps engineer with modern tools and technologies including Next.js, Node.js, Kubernetes, Docker, and more."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">DevOps Engineer Roadmap 2025</h1>
          <p className="mt-2">
            A complete guide to mastering DevOps tools and technologies in 10-14
            months
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 rounded-lg p-6 shadow-md">
          <h2 className="mb-4 text-2xl font-semibold">Roadmap Overview</h2>
          <p className="mb-4">
            This roadmap is designed to take you from beginner to proficient
            DevOps engineer in 10-14 months, assuming you dedicate 3-5 hours of
            study every day. The roadmap has been updated with modern tools and
            technologies to ensure you learn the most relevant skills.
          </p>
          <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
            <p className="text-blue-700">
              <strong>Note:</strong> We&apos;ve updated the original roadmap
              with modern technologies including Next.js, Node.js, Hono, Golang,
              and GitHub Actions.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {roadmapData.map((item, index) => (
            <div key={item.id} className="overflow-hidden rounded-lg shadow-md">
              <button
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleSection(item.id)}
              >
                <div className="flex items-center">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-100">
                    <span className="font-bold text-blue-600">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="mr-4 rounded-full border px-3 py-1 text-sm font-medium">
                    {item.duration}
                  </span>
                  <svg
                    className={`h-5 w-5 transform transition-transform ${
                      activeSection === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              {activeSection === item.id && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="mb-3 font-medium">
                      What you&apos;ll learn:
                    </h4>
                    <ul className="mb-6 space-y-2">
                      {item.details.map((detail, i) => (
                        <li key={i} className="flex items-start">
                          <svg
                            className="mt-0.5 mr-2 h-5 w-5 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="mb-3 font-medium">Learning resources:</h4>
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {item.resources.map((resource, i) => (
                        <a
                          key={i}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center rounded-lg border p-3 transition-colors"
                        >
                          <span className="mr-3 rounded px-2 py-1 text-xs font-medium">
                            {resource.type === "free" ? "FREE" : "PAID"}
                          </span>
                          <span className="">{resource.name}</span>
                          <svg
                            className="ml-auto h-4 w-4 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg border p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">Recommended Books</h2>
            <hr />
            <div className="space-y-4">
              {books.map((book, index) => (
                <a
                  key={index}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg border p-4 shadow transition-colors"
                >
                  <h3 className="font-medium">{book.title}</h3>
                  <p className="mt-1 text-sm">by {book.author}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-lg border p-6 shadow-md">
            <h2 className="mb-4 text-2xl font-semibold">DevOps Tools</h2>
            <hr />
            <div className="space-y-0">
              {tools.map((toolCategory, index) => (
                <div key={index} className="rounded-lg p-4">
                  <h3 className="mb-2 font-medium">{toolCategory.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolCategory.items.map((tool, i) => (
                      <Button
                        key={i}
                        className="rounded-full px-3 py-1 text-sm"
                      >
                        {tool}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DevOpsRoadmap;
