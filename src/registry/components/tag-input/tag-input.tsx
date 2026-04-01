"use client";

import { Plus, X } from "lucide-react";
import type { ChangeEvent, KeyboardEvent } from "react";
import { useCallback, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export interface TagInputProps {
  /** Initial tags as a comma-separated string. */
  initialValue?: string;
  /** Called with the updated comma-separated tag string. */
  onChange?: (value: string) => void;
  /** Input placeholder. @default "Add tags..." */
  placeholder?: string;
  /** Maximum number of tags. */
  maxTags?: number;
  /** Maximum character length per tag. */
  maxTagLength?: number;
  /** Disable input. */
  disabled?: boolean;
  className?: string;
}

export function TagInput({
  initialValue = "",
  onChange,
  placeholder = "Add tags...",
  maxTags,
  maxTagLength,
  disabled = false,
  className,
}: TagInputProps) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialValue) {
      setTags(
        initialValue
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean)
      );
    }
  }, [initialValue]);

  const notifyChange = useCallback(
    (newTags: string[]) => {
      onChange?.(newTags.join(", "));
    },
    [onChange]
  );

  function validateTag(tag: string): boolean {
    if (!tag.trim()) {
      setError("Tag cannot be empty");
      return false;
    }
    if (maxTagLength && tag.length > maxTagLength) {
      setError(`Tag must be ${maxTagLength} characters or less`);
      return false;
    }
    if (maxTags && tags.length >= maxTags) {
      setError(`Maximum ${maxTags} tags allowed`);
      return false;
    }
    if (tags.includes(tag.trim())) {
      setError("Tag already exists");
      return false;
    }
    setError(null);
    return true;
  }

  function addTag() {
    const trimmed = inputValue.trim();
    if (validateTag(trimmed)) {
      const newTags = [...tags, trimmed];
      setTags(newTags);
      setInputValue("");
      notifyChange(newTags);
    }
  }

  function removeTag(tagToRemove: string) {
    const newTags = tags.filter((t) => t !== tagToRemove);
    setTags(newTags);
    setError(null);
    notifyChange(newTags);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  }

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);
            setError(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="h-9 flex-1 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          aria-invalid={!!error}
        />
        <button
          type="button"
          onClick={addTag}
          disabled={disabled || !inputValue.trim()}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground shadow transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label="Add tag"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {error && (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2" role="list" aria-label="Tags">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              role="listitem"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                disabled={disabled}
                className="rounded-full p-0.5 transition-colors hover:bg-muted-foreground/20 disabled:cursor-not-allowed"
                aria-label={`Remove ${tag}`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
