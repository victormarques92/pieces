## Pré-requisitos para iniciar o projeto

- NodeJS >= 16.15.0 [Download](https://nodejs.org/en/download/)
- Gerenciador de pacotes ([NPM](https://docs.npmjs.com/downloading-and-installing-packages-globally) or [YARN](https://classic.yarnpkg.com/en/docs/getting-started))


## Instalando as dependências

No diretório do projeto execute o comando:

`npm i` or `yarn`

-----

# Documentação fornecida pelo React JS [🔗](https://create-react-app.dev/docs/available-scripts)


## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start` ou `yarn start`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

A página será recarregada se você fizer edições.\
Você também verá erros de lint no console.

### `npm run build` ou `yarn build`

Compila o aplicativo para produção na pasta `build`.\
Ele agrupa corretamente o React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é reduzida e os nomes dos arquivos incluem os hashes.\
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

## Saber mais

Você pode aprender mais na [documentação Criar aplicativo React](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender o React, confira a [documentação do React](https://reactjs.org/).

-----


## Mapa do Projeto

*atualizado em **24/06/2022***

```
|____.editorconfig
|____README.md
|____yarn.lock
|____public
| |____favicon.ico
| |____index.html
| |____logo512.png
| |____manifest.json
| |____robots.txt
| |____logo192.png
|____.gitignore
|____package.json
|____.prettierrc
|____tsconfig.json
|____.eslintignore
|____.eslintrc.json
|____src
| |____index.tsx
| |____@types
| | |____Price.ts
| | |____Product.ts
| | |____Author.ts
| | |____index.ts
| | |____Comment.ts
| |____App.tsx
| |____sections
| | |____Footer
| | | |____styles.ts
| | | |____Footer.tsx
| | | |____index.ts
| | |____Details
| | | |____index.tsx
| | | |____Details.tsx
| | | |____styles.ts
| | |____FeaturedProducts
| | | |____FeaturedProducts.tsx
| | | |____styles.ts
| | | |____index.ts
| | |____index.ts
| | |____Hero
| | | |____Hero.tsx
| | | |____styles.ts
| | | |____index.ts
| | |____Login
| | | |____Login.tsx
| | | |____styles.ts
| | | |____index.ts
| | |____Header
| | | |____styles.ts
| | | |____dataList.ts
| | | |____Header.tsx
| | | |____index.ts
| |____styles
| | |____Global.ts
| | |____index.ts
| | |____Grid.ts
| |____components
| | |____Card
| | | |____Card.tsx
| | | |____styles.ts
| | | |____index.ts
| | |____DropdownMenu
| | | |____styles.ts
| | | |____DropdownMenu.tsx
| | | |____index.ts
| | |____TextField
| | | |____styles.ts
| | | |____TextField.tsx
| | | |____index.ts
| | |____MediaObject
| | | |____styles.ts
| | | |____MediaObject.tsx
| | | |____index.ts
| | |____Search
| | | |____styles.ts
| | | |____Search.tsx
| | | |____index.ts
| | |____Popover
| | | |____Popover.tsx
| | | |____styles.ts
| | | |____index.ts
| | |____Button
| | | |____styles.ts
| | | |____index.ts
| | | |____Button.tsx
| | |____Divider
| | | |____styles.ts
| | | |____Divider.tsx
| | | |____index.ts
| | |____Avatar
| | | |____styles.ts
| | | |____Avatar.tsx
| | | |____index.ts
| | |____index.ts
| | |____Modal
| | | |____styles.ts
| | | |____index.ts
| | | |____Modal.tsx
| |____theme
| | |____index.ts
| | |____theme.ts
| |____react-app-env.d.ts
| |____assets
| | |____images
| | | |____logo.png
| | |____index.ts
| |____pages
| | |____Layout
| | | |____styles.ts
| | | |____Layout.tsx
| | | |____index.ts
| | |____Makers
| | | |____routes.tsx
| | |____Shop
| | | |____Home
| | | | |____Home.tsx
| | | | |____dataList.ts
| | | | |____index.ts
| | | |____routes.tsx
| | |____Artists
| | | |____routes.tsx
| | |____Authentication
| | | |____routes.tsx
| |____routes
| | |____routes.tsx
| | |____index.ts
```


### Padronização de código

Arquivos de padronização de código. A base do eslint é de acordo com  modelo Airbnb. [🔗](https://github.com/airbnb/javascript)

```
|____.editorconfig
|____.prettierrc
|____tsconfig.json
|____.eslintignore
|____.eslintrc.json
```

### App & index

São arquivos básicos para o funcionamento do projeto.

```
|____src
| |____App.tsx
| |____index.tsx
```

##### `App.tsx`

Aqui é chamado o estilização global e as rotas do projeto.

```
import Routes from './routes';
import GlobalStyle from './styles';

const App = () => {
  return (
    <>
      <GlobalStyle />

      <Routes />
    </>
  );
};

export default App;
```

##### `index.tsx`

Aqui é feito a renderização do App para o index.html.

```
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```



### Global types

Arquivos com interfaces de tipagem global.

```
|____src
| |____@types
| | |____Price.ts
| | |____Product.ts
| | |____Author.ts
| | |____index.ts
| | |____Comment.ts
```

### Styles

Pasta onde ficam os arquivos de estilos globais, são eles:

- `Global.ts`
Arquivo de estilos globais (reset).
- `Grid.ts`
Arquivo de grid. 
- `index.ts`
Exportação default dos estilos.

```
|____src
| |____styles
| | |____Global.ts
| | |____index.ts
| | |____Grid.ts
```

### Themes

Pasta onde fica o theme default do projeto.

```
|____src
| |____styles
| | |____Global.ts
| | |____index.ts
| | |____Grid.ts
```

### Assets

Pasta onde ficam as imagens, fontes, videos e etc.
Como de padrão no projeto, temos o index.ts na raiz da pasta para exportar os arquivos para uma melhor importação no restante do projeto.

```
|____src
| |____assets
| | |____images
| | | |____logo.png
| | |____index.ts
```

### Components

Pasta onde ficam os componentes UI, sem responsabilidade de negócio.
Como de padrão no projeto, temos o index.ts na raiz da pasta para exportar os componentes para uma melhor importação no restante do projeto.

Cada componente é composto por 3 arquivos:
- ComponentName.tsx
Estrutura HTML e propriedades do componente.

- index.ts
Exportação default do componente.

- styles.ts
Estilização do componente com [styled components](https://styled-components.com/)

```
|____src
| |____components
| | |____index.ts
| | |____Button
| | | |____Button.tsx
| | | |____index.ts
| | | |____styles.ts
```

### Sections

Pasta onde ficam as seções do projeto, aqui é onde fica a responsabilidade de funcionamento, porém não busca os dados. Funciona como um middleware.
Como de padrão no projeto, temos o index.ts na raiz da pasta para exportar as seções para uma melhor importação no restante do projeto.

Cada seção é composta por 3 arquivos:
- SectionName.tsx
Estrutura HTML, importação dos componentes e propriedades da seção.

- index.ts
Exportação default da seção.

- styles.ts
Estilização da seção como grid, container e etc.

```
|____src
| |____sections
| | |____index.ts
| | |____Header
| | | |____Header.tsx
| | | |____index.ts
| | | |____styles.ts
```

### Pages

Na pages temos a pasta Layout. Ela é feita para reutilização do Header e Footer, assim não tendo a necessidade de chama-los individualmente em cada página.

```
|____src
| |____pages
| | |____Layout
| | | |____styles.ts
| | | |____Layout.tsx
| | | |____index.ts
```

Pasta também ficam as frentes do projetos (Artists, Makers e Shop).
Dentro de cada frente tem as páginas referente a mesma, aqui é onde será realizada a busca dos dados para passar para cada seção.

Cada frente tem um arquivo `routes.tsx` que é onde ficam as rotas de frente.

```
|____src
| |____pages
| | |____Makers
| | | |____routes.tsx
```

##### `routes.tsx`

```
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';

const ShopRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default ShopRoutes;
```


Cada página é composta por 3 arquivos:
- PageName.tsx
Importação das seções passando os dados.

- index.ts
Exportação default da página.

- styles.ts
Estilização da página caso tenha necessidade. O ideal é não ter estilização na página.

```
|____src
| |____pages
| | |____Shop
| | | |____Home
| | | | |____Home.tsx
| | | | |____index.ts
```

### Routes

Pasta onde ficam as importações dos `routes.tsx` de cada frente dentro de pages.

```
| |____routes
| | |____routes.tsx
| | |____index.ts
```

##### `routes/routes.tsx`

```
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ArtistsRoutes from '../pages/Artists/routes';
import AuthenticationRoutes from '../pages/Authentication/routes';
import MakersRoutes from '../pages/Makers/routes';
import ShopRoutes from '../pages/Shop/routes';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ArtistsRoutes />
      <AuthenticationRoutes />
      <MakersRoutes />
      <ShopRoutes />
    </BrowserRouter>
  );
};

export default AppRoutes;
```