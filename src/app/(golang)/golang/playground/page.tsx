import Link from "next/link";

import CodeBlock from "../../components/CodeBlock";
import Sidebar from "../../components/Sidebar";

export default function PlaygroundPage() {
  const commonSnippets = [
    {
      title: "Hello World",
      code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
    },
    {
      title: "Read Command Line Arguments",
      code: `package main

import (
    "fmt"
    "os"
)

func main() {
    if len(os.Args) > 1 {
        fmt.Println("Arguments:", os.Args[1:])
    }
}`,
    },
    {
      title: "Read from User Input",
      code: `package main

import (
    "bufio"
    "fmt"
    "os"
)

func main() {
    reader := bufio.NewReader(os.Stdin)
    fmt.Print("Enter text: ")
    text, _ := reader.ReadString('\\n')
    fmt.Println("You entered:", text)
}`,
    },
    {
      title: "Simple HTTP Server",
      code: `package main

import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello from %s!", r.URL.Path)
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,
    },
    {
      title: "JSON Encoding",
      code: `package main

import (
    "encoding/json"
    "fmt"
)

type Person struct {
    Name string \`json:"name"\`
    Age  int    \`json:"age"\`
}

func main() {
    p := Person{"Alice", 30}
    data, _ := json.Marshal(p)
    fmt.Println(string(data))
}`,
    },
    {
      title: "Goroutine Example",
      code: `package main

import (
    "fmt"
    "time"
)

func printNumbers(name string) {
    for i := 1; i <= 3; i++ {
        fmt.Printf("%s: %d\\n", name, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    go printNumbers("A")
    go printNumbers("B")
    time.Sleep(1 * time.Second)
}`,
    },
    {
      title: "Channel Communication",
      code: `package main

import "fmt"

func main() {
    messages := make(chan string)
    
    go func() {
        messages <- "Hello"
        messages <- "World"
    }()
    
    msg1 := <-messages
    msg2 := <-messages
    fmt.Println(msg1, msg2)
}`,
    },
    {
      title: "File Writing",
      code: `package main

import (
    "fmt"
    "os"
)

func main() {
    data := []byte("Hello, Go!\\n")
    err := os.WriteFile("output.txt", data, 0644)
    if err != nil {
        fmt.Println("Error:", err)
    }
    fmt.Println("File written successfully")
}`,
    },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="ml-64 flex-1">
        {/* Header */}
        <div className="border-b border-border bg-gradient-to-r from-accent/10 to-secondary/10 p-8">
          <div className="max-w-4xl">
            <h1 className="mb-2 text-4xl font-bold text-foreground">
              Code Playground
            </h1>
            <p className="text-lg text-foreground/70">
              Collection of copy-paste ready Go code snippets
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="max-w-4xl">
            <div className="mb-8 rounded-lg border border-border bg-card p-6">
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                How to Use
              </h2>
              <ol className="space-y-2 text-foreground/80">
                <li>
                  <strong>1. Copy Code:</strong> Click the copy button on any
                  code snippet
                </li>
                <li>
                  <strong>2. Run Locally:</strong> Paste into a .go file and run
                  with{" "}
                  <code className="bg-sidebar rounded px-2 py-1 text-sm">
                    go run filename.go
                  </code>
                </li>
                <li>
                  <strong>3. Experiment:</strong> Modify and explore the code
                </li>
                <li>
                  <strong>4. Learn:</strong> Check the tutorials for detailed
                  explanations
                </li>
              </ol>
            </div>

            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Quick Reference Snippets
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {commonSnippets.map((snippet, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
                >
                  <h3 className="mb-4 text-lg font-semibold text-foreground">
                    {snippet.title}
                  </h3>
                  <CodeBlock
                    code={snippet.code}
                    language="go"
                    title={snippet.title}
                  />
                </div>
              ))}
            </div>

            {/* Additional Resources */}
            <div className="mt-12 rounded-lg border border-accent/30 bg-gradient-to-r from-secondary/20 to-accent/20 p-8">
              <h2 className="mb-4 text-2xl font-bold text-foreground">
                Next Steps
              </h2>
              <p className="mb-6 text-foreground/80">
                Once you&apos;re comfortable with these snippets, explore the
                full course for:
              </p>
              <ul className="mb-6 space-y-2 text-foreground/80">
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>In-depth tutorials with explanations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Progressive exercises from beginner to advanced</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Real-world project implementations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent">✓</span>
                  <span>Video tutorials for visual learning</span>
                </li>
              </ul>
              <Link
                href="/golang/features"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore Full Course →
              </Link>
            </div>

            {/* Footer */}
            <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
              <p>
                Tip: Try combining these snippets to create more complex
                programs!
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
