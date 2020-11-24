var x;					//declara variável x.
x = 0;			
x						//=> 0.

//Tipos
x = 1;					//Números
x = 0.01;				//Apenas um tipo para inteiros e reais.
x = "hello world";		//Strings de texto entre aspas.
x = 'JavaScript';		//Apóstrofos também delimitam strings.
x = true;				//valores booleanos.
x = false;

x = null;
x = undefined;

var book = {						//Objetos ficam entre chaves.
	topic: "Javascript",			//A propriedade topic tem o valor 'JavaScript'.
	fat: true						//A propiedade fat tem o valor true.
};									//A chave marca o fim do objeto.

//Acesso às propriedades do objeto com . ou []:
book.topic							//=> "JavaScript"
book["fat"]							//=> true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";			//Criando novas propriedades por meio de atribuição.
book.contents = {};					//{} objeto vazio sem qualquer propriedade.

//JavaScript também aceita arrays (Listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];			//Um array de 4 valores, delimitados com [e].
primes[0]							//=> 2: o primeiro elemento(índice 0) do array.
primes.length						//=> 4: quantidade de elementos no array.
primes[primes.length - 1]			//=> 7: o último elemento do array.
primes[4] = 9;						//Adiciona um novo elemento por meio de atribuição.	
primes[4] = 11;						//Ou altera um elementoexistente por meio de atribuição
var empty = [];						//[] é um array vazio, sem qualquer elemento.
empty.length						//=> 0

//Os arrays e objetos podem conter outros arrays e objetos:
var	r points = [					//Um array com 2 elementos.
	{ x: 0, y: 0 },					//Cada elemento é um objeto.
	{ x: 1, y: 1 }
];

var data = {						//Um objeto com 2 propriedades
	trial1: [[1, 2], [3, 4]],		//O valor de cada propriedade é um array.
	trial2: [[2, 3], [4, 5]]		//Os elementos dos arrays são arrays.
};

//Operadores no Js

3 + 2						//=> 5: adição
3 - 2						//=> 1: subtração
3 * 2						//=> 6: multiplicação
3 / 2						//=> 1.5: divisão
points[1].x - points[0].x	//=> 1
"3" + "2"					//Concatena strings

//JavaScript define alguns operadores aritiméticos de forma abreviada
var count = 0;				//Define uma variável
count++;					//Incrementa a variável
count--;					//Decrementa a variável
count += 2;					//Soma 2: o mesmo que count = count + 2;
count *= 3;					//Multiplica por 3: o mesmo que count = count * 3;
count						//=> 6: nomes de variáveis também são expressões.

x == y						//=> falso: igualdade
x != y						//=> verdadeiro: desigualdade
x < y						//=> verdadeiro: menor que
x <= y						//=> verdadeiro: menor ou igual a 
x > y						//=> falso: maior que
x >= y						//falso: maior ou igual a 
"two" == "three"			//faldo: as duas strings são diferentes
"two" > "three"				//verdadeiro: "tw" é alfabeticamente maior do que "th"
false == (x > y)			//verdadeiro: falso é igual a falso

(x == 2) && (y == 3)		//=> verdadeiro: operador lógico E
(x > 3) || (y < 3)			//=> falso: operador lógico OU
!(x == y)					//=> verdadeiro: Inverte valor booleano


//Funções

function plus1(x) {			//Define uma função chamada "plus1", com parâmetro "x"
	return x + 1;			//Retorna valor uma unidade maior do que foi passado
}							//As funções são incluídas entre chaves

plus1(y)					//=> 4: y era 3

var square = function (x) {		//As funções são valores e podem ser atribuídas a variáveis
	return x * x;				//Calcula o valor da função
};								//Um ponto e vírgula marca o fim da atribuição

square(plus(y))					//=> 16: chama duas funções

//Todos os objetos de JavaScript têm métodos:

var a = [];					//Cria um array vazio
a.push(1, 2, 3);			//O método push() adiciona elementos em um array
a.reverse();				//Outro método: inverte a ordem dos elementos

//Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
//objeto no qual o método é definido: nesse caso, o array de pontos anterior.

points.dist = function () {					//Define um método para calcular a distância entre pontos
	var p1 = this[0];						//Primeiro elemento do array que chamamos
	var p2 = this[1];						//Segundo elemento do objeto "this"
	var a = p2.x - p1.x;					//Diferença em coordenadas x
	var b = p2.y - p1.y;					//Diferenã em coordenadas y
	return Math.sqrt(a * a + b * b);		//Pitágoras
};

points.dist()								//=> 1,414: distância entre os 2 pontos


//As instruções no JavaScript incluem condicionais e laçoes que usam a sintaxe
//das linguagens C, C++, Java e outras.

function abs(x) {			//Uma função para calcular valor absoluto
	if (x >= 0) {			
		return x;
	} else {
		return -x;
	}						//Chaves são opcionais quando há 1 instrução por cláusula
}


	
function factorial(n) {		//Função para calcular fatoriais
	var product = 1;		
	while (n > 1) {			
		product *= n;
		n--;
	}
	return product;
}

factorial(4)				//=> 24: 1*4*3*2


function factorial2(n) {	//Outra versão
	var i, product = 1;
	for (i = 2, i <= n, i++)	//Não precisa de {} em laços de 1 linha
		product *= i;
	return product;
}

factorial2(5)				//=> 120: 1*2*3*4*5


//Define uma função construtora para inicializar um novo objeto Point

function Point(x, y) {			//Por convenção, as construtoras começam com letra maiúscula
									
	this.x = x;					//A palavra-chave this é o novo objeto que está sendo inicializado
	this.y = y					//Armazena os argumentos da função como propriedades do objeto
}								//Nenhum return é necessário

//Usa uma função construtora com a palavra-chave "new" para criar instâncias 
var p = new Point(1, 1);

//Define métodos para objetos Point atribuindo-os ao objeto 
//prototype associado à função construtora

Point.prototype.r = function () {
	return Math.sqrt(
		this.x * this.x +		//Retorna a rais quadrada de x²+ y²
		this.y * this.y
	);
};


//Agora o objeto point b (e todos os futuros objetos Point) herda o método r()
p.r()			//=> 1,414...