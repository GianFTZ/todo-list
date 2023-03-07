# Historia
- Desenvolva uma API de “Lista de Tarefas” em NodeJS
- Nessa api deve ser capaz de cadastrar, editar, excluir e listar tarefas.

# Regras de Negócio
- Os atributos de uma tarefa devem ser: id, data, descrição e uma flag que identifica se a tarefa foi executada ou não
- Rotas devem ser protegidas
- Erros devem ser tratados
- O usuário só deve ser capaz de interagir com as tarefas criadas por ele mesmo.
- Uma tarefa deve ser armazenada em um banco de dados.
- Uma tarefa deve ser armazenada em cache por 1 hora para depois ser armazenada em um banco de dados.


# Quem vai usar essa API?

Temos algumas telas onde essa API pode ser usada:

- Uma versão simplificada de todas as tarefas cadastradas pelo usuário.

- Quando o usuário clicar em uma tarefa deve ser possivel ver os detalhes da mesma.