class Atleta{ constructor(nome, idade, peso, altura, notas){ 
    this.nome = nome; 
    this.idade = idade; 
    this.peso = peso; 
    this.altura = altura; 
    this.notas = notas;
}
             
    calculaCategoria(){ 
        if (this.idade <= 11) {
            return "infantil"
        }else if (this.idade >= 12 && this.idade <= 13){
            return "juvenil"
        }else if (this.idade >= 14 && this.idade <= 15) {
            return "intermediário"
        }else if (this.idade >= 16 && this.idade <= 30){
            return "adulto"
        }else {
            return "sem categoria" 
        }                                                                                                                                                                 
    }

	calculaIMC(){
	  return this.peso / (this.altura*this.altura)
	}
	
	calculaMediaValida(){
	  
	  let soma = 0;
	  this.notas.forEach(function(nota){
		soma = soma + nota
		
		})
	  return soma / this.notas.length
	}

	obtemNomeAtleta(){
	  return `${"Nome:"} ${this.nome}`
	}

	obtemIdadeAtleta(){
	  return `${"Idade:"}${this.idade}`
	}

	obtemPesoAtleta(){
	  return `${"Peso:"} ${this.peso}`
	}

	obtemNotasAtleta(){
	  return `${"Notas:"} ${this.notas}`
	}

	obtemCategoria(){
	  return `${"Categoria:"} ${this.calculaCategoria()}`
	}
	

	obtemIMC(){
	  return `${"IMC:"} ${this.calculaIMC()}`
	}

	
	obtemMediaValida(){
	  return `${"Media:"} ${this.calculaMediaValida()}`
	}
	
}


const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())