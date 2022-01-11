# toLinkApi (PipeDrive + Bling)

## Sobre
Esta api é uma integração entre o PipeDrive e o Bling, com o objetivo de captura todos os Deals com Status Won e transformar em Orders dentro do Bling, além de listar o valor total sincronizado por dia
<br>

## Requisitos
- [x] Criar contas testes nas plataformas Pipedrive e Bling.

- [x] Criar uma integração entre as plataformas Pipedrive e Bling (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [x] Criar banco de dados Mongo, existem serviços como MongoDB Atlas para criar de graça.

- [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- [x] Criar endpoint para trazer os dados consolidados da collection do MongoDB.

## Começando
- Primeiramente, instale as dependências utilizando ```yarn install``` ou ```npm install``` a depende do gerenciador de pacotes de sua preferência
- Antes de começar dever ter:
    - Uma conexão Mongo, nessa aplicação foi utilizado o Atlas
    - Credenciais para a api do PipeDrive
    - Credenciais para a api do Bling
- Criar um arquivo ```.env``` para armezenzar dados sensiveis a aplicação, como as credenciais e a conexão mongo
```.env
PORT=<Uma porta de produção ou desenvolvimento>
SWAGGER_URI=<URL da documentação>
BLING_URL=https://bling.com.br/Api/v2
BLING_TOKEN=<Token Bling>
PIPEDRIVE_URL=<Domino PipeDrive>
PIPEDRIVE_TOKEN=<Token PipeDrive>
STRING_CONNECTION=<String de conexão>
```
Com essas variáveis de ambiente configuradas podemos executar nossa aplicação. Devo lembrar que os Deals devem ser postados por fora, essa aplicação não faz a inserção de novos Deals no PipeDrive, apenas a conversão para o Pipe
para verificar como inserir um novo Deal consulte [PipeDrive Deals](https://pipedrive.readme.io/docs/creating-a-deal)

## Executando
Para a execução foram criados alguns scripts dentro da aplicação
- dev: Execute  o comando ```yarn dev``` ou ```npx dev``` para executa a aplicação com o nodemon para desenvolvimento, ele vai recarregar a aplicação sempre que uma nova mudança for salva
- swagger-autogen: Execute o comando ```yarn swagger-autogen``` ou ```npx swagger-autogen``` para executar aplicação direto pelo swagger. Ele vai gerar a documentação automática, e executar o arquivo responsável pelo core da aplicação, nesse casso o ```src/server.js```

A aplicação contem quatro rotas, todas do tipo GET:
- ```/``` : rota principal, retornado apenas alguns dados básico sobre a aplicação e autor
- ```/api/documentation```: rota onde está disponível a documentação da aplicação gerada automáticamente pelo swagger.
- ```/api/sync-deals```: rota responsável por sincronizar os Won Deals do PipeDrive para o Bling, além de criar ou atualizar o registro do total movimento no dia onde foi executado a sincronização
- ```/api/profits``` : retorna todos os dias em que foi executado uma sincronização

## Referências
* Dependências
    * [Axios](https://www.npmjs.com/package/axios)
    * [Dotenv](https://www.npmjs.com/package/dotenv)
    * [Express](https://www.npmjs.com/package/express)
    * [Mongoose](https://www.npmjs.com/package/mongoose)
    * [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) 
    * [Swagger-autogen](https://www.npmjs.com/package/swagger-autogen)
* Documentações
    * [PipeDrive](https://developers.pipedrive.com/docs/api/v1/)
    * [Bling](https://ajuda.bling.com.br/hc/pt-br/categories/360002186394-API-para-Desenvolvedores)
    * [Mongoose](https://mongoosejs.com/docs/guide.html)
    * [Swagger](https://swagger.io/docs/)

## Autor
*Guilherme Ventura Santos Silva [GVSS]*

[![Twitter Badge](https://img.shields.io/badge/-@gventura_ss-6633cc?style=flat-square&labelColor=000000&logo=twitter&logoColor=white&link=https://twitter.com/gventura_ss)](https://twitter.com/gventura_ss) [![Linkedin Badge](https://img.shields.io/badge/-Guilherme%20Ventura-6633cc?style=flat-square&logo=Linkedin&logoColor=black&link=https://www.linkedin.com/in/guilherme-ventura-703612150/)](https://www.linkedin.com/in/gvssilva/)
