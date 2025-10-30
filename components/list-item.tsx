"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import type { ListItemProps } from "@/types";

export function ListItem({ item, onEdit, onDelete }: ListItemProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  return (
    <Card className="group relative overflow-hidden border-border bg-card transition-all hover:border-muted-foreground/20">
      <div className="flex items-start gap-4 p-5">
        <div className="flex-1 space-y-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-1">
              <h3 className="text-lg font-medium leading-tight text-card-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
              <Button
                variant="ghost"
                size="icon"
                onClick={onEdit}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
              >
                <Pencil className="h-4 w-4" />
                <span className="sr-only">Edit item</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onDelete}
                className="h-8 w-8 text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                <span className="sr-only">Delete item</span>
              </Button>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Created {formatDate(item.createdAt)}
          </p>
        </div>
      </div>
    </Card>
  );
}
