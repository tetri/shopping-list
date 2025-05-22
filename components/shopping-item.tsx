import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface ShoppingItemProps {
  id: string
  name: string
  category: string
  quantity: number
  completed: boolean
  onToggle: (id: string) => void
  onDelete: () => void
}

export function ShoppingItem({
  id,
  name,
  category,
  quantity,
  completed,
  onToggle,
  onDelete,
}: ShoppingItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      <Checkbox
        checked={completed}
        onCheckedChange={() => onToggle(id)}
        className="h-5 w-5"
      />
      <div className="flex-1">
        <p className={`font-medium ${completed ? "line-through text-muted-foreground" : ""}`}>
          {quantity}x {name}
        </p>
        <p className="text-sm text-muted-foreground">{category}</p>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="text-destructive hover:text-destructive/90"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
} 