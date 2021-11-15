# dasa-test-qa-marcus-souza

Solução para o Desafio de QA da Dasa por Marcus Henrique.

********************************************************************************************************
## Sobre o projeto:

Este projeto de automação foi desenvolvido em Cypress. 

Para esta solução adotamos as seguintes metodologias:

- Cucumber - Para que seja feita a descrição dos cenários
    Utilizando o conceito de BDD, os cenários estão descritos de forma que as validações sejam construídas a partir do comportamento esperado.

- POM (Page Objects Model) 
    Toda a ingteligência do projeto foi desenvolvida utilizando o conceito de Orientação a Objeto. Sendo assim, todas as ações são efetuadas a partir dos métodos criados.


A seguir veremos como instalar e executar o projeto.

********************************************************************************************************

## Configuração inicial para usar o Cypress pela primeira vez no seu computador:

- Pré-requisitos:
  * Instalação do VSCode
    >> Visual Studio Code é um editor de código fonte leve mas poderoso que roda em sua área de trabalho e está disponível para Windows, MacOS e Linux. Ele vem com suporte integrado para JavaScript, TypeScript e Node.js e tem um rico ecossistema de extensões para outras linguagens (como C++, C#, Java, Python, PHP, Go) e tempos de execução (como .NET e Unity). Fonte: [VSCode](https://code.visualstudio.com/docs)

    Para instalar o VSCode siga o link abaixo:
    - https://code.visualstudio.com/
    - Siga as instruções do download na página. (A melhor versão é exibida em destaque, após o reconhecimento do seu sistema operacional.)


  * Instalação do CMDER (Apenas para usuários do Windows)
    >> Cmder é um pacote de software criado por pura frustração pela ausência de bons emuladores de console no Windows. Ele é baseado em um software incrível e apimentado com o esquema de cores Monokai e um layout personalizado, parecendo sexy desde o início. Fonte: [CMDER](https://cmder.net/)

    - https://cmder.net/
    - Crie uma pasta chamada "tools" na raiz do seu disco (c:\)
    - Extraia o cmder folder into "c:\tools\". Você deve escolher a opção "Extrair para "cmder\" ", para que seja criada uma nova pasta com todo o conteúdo do aquivo baixado.
    - Importante.: Você precisará adicionar nas variáveis de ambientes do windows os endereços para que o CMDER possa funcionar adequadamente, conforme exemplo abaixo:
        * C:\tools\cmder\vendor\bin
        * C:\tools\cmder\vendor\git-for-windows\bin

********************************************************************************************************

  * Instalação do NodeJs

    * Usuários do Windows: 
      Para instalar o nodeJs no Windows, siga o link abaixo para obter o instalador.      
      - https://nodejs.org/ 
      - Faça o download do instalador
      - Execute o instalador
      - Reinicie o Windows (caso seja solicitado)
      - Para verificar se o nodeJs está instalado corretamente execute os comandos abaixo:
        $ node --version
        $ npm --version  

    * Usuários de Linux (Ubuntu):
      Para instalar o nodeJs no linuxs, siga as instruções abaixo:
      - Run the following command to install nodeJs: 
        $ sudo apt-get install nodejs
      - To verify that node was installed correctly run the commands below: 
        $ node --version
        $ npm --version



********************************************************************************************************

## Baixando o projeto para a sua estação de trabalho

1- Clone the project:
  >> O nosso projeto está hospedado na página da Férias & Co no GitHub.

  Para obter o projeto, siga os passos abaixo:

  * Abra o terminal (CMDER, Linux terminal, Powershell etc.)

  * Clone o projeto com a linha de comando abaixo:
        $ git clone https://github.com/marcusdesouza27/dasa-test-qa-marcus-souza.git

  * Informe o seu usuário e senha do github (caso seja solicitado)
  * Quando o clone for finalizado acesse a nova pasta que contém o projeto: "~/dasa-test-qa-marcus-souza"


2- Instalando as dependências do Cypress necessárias para o projeto:
  * Para instalar as dependencias do Cypress execute a linha de comando abaixo:
      $ npm install



3- Executando os testes 

  - Cypress Open (modo visual):

  * Você poderá rodar o projeto executando a linha de comando sugerida abaixo:
      $ npx cypress open

  - Cypress run (modo headless):

    * Você poderá rodar o projeto executando a linha de comando sugerida abaixo:
          $ npm run test


 Importante: Caso você não informe o ambiente a ser executado na linha de comando o Cypress irá assumir automaticamente o ambiente padrão para a execução. No nosso projeto o ambiente padrão é "staging".

*********************************************************************************************************

# Estrutura do projeto

## Config
Esta pasta contém os arquivos de configurações dos ambientes para executar que o projeto possa ser utilizado em condições específicas de cada ambiente.

## Fixtures
Esta pasta é criada com arquivos ".json" para conter dados temporários e fixos a serem usados quando os testes estiverem sendo executados.

## Integration
A pasta "Integration" contém todos os arquivos de características com descrição de cenários. 
Os arquivos de características foram criados usando BDD (Behavior Driven Development)

## Pages
Estamos usando a metodologia "Page Objects". Nesta pasta colocamos todos os arquivos ".pagejs". 
Aqui temos duas finalidades: Mapeamento dos elementos das páginas e criação de classes e métodos contendo toda a lógica da automação deste projeto.

## Steps
A pasta Passos contém todos os arquivos "_steps" (step_definition). 
Os steps tem a função de orquestrar a invocação dos métodos fazendo com que os cenários previamente criados sejam validados.

## Screenshots
Esta pasta contém todas as imagens capturadas pelo Cypress durante a execução dos testes.

## .gitignore
Neste arquivo, são indicados todos os arquivos e pastas que precisam ser ignorados pelo git ao fazermos uma atualização do projeto no repositório.

## cypress.json
Este é o arquivo principal de configuração do Cypress. Nele são informados parâmetros globais necessários para a execução do projeto.

## package.json
Este é um arquivo que determina quais os pacotes que usamos e devemos instalar no projeto para funcionar corretamente.

## Reference
Você pode acessar a documentação do Cypress para maiores informações: [Cypres.io](https://www.cypress.io/).