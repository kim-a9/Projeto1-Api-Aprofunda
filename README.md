**Projeto 1 - API de Gerenciamento de Tarefas**

Este projeto consiste no desenvolvimento de uma API simples para gerenciamento de tarefas. 
A API permite criar, visualizar, atualizar e deletar tarefas, utilizando uma estrutura em memória (array de objetos).

**🚀 Funcionalidades**
- GET /tasks - Listar todas as tarefas
- GET /tasks/:id - Obter detalhes de uma tarefa específica
- POST /tasks - Criar uma nova tarefa
- PUT /tasks/:id - Atualizar uma tarefa existente
- DELETE /tasks/:id - Remover uma tarefa
  
**🛠️ Tecnologias Utilizadas**
- Node.js
- Express.js
- ThunderClient (para testes)

**💡 Objetivo**
- Criar e configurar o servidor utilizando Node.js e Express.
- Trabalhar com dados em memória (array de objetos).
- Estruturar rotas.
- Realizar testes via ThunderClient.
  
**✅ Entregas**
- Desenvolvimento das rotas PUT e DELETE por ID.
- Testes realizados com prints incluídos abaixo.

**🚀 Como instalar as dependências**

- Clone o projeto na sua máquina com o comando:
    ```console
    git clone URL_DO_PROJETO
    ```

- Navegue até o diretório do projeto no terminal utilizando:
    ```console
    cd NOME_DO_PROJETO  
    ``` 

- Instale as dependências do projeto utilizando o comando:
    ```javascript
    npm install
    ```

- Para iniciar o servidor:
    ```javascript
    npm start
    ```


**🧪 Prints dos Testes**

- POST ✅
![post](<primeiro teste - post 1.png>) ![POST](<primeiro teste - post 2.png>) ![POST](<primeiro teste - post 3.png>) 

- GET ✅
![get all tasks](<segundo teste - get tasks.png>)

- GET BY ID ✅
![get by id](<terceiro teste - get task by id 1.png>) ![get by id](<terceiro teste - get task by id 2.png>) ![get by id](<terceiro teste - get task by id 3.png>)

- PUT ✅
![put task number 2](<quarto teste - put 2.png>) ![put task number 2](<quarto teste - put 1.png>)

- DELETE ✅
![delete](<quinto teste - delete.png>)