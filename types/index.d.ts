export interface ItemModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (title: string, subtitle: string) => void
  initialTitle?: string
  initialSubtitle?: string
  mode: "create" | "edit"
}

interface ListItemProps {
  item: Item
  onEdit: () => void
  onDelete: () => void
}

export interface Item {
  id: string
  title: string
  subtitle: string
  createdAt: Date
}