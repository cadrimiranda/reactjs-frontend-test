Olá! Primeiro desculpe a demora hehe.

#1: A primeira tela voce coloca teu nome e aperta ENTER, que irá setar um cookie 'auth' e pegar o nome inserido no primeiro participante.
#1.1: As rotas são `create_token` e `meeting`.
#1.2: Acabei não usando contexto.
#1.3: Usei tailwindcss e MaterialUI. Acabei não usando antd e styled components (não sou fã deste ultimo).

#2: Para adicionar mais participantes, aperte F2.

#3º: Para limpar os cookies, aperte F4.

`src/index.tsx`
Aqui se encontra o root da aplicação e tem o event de adicionar player e remover cookie.

`src/pages/createToken`
Pagina para colocar o nome e criar o tooken

`src/pages/meeting`
Onde está os "players" que estão na reunião e o evento de invocar o modal e o controle de abrir fechar o modal. O modal é o novo "player" pedindo para entrar.

`src/components/Player`
É o "player" dentro da meeting.

`src/components/NovoPlayer`
É o modal de novo player pedindo para entrar.

`src/routes/Routes`
Onde estão as rotas.

`src/hooks/useCookies`
Para usar os cookies.

`src/hooks/useMeetingState`
Controle de estado da "meeting", onde salva os itens no session e recupera quando dá reload.