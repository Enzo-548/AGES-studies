# PRESENTATION

**Breve Apresentação:** Boa tarde a todos! Meu nome é Enzo e 
esta é minha apresentação da calculadora, que desenvolvi
para a primeira sprint do grupo de estudos para a AGES.
A minha calculadora foi desenvolvida com enfoque em seguir 
a risca os boundaries de design estabelecidos pelo mock que
peguei no Figma, esta abordagem foi escolhida para reforçar
o desenvolvimento baseado em guidelines de design propostas
e validadas pelo possivel cliente AGES.

**Estrutura da entrega:** Esta entrega da sprint é separada 
em quatro arquivos distintos: 

- *index.html -* Este arquivo contém a indexação do projeto,
basicamente onde cada componente vai. É o blueprint usado 
para construir a calculadora.
- *style.css -* Aqui mora a estilização da pagina e também 
foi a minha maior prioridade, ja que meu maior objetivo foi
chegar o mais proximo possivel do mock.
- *script.js -* Escrito usando javascript, *script.js* 
é o orquestrador por trás da calculadora, aqui contém a 
lógica por trás do projeto e o roteiro de interações entre 
os componentes estabelecidos em *index.html*.
- *PRESENTATION -* Este arquivo foi construido com o 
intuito de apresentar o projeto desenvolvido nestas três 
semanas, já que uma apresentação presencial não se tornou 
possível. 

# QUESTIONS

**Motivação:** Esta seção sera dedicada para resposta de 
algumas questões que podem ser pertinentes ao espectador.

**(Q1)** Usaste IA em alguma parte do projeto, se sim, onde 
e porque?
**R:** Usei! Mais especificadamente do método 
*format_equation(a)*, a idéia era delegar a formatação de 
"escrita humana" das equações para a "escrita padrão" de 
linguagens de programação como *Javascript*, *C/C++*, *Java*, 
e entre outros.  

**(Q2)** Poderia explicar como a calculadora funciona por tras da cortina ?
**R:** Claro! Ela tem duas partes principais, o teclado que 
é composto por ~3 ou ~4 tipos de botão, botoes de numero 
concatenam a casa de algarismo(já explico), botões de 
operação mandam o algarismo para a casa de operação(já 
explico), botoes de deletar podem deletar o algarismo e/ou 
a operação(já explico), e o botão de igual resolve a casa 
de operação e coloca na casa de algarismo(já explico).
Já a outra parte que é o visor é dividido entre algarismo, 
auto-explicativo, que sera passado para a casa de operação 
quando um botão de operação for pressionado, no momento que 
houver uma operação para executar *format_equation(a)* vai 
receber a string de operação e vai formatar e resolve-la, 
podendo retornar um numero valido, ou *invalid* para signi-
ficar que a operação era invalida.

**(Q3)** Poderia explicar um pouquinho de porque ter escri-
to seu *script.js* dessa forma ?
**R:** Sim! Eu não deleguei muito pensamento pra isso, 
minha ideia inicial era passar uma unica string de equação 
e desmontar ela operação por operação até chegar no resulta-
do final.
No fim conforme eu fui aprendendo e escrevendo a interação 
dos botões com o html eu me dei conta que eu podia fazer 
isso de forma gradual, conforme uma operação valida fosse 
passada seria possivel ir resolvendo ela e acumulando esse 
resultado com futuras operações. Eu acabei escolhendo a 
estratégia posterior a cima da anterior para o meu projeto. 

**(Q4)** Qual foi seu maiir desafio durante o desenvolvimen-
to desse projeto?
**R:** Incrivelmente foi reaprender html, css e javascript, 
fazia tempo que não usava então me nescessitou uns rounds de
leitura e de tutoriais no youtube, de resto meu maior desa-
fio foi escrever *script.js*, estava apanhando para por 
o event listener correspondente em cada tipo de botão, para 
uma lista de todos os botões. 