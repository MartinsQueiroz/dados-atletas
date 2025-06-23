# Aplicação para receber dados dos atletas 

 A classe Atletas{} é responsavel por processar dados de um atleta que são recebeidos
 e transformados em informações sobre o atleta e seu desempenho
 
## Obtendo as informações de desempenho

 Para obter as informações do desempenho do atleta foi necessário a criação de métodos de instância
 que retornam as informações dos dados recebidos para processamento.

 ### Exp:
  No exemplo, temos um método que calcula a média de notas do atleta, esse método, após ser executado é chamado em outro método "obtemMediaValida()" que retorna a media processada com uma template string para exibir o resultado formatado. 

    calculaMediaValida(){
	  
	  let soma = 0;
	  this.notas.forEach(function(nota){
		soma = soma + nota
		
		})
	  return soma / this.notas.length
	}

  	obtemMediaValida(){
	  return `${"Media:"} ${this.calculaMediaValida()}`
	}

## Como executar a aplicação

 Para executar a classe e ver o resultado, basta rodar o console.log contido no código!

    console.log(atleta.obtemNomeAtleta())
    console.log(atleta.obtemIdadeAtleta())
    console.log(atleta.obtemPesoAtleta())
    console.log(atleta.obtemNotasAtleta())
    console.log(atleta.obtemCategoria())
    console.log(atleta.obtemIMC())
    console.log(atleta.obtemMediaValida()) 

