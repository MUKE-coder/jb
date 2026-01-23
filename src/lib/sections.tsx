export const sections = [
  {
    id: 0,
    title: "What is Git?",
    icon: "📚",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Definition
              </h3>
              <p className="leading-relaxed text-foreground/80">
                Git is a{" "}
                <span className="font-semibold text-accent">
                  distributed version control system
                </span>{" "}
                that tracks changes in your code over time. It allows you to
                save snapshots of your project, collaborate with teammates, and
                revert to previous versions if needed.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Why Use Git?
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>History Tracking:</strong> See who changed what and
                    when
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Collaboration:</strong> Work with others without
                    conflicts
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Safety:</strong> Revert mistakes instantly
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>
                    <strong>Branching:</strong> Experiment without affecting
                    main code
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="text-sm text-foreground/70">
                <strong>Pro Tip:</strong> Git is local and works offline. GitHub
                is the cloud platform that hosts your repositories.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg
              width="280"
              height="300"
              className="rounded-lg border border-muted bg-secondary/30"
              style={
                {
                  "--svg-primary": "var(--primary)",
                  "--svg-foreground": "var(--foreground)",
                  "--svg-border": "var(--border)",
                } as React.CSSProperties
              }
            >
              {/* Center circle */}
              <circle
                cx="140"
                cy="120"
                r="50"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
                opacity="0.5"
              />
              <circle
                cx="140"
                cy="120"
                r="40"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              />
              <text
                x="140"
                y="130"
                textAnchor="middle"
                fontSize="28"
                fill="var(--primary)"
              >
                Git
              </text>

              {/* Surrounding nodes */}
              <circle
                cx="80"
                cy="60"
                r="25"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <text
                x="80"
                y="68"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                History
              </text>

              <circle
                cx="200"
                cy="60"
                r="25"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <text
                x="200"
                y="68"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                Branch
              </text>

              <circle
                cx="50"
                cy="150"
                r="25"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <text
                x="50"
                y="158"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                Merge
              </text>

              <circle
                cx="230"
                cy="150"
                r="25"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1.5"
              />
              <text
                x="230"
                y="158"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                Collab
              </text>

              {/* Connecting lines */}
              <line
                x1="110"
                y1="80"
                x2="140"
                y2="100"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="170"
                y1="80"
                x2="140"
                y2="100"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="80"
                y1="120"
                x2="110"
                y2="120"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="170"
                y1="120"
                x2="200"
                y2="120"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    title: "Working Directory, Staging Area & Repository",
    icon: "📂",
    content: (
      <div className="space-y-8">
        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
            <div className="mb-3 text-3xl">💻</div>
            <h3 className="mb-2 font-bold text-foreground">
              Working Directory
            </h3>
            <p className="mb-4 text-sm text-foreground/70">
              Your local files on disk. When you edit a file, it&apos;s modified
              here.
            </p>
            <code className="block rounded bg-background px-2 py-1 text-xs text-accent">
              Untracked files
            </code>
          </div>

          <div className="rounded-lg border-l-4 border-accent bg-secondary p-6">
            <div className="mb-3 text-3xl">📋</div>
            <h3 className="mb-2 font-bold text-foreground">Staging Area</h3>
            <p className="mb-4 text-sm text-foreground/70">
              A holding area for changes you want to commit.
            </p>
            <code className="block rounded bg-background px-2 py-1 text-xs text-accent">
              Ready to commit
            </code>
          </div>

          <div className="rounded-lg border-l-4 border-primary bg-secondary p-6">
            <div className="mb-3 text-3xl">💾</div>
            <h3 className="mb-2 font-bold text-foreground">Repository</h3>
            <p className="mb-4 text-sm text-foreground/70">
              Permanent record of all committed changes.
            </p>
            <code className="block rounded bg-background px-2 py-1 text-xs text-accent">
              Committed history
            </code>
          </div>
        </div>

        <div className="rounded-lg border border-muted bg-card p-8">
          <h3 className="mb-6 text-lg font-semibold text-primary">
            The Git Workflow
          </h3>
          <svg
            width="100%"
            height="200"
            viewBox="0 0 800 200"
            className="rounded-lg border border-muted bg-secondary/50"
          >
            {/* Boxes */}
            <rect
              x="20"
              y="50"
              width="140"
              height="100"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              rx="8"
            />
            <text
              x="90"
              y="85"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              Working
            </text>
            <text
              x="90"
              y="103"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              Directory
            </text>

            <rect
              x="250"
              y="50"
              width="140"
              height="100"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              rx="8"
            />
            <text
              x="320"
              y="85"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              Staging
            </text>
            <text
              x="320"
              y="103"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              Area
            </text>

            <rect
              x="480"
              y="50"
              width="140"
              height="100"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
              rx="8"
            />
            <text
              x="550"
              y="85"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              Repository
            </text>
            <text
              x="550"
              y="103"
              textAnchor="middle"
              fontSize="14"
              fontWeight="bold"
              fill="var(--primary)"
            >
              (.git)
            </text>

            {/* Arrows */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="9"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 10 3, 0 6" fill="var(--muted)" />
              </marker>
            </defs>

            <line
              x1="165"
              y1="100"
              x2="250"
              y2="100"
              stroke="var(--muted)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <text
              x="205"
              y="90"
              textAnchor="middle"
              fontSize="12"
              fill="var(--muted-foreground)"
            >
              git add
            </text>

            <line
              x1="395"
              y1="100"
              x2="480"
              y2="100"
              stroke="var(--muted)"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
            <text
              x="435"
              y="90"
              textAnchor="middle"
              fontSize="12"
              fill="var(--muted-foreground)"
            >
              git commit
            </text>
          </svg>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Key Commands</h3>
          <div className="rounded-lg border border-muted bg-secondary p-4">
            <p className="mb-2 text-sm text-foreground/70">
              <strong>Edit files:</strong> Make changes in your working
              directory
            </p>
            <code className="text-xs text-accent">$ git status</code>
          </div>
          <div className="rounded-lg border border-muted bg-secondary p-4">
            <p className="mb-2 text-sm text-foreground/70">
              <strong>Stage changes:</strong> Move files to staging area
            </p>
            <code className="text-xs text-accent">$ git add &lt;file&gt;</code>
          </div>
          <div className="rounded-lg border border-muted bg-secondary p-4">
            <p className="mb-2 text-sm text-foreground/70">
              <strong>Commit:</strong> Save to repository
            </p>
            <code className="text-xs text-accent">
              $ git commit -m &quot;message&quot;
            </code>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Commits: Saving Your Work",
    icon: "💾",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                What is a Commit?
              </h3>
              <p className="leading-relaxed text-foreground/80">
                A commit is a{" "}
                <span className="font-semibold text-accent">
                  snapshot of your entire project
                </span>{" "}
                at a specific moment in time. Each commit has:
              </p>
              <ul className="mt-3 ml-4 space-y-2 text-foreground/80">
                <li>
                  • <strong>Hash:</strong> Unique identifier (SHA-1)
                </li>
                <li>
                  • <strong>Author:</strong> Who made the change
                </li>
                <li>
                  • <strong>Message:</strong> Description of changes
                </li>
                <li>
                  • <strong>Timestamp:</strong> When it was created
                </li>
                <li>
                  • <strong>Parent:</strong> Link to previous commit
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Benefits
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Save progress at meaningful points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Easy to review what changed and why</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Revert to any previous state instantly</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Understand project evolution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg
              width="300"
              height="280"
              className="rounded-lg border border-muted bg-secondary/20"
            >
              {/* Timeline */}
              <line
                x1="40"
                y1="150"
                x2="280"
                y2="150"
                stroke="var(--primary)"
                strokeWidth="3"
              />

              {/* Commits */}
              <circle cx="60" cy="150" r="12" fill="var(--primary)" />
              <text
                x="60"
                y="185"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Commit 1
              </text>
              <text
                x="60"
                y="200"
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-foreground)"
              >
                Initial setup
              </text>

              <circle
                cx="130"
                cy="150"
                r="12"
                fill="var(--primary)"
                opacity="0.7"
              />
              <text
                x="130"
                y="185"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Commit 2
              </text>
              <text
                x="130"
                y="200"
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-foreground)"
              >
                Add feature A
              </text>

              <circle
                cx="200"
                cy="150"
                r="12"
                fill="var(--primary)"
                opacity="0.5"
              />
              <text
                x="200"
                y="185"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Commit 3
              </text>
              <text
                x="200"
                y="200"
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-foreground)"
              >
                Fix bug
              </text>

              <circle
                cx="260"
                cy="150"
                r="12"
                fill="var(--primary)"
                opacity="0.3"
              />
              <text
                x="260"
                y="185"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Commit 4
              </text>
              <text
                x="260"
                y="200"
                textAnchor="middle"
                fontSize="10"
                fill="var(--muted-foreground)"
              >
                Refactor
              </text>

              {/* Arrows showing history */}
              <text
                x="150"
                y="50"
                textAnchor="middle"
                fontSize="13"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                Commit History
              </text>
              <line
                x1="60"
                y1="130"
                x2="60"
                y2="90"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="130"
                y1="130"
                x2="130"
                y2="75"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="200"
                y1="130"
                x2="200"
                y2="75"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <line
                x1="260"
                y1="130"
                x2="260"
                y2="90"
                stroke="var(--muted)"
                strokeWidth="1"
                strokeDasharray="3,3"
              />

              {/* You are here indicator */}
              <text
                x="260"
                y="65"
                textAnchor="middle"
                fontSize="11"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                YOU ARE HERE
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            The Commit Workflow
          </h3>

          <div className="space-y-3 rounded-lg border border-muted bg-secondary p-4">
            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-foreground">
                1
              </div>
              <div>
                <p className="font-semibold text-foreground">Make Changes</p>
                <code className="mt-1 block text-xs text-accent">
                  Edit your files in the working directory
                </code>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-foreground">
                2
              </div>
              <div>
                <p className="font-semibold text-foreground">Stage Changes</p>
                <code className="mt-1 block text-xs text-accent">
                  $ git add .
                </code>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary font-bold text-foreground">
                3
              </div>
              <div>
                <p className="font-semibold text-foreground">Commit</p>
                <code className="mt-1 block text-xs text-accent">
                  $ git commit -m &quot;Add new feature&quot;
                </code>
              </div>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-primary">
            Useful Commands
          </h3>
          <div className="space-y-2">
            <div className="rounded-lg border border-muted bg-secondary p-3">
              <code className="text-xs text-accent">$ git log</code>
              <p className="mt-1 text-sm text-foreground/70">
                View commit history
              </p>
            </div>
            <div className="rounded-lg border border-muted bg-secondary p-3">
              <code className="text-xs text-accent">
                $ git show &lt;commit-hash&gt;
              </code>
              <p className="mt-1 text-sm text-foreground/70">
                View specific commit details
              </p>
            </div>
            <div className="rounded-lg border border-muted bg-secondary p-3">
              <code className="text-xs text-accent">
                $ git revert &lt;commit-hash&gt;
              </code>
              <p className="mt-1 text-sm text-foreground/70">
                Undo a specific commit
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Branches",
    icon: "🌿",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                What is a Branch?
              </h3>
              <p className="leading-relaxed text-foreground/80">
                A branch is an{" "}
                <span className="font-semibold text-accent">
                  independent line of development
                </span>{" "}
                that lets you work on features without affecting the main
                codebase. Think of it as creating a parallel universe for your
                code.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Types of Branches
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="rounded-lg border-l-4 border-primary bg-secondary p-3">
                  <strong className="text-primary">main/master:</strong>{" "}
                  Production-ready code
                </li>
                <li className="rounded-lg border-l-4 border-primary bg-secondary p-3">
                  <strong className="text-primary">develop:</strong> Integration
                  branch
                </li>
                <li className="rounded-lg border-l-4 border-primary bg-secondary p-3">
                  <strong className="text-primary">feature/*:</strong> New
                  features
                </li>
                <li className="rounded-lg border-l-4 border-primary bg-secondary p-3">
                  <strong className="text-primary">bugfix/*:</strong> Bug fixes
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Benefits
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Isolate work on features</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Multiple developers work simultaneously</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Experiment safely without breaking main</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Easy rollback if needed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg
              width="300"
              height="320"
              className="rounded-lg border border-muted bg-secondary/20"
            >
              <defs>
                <marker
                  id="arrowSmall"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="var(--muted)" />
                </marker>
              </defs>

              <text
                x="150"
                y="25"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                Branch Divergence
              </text>

              {/* Main branch */}
              <line
                x1="40"
                y1="70"
                x2="240"
                y2="70"
                stroke="var(--primary)"
                strokeWidth="3"
              />
              <circle cx="60" cy="70" r="6" fill="var(--primary)" />
              <circle
                cx="100"
                cy="70"
                r="6"
                fill="var(--primary)"
                opacity="0.7"
              />
              <circle
                cx="140"
                cy="70"
                r="6"
                fill="var(--primary)"
                opacity="0.5"
              />
              <text x="30" y="50" fontSize="12" fill="var(--muted-foreground)">
                main
              </text>

              {/* Branch point */}
              <circle
                cx="140"
                cy="70"
                r="10"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              />

              {/* Feature branch 1 */}
              <line
                x1="140"
                y1="70"
                x2="220"
                y2="140"
                stroke="var(--primary)"
                strokeWidth="3"
                opacity="0.8"
              />
              <circle
                cx="165"
                cy="95"
                r="6"
                fill="var(--primary)"
                opacity="0.8"
              />
              <circle
                cx="190"
                cy="120"
                r="6"
                fill="var(--primary)"
                opacity="0.9"
              />
              <circle cx="215" cy="145" r="6" fill="var(--primary)" />
              <text x="220" y="160" fontSize="12" fill="var(--foreground)">
                feature/login
              </text>

              {/* Feature branch 2 */}
              <line
                x1="140"
                y1="70"
                x2="80"
                y2="140"
                stroke="var(--primary)"
                strokeWidth="3"
                opacity="0.6"
              />
              <circle
                cx="115"
                cy="95"
                r="6"
                fill="var(--primary)"
                opacity="0.8"
              />
              <circle
                cx="90"
                cy="120"
                r="6"
                fill="var(--primary)"
                opacity="0.9"
              />
              <circle cx="65" cy="145" r="6" fill="var(--primary)" />
              <text x="30" y="160" fontSize="12" fill="var(--foreground)">
                feature/api
              </text>

              {/* Continue main */}
              <circle
                cx="180"
                cy="70"
                r="6"
                fill="var(--primary)"
                opacity="0.3"
              />
              <circle
                cx="220"
                cy="70"
                r="6"
                fill="var(--primary)"
                opacity="0.1"
              />

              {/* Info box */}
              <rect
                x="20"
                y="220"
                width="260"
                height="80"
                fill="var(--card)"
                stroke="var(--muted)"
                strokeWidth="1"
                rx="6"
              />
              <text
                x="150"
                y="240"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                Independent Development
              </text>
              <text x="30" y="265" fontSize="11" fill="var(--muted-foreground)">
                Each branch develops separately
              </text>
              <text x="30" y="282" fontSize="11" fill="var(--muted-foreground)">
                Later merged back to main
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Branch Commands
          </h3>

          <div className="space-y-2">
            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Create a branch:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git branch &lt;branch-name&gt;
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Switch to a branch:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git checkout &lt;branch-name&gt;
              </code>
              <p className="mt-2 text-xs text-foreground/60">
                Or shorter:{" "}
                <code className="text-accent">
                  $ git switch &lt;branch-name&gt;
                </code>
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Create and switch in one command:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git checkout -b &lt;branch-name&gt;
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>List all branches:</strong>
              </p>
              <code className="text-xs text-accent">$ git branch -a</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Delete a branch:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git branch -d &lt;branch-name&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Push & Pull",
    icon: "☁️",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Push vs Pull
              </h3>
              <p className="mb-4 text-foreground/80">
                These operations{" "}
                <span className="font-semibold text-accent">
                  synchronize your local and remote repositories
                </span>
                , allowing you to share work and collaborate.
              </p>

              <div className="mb-4 rounded-lg border-l-4 border-primary bg-secondary p-4">
                <h4 className="mb-2 font-bold text-primary">Push</h4>
                <p className="text-sm text-foreground/80">
                  Upload your local commits to GitHub.{" "}
                  <span className="text-accent">You → GitHub</span>
                </p>
              </div>

              <div className="rounded-lg border-l-4 border-accent bg-secondary p-4">
                <h4 className="mb-2 font-bold text-accent">Pull</h4>
                <p className="text-sm text-foreground/80">
                  Download and merge team&apos;s commits.{" "}
                  <span className="text-accent">GitHub → You</span>
                </p>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Benefits
              </h3>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Share code with the team</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Backup your work in the cloud</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Stay updated with team changes</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">✓</span>
                  <span>Enable CI/CD pipelines</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg
              width="300"
              height="300"
              className="rounded-lg border border-muted bg-secondary/20"
            >
              {/* Your computer */}
              <rect
                x="20"
                y="40"
                width="110"
                height="80"
                fill="var(--primary)"
                opacity="0.1"
                stroke="var(--primary)"
                strokeWidth="2"
                rx="6"
              />
              <text
                x="75"
                y="60"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fill="var(--primary)"
              >
                Your Computer
              </text>
              <text
                x="75"
                y="80"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Local Repo
              </text>
              <circle cx="60" cy="105" r="5" fill="var(--primary)" />
              <circle cx="90" cy="105" r="5" fill="var(--primary)" />

              {/* GitHub */}
              <rect
                x="170"
                y="40"
                width="110"
                height="80"
                fill="var(--primary)"
                opacity="0.1"
                stroke="var(--primary)"
                strokeWidth="2"
                rx="6"
              />
              <text
                x="225"
                y="60"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fill="var(--primary)"
              >
                GitHub
              </text>
              <text
                x="225"
                y="80"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Remote Repo
              </text>
              <circle cx="210" cy="105" r="5" fill="var(--primary)" />
              <circle cx="240" cy="105" r="5" fill="var(--primary)" />

              {/* Push arrow */}
              <defs>
                <marker
                  id="pushArrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="var(--foreground)" />
                </marker>
                <marker
                  id="pullArrow"
                  markerWidth="10"
                  markerHeight="10"
                  refX="9"
                  refY="3"
                  orient="auto"
                >
                  <polygon points="0 0, 10 3, 0 6" fill="var(--foreground)" />
                </marker>
              </defs>

              <line
                x1="135"
                y1="135"
                x2="170"
                y2="165"
                stroke="var(--foreground)"
                strokeWidth="3"
                markerEnd="url(#pushArrow)"
              />
              <text
                x="150"
                y="150"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                PUSH
              </text>

              <line
                x1="170"
                y1="165"
                x2="135"
                y2="135"
                stroke="var(--foreground)"
                strokeWidth="3"
                markerEnd="url(#pullArrow)"
              />
              <text
                x="150"
                y="185"
                textAnchor="middle"
                fontSize="12"
                fill="var(--foreground)"
                fontWeight="bold"
              >
                PULL
              </text>

              {/* Team members */}
              <text
                x="150"
                y="240"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                Team Members
              </text>
              <circle
                cx="100"
                cy="270"
                r="12"
                fill="var(--muted)"
                stroke="var(--primary)"
                strokeWidth="1"
              />
              <circle
                cx="150"
                cy="270"
                r="12"
                fill="var(--muted)"
                stroke="var(--primary)"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="270"
                r="12"
                fill="var(--muted)"
                stroke="var(--primary)"
                strokeWidth="1"
              />

              <text
                x="100"
                y="295"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Dev 1
              </text>
              <text
                x="150"
                y="295"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Dev 2
              </text>
              <text
                x="200"
                y="295"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted-foreground)"
              >
                Dev 3
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Push & Pull Commands
          </h3>

          <div className="space-y-2">
            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Push to remote:</strong> Upload your commits
              </p>
              <code className="text-xs text-accent">
                $ git push origin &lt;branch-name&gt;
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Pull from remote:</strong> Fetch and merge changes
              </p>
              <code className="text-xs text-accent">
                $ git pull origin &lt;branch-name&gt;
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Fetch without merging:</strong>
              </p>
              <code className="text-xs text-accent">$ git fetch origin</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Push all branches:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git push -u origin --all
              </code>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-muted bg-card p-4">
            <p className="text-sm text-foreground/70">
              <strong>Tip:</strong> Always pull before pushing to avoid
              conflicts. Follow the habit:{" "}
              <code className="rounded bg-secondary px-1 py-0.5 text-accent">
                git pull → make changes → git push
              </code>
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Pull Requests",
    icon: "🔍",
    content: (
      <div className="space-y-8">
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                What is a Pull Request?
              </h3>
              <p className="mb-4 leading-relaxed text-foreground/80">
                A Pull Request (PR) is a{" "}
                <span className="font-semibold text-accent">
                  formal request to merge your branch into another branch
                </span>{" "}
                (usually main). It opens a discussion where teammates can
                review, comment, and approve your changes.
              </p>

              <h3 className="mb-3 text-xl font-semibold text-primary">
                PR Workflow
              </h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Create Branch & Commit
                    </p>
                    <p className="text-sm text-foreground/70">
                      Work on your feature locally
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Push to GitHub
                    </p>
                    <p className="text-sm text-foreground/70">
                      Upload your branch
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Open Pull Request
                    </p>
                    <p className="text-sm text-foreground/70">
                      Click &quot;New PR&quot; on GitHub
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Team Reviews
                    </p>
                    <p className="text-sm text-foreground/70">
                      Discuss, request changes
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-foreground">
                    5
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Merge to Main
                    </p>
                    <p className="text-sm text-foreground/70">
                      Code approved and deployed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <svg
                width="280"
                height="380"
                className="rounded-lg border border-muted bg-secondary/20"
              >
                <text
                  x="140"
                  y="25"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="bold"
                  fill="var(--muted-foreground)"
                >
                  Pull Request Flow
                </text>

                {/* Boxes */}
                <g>
                  {/* Feature branch */}
                  <rect
                    x="30"
                    y="50"
                    width="220"
                    height="50"
                    fill="var(--primary)"
                    opacity="0.1"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    rx="6"
                  />
                  <text
                    x="140"
                    y="73"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="var(--primary)"
                  >
                    Your Feature Branch
                  </text>
                  <text
                    x="140"
                    y="90"
                    textAnchor="middle"
                    fontSize="11"
                    fill="var(--muted-foreground)"
                  >
                    feature/new-ui
                  </text>

                  {/* Arrow */}
                  <line
                    x1="140"
                    y1="105"
                    x2="140"
                    y2="130"
                    stroke="var(--muted)"
                    strokeWidth="2"
                  />
                  <polygon
                    points="140,135 135,125 145,125"
                    fill="var(--muted)"
                  />

                  {/* PR box */}
                  <rect
                    x="30"
                    y="135"
                    width="220"
                    height="50"
                    fill="var(--primary)"
                    opacity="0.1"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    rx="6"
                  />
                  <text
                    x="140"
                    y="158"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="var(--primary)"
                  >
                    Pull Request Created
                  </text>
                  <text
                    x="140"
                    y="175"
                    textAnchor="middle"
                    fontSize="11"
                    fill="var(--muted-foreground)"
                  >
                    Open for review
                  </text>

                  {/* Arrow */}
                  <line
                    x1="140"
                    y1="190"
                    x2="140"
                    y2="215"
                    stroke="var(--muted)"
                    strokeWidth="2"
                  />
                  <polygon
                    points="140,220 135,210 145,210"
                    fill="var(--muted)"
                  />

                  {/* Review box */}
                  <rect
                    x="30"
                    y="220"
                    width="220"
                    height="50"
                    fill="var(--primary)"
                    opacity="0.1"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    rx="6"
                  />
                  <text
                    x="140"
                    y="243"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="var(--primary)"
                  >
                    Code Review
                  </text>
                  <text
                    x="140"
                    y="260"
                    textAnchor="middle"
                    fontSize="11"
                    fill="var(--muted-foreground)"
                  >
                    Team feedback
                  </text>

                  {/* Arrow */}
                  <line
                    x1="140"
                    y1="275"
                    x2="140"
                    y2="300"
                    stroke="var(--muted)"
                    strokeWidth="2"
                  />
                  <polygon
                    points="140,305 135,295 145,295"
                    fill="var(--muted)"
                  />

                  {/* Main branch */}
                  <rect
                    x="30"
                    y="305"
                    width="220"
                    height="50"
                    fill="var(--primary)"
                    opacity="0.1"
                    stroke="var(--primary)"
                    strokeWidth="2"
                    rx="6"
                  />
                  <text
                    x="140"
                    y="328"
                    textAnchor="middle"
                    fontSize="12"
                    fontWeight="bold"
                    fill="var(--primary)"
                  >
                    Merged to Main
                  </text>
                  <text
                    x="140"
                    y="345"
                    textAnchor="middle"
                    fontSize="11"
                    fill="rgb(148, 163, 184)"
                  >
                    Ready for production
                  </text>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              Benefits of Pull Requests
            </h3>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-muted bg-secondary p-4">
                <p className="mb-2 text-sm font-semibold text-primary">
                  Code Review
                </p>
                <p className="text-sm text-foreground/70">
                  Catch bugs and improve code quality before merge
                </p>
              </div>

              <div className="rounded-lg border border-muted bg-secondary p-4">
                <p className="mb-2 text-sm font-semibold text-accent">
                  Knowledge Sharing
                </p>
                <p className="text-sm text-foreground/70">
                  Team learns about changes and implementation
                </p>
              </div>

              <div className="rounded-lg border border-muted bg-secondary p-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Discussions
                </p>
                <p className="text-sm text-foreground/70">
                  Comment on specific lines to discuss improvements
                </p>
              </div>

              <div className="rounded-lg border border-muted bg-secondary p-4">
                <p className="mb-2 text-sm font-semibold text-foreground">
                  Approval Workflow
                </p>
                <p className="text-sm text-foreground/70">
                  Require approvals before merging critical code
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              PR Best Practices
            </h3>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">
                ✓ Keep PRs focused
              </p>
              <p className="text-sm text-foreground/70">
                One feature per PR for easier review
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">
                ✓ Write clear description
              </p>
              <p className="text-sm text-foreground/70">
                Explain what changed and why
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">
                ✓ Keep commits clean
              </p>
              <p className="text-sm text-foreground/70">
                Logical, well-described commits are easier to review
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm font-semibold text-foreground">
                ✓ Test before requesting review
              </p>
              <p className="text-sm text-foreground/70">
                Ensure your changes work locally first
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Merging",
    icon: "🔀",
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                What is Merging?
              </h3>
              <p className="leading-relaxed text-foreground/80">
                Merging is the process of{" "}
                <span className="font-semibold text-accent">
                  combining changes from one branch into another
                </span>
                . It integrates all commits from your feature branch back into
                main.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Merge Types
              </h3>

              <div className="space-y-3">
                <div className="rounded-lg border-l-4 border-primary bg-secondary p-4">
                  <h4 className="mb-1 font-bold text-primary">
                    Fast-Forward Merge
                  </h4>
                  <p className="text-sm text-foreground/70">
                    When feature branch is ahead of main with no conflicts
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-primary bg-secondary p-4">
                  <h4 className="mb-1 font-bold text-primary">
                    Recursive Merge
                  </h4>
                  <p className="text-sm text-foreground/70">
                    Creates a merge commit when both branches have changes
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-primary bg-secondary p-4">
                  <h4 className="mb-1 font-bold text-primary">Squash Merge</h4>
                  <p className="text-sm text-foreground/70">
                    Combines all commits into one clean commit
                  </p>
                </div>

                <div className="rounded-lg border-l-4 border-primary bg-secondary p-4">
                  <h4 className="mb-1 font-bold text-primary">Rebase Merge</h4>
                  <p className="text-sm text-foreground/70">
                    Replays changes on top of main for linear history
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-xl font-semibold text-primary">
                Handling Conflicts
              </h3>
              <p className="mb-3 text-sm text-foreground/80">
                When same lines are changed in both branches, Git needs your
                help to decide which version to keep.
              </p>
              <div className="rounded-lg border border-destructive/50 bg-destructive/20 p-4">
                <p className="mb-2 text-sm font-semibold text-destructive">
                  Conflict markers in file:
                </p>
                <code className="block rounded bg-background/50 p-2 text-xs text-foreground">
                  &lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD
                  <br />
                  Your changes
                  <br />
                  =======
                  <br />
                  Their changes
                  <br />
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt; branch
                </code>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <svg
              width="300"
              height="340"
              className="rounded-lg border border-muted bg-secondary/20"
            >
              <text
                x="150"
                y="25"
                textAnchor="middle"
                fontSize="13"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                Before & After Merge
              </text>

              {/* BEFORE LABEL */}
              <text
                x="80"
                y="50"
                fontSize="11"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                BEFORE
              </text>

              {/* Main branch */}
              <line
                x1="20"
                y1="70"
                x2="100"
                y2="70"
                stroke="var(--primary)"
                strokeWidth="2"
              />
              <circle cx="35" cy="70" r="5" fill="var(--primary)" />
              <circle cx="55" cy="70" r="5" fill="var(--primary)" />
              <circle cx="75" cy="70" r="5" fill="var(--primary)" />
              <text x="15" y="55" fontSize="10" fill="var(--muted-foreground)">
                main
              </text>

              {/* Feature branch */}
              <line
                x1="75"
                y1="70"
                x2="130"
                y2="120"
                stroke="var(--primary)"
                strokeWidth="2"
                opacity="0.6"
              />
              <circle
                cx="95"
                cy="85"
                r="5"
                fill="var(--primary)"
                opacity="0.7"
              />
              <circle
                cx="115"
                cy="105"
                r="5"
                fill="var(--primary)"
                opacity="0.7"
              />
              <text x="105" y="140" fontSize="10" fill="var(--foreground)">
                feature
              </text>

              {/* Branch point circle */}
              <circle
                cx="75"
                cy="70"
                r="8"
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              />

              {/* Arrow between */}
              <line
                x1="150"
                y1="100"
                x2="150"
                y2="170"
                stroke="var(--muted)"
                strokeWidth="2"
              />
              <polygon points="150,175 145,165 155,165" fill="var(--muted)" />

              {/* AFTER LABEL */}
              <text
                x="80"
                y="195"
                fontSize="11"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                AFTER
              </text>

              {/* Merged main branch */}
              <line
                x1="20"
                y1="215"
                x2="150"
                y2="215"
                stroke="var(--foreground)"
                strokeWidth="3"
              />
              <circle cx="35" cy="215" r="5" fill="var(--primary)" />
              <circle cx="55" cy="215" r="5" fill="var(--primary)" />
              <circle cx="75" cy="215" r="5" fill="var(--primary)" />
              <circle
                cx="95"
                cy="215"
                r="5"
                fill="var(--primary)"
                opacity="0.7"
              />
              <circle
                cx="115"
                cy="215"
                r="5"
                fill="var(--primary)"
                opacity="0.7"
              />
              <circle cx="135" cy="215" r="5" fill="var(--foreground)" />
              <text x="15" y="200" fontSize="10" fill="var(--muted-foreground)">
                main
              </text>

              {/* Merge commit */}
              <circle
                cx="135"
                cy="215"
                r="8"
                fill="none"
                stroke="var(--foreground)"
                strokeWidth="2"
              />

              {/* Info */}
              <rect
                x="20"
                y="260"
                width="260"
                height="70"
                fill="var(--card)"
                stroke="var(--muted)"
                strokeWidth="1"
                rx="6"
              />
              <text
                x="150"
                y="280"
                textAnchor="middle"
                fontSize="12"
                fontWeight="bold"
                fill="var(--muted-foreground)"
              >
                Result: Unified History
              </text>
              <text x="30" y="305" fontSize="11" fill="var(--muted-foreground)">
                All commits combined into main
              </text>
              <text x="30" y="322" fontSize="11" fill="var(--muted-foreground)">
                Feature branch can be deleted
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-primary">Merge Commands</h3>

          <div className="space-y-2">
            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Switch to target branch (main):</strong>
              </p>
              <code className="text-xs text-accent">$ git checkout main</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Merge feature branch into main:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git merge feature-branch
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Squash merge (combine all commits):</strong>
              </p>
              <code className="text-xs text-accent">
                $ git merge --squash feature-branch
              </code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Abort a merge in progress:</strong>
              </p>
              <code className="text-xs text-accent">$ git merge --abort</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>Delete merged branch:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git branch -d feature-branch
              </code>
            </div>
          </div>

          <h3 className="mt-6 text-lg font-semibold text-primary">
            Resolving Conflicts
          </h3>

          <div className="space-y-2">
            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>1. See conflicted files:</strong>
              </p>
              <code className="text-xs text-accent">$ git status</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>2. Edit files and resolve conflicts manually</strong>
              </p>
              <p className="text-xs text-foreground/60">
                Remove conflict markers and keep desired code
              </p>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>3. Stage resolved files:</strong>
              </p>
              <code className="text-xs text-accent">$ git add .</code>
            </div>

            <div className="rounded-lg border border-muted bg-secondary p-4">
              <p className="mb-2 text-sm text-foreground/70">
                <strong>4. Complete the merge:</strong>
              </p>
              <code className="text-xs text-accent">
                $ git commit -m &quot;Merge branch &apos;feature&apos;&quot;
              </code>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];
