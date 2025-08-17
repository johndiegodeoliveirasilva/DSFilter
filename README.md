# DSFilter

Caso de uso: Listar produtos

1. [OUT] O sistema infroma nome e preço de todos produtos, ordenados por preço.
2. [IN] O usuário informa, opcionalmente, preço mínimo e preço máximo dos produtos
3. [OUT] O sistema informa nome e preço dos produtos, ordenados por preço, conforme critérios

Informações complementares:

- Não precisa fazer validação de formulário (assuma que o usuário vai digitar valores válidos).
- Não precisa implementar rotas (pode montar a tela toda no App)
- Se o valor do preço mínimo não for informado, usar por padrão o valor 0 (zero).
- Se o valor do preço máximo não for informado, usar por padrão o valor Number.MAX_VALUE

O corpo da tela deve ser um componente (na imagem abaixo: ListingBody) que possui dois filhos: o card de filtro, e o card de listagem.
Você ***DEVE*** implementar um evento pra fazer o componente de filtro notificar os parâmetros de listagem de produtos.
