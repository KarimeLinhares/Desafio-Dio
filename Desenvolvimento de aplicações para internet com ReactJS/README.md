# Desenvolvimento de aplicações para internet com ReactJS

## Maneiras de estilização usando o CSS

1. Inline

### Prós

* Maneira mais prática e direta
* Ajustes Rápidos
* Testes de Estilo

### Contras

* Difícil manutenção

2. Classes

### Prós

* Em JSX, define-se classes pelo atributo className
* Maneira mais prática e direta

### Contras

* Difícil manutenção
* Pouca flexibilidade
* Conflitos com nomes

3. CSS in JS

### Prós

* Manutenção
* Facilidade para remover CSS
* Estilos dinâmicos
* Performance
* Injeção automática de prefixos vendor


## Stateful vs Stateless

1. Stateful: usa estados
Possui gerenciamento de estados no componente.
São construídos usando claddes em JS.

### Ciclo de Vida

2. Stateless: não usa estados
Não possui gerenciamento de estados no componente.
São construídos usando funções em JS.

### Observações
* A nomenclatura foi atualizada

```shell
	Class components
	Function Components
```

* Com hooks, estados são manipuláveis em function components! E o código fica mais compacto.

## Formulários
Mantêm um estado interno

### Introdução

* Em HTML
```shell
	<input>
	<textarea>
	<select> 

 possuem um estado interno
```

* Em React, podemos controlar o estado...
```shell
	state
	setState
```

### Componente controlado

* Tanto ...
```shell
	select
	input
	textarea

 aceitam um atributo value
```

* Podemos mudar esse valor usando o atributo
```shell
	onChange
```

### Componente não-controlado
A tag é read-only

#### Bibliotecas
* Formik
* Redux-forms


## Introdução ao Redux e fluxos da arquitetura com ReactJS

### Arquitetura Flux
É um padrão de projeto para tráfego de dados de maneira unidirecional.

1. Action
é como um telégrafo, ele formata a mensagem a ser enviada.

2. Dispatcher
é como um telefonista, ele sabe todos os callbacks para diferentes stores.

3. Store
é como um gerente super controlador, ele guarda a informação e todas as alterações têm que ser feitas por ele mesmo, e mais ninguém.

4. View
é como um gerente intermediário (middleware) que recebe as notificações da store e passa os dados para as visões abaixo dela.

#### Implementações
Servem para comunicação entre componentes e centralizam a informação.

* Redux (mais popular)
* Reflux
* Mobx
* Vuex (baseado em Redux e Elm)
* NgRx/store (baseada em Redux e RxJs)

"Flux libraries are like glasses: you'll know when you need them." - Dan Abramov

### Redux
* Foi criado por Dan Abramov e Andrew Clark em 2015
* Redux é uma implementação de flux, mas possui algumas diferenças.

1. Actions em Redux:
* São como o Flux
* Diferença do flux: Actions não enviam a action em si para o dispatcher
* Retornam um objeto de action formatado

2. Store em Redux:
* Uma única Store (em flux: diversas stores)
* A store aqui cuida de toda a árvore de estados
* Os reducers que cuidam de descobrir qual estado muda

3. Reducers em Redux:
* Não há dispatcher (simplifica e divide o trabalho da store)
* A store se conecta ao root reducer, que divide os estados em pequenos reducers para descobrir como lidar com esse estado
* Os estados aqui são imutáveis

4. Views:
Em React, adiciona na camada de Viem 3 novos conceitos para conectar a View à store:

* Provider  (árvore de componentes)
* connect() (função do react redux)
* selector  (é uma função que define quais os estados do Redux a serem passados como props)

#### Princípios

1. Single source of truth: Uma única store
2. State é read-only
3. Mudanças são feitas com pure functions

## Prática com React e Redux

1. Instalação

```shell
	npm install react-redux
	npm install --save-dev redux-devtools
```


## Comunicação avançada entre aplicações

### APIs HTTP
Servem para conectar a um ou mais servidores HTTP

* GET
* POST
* DELETE
* PUT

1. Fetch API

* Biblioteca nativa do browser
* Oferece uma alternativa ao XMLHttpRequest() e jQuery.ajax()
* Suporte a Service Workers

Algumas diferenças...

