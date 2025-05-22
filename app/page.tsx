"use client";

import { useState, useEffect } from "react";
import { ShoppingItem } from "@/components/shopping-item";
import { AddItemForm } from "@/components/add-item-form";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  completed: boolean;
}

export default function Home() {
  const [items, setItems] = useState<ShoppingItem[]>([]);
  const [itemToDelete, setItemToDelete] = useState<ShoppingItem | null>(null);

  // Carregar itens salvos no localStorage após a montagem do componente
  useEffect(() => {
    const savedItems = localStorage.getItem("shoppingItems");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  const handleAddItem = (name: string, category: string, quantity: number) => {
    const newItem: ShoppingItem = {
      id: crypto.randomUUID(),
      name,
      category,
      quantity,
      completed: false,
    };

    setItems((prev) => {
      const newItems = [...prev, newItem];
      localStorage.setItem("shoppingItems", JSON.stringify(newItems));
      return newItems;
    });
  };

  const handleToggleItem = (id: string) => {
    setItems((prev) => {
      const newItems = prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      );
      localStorage.setItem("shoppingItems", JSON.stringify(newItems));
      return newItems;
    });
  };

  const handleDeleteItem = (id: string) => {
    setItems((prev) => {
      const newItems = prev.filter((item) => item.id !== id);
      localStorage.setItem("shoppingItems", JSON.stringify(newItems));
      return newItems;
    });
    setItemToDelete(null);
  };

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, ShoppingItem[]>);

  return (
    <main className="container w-2xl mx-auto py-8 space-y-8">
      <div className="space-y-1">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Lista de Compras
        </h1>
        <p className="text-xl text-muted-foreground">
          Organize suas compras por categorias
        </p>
      </div>

      <AddItemForm onAdd={handleAddItem} />

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">{category}</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <ShoppingItem
                  key={item.id}
                  {...item}
                  onToggle={handleToggleItem}
                  onDelete={() => setItemToDelete(item)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <AlertDialog open={!!itemToDelete} onOpenChange={() => setItemToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Excluir {itemToDelete?.name}?</AlertDialogTitle>
            <AlertDialogDescription>
              Tem certeza que deseja excluir este item da lista de compras?<br />
              Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Não, cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => itemToDelete && handleDeleteItem(itemToDelete.id)}
              className="bg-destructive hover:bg-destructive/80"
            >
              Sim, excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
}
