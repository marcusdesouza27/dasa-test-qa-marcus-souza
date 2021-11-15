# Teste QA Dasa

Inicie o teste clonando este repositório:

```bash
git clone https://github.com/dasa-health/test-qa.git
```

- Crie um repositório no seu github para subir o seu projeto e nos mande o link do repositório:


Para realizar este teste você **PODE**:

- Alterar o código caso veja necessidade (por ex: Para criar seletores melhores, incluir id para facilitar na sua automação etc...). (Nos mande o projet junto com o seu repositorio caso altere alguma informação)

DOCUMENTAR**.

- Escrever seus próprios cenários como preferir. Lembrando que tem que atender todos os cénarios para respectiva funcionalidade

- Apresentar **idéias** e apontar **Bug** no projeto como preferir. (Pode criar um documento e descrever os bugs encontrados. So criar um pasta na raiz do seu projeto "bug", e lá colocar um arquivo '.pdf' detalhando os bugs encontrados)

**Não** pode:

- Esquecer de documentar toda a estrutra e arquitetura. Lembre que nos vamos seguir o passo a passo :)

**Desejável**:

- Que aplique as [boas praticas da Tecnologia utilizada]

## Setup do projeto

Se quiser enteder melhor o projeto pode dar uma olhada no [Vue.js](https://cli.vuejs.org/config/).

### Usando Docker

Você pode iniciar a aplicação usando o docker. Para isso você terá que ter instalado o docker na sua maquina:

```bash
docker build -t test-qa . && docker run --rm -p 8080:8080 -e “HOST=0.0.0.0” -d test-qa:latest
```

Se tudo ocorrer como esperado pode conferir nesta porta [http://localhost:8080/](http://localhost:8080/)

### Ou se prefir utilizando Node.js instalado

```bash
npm install
```

#### Compila e provém [http://localhost:8080/](http://localhost:8080/)

```bash
npm run serve
```

## Obrigado por realizar os teste

Caso sinta-se confortavel [avaliações são sempre bem-vindas este teste por aqui](https://forms.gle/qKEf7thRgnjvG2nXA)
