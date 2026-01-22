export interface CodeExample {
  title: string;
  code: string;
  language: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  starterCode: string;
  solution: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  learningObjectives: string[];
  starterCode: string;
}

export interface Section {
  id: string;
  title: string;
  description: string;
  order: number;
  videoId?: string;
  tutorials: {
    title: string;
    content: string;
    codeExamples: CodeExample[];
  }[];
  exercises: Exercise[];
  project?: Project;
}

export interface Course {
  title: string;
  description: string;
  sections: Section[];
}

export const goCourse: Course = {
  title: "Go: Zero to Hero for DevOps",
  description:
    "Master Golang for DevOps careers with comprehensive tutorials, examples, and hands-on projects.",
  sections: [
    {
      id: "basics",
      title: "Go Basics & Setup",
      description: "Get started with Go fundamentals and environment setup",
      order: 1,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Installation & Workspace",
          content: `Go is an open-source programming language that makes it easy to build simple, reliable, and efficient software.

## Why Go?
- **Simple syntax**: Easy to learn for developers from any background
- **Fast compilation**: Compiles to native code
- **Built for concurrency**: Goroutines make parallel programming easier
- **Perfect for DevOps**: Used in Docker, Kubernetes, and many DevOps tools

## Installation
1. Download from golang.org
2. Follow platform-specific instructions
3. Verify with: go version`,
          codeExamples: [
            {
              title: "Hello World",
              language: "go",
              code: `package main

import "fmt"

func main() {
    fmt.Println("Hello, Go!")
}`,
            },
            {
              title: "Run Your Code",
              language: "bash",
              code: `go run main.go
go build main.go
./main`,
            },
          ],
        },
        {
          title: "Variables & Data Types",
          content: `Go is a statically typed language. Understanding data types is crucial.

## Variable Declaration
Go provides multiple ways to declare variables with flexibility and clarity.`,
          codeExamples: [
            {
              title: "Variable Declaration",
              language: "go",
              code: `package main

import "fmt"

func main() {
    // Explicit type declaration
    var name string = "Go Developer"
    var age int = 25
    var score float64 = 95.5
    
    // Short declaration (inside functions only)
    message := "Hello, Go!"
    count := 42
    
    // Multiple declarations
    var (
        city = "New York"
        country = "USA"
    )
    
    fmt.Println(name, age, score)
    fmt.Println(message, count)
}`,
            },
            {
              title: "Constants",
              language: "go",
              code: `package main

import "fmt"

func main() {
    const PI float64 = 3.14159
    const COMPANY string = "MyCompany"
    
    // Multiple constants
    const (
        YEAR = 2024
        MONTH = "January"
    )
    
    fmt.Println(PI, COMPANY, YEAR)
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex1",
          title: "Create Variables",
          description:
            "Create variables for your profile: name, age, email, and isActive (boolean)",
          difficulty: "beginner",
          starterCode: `package main

import "fmt"

func main() {
    // TODO: Declare your variables here
    
    fmt.Println(name, age, email, isActive)
}`,
          solution: `package main

import "fmt"

func main() {
    name := "John Doe"
    age := 28
    email := "john@example.com"
    isActive := true
    
    fmt.Println(name, age, email, isActive)
}`,
        },
      ],
      project: {
        id: "proj1",
        title: "Personal Profile Program",
        description:
          "Create a program that displays your profile information with proper data types",
        difficulty: "beginner",
        learningObjectives: [
          "Declare variables",
          "Use multiple data types",
          "Format output",
        ],
        starterCode: `package main

import "fmt"

func main() {
    // TODO: Create your profile here
    // Include: name, age, city, skills (multiple), experience level
}`,
      },
    },
    {
      id: "control-flow",
      title: "Control Flow & Functions",
      description: "Master conditionals, loops, and function definitions",
      order: 2,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Conditionals",
          content: `Conditionals allow you to execute different code based on conditions.

## If/Else Statements
Go provides straightforward conditional statements without parentheses.`,
          codeExamples: [
            {
              title: "If/Else",
              language: "go",
              code: `package main

import "fmt"

func main() {
    age := 25
    
    if age >= 18 {
        fmt.Println("Adult")
    } else if age >= 13 {
        fmt.Println("Teenager")
    } else {
        fmt.Println("Child")
    }
    
    // Short statement in if
    if score := 85; score >= 80 {
        fmt.Println("Pass")
    }
}`,
            },
            {
              title: "Switch Statement",
              language: "go",
              code: `package main

import "fmt"

func main() {
    day := 3
    
    switch day {
    case 1:
        fmt.Println("Monday")
    case 2:
        fmt.Println("Tuesday")
    case 3:
        fmt.Println("Wednesday")
    default:
        fmt.Println("Other day")
    }
}`,
            },
          ],
        },
        {
          title: "Loops",
          content: `Go simplifies looping with a single for loop construct that handles all loop scenarios.`,
          codeExamples: [
            {
              title: "For Loop Variations",
              language: "go",
              code: `package main

import "fmt"

func main() {
    // Traditional for loop
    for i := 0; i < 5; i++ {
        fmt.Println(i)
    }
    
    // While-like loop
    counter := 0
    for counter < 3 {
        fmt.Println(counter)
        counter++
    }
    
    // Infinite loop with break
    for {
        fmt.Println("Loop")
        break
    }
}`,
            },
            {
              title: "Range Loop",
              language: "go",
              code: `package main

import "fmt"

func main() {
    numbers := []int{10, 20, 30, 40}
    
    // Index and value
    for i, num := range numbers {
        fmt.Printf("Index: %d, Value: %d\\n", i, num)
    }
    
    // Just values
    for _, num := range numbers {
        fmt.Println(num)
    }
    
    // String iteration
    str := "Hello"
    for i, char := range str {
        fmt.Printf("%d: %c\\n", i, char)
    }
}`,
            },
          ],
        },
        {
          title: "Functions",
          content: `Functions are reusable blocks of code. Go emphasizes simplicity and clarity in function definition.`,
          codeExamples: [
            {
              title: "Function Basics",
              language: "go",
              code: `package main

import "fmt"

// Basic function
func greet(name string) {
    fmt.Println("Hello, " + name)
}

// Function with return value
func add(a int, b int) int {
    return a + b
}

// Multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    greet("Alice")
    
    result := add(5, 3)
    fmt.Println(result)
    
    quotient, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(quotient)
    }
}`,
            },
            {
              title: "Variadic Functions",
              language: "go",
              code: `package main

import "fmt"

// Function accepting variable number of arguments
func sum(numbers ...int) int {
    total := 0
    for _, num := range numbers {
        total += num
    }
    return total
}

// Defer - runs after function returns
func demonstrate() {
    defer fmt.Println("Cleanup")
    fmt.Println("Main code")
}

func main() {
    fmt.Println(sum(1, 2, 3, 4, 5))
    demonstrate()
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex2",
          title: "Grade Calculator",
          description:
            "Create a function that takes a score and returns a grade (A, B, C, D, F)",
          difficulty: "intermediate",
          starterCode: `package main

import "fmt"

func getGrade(score int) string {
    // TODO: Implement grade logic
    return ""
}

func main() {
    fmt.Println(getGrade(95))
    fmt.Println(getGrade(85))
    fmt.Println(getGrade(75))
}`,
          solution: `package main

import "fmt"

func getGrade(score int) string {
    switch {
    case score >= 90:
        return "A"
    case score >= 80:
        return "B"
    case score >= 70:
        return "C"
    case score >= 60:
        return "D"
    default:
        return "F"
    }
}

func main() {
    fmt.Println(getGrade(95))
    fmt.Println(getGrade(85))
    fmt.Println(getGrade(75))
}`,
        },
      ],
      project: {
        id: "proj2",
        title: "Temperature Converter",
        description:
          "Create functions to convert between Celsius, Fahrenheit, and Kelvin",
        difficulty: "intermediate",
        learningObjectives: [
          "Write functions with parameters",
          "Handle multiple calculations",
          "Return multiple values",
        ],
        starterCode: `package main

import "fmt"

// TODO: Create conversion functions

func main() {
    // TODO: Test your conversions
}`,
      },
    },
    {
      id: "data-structures",
      title: "Arrays, Slices & Maps",
      description: "Learn collection types for storing and organizing data",
      order: 3,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Arrays",
          content: `Arrays are fixed-size collections of elements of the same type.`,
          codeExamples: [
            {
              title: "Array Basics",
              language: "go",
              code: `package main

import "fmt"

func main() {
    // Array with fixed size
    var arr [5]int
    arr[0] = 1
    arr[1] = 2
    
    // Array initialization
    names := [3]string{"Alice", "Bob", "Charlie"}
    
    // Get array length
    fmt.Println(len(names))
    
    // Iterate
    for i, name := range names {
        fmt.Printf("%d: %s\\n", i, name)
    }
}`,
            },
          ],
        },
        {
          title: "Slices",
          content: `Slices are dynamic, flexible views into arrays. They're more commonly used than arrays in Go.`,
          codeExamples: [
            {
              title: "Slice Operations",
              language: "go",
              code: `package main

import "fmt"

func main() {
    // Create slice
    var slice []int
    slice = append(slice, 1, 2, 3)
    
    // Slice literal
    numbers := []int{10, 20, 30, 40, 50}
    
    // Slicing
    sub := numbers[1:4]  // [20, 30, 40]
    fmt.Println(sub)
    
    // Make with capacity
    s := make([]string, 0, 5)
    s = append(s, "Go", "is", "awesome")
    fmt.Println(s, len(s), cap(s))
    
    // Copy
    dest := make([]int, len(numbers))
    copy(dest, numbers)
}`,
            },
          ],
        },
        {
          title: "Maps",
          content: `Maps are unordered collections of key-value pairs, similar to dictionaries or hash maps.`,
          codeExamples: [
            {
              title: "Map Basics",
              language: "go",
              code: `package main

import "fmt"

func main() {
    // Map literal
    ages := map[string]int{
        "Alice": 25,
        "Bob":   30,
        "Charlie": 35,
    }
    
    // Access
    fmt.Println(ages["Alice"])
    
    // Add/Update
    ages["David"] = 40
    
    // Delete
    delete(ages, "Bob")
    
    // Check if key exists
    age, exists := ages["Alice"]
    if exists {
        fmt.Println("Age:", age)
    }
    
    // Iterate
    for name, age := range ages {
        fmt.Printf("%s: %d\\n", name, age)
    }
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex3",
          title: "Student Grade Tracker",
          description:
            "Use a map to store student names and grades, then calculate the average",
          difficulty: "intermediate",
          starterCode: `package main

import "fmt"

func main() {
    grades := map[string]int{
        "Alice": 95,
        "Bob": 87,
        "Charlie": 92,
    }
    
    // TODO: Calculate average grade
    // TODO: Print average and all grades
}`,
          solution: `package main

import "fmt"

func main() {
    grades := map[string]int{
        "Alice": 95,
        "Bob": 87,
        "Charlie": 92,
    }
    
    total := 0
    for _, grade := range grades {
        total += grade
    }
    
    average := total / len(grades)
    
    fmt.Println("Grades:", grades)
    fmt.Println("Average:", average)
}`,
        },
      ],
      project: {
        id: "proj3",
        title: "Contact Management System",
        description:
          "Build a simple contact management system using maps and slices",
        difficulty: "intermediate",
        learningObjectives: [
          "Use maps and slices together",
          "Add/remove items",
          "Search and filter data",
        ],
        starterCode: `package main

import "fmt"

type Contact struct {
    Name  string
    Email string
    Phone string
}

func main() {
    // TODO: Create a contact management system
}`,
      },
    },
    {
      id: "structs-interfaces",
      title: "Structs & Interfaces",
      description:
        "Object-oriented programming in Go with structs and interfaces",
      order: 4,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Structs",
          content: `Structs are collections of fields, Go's way of grouping data together.`,
          codeExamples: [
            {
              title: "Struct Definition",
              language: "go",
              code: `package main

import "fmt"

// Define a struct
type Person struct {
    Name  string
    Age   int
    Email string
}

// Method on struct
func (p Person) Greet() {
    fmt.Printf("Hello, I'm %s\\n", p.Name)
}

// Pointer receiver - can modify the struct
func (p *Person) HaveBirthday() {
    p.Age++
}

func main() {
    // Create struct instance
    person := Person{
        Name:  "Alice",
        Age:   25,
        Email: "alice@example.com",
    }
    
    fmt.Println(person)
    person.Greet()
    
    person.HaveBirthday()
    fmt.Println(person.Age)
}`,
            },
          ],
        },
        {
          title: "Interfaces",
          content: `Interfaces define a set of methods that a type must implement. This enables polymorphism in Go.`,
          codeExamples: [
            {
              title: "Interface Implementation",
              language: "go",
              code: `package main

import "fmt"

// Define an interface
type Writer interface {
    Write(data string) error
}

type FileWriter struct {
    filename string
}

func (fw FileWriter) Write(data string) error {
    fmt.Printf("Writing to file %s: %s\\n", fw.filename, data)
    return nil
}

type ConsoleWriter struct{}

func (cw ConsoleWriter) Write(data string) error {
    fmt.Println("Console:", data)
    return nil
}

func SaveData(w Writer, data string) {
    w.Write(data)
}

func main() {
    fw := FileWriter{filename: "output.txt"}
    cw := ConsoleWriter{}
    
    SaveData(fw, "Hello")
    SaveData(cw, "World")
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex4",
          title: "Shape Calculator",
          description:
            "Create structs for Rectangle and Circle with an Area method",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "fmt"
    "math"
)

type Rectangle struct {
    Width  float64
    Height float64
}

type Circle struct {
    Radius float64
}

// TODO: Implement Area method for Rectangle
// TODO: Implement Area method for Circle

func main() {
    rect := Rectangle{Width: 5, Height: 4}
    circle := Circle{Radius: 3}
    
    fmt.Println("Rectangle area:", rect.Area())
    fmt.Println("Circle area:", circle.Area())
}`,
          solution: `package main

import (
    "fmt"
    "math"
)

type Rectangle struct {
    Width  float64
    Height float64
}

type Circle struct {
    Radius float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (c Circle) Area() float64 {
    return math.Pi * c.Radius * c.Radius
}

func main() {
    rect := Rectangle{Width: 5, Height: 4}
    circle := Circle{Radius: 3}
    
    fmt.Println("Rectangle area:", rect.Area())
    fmt.Println("Circle area:", circle.Area())
}`,
        },
      ],
      project: {
        id: "proj4",
        title: "Employee Management System",
        description:
          "Create an employee management system with different employee types",
        difficulty: "advanced",
        learningObjectives: [
          "Design structs",
          "Implement interfaces",
          "Use polymorphism",
        ],
        starterCode: `package main

import "fmt"

type Employee interface {
    GetSalary() float64
    GetRole() string
}

// TODO: Implement different employee types

func main() {
    // TODO: Create and manage employees
}`,
      },
    },
    {
      id: "error-handling",
      title: "Error Handling",
      description: "Proper error handling patterns in Go",
      order: 5,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Error Interface",
          content: `Go handles errors as values, using the error interface for proper error handling.`,
          codeExamples: [
            {
              title: "Error Basics",
              language: "go",
              code: `package main

import (
    "fmt"
    "errors"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}`,
            },
            {
              title: "Custom Errors",
              language: "go",
              code: `package main

import (
    "fmt"
)

type ValidationError struct {
    Field   string
    Message string
}

func (e ValidationError) Error() string {
    return fmt.Sprintf("validation error on %s: %s", e.Field, e.Message)
}

func validateEmail(email string) error {
    if email == "" {
        return ValidationError{
            Field:   "email",
            Message: "email cannot be empty",
        }
    }
    return nil
}

func main() {
    err := validateEmail("")
    if err != nil {
        fmt.Println(err)
    }
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex5",
          title: "Safe File Reader",
          description:
            "Create a function that safely reads a file with proper error handling",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "fmt"
    "os"
)

func readFile(filename string) (string, error) {
    // TODO: Implement safe file reading
    return "", nil
}

func main() {
    // TODO: Test with a file that exists and one that doesn't
}`,
          solution: `package main

import (
    "fmt"
    "os"
)

func readFile(filename string) (string, error) {
    data, err := os.ReadFile(filename)
    if err != nil {
        return "", fmt.Errorf("failed to read file: %w", err)
    }
    return string(data), nil
}

func main() {
    content, err := readFile("test.txt")
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(content)
    }
}`,
        },
      ],
      project: {
        id: "proj5",
        title: "Configuration File Parser",
        description:
          "Parse and validate a configuration file with comprehensive error handling",
        difficulty: "advanced",
        learningObjectives: [
          "Handle multiple error types",
          "Validate data",
          "Provide useful error messages",
        ],
        starterCode: `package main

import "fmt"

// TODO: Implement configuration parser with error handling

func main() {
    // TODO: Parse and validate config
}`,
      },
    },
    {
      id: "concurrency",
      title: "Goroutines & Channels",
      description: "Master concurrent programming with goroutines and channels",
      order: 6,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Goroutines",
          content: `Goroutines are lightweight threads managed by the Go runtime. They make concurrent programming simple and efficient.`,
          codeExamples: [
            {
              title: "Basic Goroutines",
              language: "go",
              code: `package main

import (
    "fmt"
    "time"
)

func say(msg string) {
    for i := 0; i < 3; i++ {
        fmt.Println(msg, i)
        time.Sleep(100 * time.Millisecond)
    }
}

func main() {
    // Run sequentially
    // say("Hello")
    // say("World")
    
    // Run concurrently with goroutines
    go say("Hello")
    go say("World")
    
    // Give goroutines time to finish
    time.Sleep(1 * time.Second)
}`,
            },
          ],
        },
        {
          title: "Channels",
          content: `Channels allow goroutines to communicate safely. They're the backbone of Go's concurrency model.`,
          codeExamples: [
            {
              title: "Channel Basics",
              language: "go",
              code: `package main

import (
    "fmt"
)

func main() {
    // Create a channel
    results := make(chan string)
    
    // Send to channel in goroutine
    go func() {
        results <- "Hello from goroutine"
    }()
    
    // Receive from channel
    msg := <-results
    fmt.Println(msg)
    
    // Buffered channel
    messages := make(chan string, 2)
    messages <- "first"
    messages <- "second"
    
    fmt.Println(<-messages)
    fmt.Println(<-messages)
}`,
            },
            {
              title: "Channel Patterns",
              language: "go",
              code: `package main

import (
    "fmt"
)

func main() {
    // Range over channel
    numbers := make(chan int)
    
    go func() {
        for i := 1; i <= 3; i++ {
            numbers <- i
        }
        close(numbers)
    }()
    
    for num := range numbers {
        fmt.Println(num)
    }
    
    // Select statement
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() { ch1 <- "result 1" }()
    go func() { ch2 <- "result 2" }()
    
    for i := 0; i < 2; i++ {
        select {
        case res := <-ch1:
            fmt.Println(res)
        case res := <-ch2:
            fmt.Println(res)
        }
    }
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex6",
          title: "Sum Numbers Concurrently",
          description: "Use goroutines to sum arrays concurrently",
          difficulty: "advanced",
          starterCode: `package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    
    // TODO: Split array and sum concurrently using goroutines and channels
}`,
          solution: `package main

import "fmt"

func main() {
    numbers := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
    
    results := make(chan int)
    
    // Split into two halves
    go func() {
        sum := 0
        for _, n := range numbers[:5] {
            sum += n
        }
        results <- sum
    }()
    
    go func() {
        sum := 0
        for _, n := range numbers[5:] {
            sum += n
        }
        results <- sum
    }()
    
    total := <-results + <-results
    fmt.Println("Total:", total)
}`,
        },
      ],
      project: {
        id: "proj6",
        title: "Web Scraper with Rate Limiting",
        description:
          "Build a concurrent web scraper with goroutines and channels",
        difficulty: "advanced",
        learningObjectives: [
          "Use goroutines for concurrency",
          "Manage channels",
          "Implement rate limiting",
        ],
        starterCode: `package main

import "fmt"

// TODO: Implement concurrent web scraper with rate limiting

func main() {
    // TODO: Create scraper
}`,
      },
    },
    {
      id: "file-io",
      title: "File I/O & Packages",
      description: "Working with files and organizing code with packages",
      order: 7,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "File Operations",
          content: `Go provides powerful file handling capabilities through the os and io packages.`,
          codeExamples: [
            {
              title: "Read & Write Files",
              language: "go",
              code: `package main

import (
    "fmt"
    "os"
    "io/ioutil"
)

func main() {
    // Write to file
    data := []byte("Hello, Go!\\n")
    err := os.WriteFile("output.txt", data, 0644)
    if err != nil {
        fmt.Println(err)
    }
    
    // Read from file
    content, err := os.ReadFile("output.txt")
    if err != nil {
        fmt.Println(err)
    }
    fmt.Println(string(content))
    
    // Read line by line
    file, _ := os.Open("output.txt")
    defer file.Close()
    
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        fmt.Println(scanner.Text())
    }
}`,
            },
          ],
        },
        {
          title: "Packages & Imports",
          content: `Go organizes code into packages. Every Go file belongs to a package, enabling code reuse and organization.`,
          codeExamples: [
            {
              title: "Creating Packages",
              language: "go",
              code: `// math/operations.go
package math

func Add(a, b int) int {
    return a + b
}

func Subtract(a, b int) int {
    return a - b
}

// main.go
package main

import (
    "fmt"
    "myapp/math"
)

func main() {
    result := math.Add(5, 3)
    fmt.Println(result)
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex7",
          title: "CSV File Reader",
          description: "Create a program to read and parse CSV files",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "fmt"
    "encoding/csv"
    "os"
)

func main() {
    // TODO: Read and parse CSV file
}`,
          solution: `package main

import (
    "fmt"
    "encoding/csv"
    "os"
)

func main() {
    file, _ := os.Open("data.csv")
    defer file.Close()
    
    reader := csv.NewReader(file)
    records, _ := reader.ReadAll()
    
    for _, record := range records {
        fmt.Println(record)
    }
}`,
        },
      ],
      project: {
        id: "proj7",
        title: "Log File Analyzer",
        description: "Analyze log files and generate reports",
        difficulty: "intermediate",
        learningObjectives: ["File I/O", "Data parsing", "Report generation"],
        starterCode: `package main

import "fmt"

// TODO: Implement log file analyzer

func main() {
    // TODO: Analyze logs
}`,
      },
    },
    {
      id: "http-basics",
      title: "HTTP Servers & Clients",
      description: "Build web servers and make HTTP requests",
      order: 8,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "HTTP Servers",
          content: `Go's net/http package makes it easy to build web servers with minimal overhead.`,
          codeExamples: [
            {
              title: "Basic HTTP Server",
              language: "go",
              code: `package main

import (
    "fmt"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!\\n", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", helloHandler)
    
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}`,
            },
            {
              title: "Multiple Routes",
              language: "go",
              code: `package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)

type Response struct {
    Message string \`json:"message"\`
    Status  string \`json:"status"\`
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "text/html")
    fmt.Fprintf(w, "<h1>Welcome</h1>")
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    resp := Response{Message: "Hello API", Status: "ok"}
    json.NewEncoder(w).Encode(resp)
}

func main() {
    http.HandleFunc("/", homeHandler)
    http.HandleFunc("/api", apiHandler)
    
    http.ListenAndServe(":8080", nil)
}`,
            },
          ],
        },
        {
          title: "HTTP Clients",
          content: `Make HTTP requests from Go to consume APIs and services.`,
          codeExamples: [
            {
              title: "HTTP Requests",
              language: "go",
              code: `package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    // GET request
    resp, err := http.Get("https://api.github.com/users/golang")
    if err != nil {
        fmt.Println(err)
    }
    defer resp.Body.Close()
    
    body, _ := ioutil.ReadAll(resp.Body)
    fmt.Println(string(body))
    
    // POST request
    resp, _ = http.Post("https://api.example.com/data",
        "application/json",
        strings.NewReader(\`{"key":"value"}\`))
    defer resp.Body.Close()
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex8",
          title: "REST API Server",
          description:
            "Create a simple REST API server with GET and POST endpoints",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)

type Item struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

func main() {
    // TODO: Create REST API endpoints
}`,
          solution: `package main

import (
    "fmt"
    "net/http"
    "encoding/json"
)

type Item struct {
    ID   int    \`json:"id"\`
    Name string \`json:"name"\`
}

var items []Item

func itemsHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    
    if r.Method == "GET" {
        json.NewEncoder(w).Encode(items)
    } else if r.Method == "POST" {
        var item Item
        json.NewDecoder(r.Body).Decode(&item)
        items = append(items, item)
        w.WriteHeader(http.StatusCreated)
    }
}

func main() {
    http.HandleFunc("/items", itemsHandler)
    http.ListenAndServe(":8080", nil)
}`,
        },
      ],
      project: {
        id: "proj8",
        title: "Todo API",
        description: "Build a complete Todo REST API with CRUD operations",
        difficulty: "advanced",
        learningObjectives: [
          "Build REST APIs",
          "Handle JSON",
          "Implement CRUD operations",
        ],
        starterCode: `package main

import (
    "fmt"
    "net/http"
)

type Todo struct {
    ID    int    \`json:"id"\`
    Title string \`json:"title"\`
    Done  bool   \`json:"done"\`
}

func main() {
    // TODO: Implement complete Todo API
}`,
      },
    },
    {
      id: "databases",
      title: "Database Integration",
      description: "Connect to and interact with databases in Go",
      order: 9,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "SQL Basics",
          content: `Go provides database/sql package for working with SQL databases.`,
          codeExamples: [
            {
              title: "Connect to Database",
              language: "go",
              code: `package main

import (
    "fmt"
    "database/sql"
    _ "github.com/mattn/go-sqlite3"
)

func main() {
    db, err := sql.Open("sqlite3", "test.db")
    if err != nil {
        fmt.Println(err)
    }
    defer db.Close()
    
    // Create table
    sqlStmt := \`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
    );\`
    
    _, err = db.Exec(sqlStmt)
    if err != nil {
        fmt.Println(err)
    }
}`,
            },
            {
              title: "CRUD Operations",
              language: "go",
              code: `package main

import (
    "database/sql"
    "fmt"
    _ "github.com/mattn/go-sqlite3"
)

func main() {
    db, _ := sql.Open("sqlite3", "test.db")
    defer db.Close()
    
    // INSERT
    stmt, _ := db.Prepare("INSERT INTO users(name, email) VALUES(?, ?)")
    stmt.Exec("Alice", "alice@example.com")
    
    // SELECT
    rows, _ := db.Query("SELECT id, name, email FROM users")
    defer rows.Close()
    
    for rows.Next() {
        var id int
        var name, email string
        rows.Scan(&id, &name, &email)
        fmt.Printf("%d: %s (%s)\\n", id, name, email)
    }
    
    // UPDATE
    db.Exec("UPDATE users SET email = ? WHERE name = ?",
        "alice.new@example.com", "Alice")
    
    // DELETE
    db.Exec("DELETE FROM users WHERE id = ?", 1)
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex9",
          title: "User Database",
          description: "Create a simple user management database",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "database/sql"
    "fmt"
    _ "github.com/mattn/go-sqlite3"
)

func main() {
    // TODO: Create user database with CRUD operations
}`,
          solution: `package main

import (
    "database/sql"
    "fmt"
    _ "github.com/mattn/go-sqlite3"
)

func main() {
    db, _ := sql.Open("sqlite3", "users.db")
    defer db.Close()
    
    db.Exec(\`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT,
        email TEXT
    )\`)
    
    // Insert
    db.Exec("INSERT INTO users(name, email) VALUES(?, ?)", "Alice", "alice@example.com")
    
    // Read
    rows, _ := db.Query("SELECT name, email FROM users")
    for rows.Next() {
        var name, email string
        rows.Scan(&name, &email)
        fmt.Println(name, email)
    }
}`,
        },
      ],
      project: {
        id: "proj9",
        title: "Blog Database System",
        description:
          "Build a database-backed blog system with posts and comments",
        difficulty: "advanced",
        learningObjectives: [
          "Database design",
          "Relationships",
          "Query optimization",
        ],
        starterCode: `package main

import "fmt"

// TODO: Implement blog database system

func main() {
    // TODO: Create and manage blog
}`,
      },
    },
    {
      id: "testing",
      title: "Testing in Go",
      description: "Write unit tests and test your code effectively",
      order: 10,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Unit Testing",
          content: `Go includes testing in the standard library. Testing functions start with Test and receive *testing.T.`,
          codeExamples: [
            {
              title: "Basic Test",
              language: "go",
              code: `package main

import "testing"

func Add(a, b int) int {
    return a + b
}

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    expected := 5
    
    if result != expected {
        t.Errorf("Expected %d, got %d", expected, result)
    }
}

func TestAddZero(t *testing.T) {
    result := Add(0, 0)
    if result != 0 {
        t.Fail()
    }
}`,
            },
            {
              title: "Table-Driven Tests",
              language: "go",
              code: `package main

import "testing"

func TestAddMultiple(t *testing.T) {
    tests := []struct {
        name     string
        a, b     int
        expected int
    }{
        {"positive numbers", 2, 3, 5},
        {"negative numbers", -1, -1, -2},
        {"mixed", 5, -3, 2},
        {"zeros", 0, 0, 0},
    }
    
    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            result := Add(tt.a, tt.b)
            if result != tt.expected {
                t.Errorf("got %d, want %d", result, tt.expected)
            }
        })
    }
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex10",
          title: "Test a Calculator",
          description: "Write unit tests for calculator functions",
          difficulty: "intermediate",
          starterCode: `package main

import "testing"

func Add(a, b int) int { return a + b }
func Subtract(a, b int) int { return a - b }
func Multiply(a, b int) int { return a * b }

// TODO: Write tests for all functions
`,
          solution: `package main

import "testing"

func Add(a, b int) int { return a + b }
func Subtract(a, b int) int { return a - b }
func Multiply(a, b int) int { return a * b }

func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Expected 5, got %d", result)
    }
}

func TestSubtract(t *testing.T) {
    result := Subtract(5, 3)
    if result != 2 {
        t.Errorf("Expected 2, got %d", result)
    }
}

func TestMultiply(t *testing.T) {
    result := Multiply(3, 4)
    if result != 12 {
        t.Errorf("Expected 12, got %d", result)
    }
}`,
        },
      ],
      project: {
        id: "proj10",
        title: "Comprehensive Test Suite",
        description: "Write comprehensive tests for a utility library",
        difficulty: "advanced",
        learningObjectives: [
          "Write effective tests",
          "Use table-driven tests",
          "Achieve high coverage",
        ],
        starterCode: `package main

// TODO: Create utility functions and write comprehensive tests

func main() {
    // TODO: Test your utilities
}`,
      },
    },
    {
      id: "devops-tools",
      title: "DevOps Tools & CLI",
      description: "Build command-line tools and DevOps applications",
      order: 11,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Command-Line Arguments",
          content: `Build powerful CLI tools using Go with the flag package and others.`,
          codeExamples: [
            {
              title: "Flag Package",
              language: "go",
              code: `package main

import (
    "flag"
    "fmt"
)

func main() {
    namePtr := flag.String("name", "World", "name to greet")
    agePtr := flag.Int("age", 0, "age of person")
    verbosePtr := flag.Bool("verbose", false, "verbose output")
    
    flag.Parse()
    
    fmt.Printf("Hello, %s!\\n", *namePtr)
    
    if *verbosePtr {
        fmt.Printf("Age: %d\\n", *agePtr)
    }
}`,
            },
            {
              title: "Docker Interactions",
              language: "go",
              code: `package main

import (
    "context"
    "fmt"
    "os/exec"
)

func main() {
    // Run docker command
    cmd := exec.CommandContext(
        context.Background(),
        "docker", "ps", "-a",
    )
    
    output, err := cmd.Output()
    if err != nil {
        fmt.Println("Error:", err)
    }
    fmt.Println(string(output))
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex11",
          title: "File Backup Tool",
          description:
            "Create a CLI tool to backup files with progress reporting",
          difficulty: "intermediate",
          starterCode: `package main

import (
    "flag"
    "fmt"
)

func main() {
    // TODO: Create a file backup CLI tool
}`,
          solution: `package main

import (
    "flag"
    "fmt"
    "io"
    "os"
)

func main() {
    sourcePtr := flag.String("src", "", "source file")
    destPtr := flag.String("dest", "", "destination file")
    flag.Parse()
    
    if *sourcePtr == "" || *destPtr == "" {
        fmt.Println("Usage: -src <source> -dest <destination>")
        return
    }
    
    src, _ := os.Open(*sourcePtr)
    defer src.Close()
    
    dst, _ := os.Create(*destPtr)
    defer dst.Close()
    
    io.Copy(dst, src)
    fmt.Println("Backup completed")
}`,
        },
      ],
      project: {
        id: "proj11",
        title: "System Monitoring Tool",
        description: "Build a CLI tool to monitor system resources",
        difficulty: "advanced",
        learningObjectives: [
          "CLI development",
          "System calls",
          "Real-time monitoring",
        ],
        starterCode: `package main

import "fmt"

// TODO: Implement system monitoring CLI tool

func main() {
    // TODO: Monitor system resources
}`,
      },
    },
    {
      id: "advanced-patterns",
      title: "Advanced Patterns",
      description: "Explore advanced Go patterns and best practices",
      order: 12,
      videoId: "dQw4w9WgXcQ",
      tutorials: [
        {
          title: "Design Patterns",
          content: `Master common design patterns in Go for building scalable applications.`,
          codeExamples: [
            {
              title: "Singleton Pattern",
              language: "go",
              code: `package main

import (
    "sync"
)

type Singleton struct {
    value string
}

var instance *Singleton
var once sync.Once

func GetInstance() *Singleton {
    once.Do(func() {
        instance = &Singleton{value: "singleton"}
    })
    return instance
}`,
            },
            {
              title: "Factory Pattern",
              language: "go",
              code: `package main

type Logger interface {
    Log(message string)
}

type ConsoleLogger struct{}

func (cl ConsoleLogger) Log(msg string) {
    println(msg)
}

type FileLogger struct {
    filename string
}

func (fl FileLogger) Log(msg string) {
    // Log to file
}

func NewLogger(logType string) Logger {
    switch logType {
    case "console":
        return ConsoleLogger{}
    case "file":
        return FileLogger{filename: "log.txt"}
    default:
        return ConsoleLogger{}
    }
}`,
            },
          ],
        },
      ],
      exercises: [
        {
          id: "ex12",
          title: "Observer Pattern",
          description: "Implement the observer pattern for event notification",
          difficulty: "advanced",
          starterCode: `package main

import "fmt"

type Observer interface {
    Update(message string)
}

type Subject struct {
    // TODO: Implement observer list
}

func main() {
    // TODO: Implement and test observer pattern
}`,
          solution: `package main

import "fmt"

type Observer interface {
    Update(message string)
}

type ConcreteObserver struct {
    name string
}

func (o ConcreteObserver) Update(msg string) {
    fmt.Printf("%s received: %s\\n", o.name, msg)
}

type Subject struct {
    observers []Observer
}

func (s *Subject) Attach(o Observer) {
    s.observers = append(s.observers, o)
}

func (s *Subject) Notify(msg string) {
    for _, o := range s.observers {
        o.Update(msg)
    }
}

func main() {
    subject := &Subject{}
    subject.Attach(ConcreteObserver{"Observer1"})
    subject.Attach(ConcreteObserver{"Observer2"})
    subject.Notify("Hello Observers!")
}`,
        },
      ],
      project: {
        id: "proj12",
        title: "Event Streaming System",
        description:
          "Build an event streaming system with publisher/subscriber pattern",
        difficulty: "advanced",
        learningObjectives: [
          "Advanced patterns",
          "Event-driven architecture",
          "Scalability",
        ],
        starterCode: `package main

import "fmt"

// TODO: Implement event streaming system with advanced patterns

func main() {
    // TODO: Create event system
}`,
      },
    },
  ],
};
