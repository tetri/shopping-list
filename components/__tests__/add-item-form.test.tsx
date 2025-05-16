import { render, screen, fireEvent } from "@testing-library/react";
import { AddItemForm } from "@/components/add-item-form";

describe("Componente AddItemForm", () => {
  test("Renderiza corretamente os campos do formulário", () => {
    render(<AddItemForm onAdd={jest.fn()} />);
    
    expect(screen.getByPlaceholderText("Nome do item")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Categoria")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Quantidade")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  test("Permite preencher os campos corretamente", () => {
    render(<AddItemForm onAdd={jest.fn()} />);
    
    const nomeInput = screen.getByPlaceholderText("Nome do item");
    const categoriaInput = screen.getByPlaceholderText("Categoria");
    const quantidadeInput = screen.getByPlaceholderText("Quantidade");

    fireEvent.change(nomeInput, { target: { value: "Banana" } });
    fireEvent.change(categoriaInput, { target: { value: "Frutas" } });
    fireEvent.change(quantidadeInput, { target: { value: "2" } });

    expect(nomeInput).toHaveValue("Banana");
    expect(categoriaInput).toHaveValue("Frutas");
    expect(quantidadeInput).toHaveValue("2");
  });

  test("Chama a função onAdd ao enviar o formulário", () => {
    const mockOnAdd = jest.fn();
    render(<AddItemForm onAdd={mockOnAdd} />);
    
    fireEvent.change(screen.getByPlaceholderText("Nome do item"), { target: { value: "Leite" } });
    fireEvent.change(screen.getByPlaceholderText("Categoria"), { target: { value: "Bebidas" } });
    fireEvent.change(screen.getByPlaceholderText("Quantidade"), { target: { value: "1" } });

    fireEvent.click(screen.getByText("Adicionar"));

    expect(mockOnAdd).toHaveBeenCalledTimes(1);
    expect(mockOnAdd).toHaveBeenCalledWith("Leite", "Bebidas", 1);
  });
});
