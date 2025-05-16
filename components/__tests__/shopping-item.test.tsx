import { render, screen, fireEvent } from "@testing-library/react";
import { ShoppingItem } from "@/components/shopping-item";

describe("Componente ShoppingItem", () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  const item = {
    id: "1",
    name: "Maçã",
    quantity: 2,
    category: "Frutas",
    completed: false,
  };

  test("Renderiza corretamente um item de compras", () => {
    render(<ShoppingItem {...item} onToggle={mockToggle} onDelete={mockDelete} />);
    
    expect(screen.getByText("Maçã")).toBeInTheDocument();
    expect(screen.getByText("Quantidade: 2")).toBeInTheDocument();
    expect(screen.getByText("Frutas")).toBeInTheDocument();
  });

  test("Marca um item como concluído ao clicar", () => {
    render(<ShoppingItem {...item} onToggle={mockToggle} onDelete={mockDelete} />);
    
    fireEvent.click(screen.getByText("Maçã"));
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
    expect(mockToggle).toHaveBeenCalledWith("1");
  });

  test("Remove um item ao clicar no botão de deletar", () => {
    render(<ShoppingItem {...item} onToggle={mockToggle} onDelete={mockDelete} />);
    
    fireEvent.click(screen.getByText("Remover"));
    
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith("1");
  });
});
