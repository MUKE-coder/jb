"use client";

import { Loader2, Pencil } from "lucide-react";
import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface BaseProps {
  /** Async function to persist the value. */
  onSave: (value: string | number | boolean) => Promise<void>;
  className?: string;
}

interface TextCellProps extends BaseProps {
  type: "text";
  value: string;
  displayValue?: string;
}

interface NumberCellProps extends BaseProps {
  type: "number";
  value: number;
  displayValue?: string;
}

interface SelectCellProps extends BaseProps {
  type: "select";
  value: string;
  displayValue?: string;
  options: { label: string; value: string }[];
}

interface DateCellProps extends BaseProps {
  type: "date";
  value: string;
  displayValue?: string;
}

export type EditableCellProps =
  | TextCellProps
  | NumberCellProps
  | SelectCellProps
  | DateCellProps;

export function EditableCell(props: EditableCellProps) {
  const { type, value, displayValue, onSave, className } = props;
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState<string | number>(
    value as string | number
  );
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  async function handleSave() {
    if (editValue === value) {
      setEditing(false);
      return;
    }
    setSaving(true);
    setError(false);
    try {
      await onSave(editValue);
      setEditing(false);
    } catch {
      setError(true);
    } finally {
      setSaving(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    } else if (e.key === "Escape") {
      setEditValue(value as string | number);
      setEditing(false);
      setError(false);
    }
  }

  function startEdit() {
    setEditValue(value as string | number);
    setEditing(true);
  }

  if (saving) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1 text-muted-foreground",
          className
        )}
      >
        <Loader2 className="h-3 w-3 animate-spin" />
      </span>
    );
  }

  if (!editing) {
    return (
      <span
        className={cn(
          "group/cell -mx-1 inline-flex cursor-pointer items-center gap-1 rounded px-1 transition-colors hover:bg-muted",
          className
        )}
        onClick={startEdit}
      >
        <span className="truncate">{displayValue ?? String(value)}</span>
        <Pencil className="h-3 w-3 shrink-0 opacity-0 transition-opacity group-hover/cell:opacity-50" />
      </span>
    );
  }

  if (type === "select") {
    return (
      <Select
        value={editValue as string}
        onValueChange={async (v: string) => {
          setEditValue(v);
          setSaving(true);
          setError(false);
          try {
            await onSave(v);
            setEditing(false);
          } catch {
            setError(true);
          } finally {
            setSaving(false);
          }
        }}
      >
        <SelectTrigger
          className={cn(
            "h-8 w-auto min-w-[100px] text-xs",
            error && "border-destructive",
            className
          )}
          autoFocus
          onBlur={() => setTimeout(() => setEditing(false), 200)}
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {(props as SelectCellProps).options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }

  return (
    <Input
      ref={inputRef}
      type={type === "date" ? "date" : type === "number" ? "number" : "text"}
      value={editValue as string}
      onChange={(e) =>
        setEditValue(
          type === "number" ? Number(e.target.value) : e.target.value
        )
      }
      onBlur={handleSave}
      onKeyDown={handleKeyDown}
      className={cn(
        "h-8 w-auto min-w-[100px] text-xs",
        error && "border-destructive"
      )}
    />
  );
}
