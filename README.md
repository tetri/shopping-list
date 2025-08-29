# 🛒 Lista de Compras - Projeto de Estudos Frontend

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

[![CI](https://github.com/tetri/shopping-list/actions/workflows/ci.yml/badge.svg)](https://github.com/tetri/shopping-list/actions/workflows/ci.yml)
[![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-02569B?style=for-the-badge&logo=dependabot)](https://dependabot.com/)

</div>

---

## 📋 Sobre o Projeto

Este é um **projeto de estudos** focado no desenvolvimento frontend moderno e persistência de dados usando localStorage. A aplicação é uma lista de compras interativa que demonstra conceitos avançados de React, Next.js e gerenciamento de estado.

### 🎯 Objetivos de Aprendizado

- ✅ **Next.js 15** com App Router
- ✅ **React 19** com hooks modernos
- ✅ **TypeScript** para type safety
- ✅ **Tailwind CSS 4** para estilização
- ✅ **localStorage** para persistência de dados
- ✅ **Componentes reutilizáveis** com Radix UI
- ✅ **PWA** com service worker
- ✅ **Testes** com Jest e Testing Library

---

## ✨ Funcionalidades

### 🛍️ Gestão de Compras
- **Adicionar itens** com categoria e quantidade
- **Organização por categorias** com ícones visuais
- **Marcar como concluído** com checkbox
- **Excluir itens** com confirmação
- **Persistência automática** no localStorage

### 🎨 Interface Moderna
- **Design responsivo** para mobile e desktop
- **Ícones visuais** para cada categoria
- **Animações suaves** e transições
- **Tema claro/escuro** com persistência
- **PWA** com manifest e service worker

### 📱 Categorias Disponíveis
- 🥤 **Bebidas**
- 🥩 **Carnes**
- 🥬 **Frutas e Verduras**
- 🌾 **Grãos e Cereais**
- 🧴 **Higiene**
- 🥛 **Laticínios**
- 🧽 **Limpeza**
- 📦 **Outros**

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca de interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### UI/UX
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis
- **[Lucide React](https://lucide.dev/)** - Ícones modernos
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes reutilizáveis

### Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linting de código
- **[Jest](https://jestjs.io/)** - Framework de testes
- **[Testing Library](https://testing-library.com/)** - Testes de componentes

---

## 📊 Status do Projeto

### 🟢 Build Status
- **CI/CD**: [![CI](https://github.com/tetri/shopping-list/actions/workflows/ci.yml/badge.svg)](https://github.com/tetri/shopping-list/actions/workflows/ci.yml)
- **Dependabot**: Atualizações automáticas de dependências
- **Code Quality**: ESLint configurado
- **Testing**: Jest e Testing Library configurados

### 📈 Métricas
- **Performance**: Otimizado com Next.js 15
- **SEO**: Meta tags e manifest configurados
- **PWA**: Service worker e manifest implementados
- **Acessibilidade**: Componentes Radix UI
- **Tema**: Sistema completo de tema claro/escuro

---

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/tetri/shopping-list.git
cd shopping-list

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento com Turbopack
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificação de código
npm test         # Executar testes
```

### Acesse a Aplicação
Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📁 Estrutura do Projeto

```
shopping-list/
├── app/                    # App Router (Next.js 15)
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── manifest.ts        # PWA manifest
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── add-item-form.tsx # Formulário de adicionar item
│   └── shopping-item.tsx # Item da lista
├── public/               # Assets estáticos
│   └── images/          # Imagens organizadas por categoria
├── lib/                 # Utilitários
└── __tests__/          # Testes
```

---

## 🧪 Testes

O projeto inclui testes unitários e de integração:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm test -- --watch

# Executar testes com coverage
npm test -- --coverage
```

---

## 📱 PWA Features

- ✅ **Service Worker** para cache offline
- ✅ **Web App Manifest** para instalação
- ✅ **Ícones responsivos** para diferentes dispositivos
- ✅ **Meta tags** otimizadas para SEO

---

## 🤝 Contribuindo

Este é um projeto de estudos, mas contribuições são bem-vindas!

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **[Next.js](https://nextjs.org/)** pela excelente documentação
- **[shadcn/ui](https://ui.shadcn.com/)** pelos componentes incríveis
- **[Radix UI](https://www.radix-ui.com/)** pela acessibilidade
- **[Tailwind CSS](https://tailwindcss.com/)** pela facilidade de estilização

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

Feito com ❤️ para estudos de frontend moderno

</div>
