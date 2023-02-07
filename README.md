# Desafio To Do List

## Instruções de Instalação
Basta seguir os passos abaixo para que consiga fazer a instalação completa do projeto em sua máquina.
Para que funcione corretamente é necessário que tenha instalado:
- NodeJS
- NPM ou Yarn
<br>
Após ter instalado as dependências necessárias, rode os comandos abaixo em seu terminal:

```bash
  # Clone o projeto em uma pasta de sua preferência
  $ git clone https://github.com/guilhermecezario/todolist-api

  # Entre na pasta do projeto
  $ cd todolist-api

  # Renomeie o arquivo de variaveis ambiente
  $ mv .env.example .env

  # Instale as dependências
  $ yarn install
  ou 
  $ npm install

  # Rode as migrations para gerar o banco
  npx prisma migrate init

  # Rode o projeto em sua máquina
  $ yarn run start
```

## Instruções de Testes
Para rodar os teste em sua maquina basta rodar o comandos abaixo em seu terminal

```bash
  # Rode os testes unitarios
  $ yarn run test

  # Rode os testes end-to-end
  $ yarn run test:e2e

  # Rode o coverage
  $ yarn run test:cov
```
