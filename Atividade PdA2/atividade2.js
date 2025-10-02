const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
{  
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  },
];

// DESAFIO 1: Extrair e imprimir nome e cidade do primeiro usuário.

const {nome,cidade} = usuarios [0];
console.log(`Nome: ${nome}, Cidade: ${cidade}`);

// DESAFIO 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário.

 const usuariosDoNorte = [
  ...usuarios,
  {
    nome: "Ana",
    idade: 25,
    email: "ana@exemplo.com",
    cidade: "Manaus",
    interesses:["Esportes", "Cinema", "Ficção"]
  }
];

console.log ("\n=== Usuario do Norte Adicionado ===")

console.log (usuariosDoNorte);

// DESAFIO 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email "bia.dev@exemplo.com".

const beatrizAtualizada = {
  ...usuarios[1],
  email: "bia.dev@exemplo.com"
};

console.log ("\n=== Usuario Beatriz Atualizado ===")

console.log (beatrizAtualizada);

//Desafio 4: Crie uma função `mostrarInteresses(usuario)` que use destructuring no parâmetro para extrair `nome` e `interesses` e imprima uma frase com eles.

function mostrarInteresses({nome,interesses}) {
  console.log (`${nome} tem interesse em: ${interesses.join (", ")}`);
}

console.log ("\n=== Interesses dos Usuarios ===");
mostrarInteresses(usuarios[0]);
mostrarInteresses(usuarios[1]);
mostrarInteresses(usuariosDoNorte[2]);