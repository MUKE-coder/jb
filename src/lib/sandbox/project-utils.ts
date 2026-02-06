import type { FileSystem } from "./file-system";

export function exportProject(fileSystem: FileSystem) {
  const files = fileSystem.getFilesObject();
  const projectData = JSON.stringify(files, null, 2);

  const blob = new Blob([projectData], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "nextjs-sandbox-project.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

export async function importProject(
  files: FileList
): Promise<Record<string, string>> {
  const importedFiles: Record<string, string> = {};

  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    if (file.name.endsWith(".json")) {
      // Import from exported JSON
      const content = await file.text();
      try {
        const parsed = JSON.parse(content);
        Object.assign(importedFiles, parsed);
      } catch (error) {
        console.error("Failed to parse JSON file:", error);
      }
    } else {
      // Import individual files
      const content = await file.text();
      importedFiles[file.name] = content;
    }
  }

  return importedFiles;
}
