let lista = ['maçã', 'banana', 'laranja', 'uva', 'abacaxi']


let lista2 = lista.filter((item) => {
    return item.length > 5
})

console.log(lista2)


let precos = [
    { "item": "maçã", "preco": 2.5 },
    { "item": "banana", "preco": 1.5 },
    { "item": "laranja", "preco": 3.0 },
    { "item": "uva", "preco": 4.0 },
    { "item": "abacaxi", "preco": 8.0 },
    { "item": "melancia", "preco": 5.0 }
]

let precosFiltrados = precos.filter((produto) => {
    return produto.preco > 3.0
})

let produtos = precosFiltrados.map((produto) => {
    return produto.item
})

console.log(precosFiltrados, produtos)