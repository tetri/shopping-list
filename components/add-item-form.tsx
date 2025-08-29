import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus } from "lucide-react"
import Image from "next/image"

interface AddItemFormProps {
  onAdd: (name: string, category: string, quantity: number) => void
}

const categories = [
  "Bebidas",
  "Carnes",
  "Frutas e Verduras",
  "Grãos e Cereais",
  "Higiene",
  "Laticínios",
  "Limpeza",
  "Outros",
]

// Mapeamento de categorias para ícones
const categoryIcons: Record<string, string> = {
  "Bebidas": "/images/icons/categories/bebidas.png",
  "Carnes": "/images/icons/categories/carnes.png",
  "Frutas e Verduras": "/images/icons/categories/frutas-e-verduras.png",
  "Grãos e Cereais": "/images/icons/categories/graos-e-cereais.png",
  "Higiene": "/images/icons/categories/shopping.png",
  "Laticínios": "/images/icons/categories/laticinios.png",
  "Limpeza": "/images/icons/categories/limpeza.png",
  "Outros": "/images/icons/categories/shopping.png",
}

export function AddItemForm({ onAdd }: AddItemFormProps) {
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && category && quantity) {
      onAdd(name.trim(), category, Number(quantity))
      setName("")
      setCategory("")
      setQuantity("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[200px]">
          <Label htmlFor="category" className="text-sm font-medium leading-none">Categoria</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat} className="flex items-center gap-2">
                  <Image
                    src={categoryIcons[cat]}
                    alt={cat}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                    onError={(e) => {
                      // Fallback para um ícone genérico se a imagem não carregar
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-2 w-[100px]">
          <Label htmlFor="quantity" className="text-sm font-medium leading-none">Quantidade</Label>
          <Input
            id="quantity"
            type="number"
            autoComplete="off"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 flex-2">
          <Label htmlFor="name" className="text-sm font-medium leading-none">Item</Label>
          <Input
            id="name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button className="self-end" variant="outline" size="icon" type="submit"><Plus /></Button>
      </div>
    </form>
  )
} 