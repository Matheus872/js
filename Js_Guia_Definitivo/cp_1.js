var x;					//declara vari�vel x.
x = 0;			
x						//=> 0.

//Tipos
x = 1;					//N�meros
x = 0.01;				//Apenas um tipo para inteiros e reais.
x = "hello world";		//Strings de texto entre aspas.
x = 'JavaScript';		//Ap�strofos tamb�m delimitam strings.
x = true;				//valores booleanos.
x = false;

x = null;
x = undefined;

var book = {						//Objetos ficam entre chaves.
	topic: "Javascript",			//A propriedade topic tem o valor 'JavaScript'.
	fat: true						//A propiedade fat tem o valor true.
};									//A chave marca o fim do objeto.

//Acesso �s propriedades do objeto com . ou []:
book.topic							//=> "JavaScript"
book["fat"]							//=> true: outro modo de acessar valores de propriedade.
book.author = "Flanagan";			//Criando novas propriedades por meio de atribui��o.
book.contents = {};					//{} objeto vazio sem qualquer propriedade.

//JavaScript tamb�m aceita arrays (Listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];			//Um array de 4 valores, delimitados com [e].
primes[0]							//=> 2: o primeiro elemento(�ndice 0) do array.
primes.length						//=> 4: quantidade de elementos no array.
primes[primes.length - 1]			//=> 7: o �ltimo elemento do array.
primes[4] = 9;						//Adiciona um novo elemento por meio de atribui��o.	
primes[4] = 11;						//Ou altera um elementoexistente por meio de atribui��o
var empty = [];						//[] � um array vazio, sem qualquer elemento.
empty.length						//=> 0

//Os arrays e objetos podem conter outros arrays e objetos:
var	r points = [					//Um array com 2 elementos.
	{ x: 0, y: 0 },					//Cada elemento � um objeto.
	{ x: 1, y: 1 }
];

var data = {						//Um objeto com 2 propriedades
	trial1: [[1, 2], [3, 4]],		//O valor de cada propriedade � um array.
	trial2: [[2, 3], [4, 5]]		//Os elementos dos arrays s�o arrays.
};

//Operadores no Js

3 + 2						//=> 5: adi��o
3 - 2						//=> 1: subtra��o
3 * 2						//=> 6: multiplica��o
3 / 2						//=> 1.5: divis�o
points[1].x - points[0].x	//=> 1
"3" + "2"					//Concatena strings

//JavaScript define alguns operadores aritim�ticos de forma abreviada
var count = 0;				//Define uma vari�vel
count++;					//Incrementa a vari�vel
count--;					//Decrementa a vari�vel
count += 2;					//Soma 2: o mesmo que count = count + 2;
count *= 3;					//Multiplica por 3: o mesmo que count = count * 3;
count						//=> 6: nomes de vari�veis tamb�m s�o express�es.

x == y						//=> falso: igualdade
x != y						//=> verdadeiro: desigualdade
x < y						//=> verdadeiro: menor que
x <= y						//=> verdadeiro: menor ou igual a 
x > y						//=> falso: maior que
x >= y						//falso: maior ou igual a 
"two" == "three"			//faldo: as duas strings s�o diferentes
"two" > "three"				//verdadeiro: "tw" � alfabeticamente maior do que "th"
false == (x > y)			//verdadeiro: falso � igual a falso

(x == 2) && (y == 3)		//=> verdadeiro: operador l�gico E
(x > 3) || (y < 3)			//=> falso: operador l�gico OU
!(x == y)					//=> verdadeiro: Inverte valor booleano


//Fun��es

function plus1(x) {			//Define uma fun��o chamada "plus1", com par�metro "x"
	return x + 1;			//Retorna valor uma unidade maior do que foi passado
}							//As fun��es s�o inclu�das entre chaves

plus1(y)					//=> 4: y era 3

var square = function (x) {		//As fun��es s�o valores e podem ser atribu�das a vari�veis
	return x * x;				//Calcula o valor da fun��o
};								//Um ponto e v�rgula marca o fim da atribui��o

square(plus(y))					//=> 16: chama duas fun��es

//Todos os objetos de JavaScript t�m m�todos:

var a = [];					//Cria um array vazio
a.push(1, 2, 3);			//O m�todo push() adiciona elementos em um array
a.reverse();				//Outro m�todo: inverte a ordem dos elementos

//Tamb�m podemos definir nossos pr�prios m�todos. A palavra-chave "this" se refere ao
//objeto no qual o m�todo � definido: nesse caso, o array de pontos anterior.

points.dist = function () {					//Define um m�todo para calcular a dist�ncia entre pontos
	var p1 = this[0];						//Primeiro elemento do array que chamamos
	var p2 = this[1];						//Segundo elemento do objeto "this"
	var a = p2.x - p1.x;					//Diferen�a em coordenadas x
	var b = p2.y - p1.y;					//Diferen� em coordenadas y
	return Math.sqrt(a * a + b * b);		//Pit�goras
};

points.dist()								//=> 1,414: dist�ncia entre os 2 pontos


//As instru��es no JavaScript incluem condicionais e la�oes que usam a sintaxe
//das linguagens C, C++, Java e outras.

function abs(x) {			//Uma fun��o para calcular valor absoluto
	if (x >= 0) {			
		return x;
	} else {
		return -x;
	}						//Chaves s�o opcionais quando h� 1 instru��o por cl�usula
}


	
function factorial(n) {		//Fun��o para calcular fatoriais
	var product = 1;		
	while (n > 1) {			
		product *= n;
		n--;
	}
	return product;
}

factorial(4)				//=> 24: 1*4*3*2


function factorial2(n) {	//Outra vers�o
	var i, product = 1;
	for (i = 2, i <= n, i++)	//N�o precisa de {} em la�os de 1 linha
		product *= i;
	return product;
}

factorial2(5)				//=> 120: 1*2*3*4*5


//Define uma fun��o construtora para inicializar um novo objeto Point

function Point(x, y) {			//Por conven��o, as construtoras come�am com letra mai�scula
									
	this.x = x;					//A palavra-chave this � o novo objeto que est� sendo inicializado
	this.y = y					//Armazena os argumentos da fun��o como propriedades do objeto
}								//Nenhum return � necess�rio

//Usa uma fun��o construtora com a palavra-chave "new" para criar inst�ncias 
var p = new Point(1, 1);

//Define m�todos para objetos Point atribuindo-os ao objeto 
//prototype associado � fun��o construtora

Point.prototype.r = function () {
	return Math.sqrt(
		this.x * this.x +		//Retorna a rais quadrada de x�+ y�
		this.y * this.y
	);
};


//Agora o objeto point b (e todos os futuros objetos Point) herda o m�todo r()
p.r()			//=> 1,414...