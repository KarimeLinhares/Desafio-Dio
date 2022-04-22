# Aprofundando sobre o Ciclo de Vida do React

## Ciclo de Vida

1. Inicialização
2. Montagem
3. Atualização
4. Desmontagem


```shell

### Serão deixados de usar a partir da versão 17.0
-> componentWillMount (deprecated 17.0)
-> componentWillReceiveProps(deprecated 17.0)
-> componentWillUpdate (deprecated 17.0)

### Mais Utilizados
-> componentDidMount 
-> componentDidUpdate 
-> componentDidCatch
-> componentWillUnmount 
-> shouldComponentUpdate

### Pouco utilizados
-> getDerivedStateFromProps
-> getSnapshetBeforeUpdate

```

## Hooks
"Hooks são uma nova adição ao React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe."

```shell

-> useState
-> useEffect
-> useContext

-> useReducer
-> useCallback
-> useMemo
-> useRef
-> useImperativeHandle
-> useLayoutEffect
-> useDebugValue

```

### Regras dos Hooks
Não use Hooks dentro de funções JavaScript comuns. Em vez disso, você pode:

* Chamar Hooks em componentes React.
* Chamar Hooks dentro de Hooks Customizados.
Seguindo essas regras, você garante que toda lógica de estado (state) no componente seja claramente visível no código fonte.


## Fragmentos
"Um padrão comum no React é que um componente pode retornar múltiplos elementos. Os fragmentos permitem agrupar uma lista de filhos sem adicionar nós extras ao DOM."

## Error Boundaries
"Um erro de JavaScript em uma parte da UI não deve quebrar toda a aplicação. Para resolver este problema para usuários do React, o React 16 introduziu um novo conceito de "error boundary"."

## Render Props
"O termo "render prop" se refere a uma técnica de compartilhar código entre componentes React passando uma prop cujo valor é uma função.
Um componente com uma render prop recebe uma função que retorna um elemento React e a invoca no momento de renderização, não sendo necessário para o componente implementar uma lógica própria."

## Typechecking
"Na medida em que sua aplicação cresce, você pode capturar muitos bugs com checagem de tipos. Em algumas aplicações, você pode usar extensões do JavaScript como Flow ou TypeScript para checar os tipos de toda a sua aplicação. Porém, mesmo se você não usá-las, React possui algumas habilidades de checagem de tipos nativas."

## Refs e DOM
Com Refs é possível acessar a árvore do DOM e/ou elementos REACT. Quando utilizar?

* Para manipulação de bibliotecas de terceiros.
* Gerenciamento de inputs (foco), seleção de textos ou reprodução de mídias
* Animações imperativas

## Dumb Components
* Preocupa-se com a apresentação.
* Recebem valores via props.
* Não possuem dependências com o restante da aplicação.
* Não especificam como os dados são carregados ou sofrem mutação.
* Recebem valores e callbacks exclusivamente via props.
* Raramente possuem estado, quando precisam se estado é para controlar a interface e não dados do usuário.
* São escritos na maioria das vezes como componentes funcionais.

Exemplos: Button, Card, Sidebar, Footer, List, Menu

## Smart Components
* Preocupam-se como as coisas vão funcionar.
* Podem conter Smart e Dumb componentes.
* Providemciam dados e padrões de apresentação ou outros containers.
* Na maioria dos casos possuem estado e podem chamar outros fluxos do sistema

Exemplos: UserGallery, UserPage, FilterBook, FollowersSidebar, ListCards


