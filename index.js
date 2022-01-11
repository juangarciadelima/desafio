function batches(receita, ingredientes) {
  const result = Math.floor(
    Math.min(
      ...Object.keys(receita).map(key => ingredientes[key] / receita[key] || 0)
    )
  )

  return result
}

console.log(
  batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
)

console.log(
  batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  )
)

console.log(
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
)

console.log(
  batches(
    { manteiga: 1, farinha: 1, oleo: 1 },
    { manteiga: 2, farinha: 2, oleo: 2 }
  )
)

//Math.floor = Arredonda o número para baixo

// Math.min = Retorna o menor número entre todos os apresentados

// Object.Keys = Organiza em forma de array, todas as propriedades do objeto. Ex : {banana: 1, melancia: 2} => [banana, melancia]
