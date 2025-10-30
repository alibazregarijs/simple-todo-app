"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ListItem } from "@/components/list-item";
import { ItemModal } from "@/components/item-modal";
import { Plus } from "lucide-react";
import { Item } from "@/types";
import { mockItems } from "@/constants";

export default function Home() {
  const [items, setItems] = useState<Item[]>(mockItems);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const handleCreate = (title: string, subtitle: string) => {
    const newItem: Item = {
      id: Date.now().toString(),
      title,
      subtitle,
      createdAt: new Date(),
    };
    setItems([newItem, ...items]);
    setIsModalOpen(false);
  };

  const handleEdit = (id: string, title: string, subtitle: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title, subtitle } : item
      )
    );
    setEditingItem(null);
    setIsModalOpen(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const openCreateModal = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const openEditModal = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground">
              List Manager
            </h1>
            <p className="mt-2 text-muted-foreground">
              Manage your items with ease
            </p>
          </div>
          <Button onClick={openCreateModal} size="lg" className="gap-2">
            <Plus className="h-5 w-5" />
            Create Item
          </Button>
        </div>

        {/* List */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-border bg-card py-16 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <Plus className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-card-foreground">
              No items yet
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              Get started by creating your first item
            </p>
            <Button onClick={openCreateModal} className="gap-2">
              <Plus className="h-4 w-4" />
              Create Item
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            {items.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onEdit={() => openEditModal(item)}
                onDelete={() => handleDelete(item.id)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <ItemModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={
          editingItem
            ? (title, subtitle) => handleEdit(editingItem.id, title, subtitle)
            : handleCreate
        }
        initialTitle={editingItem?.title}
        initialSubtitle={editingItem?.subtitle}
        mode={editingItem ? "edit" : "create"}
      />
    </div>
  );
}
