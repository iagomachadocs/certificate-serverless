# Certificate Serverless

> Aplicação serverless para a geração e validação de certificados.

![GitHub file size in bytes](https://img.shields.io/github/size/iagomachadocs/certificate-serverless?style=flat-square)
![GitHub language count](https://img.shields.io/github/languages/count/iagomachadocs/certificate-serverless?style=flat-square)

## 💻 Sobre

Aplicação desenvolvida durante o Bootcamp Ignite, na trilha de Node.js. Nela são desenvolvidos dois endpoints, um capaz de gerar um certificado em PDF contendo as informações de um aluno e outro que permite verificar se um determinado certificado é válido. Seu desenvolvimento teve como objetivo o aprendizado sobre o modelo de arquitetura serverless e o seu deploy na AWS. 

## 🛠 Tecnologias

As seguintes tecnologias foram usadas na construção do projeto:

- [Serverless framework](https://www.serverless.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [DynamoDB](https://aws.amazon.com/pt/dynamodb/)
- [Amazon S3](https://aws.amazon.com/pt/s3/)
- [AWS Lambda](https://aws.amazon.com/pt/lambda/)

## 📂 Estrutura do projeto

```
.
├── src
│   ├── functions                   # Diretório contendo as implementações das funções lambda
│   │   ├── generateCertificate.ts  # Função para a geração dos certificados
│   │   │
│   │   └── verifyCertificate.ts    # Função para verificar se um certificado é válido
│   │
|   ├── templates                   # Templates do certificado
|   |
│   └── utils                       # Implementações úteis para as funções
|       └── dynamodbClient.ts       # Geração de um cliente do DynamoDB de acordo com o ambiente de execução
|   
│
├── package.json
├── serverless.ts                  # Arquivo de serviços serverless
└── tsconfig.json                  # Conigurações do compilador Typescript
```