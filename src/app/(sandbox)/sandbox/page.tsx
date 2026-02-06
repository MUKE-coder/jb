"use client";

import { useState } from "react";

import { CodeEditor } from "@/components/sandbox/code-editor";
import { FileExplorer } from "@/components/sandbox/file-explorer";
import { PreviewPane } from "@/components/sandbox/preview-pane";
import { Toolbar } from "@/components/sandbox/toolbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { defaultFiles } from "@/lib/sandbox/default-files";
import { FileSystem } from "@/lib/sandbox/file-system";

export default function SandboxPage() {
  const [fileSystem, setFileSystem] = useState<FileSystem>(
    () => new FileSystem(defaultFiles)
  );
  const [activeFile, setActiveFile] = useState<string>("app/page.tsx");
  const [previewKey, setPreviewKey] = useState(0);

  const handleFileChange = (path: string, content: string) => {
    const newFileSystem = fileSystem.clone();
    newFileSystem.updateFile(path, content);
    setFileSystem(newFileSystem);
    setPreviewKey((prev) => prev + 1);
  };

  const handleFileCreate = (path: string, content = "") => {
    const newFileSystem = fileSystem.clone();
    newFileSystem.createFile(path, content);
    setFileSystem(newFileSystem);
    setActiveFile(path);
  };

  const handleFileDelete = (path: string) => {
    const newFileSystem = fileSystem.clone();
    newFileSystem.deleteFile(path);
    setFileSystem(newFileSystem);

    if (activeFile === path) {
      const files = newFileSystem.getAllFiles();
      setActiveFile(files.length > 0 ? files[0].path : "");
    }
  };

  const handleFileRename = (oldPath: string, newPath: string) => {
    const newFileSystem = fileSystem.clone();
    newFileSystem.renameFile(oldPath, newPath);
    setFileSystem(newFileSystem);

    if (activeFile === oldPath) {
      setActiveFile(newPath);
    }
  };

  const refreshPreview = () => {
    setPreviewKey((prev) => prev + 1);
  };

  const activeFileData = fileSystem.getFile(activeFile);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#1e1e1e]">
      <Toolbar
        onRefresh={refreshPreview}
        fileSystem={fileSystem}
        onImportProject={(files) => {
          const newFileSystem = new FileSystem(files);
          setFileSystem(newFileSystem);
          const allFiles = newFileSystem.getAllFiles();
          if (allFiles.length > 0) {
            setActiveFile(allFiles[0].path);
          }
        }}
      />

      <ResizablePanelGroup orientation="horizontal" className="min-h-0 flex-1">
        <ResizablePanel defaultSize={20} minSize={5}>
          <FileExplorer
            fileSystem={fileSystem}
            activeFile={activeFile}
            onFileSelect={setActiveFile}
            onFileCreate={handleFileCreate}
            onFileDelete={handleFileDelete}
            onFileRename={handleFileRename}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={45} minSize={10}>
          <CodeEditor
            file={activeFileData}
            onChange={(content) => handleFileChange(activeFile, content)}
          />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={35} minSize={10}>
          <PreviewPane key={previewKey} fileSystem={fileSystem} />
        </ResizablePanel>
      </ResizablePanelGroup>

      {/* Status Bar */}
      <div className="flex h-6 items-center justify-between border-t border-[#2d2d2d] bg-[#007acc] px-3 text-[11px] text-white">
        <div className="flex items-center gap-3">
          <span>Next.js 16 Sandbox</span>
          {activeFile && (
            <>
              <span className="opacity-50">|</span>
              <span>{activeFile}</span>
            </>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span>TypeScript JSX</span>
          <span>UTF-8</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  );
}
