# docker-compose_wait-for_node_mysql
Estudo de Docker Compose e Wait-For: criando um container node e outro mysql

Para executar esse projeto:
1. Clone o projeto para uma pasta dentro da sua máquina Linux ou Linux em WSL2
2. Entre na pasta clonada
3. Execute: docker-compose up -d --build
4. Entre no container mysql: docker exec -it mysql bash
  4.1. Faça login no mysql: mysql -u root -p (use a senha "root", sem as aspas)
  4.2. Execute os scripts definidos em mysql-scripts.txt
  4.3. Saia do mysql: exit
  4.4. Saia do container: exit
5. Entre no container app: docker exec -it app bash
  5.1. Entre na pasta compartilhada no volume: cd /home/node/app
  5.2. Instale as dependências: npm i
  5.3. Saia do conatiner: exit
6. Agora você já pode acessar as rotas definidas em node/index.js