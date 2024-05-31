# ZiuQuizFrontend

Esse projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 17.2.3. Seu intuito é estabelecer um website onde usuários podem criar e jogar quizzes estilo Kahoot.


## Membros da equipe:

Matheus Gabriel da Silva
Larissa Hoffmann de Souza
Eduardo da Maia Haak
Lukas Thiago Rodrigues
Mateus Akira de Oliveira Muranaka


## Instalando o projeto

Para o funcionamento do projeto é necessário ter Node e NPM instalados e atualizados na máquina. Após clonar o projeto, provavelmente será necessário rodar alguns comandos em um terminal no ambiente do projeto, primeiramente `npm install` e talvez `npm install -g @angular/cli@17`.


## Rodando um Servidor de Desenvolvimento

Para iniciar um servidor local, utilize o comando `ng serve` em terminal no ambiente do projeto. A rota padrão é `http://localhost:4200/`.


## Lista de rotas Implementadas

`/`                    tela inicial

`/register`            tela de registro de usuário

`/login`               tela de login de usuário

`/recoverPassword`     tela de 'esqueci minha senha'

`/homepage`            tela principal

`/userpage`            tela de perfil do usuário

`/topquiz`             tela que mostra os melhores quizzes

`/foryou`              tela que mostra quizzes baseado em sua atividade no site

`/searchByCategory`    tela que mostra quizzes de certa categoria (será convertida para tela de pesquisa em geral)

`/categories`          tela que mostra as categorias de quizzes

`/favorites`           tela que mostra os quizzes 'favoritados'

`/collection`          tela que mostra os quizzes criados pelo usuário

`/rankings`            tela que mostra os quizzes em que o usuário se saiu em primeiro, segundo ou terceiro lugar

`/playquiz`            tela de 'gameplay' do quiz

`/results`             tela de resultados após jogar um quiz

Todas as rotas com excessão de `/playquiz` são acessíveis através de navegação de rotas a partir de outras páginas, com `/results` sendo acessada a partir de `/playquiz`


## Adendos

O Frontend não está conectado com o backend, sendo que os dois estão sendo desenvolvidos em paralelo por membros diferentes da equipe. Todas as variáveis e informações que os componentes utilizam estão sendo tirados de objetos placeholder contidos diretamente no Frontend para o propósito de teste, portanto algumas páginas podem não conter features que necessitam do back para serem implementadas.