* Não envia nem recebe cookies (precisa definir a opção credentials)
* Não rejeita o status do erro HTTP

#### Get
#### Post
#### Delete
#### Put

2. Axios 

* Lib de HTTP API
* Cross-browser
* Pode monitorar o progresso de um request
* Melhor tratamento de erros
* Melhor teste

#### instalação

```shell
	yarn add axios
```

#### Get
#### Post
#### Delete
#### Put

### Imutabilidade

1. Uma vez criada, uma coleção não pode ser alterada.
2. Novas coleções podem ser criadas a partir de uma coleção anterior e uma mutação (setter) como um conjunto.
3. Novas coleções são criadas usando o máximo possível da estrutura original, reduzindo a cópia e aumentando a performance.

#### Benefícios

* Performance
* Programação mais simples
* Debugging mais simples (detecção de mudanças)

### Imutabilidade e o React
Se você quer performance em React, use dados imutáveis.
Você consegue usando o shouldComponentUpdate ou React.PureComponent.


* Caso haja um problema (olhar o exemplo) ...
1. O PureComponent vai fazer uma comparação rasa entre os valores antigos e os novos de this.props.words
2. O código muda words no handleClick do WorkAdder mas, mesmo mudando as plavras elas serão consideradas como iguais.

* Solução
1. Evitar mutar valores ou estado

```shell
	handleClick() {
		this.setState(state => ({
			words: [...state.words, 'marklar'],
		}));
	};
```

2. Usar biblioteca que forneça coleções persistentes e imutáveis (immutable.js)
	* Outras libs: Immer, Immutability-helper, Seamless-immutable
3. Permitir a detecção barata de alterações nos objetos.

#### Agora observe o trecho de código...

```shell
	const x = { foo: 'bar' };
	const y = x;
	y.foo = 'baz';
	x === y; // true

O valor de x foi modificado pois a estrutura é mutável.
```

Teria que então ser utilizado um trecho imutável ...

```shell
	const SomeRecord = Immutable.Record({ foo: null });
	const x = new SomeRecord({ foo: 'bar' });
	const y = x.set('foo', 'baz');
	const z = x.set('foo', 'bar');
	x === y; // false
	x === z; // true
```

### Immutabilidade e Redux
A imutabilidade é pré requisito no Redux

* Redux e React-Redux utilizam comparações rasas
* Manipulação de dados mais segura
* Time-travel debugging

#### Reducers
Os reducers dividem o objeto de estados em domínios por uma chave;

##### combineReducers
Checa mudanças usando comparação rasa

1. Fazem a interação nos reducers
2. Criam um novo objeto de estados a partir dos estados retornados por cada reducer

#### Connect
Gera componentes que fazem comparação rasa com o estado root, e retornam o valor para a função mapStateToProps, verificando aqueles que precisam de uma operação de re-render.

### Porque o Redux não funciona com objetos mutáveis?

### Reduce + Rest
Suponha um sistema de notificações ou um sistema de logging. Você precisa manter a sincronia, independente da tela on estiver. Uma maneira de resolver fácil seria armazenar os dados do serviço no Redux.

#### Redux Middlewares
Provê uma camada entre o disparo de uma ação e o momento que ela atinge o reducer. São utilizados para uma variedade de funçõesm entre elas chamadas de APIs de serviço.

Os mais usados são:
redux-thunk e redux-saga

##### Redux Thunk
Um thunk é uma função que chama outra função

```shell
	function some_function() {
		// faça algo aqui
		return function thunk() {
			// faça algo pensando depois
		}
	}
```

###### Instalação

```shell
	yarn add redux-thunk
```


##### Entendendo Middlewares
Imagine um sistema de log, onde toda action disparada em um sistema é impressa com o log na tela.

1. Tentativa: Logging manual

2. Tentativa: Encapsulando o dispatch

3. Tentativa: Gambiarra para substituir o dispatch

4. Tentativa: Crash Report

5. Tentativa: Escondendo a gambiarra

6. Tentativa: Removendo a gambiarra

7. Tentativa: Aplicando o middleware na mão

###### Diferenças do applyMiddleware() do Redux:
1. Só expõe um subconjunto da Store API para o middleware: dispatch e getSate()
2. Fica difícil saber se store.dispatch(action) vai realmente percorrer a cadeia do middleware de novo.
3. Opera em cima de createStore() ao invés da store em si

