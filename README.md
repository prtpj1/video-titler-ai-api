<p align="center">
  <img src="https://github.com/prtpj1/prtpj1/blob/main/Headers/VideoTitler.png?raw=true" alt="Header" />
</p>
<hr/>
<p align="center">
<a href="#description">Description</a> •
<a href="#in-this-event-i-learned-and-put-into-practice">Learning</a> •
<a href="#what-i-added-to-the-app-after-finishing-the-event">Changes post-event</a> •
<a href="#stacks">Stacks</a> •
<a href="#how-to-run-the-application">How to run the application</a>
</p>
<hr/>
<p align="center">
<a href="#descrição">Descrição</a> •
<a href="#neste-evento-aprendi-e-coloquei-em-prática">Aprendizado</a> •
<a href="#o-que-adicionei-ao-app-após-finalizar-o-evento">Mudanças pós-evento</a> •
<a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a> •
<a href="#como-rodar-a-aplicação">Como Rodar a Aplicação</a>
</p>
<hr/>

## Description
The web application Video Titler AI creates titles or descriptions for videos using instructions given to the chatGPT AI, which uses as reference the generated transcription from a video previously uploaded by the user on the app.

After choosing the video on your computer and uploading it, the video is converted  into audio file, and the transcription is generated and displayed in the first field to the right of the menu. With the generated transcription, the user will choose whether they want the AI to create some titles for their video or if they prefer a description (the user can do both alternately). Selecting Title or Description will display a predefined prompt of instructions that the AI will follow, but the user can edit or create their own prompt.

With everything selected, the user clicks on the button "Generate" to generate the content that will be displayed in the second field on the right side, below the field where the prompt of instructions is located.

_**This app was developed during the NLW AI event by RocketSeat.**_
<br>

## In this event, I learned and put into practice:
- Use libraries to convert video to audio
- Use the OpenAI API to use AI to transcribe and create a title/description through a predefined prompt
- Use prisma on backend to store the predefined prompts

<hr/>

## What I added to the app after finishing the event:
- Internationalization for English and Portuguese
- An extra field to display the entire text of the audio transcription
- Visual customization (colors, title, layout of the side menu and fields)

<hr/>

## Stacks 
### BackEnd:
- Node.js
- TypeScript

<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true" width="50" height="50" alt="TypeScript Icon" /></a>
<hr/>

## How to run the application?
- Clone the repository: <br>
`git clone git@github.com:prtpj1/video-titler-ai-api.git`
- Access the project folder: <br>
`cd video-titler-ai-api`
- Rename the file **".env_example"** to **".env"**: <br>
- In the file **.env** you need to add your own **OPENAI_API_KEY** <br>
- If you do not have a account on openAI, you will need to create an account to get a trial and you can create a **OPENAI_API_KEY** with some credit. If you have a account, you will need to pay or be subscribed to openAI to use the API.

- Install dependencies: <br>
`pnpm install`
- Start PrismaClient: <br>
`npx prisma generate`
- Populate the database: <br>
`pnpm prisma db seed`
- Compile files: <br>
`pnpm build`
- Start the server: <br>
`pnpm start` <br>

⚠️ Now with server running, you can run the app in the frontend.

</br>
</br>

_*NOTE: If you have any difficulties with the instructions and want to give feedback, please send me a message.*_
<hr/>

## Descrição
O aplicativo web Video Titler AI cria títulos ou descrições para videos usando instruções dadas a IA do chatGPT que usa como referência a transcrição gerada de um vídeo que o usuário fez upload previamente no próprio app.

Após escolher o video no seu computador e fazer o upload, o video é convertido apenas em audio e a transcrição é gerada e exibida no primeiro campo a direita do menu.
Com a transcrição gerada, o usuário irá escolher se quer que a IA crie alguns títulos para o seu video ou se ele prefere que seja criada uma descrição (ele pode fazer os 2 alternadamente). Selecionando Titulo ou Descrição, será exibido o prompt de instruções que a IA irá seguir, porém o usuário pode editar ou criar seu próprio prompt.

Com tudo selecionado o usuário pode então pedir para a IA gerar o conteúdo que será exibido no segundo campo lateral direito, abaixo do campo onde está o prompt de instruções.

_**Este app foi desenvolvido durante o evento NLW AI da RocketSeat**_.

<br>

## Neste evento, aprendi e coloquei em prática:
- Usar libs para converter video em audio
- Usar a API da openAI para usar a IA para transcrever e criar titulo/descrição através de um prompt pre-definido
- Usar o prisma no backend para guardar os prompts pre-definidos
- Criar botões com alternância de estados e cores de acordo com o progresso


Após concluir o evento eu comecei a fazer algumas modificações e adicionar alguns recursos extras e customização.
<hr/>

## Tecnologias Utilizadas 
### BackEnd:
- Node.js
- TypeScript

<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/NodeJS2.png?raw=true" width="50" height="50" alt="NodeJS Icon" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://github.com/prtpj1/prtpj1/blob/main/Github%20Imgs/Typescript2.png?raw=true" width="50" height="50" alt="TypeScript Icon" /></a>
<hr/>

## Como rodar a aplicação?
- Clone o repositório: <br>
`git clone git@github.com:prtpj1/video-titler-ai-api.git`
- Acesse a pasta do projeto: <br>
`cd video-titler-ai-api`
- Renomeie o arquivo **".env_example"** para **".env"**: <br>
- No arquivo **.env** você precisará adicionar sua própria **OPENAI_API_KEY** <br>
Se você não possuir uma conta na openAI, ao criar uma, você terá uma trial e poderá criar uma **OPENAI_API_KEY** grátis com crédito por um tempo limitado. Caso você já tenha uma conta, será necessário pagar ou assinar a openAI para utilizar a API.


- Instale as dependências: <br>
`pnpm install`
- Inicie o PrismaClient: <br>
`npx prisma generate`
- Semeie o banco de dados: <br>
`pnpm prisma db seed`
- Compile os arquivos: <br>
`pnpm build`
- Inicie o servidor: <br>
`pnpm start` <br>

⚠️Agora com o servidor rodando, você pode rodar a app no frontend.

</br>
</br>

_*OBS: Se tiver alguma dificuldade com as instruções e quiser dar um feedback me mande uma mensagem.*_