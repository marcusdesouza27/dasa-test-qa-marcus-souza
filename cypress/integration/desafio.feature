Feature: Desafio QA - Marcus Souza

Background: 
Given eu acesso a página inicial da apicação


Scenario: Cadastrar Tarefa
When eu insiro uma nova tarefa
And confirmo a ação
Then vejo a nova tarefa criada

Scenario: Concluir Tarefa
Given eu insiro uma nova tarefa
And confirmo a ação
When eu marco a tarefa como concluída
Then vejo a tarefa ser removida da lista

Scenario: Consultar tarefa Concluída
Given eu confirmo uma tarefa como concluída
When eu pesquiso uma tarefa na lista de tarefas concluídas
Then eu visualizo a tarefa concluída no resultado da pesquisa

Scenario: Consultar tarefa Inexistente
Given eu confirmo uma tarefa como concluída
When eu pesquiso uma tarefa inexistente
Then eu visualizo a tela sem a tarefa indicada

Scenario: Excluir Tarefa
Given eu insiro múltiplas tarefas
And confirmo a ação
When eu excluo uma tarefa da lista
Then vejo a lista atualizada após a remoção da tarefa

Scenario: Excluir Tarrefa Concluída
Given eu confirmo uma tarefa como concluída
When eu excluo uma tarefa da lista de tarefas concluídas
Then vejo a lista atualizada após a remoção da tarefa concluída