Abordagem final

## Conceitos aplicados a qualidade de código e automação de testes em React

### O que é TDD (Test-Driven Development/ desenvolvimento orientado a teste)
Antecipa erros a nível de desenvolvimento.
	* Teste escrito antes da funcionalidade
Não descarta a presença de um tester.

* Bibliotecas
Jest, React-testing-Library, Shallow, Enzyme, Chai, Mocha, Selenium, Puppeteer

#### Ciclo de Vida

#### Vertentes
1. Teste Unitário
2. Teste End-to-End (E2E)

### Teste de função
Usa-se o Jest (que é baseado no Jasmine)

```shell
	// soma.js
	function soma (a, b) {
		return a + b;
	}
```

Teste usando jest ...

```shell
	import { soma } from './soma';

	describe ('testando função soma', () => {
		it('A soma deve dar 3', () => {
			const res = soma (1, 2);
			expect(res).toBe(3);
		})
	})
```

### Teste de componente
Usa-se o react-testing-library

* Instalação

```shell
	yarn add --dev @testing-library/react

	# para extensoes de comparacao no jest
	yarn add --dev @testing-library/jest-dom/extend-expect
```

Componente a ser usado: Basic

```shell
	import react from 'react';
	
	const Basic = (props) => (
		<p>Meu nome é {props.name}</p>
	)

	export default Basic;
```

Realizando o teste ...

```shell
	import React from 'react';
	import Basic from './Basic';
	import { render } from '@testing-library/react'
	import '@testing-library/jest-dom/extend-expect';

	describe('Testando Basic', () => {
		it('O componente Basic deve renderizar corretamente', () => {
			const { baseElement } = render(<Basic name="Lilith" />);
			expect(baseElement).toHaveTextContent('Meu nome é Lilith');
		})
	})
```

### Teste com Redux
Teste a ser feito: Counter

Realizando o teste ...

### O que é BDD (Behaviour-Driven Development/ Teste baseado em comportamento)
Teste de especificação
	* Une especificação, teste automatizado e premissa de teste (documento de teste)

* Bibliotecas
Jest-cucumber, Chai

#### Instalação do Jest-cucumber

```shell
	yarn add --dev jest-cucumber
```

##### Sintaxe Gherkin (usado no Jest-cucumber)
Sintaxe de steps para definir cenários. Descreve cada funcionalidade por feature (caso de uso)

Exemplo de uso ...

## Debugging
Depuração é o processo de encontrar e reduzir defeitos em um software

### Ferramentas utilizadas
* Chrome Devtools
* Redux Devtools
* React Devtools

## Tratamento de erros
*Resiliência de Software e Segurança

### Tratamento de funções

```shell
	export const some = (a, b) => a + b;
```

Como tratar essa função ...

```shell
	export const somaSegura = (a, b) => {
		if (typeof a === number && typeoff b === number) {
			return a + b;
		} else {
			// vamos convencionar -1 quando a soma for inválida
			return -1;
		}
	}
```

### Tratamento em forms

```shell
	<form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column'}}>
		<label>
			Nome:
			<input type="text" value={this.state.value} onChange={this.handleChange} required />
		</label>
		<input type="submit" value="Submit" />
	</form>
```

### Tratamento em retorno de APIs

```shell
	export const fetchCientistas = () => {
		fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
			.then(response => response.json())
			.then(data => {
				setCientistas(data)
			})
			.catch(error => {
				exibirMensagem(error.code);
			});
	}
```

Tratando um código de servidor ...

```shell
	function exibirMensagem(codigo) {
		if(codigo === 401) {
			alert ('Faça login para continuar')
		}
		if(codigo === 404) {
			alert('Recurso não encontrado')
		}
		if(codigo === 500) {
			alert('Erro interno de servidor')
		}
	}
```

### Tratamento em componentes
Em JS usamos PropTypes, e podemos usar linguagens tipadas como TypeScript, definindo interfaces.

```shell
	import React from 'react';
	import PropTypes from 'prop-types';

	export const Basic = ({ name }) => (
		<p>Meu nome é {name}</p>
	)

	Basic.propTypes = {
		name: PropTypes.string
	}
```
