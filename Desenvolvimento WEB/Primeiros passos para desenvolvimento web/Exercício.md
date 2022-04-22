# Exercício

## Qual foi o primeiro domínio criado?
15 de Março de 1985 - *symbolics.com*

## E o primeiro blog?
Open Diary
Criado em 1994 pelo cientista do MIT Media Lab, Claudio Pinhanez, com o objetivo de contar um pouco sobre sua vida.

## Qual foi a primeira compra feita pela Internet?
Um CD de *Sting* (*Ten Summoner's Tales*)
A transação ocorreu em 11 de agosto de 1994 e foi feita através de uma tecnologia que permitiu encriptar os dados do cartão de crédito.

## Qual o site mais antigo em atividade?
*darpa.mil*
Pertence a Agência de Projetos de Pesquisa Avançados de Defesa, parte do departamento de defesa americano. O domínio *.mil* permanece ativo.

## Portas padrões do GMAIL (exceto SMTP e POP3)
* IMAP: porta 993

## Quais portas são usadas pelo MySQL e Apache?
* MySQL: porta 3306
* Apache: porta 443 (não utilizar a 8080)

## Boleto só existe no Brasil?
Sim. Apesar de os Estados Unidos terem o termo *Bank Slip*, o conceito de boleto não existe lá.

## Débito é uma invenção brasileira?
Não. A ideia do cartão de crédito começou a ser usado pela *Diners Club*, através de Frank McNamara em 1920 nos Estados Unidos. O primeiro cartão de débito só foi criado em 1953 pela *Diners Club*. O cartão só chegou no Brasil quando o empresário tcheco Hanus Tauber, comprou a franquia *Diners Club* em 1954, e em 1956 ele começou a ser utilizado.

## Como se dá o acesso aos web-services dos Correios para buscar dados de um CEP
Para acessar o webservice, um CEP no formato de {8} dígitos deve ser fornecido, por exemplo: "01001000". Após o CEP, deve ser fornecido o tipo de retorno desejado, que deve ser "json", "xml", "piped" ou "querty".

Exemplo de pesquisa por CEP: viacep.com.br/ws/01001000/json/

Quando consultado um CEP de formato inválido, por exemplo: "950100100" (9 dígitos), "95010A10" (alfanumérico), "95010 10" (espaço), o código de retorno da consulta será um 400 (Bad Request). Antes de acessar o webservice, valide o formato do CEP e certifique-se que o mesmo possua {8} dígitos. 
Quando consultado um CEP de formato válido, porém inexistente, por exemplo: "99999999", o retorno conterá um valor de "erro" igual a "true". Isso significa que o CEP consultado não foi encontrado na base de dados.
Existem necessidades, por exemplo um cadastramento online onde o cliente desconhece o CEP da sua rua e será necessário realizar uma pesquisa para verificar a existência de um CEP que corresponda ao endereço. Para consultar um CEP na base de dados são necessários três parâmetros obrigatórios (UF, Cidade e Logradouro), sendo que para Cidade e Logradouro também é obrigatório um número mínimo de três caracteres a fim de evitar resultados muito abrangentes.
Identico a consulta por CEP, na pesquisa por endereço também é necessário informar o formato do retorno que deve ser "json" ou "xml". O resultado será ordenado pela proximidade do nome do logradouro e possui limite máximo de 50 (cinquenta) CEPs. Desta forma, quanto mais específico os parâmentros de entrada maior será a precisão do resultado.

Exemplos de pesquisa por endereço:
viacep.com.br/ws/RS/Porto Alegre/Domingos/json/
viacep.com.br/ws/RS/Porto Alegre/Domingos Jose/json/
viacep.com.br/ws/RS/Porto Alegre/Domingos+Jose/json/

Os exemplos acima demonstram diferentes formar de pesquisar pelas ocorrências "Domingos" e "José" na cidade de "Porto Algre/RS". Quando o nome da cidade ou do logradouro não contiver ao menos três caracteres o código de retorno será um 400 (Bad Request).



