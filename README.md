# Frontend-Alunos-React

Esta é uma aplicação web desenvolvida em React para gerenciar uma lista de alunos, consumindo uma API já constrída para este projeto. Com ele, os usuários podem visualizar, cadastrar, editar e excluir alunos, além de adicionar e visualizar fotos associadas a cada aluno. A aplicação possui funcionalidades restritas para usuários logados, garantindo uma experiência personalizada e segura.

## 💻 Tecnologias Utilizadas

Para desenvolver esta SPA (_Single-Page-Application_), foram utilizadas diversas tecnologias modernas e eficientes. O projeto faz uso do React Router DOM para gerenciar a navegação entre páginas, Redux para o gerenciamento global de estado, e styled components para estilização dos componentes. Além disso, o Axios foi utilizado para fazer as requisições HTTP à API de Alunos. Foram implementados também efeitos de carregamento de conteúdo com loaders e skeletons, proporcionando uma experiência de usuário mais agradável.

## 🏳 Rotas

A seguir, apresentamos as principais rotas da aplicação:

| Rota              | Descrição                                               | Login Required |
| ----------------- | --------------------------------------------------------- | :------------: |
| /                 | Exibe informações básicas sobre os alunos cadastrados. |       ❌       |
| /register         | Página de registro de novo usuário.                     |       ❌       |
| /register         | Página de gestão da conta (para usuários logados).    |       ✔       |
| /login            | Página de login.                                         |       ❌       |
| /alunos/novo      | Permite cadastrar um novo aluno.                          |       ✔       |
| /alunos/:id/edit  | Permite editar os dados de um aluno específico.          |       ✔       |
| /alunos/:id/fotos | Exibe as fotos cadastradas para um aluno específico.     |       ✔       |

## 🚀 Instalação Local

Para executar este projeto localmente, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Certifique-se de que o backend deste projeto esteja em execução. Se não estiver, consulte o [repositório do backend](https://github.com/gabrielsantos7/API-Alunos-Express "Tutorial de instalação do back-end") para obter instruções sobre como executá-lo localmente.
3. Clone este repositório do frontend:

   ```bash
   git clone https://github.com/gabrielsantos7/Frontend-Alunos-React.git
   ```

4. Acesse o diretório clonado:

   ```bash
   cd Frontend-Alunos-React
   ```

5. Instale as dependências necessárias:

   ```bash
   npm install
   ```

6. Para rodar o projeto, execute o comando:

   ```bash
   npm run dev
   ```

## 🤝 Contribuindo

Sinta-se à vontade para contribuir com este projeto. Caso encontre problemas ou queira propor melhorias, abra uma nova issue ou envie um pull request.
