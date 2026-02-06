"use client";

import {
  ChevronDown,
  ChevronRight,
  Edit3,
  FileCode2,
  FileJson,
  FileText,
  FileType,
  Folder,
  FolderOpen,
  Plus,
  Trash2,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { FileNode, FileSystem } from "@/lib/sandbox/file-system";

interface FileExplorerProps {
  fileSystem: FileSystem;
  activeFile: string;
  onFileSelect: (path: string) => void;
  onFileCreate: (path: string, content?: string) => void;
  onFileDelete: (path: string) => void;
  onFileRename: (oldPath: string, newPath: string) => void;
}

function getFileIcon(filename: string) {
  const ext = filename.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "tsx":
    case "jsx":
      return <FileCode2 className="size-4 shrink-0 text-[#519aba]" />;
    case "ts":
      return <FileCode2 className="size-4 shrink-0 text-[#3178c6]" />;
    case "js":
    case "mjs":
      return <FileCode2 className="size-4 shrink-0 text-[#e8d44d]" />;
    case "css":
      return <FileType className="size-4 shrink-0 text-[#56b6c2]" />;
    case "json":
      return <FileJson className="size-4 shrink-0 text-[#e8d44d]" />;
    case "md":
    case "mdx":
      return <FileText className="size-4 shrink-0 text-[#519aba]" />;
    default:
      return <FileText className="size-4 shrink-0 text-[#858585]" />;
  }
}

export function FileExplorer({
  fileSystem,
  activeFile,
  onFileSelect,
  onFileCreate,
  onFileDelete,
  onFileRename,
}: FileExplorerProps) {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(["app", "components", "lib"])
  );
  const [editingFile, setEditingFile] = useState<string | null>(null);
  const [newFileName, setNewFileName] = useState("");

  const toggleFolder = (path: string) => {
    const newExpanded = new Set(expandedFolders);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedFolders(newExpanded);
  };

  const handleCreateFile = (parentPath = "") => {
    const fileName = prompt("Enter file name:");
    if (fileName) {
      const fullPath = parentPath ? `${parentPath}/${fileName}` : fileName;
      onFileCreate(fullPath);
    }
  };

  const handleRename = (path: string) => {
    setEditingFile(path);
    setNewFileName(path.split("/").pop() || "");
  };

  const confirmRename = (oldPath: string) => {
    if (newFileName && newFileName !== oldPath.split("/").pop()) {
      const pathParts = oldPath.split("/");
      pathParts[pathParts.length - 1] = newFileName;
      const newPath = pathParts.join("/");
      onFileRename(oldPath, newPath);
    }
    setEditingFile(null);
    setNewFileName("");
  };

  const renderFileTree = (node: FileNode, depth = 0): React.ReactNode => {
    const isExpanded = expandedFolders.has(node.path);
    const isActive = activeFile === node.path;
    const isEditing = editingFile === node.path;

    if (node.type === "directory") {
      return (
        <div key={node.path}>
          <ContextMenu>
            <ContextMenuTrigger>
              <div
                className="group flex cursor-pointer items-center gap-1.5 py-[3px] pr-2 text-[#cccccc] hover:bg-[#2a2d2e]"
                style={{ paddingLeft: `${depth * 12 + 8}px` }}
                onClick={() => toggleFolder(node.path)}
              >
                {isExpanded ? (
                  <ChevronDown className="size-3.5 shrink-0 text-[#858585]" />
                ) : (
                  <ChevronRight className="size-3.5 shrink-0 text-[#858585]" />
                )}
                {isExpanded ? (
                  <FolderOpen className="size-4 shrink-0 text-[#dcb67a]" />
                ) : (
                  <Folder className="size-4 shrink-0 text-[#dcb67a]" />
                )}
                <span className="truncate text-[13px]">{node.name}</span>
              </div>
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem onClick={() => handleCreateFile(node.path)}>
                <Plus className="mr-2 size-3.5" />
                New File
              </ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>

          {isExpanded && node.children && (
            <div>
              {Object.values(node.children).map((child) =>
                renderFileTree(child, depth + 1)
              )}
            </div>
          )}
        </div>
      );
    }

    return (
      <ContextMenu key={node.path}>
        <ContextMenuTrigger>
          <div
            className={`group flex cursor-pointer items-center gap-1.5 py-[3px] pr-2 ${
              isActive
                ? "bg-[#094771] text-white"
                : "text-[#cccccc] hover:bg-[#2a2d2e]"
            }`}
            style={{ paddingLeft: `${depth * 12 + 24}px` }}
            onClick={() => onFileSelect(node.path)}
          >
            {getFileIcon(node.name)}
            {isEditing ? (
              <Input
                value={newFileName}
                onChange={(e) => setNewFileName(e.target.value)}
                onBlur={() => confirmRename(node.path)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") confirmRename(node.path);
                  if (e.key === "Escape") setEditingFile(null);
                }}
                className="h-5 border-[#007acc] bg-[#3c3c3c] px-1 text-[13px] text-[#cccccc]"
                autoFocus
              />
            ) : (
              <span className="truncate text-[13px]">{node.name}</span>
            )}
          </div>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem onClick={() => handleRename(node.path)}>
            <Edit3 className="mr-2 size-3.5" />
            Rename
          </ContextMenuItem>
          <ContextMenuItem
            onClick={() => onFileDelete(node.path)}
            className="text-red-400"
          >
            <Trash2 className="mr-2 size-3.5" />
            Delete
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );
  };

  return (
    <div className="flex h-full flex-col bg-[#252526]">
      <div className="flex items-center justify-between px-3 py-2">
        <span className="text-[11px] font-semibold tracking-wider text-[#bbbbbb] uppercase">
          Explorer
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => handleCreateFile()}
          className="h-5 w-5 p-0 text-[#858585] hover:bg-[#2a2d2e] hover:text-[#cccccc]"
        >
          <Plus className="size-3.5" />
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="pb-4">
          {Object.values(fileSystem.getFileTree()).map((node) =>
            renderFileTree(node)
          )}
        </div>
      </ScrollArea>
    </div>
  );
}
