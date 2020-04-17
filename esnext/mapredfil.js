data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ]

  //selecionar apenas os cachorros
  const cachorros = d => d.type === 'dog'

  const soCachorros = data.filter(cachorros)
  console.log(soCachorros)

  const idadeReal = d => d.age * 7
  const idadeRealCachorros = data.filter(cachorros).map(idadeReal)
  console.log(idadeRealCachorros)

  const idadeSomada = (acum, atual) => {
    return acum + atual
  }

const idadeRealCachorrosSomada = data.filter(cachorros).map(idadeReal).reduce(idadeSomada, 0)
console.log(idadeRealCachorrosSomada)