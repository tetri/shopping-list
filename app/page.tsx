"use client";

import { useState, useEffect } from "react";
import { ShoppingItem } from "@/components/shopping-item";
import { AddItemForm } from "@/components/add-item-form";

interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
  completed: boolean;
}

export default function Home() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

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
        <h1 className="text-4xl font-bold tracking-tight">Lista de Compras</h1>
        <p className="text-muted-foreground">
          Organize suas compras por categorias
        </p>
      </div>

      <AddItemForm onAdd={handleAddItem} />

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h2 className="text-xl font-semibold">{category}</h2>
            <div className="space-y-2">
              {items.map((item) => (
                <ShoppingItem
                  key={item.id}
                  {...item}
                  onToggle={handleToggleItem}
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
