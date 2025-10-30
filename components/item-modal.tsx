"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ItemModalProps } from "@/types";

export function ItemModal({
  isOpen,
  onClose,
  onSubmit,
  initialTitle = "",
  initialSubtitle = "",
  mode,
}: ItemModalProps) {
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSubtitle);
  const [errors, setErrors] = useState<{ title?: string; subtitle?: string }>(
    {}
  );

  useEffect(() => {
    if (isOpen) {
      setTitle(initialTitle);
      setSubtitle(initialSubtitle);
      setErrors({});
    }
  }, [isOpen, initialTitle, initialSubtitle]);

  const validate = () => {
    const newErrors: { title?: string; subtitle?: string } = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    }

    if (!subtitle.trim()) {
      newErrors.subtitle = "Subtitle is required";
    } else if (subtitle.trim().length < 3) {
      newErrors.subtitle = "Subtitle must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(title.trim(), subtitle.trim());
      setTitle("");
      setSubtitle("");
      setErrors({});
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {mode === "create" ? "Create New Item" : "Edit Item"}
          </DialogTitle>
          <DialogDescription>
            {mode === "create"
              ? "Add a new item to your list. Fill in the details below."
              : "Update the item details below."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="space-y-5 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">
                Title <span className="text-destructive">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter item title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={errors.title ? "border-destructive" : ""}
                autoFocus
              />
              {errors.title && (
                <p className="text-sm text-destructive">{errors.title}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="subtitle">
                Subtitle <span className="text-destructive">*</span>
              </Label>
              <Input
                id="subtitle"
                placeholder="Enter item subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className={errors.subtitle ? "border-destructive" : ""}
              />
              {errors.subtitle && (
                <p className="text-sm text-destructive">{errors.subtitle}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {mode === "create" ? "Create" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
