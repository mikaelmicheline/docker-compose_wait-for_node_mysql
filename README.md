# docker-compose_wait-for_node_mysql
Estudo de Docker Compose e Wait-For: criando um container node e outro mysql

Para executar esse projeto:
1. Clone o projeto para uma pasta dentro da sua máquina Linux ou Linux em WSL2
2. Entre na pasta clonada
3. No arquivo docker-compose.yaml
  3.1. Remova a parte final do entrypoint da imagem "app": node index.js
  3.2. Salve o arquivo
4. Execute: docker-compose up -d --build
5. Entre no container mysql: docker exec -it mysql bash
  5.1. Faça login no mysql: mysql -u root -p (use a senha "root", sem as aspas)
  5.2. Execute os scripts definidos em mysql-scripts.txt
  5.3. Saia do mysql: exit
  5.4. Saia do container: exit
6. Entre no container app: docker exec -it app bash
  6.1. Entre na pasta compartilhada no volume: cd /home/node/app
  6.2. Instale as dependências: npm i
  6.3. Saia do container: exit
7. Execute: docker-compose down
8. No arquivo docker-compose.yaml
  8.1. Volte a parte final do entrypoint da imagem "app": node index.js
  8.2. Salve o arquivo
9. Execute: docker-compose up -d --build
10. Agora você já pode acessar as rotas definidas em node/index.js