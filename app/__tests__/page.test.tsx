import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Página Home", () => {
  test("Renderiza corretamente o título", () => {
    render(<Home />);
    expect(screen.getByText("Lista de Compras")).toBeInTheDocument();
  });

  test("Adiciona um item à lista de compras", () => {
    render(<Home />);
    
    // Simular entrada de dados no formulário
    fireEvent.change(screen.getByPlaceholderText("Nome do item"), { target: { value: "Banana" } });
    fireEvent.change(screen.getByPlaceholderText("Categoria"), { target: { value: "Frutas" } });
    fireEvent.change(screen.getByPlaceholderText("Quantidade"), { target: { value: "2" } });

    // Simular clique no botão de adicionar
    fireEvent.click(screen.getByText("Adicionar"));

    // Verificar se o item foi adicionado
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  test("Marca um item como concluído", () => {
    render(<Home />);
    
    // Simular adição de um item
    fireEvent.change(screen.getByPlaceholderText("Nome do item"), { target: { value: "Leite" } });
    fireEvent.change(screen.getByPlaceholderText("Categoria"), { target: { value: "Bebidas" } });
    fireEvent.change(screen.getByPlaceholderText("Quantidade"), { target: { value: "1" } });
    fireEvent.click(screen.getByText("Adicionar"));

    // Simular clique para marcar como concluído
    fireEvent.click(screen.getByText("Leite"));

    // Verificar se o item foi marcado como concluído
    expect(screen.getByText("Leite")).toHaveClass("completed");
  });

  test("Remove um item da lista", () => {
    render(<Home />);
    
    // Simular adição de um item
    fireEvent.change(screen.getByPlaceholderText("Nome do item"), { target: { value: "Ovos" } });
    fireEvent.change(screen.getByPlaceholderText("Categoria"), { target: { value: "Frios" } });
    fireEvent.change(screen.getByPlaceholderText("Quantidade"), { target: { value: "12" } });
    fireEvent.click(screen.getByText("Adicionar"));

    // Simular clique no botão de remover
    fireEvent.click(screen.getByText("Remover"));

    // Verificar se o item foi removido
    expect(screen.queryByText("Ovos")).not.toBeInTheDocument();
  });
});
