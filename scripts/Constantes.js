const QTDE_CASAS = 30;
const ordenacaoIntervalo = [1, 5, 7];
const notas = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notas2 = ['', 'Db', '', 'Eb', '', '', 'Gb', '', 'Ab', '', 'Bb', ''];
const graus = ['T', '2m', '2M', '3m', '3M', '4J', '4A', '5J', '6m', '6M', '7m', '7M'];
const classeGraus = ['tonica', 'segundaMenor', 'segundaMaior', 'tercaMenor', 'tercaMaior', 'quartaJusta', 'quartaAumentada', 'quintaJusta', 'sextaMenor', 'sextaMaior', 'setimaMenor', 'setimaMaior'];

const listaEscalas = [];
const listaAfinacoes = [];

listaAfinacoes.push(new Afinacao("Standart", ["E", "B", "G", "D", "A", "E"]));
listaAfinacoes.push(new Afinacao("Drop D", ["E", "B", "G", "D", "A", "D"]));
listaAfinacoes.push(new Afinacao("DADGAD", ["D", "A", "G", "D", "A", "D"]));
listaAfinacoes.push(new Afinacao("FAGDAD", ["F", "A", "G", "D", "A", "D"]));

listaEscalas.push(new Escala("Tríade Maior", [0, 4, 7]));
listaEscalas.push(new Escala("Tríade Menor", [0, 3, 7]));
listaEscalas.push(new Escala("Tríade sus4", [0, 5, 7]));
listaEscalas.push(new Escala("Tríade Aumentada", [0, 4, 8]));
listaEscalas.push(new Escala("Tríade Diminuta", [0, 3, 6]));

listaEscalas.push(new Escala("Diatônica Maior", [0, 2, 4, 5, 7, 9, 11], true));

listaEscalas.push(new Escala("Jônico", [0, 2, 4, 5, 7, 9, 11], true));
listaEscalas.push(new Escala("Dórico", [0, 2, 3, 5, 7, 9, 10], true));
listaEscalas.push(new Escala("Frígio", [0, 1, 3, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Lídio", [0, 2, 4, 6, 7, 9, 11], true));
listaEscalas.push(new Escala("Mixolídio", [0, 2, 4, 5, 7, 9, 10], true));
listaEscalas.push(new Escala("Aeólio", [0, 2, 3, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Lócrio", [0, 1, 3, 5, 6, 8, 10], true));

listaEscalas.push(new Escala("Menor Natural", [0, 2, 3, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Menor Harmonica", [0, 2, 3, 5, 7, 8, 11], true));
listaEscalas.push(new Escala("Lócrio 6M", [0, 1, 3, 5, 6, 9, 10], true));
listaEscalas.push(new Escala("Jônico #5", [0, 2, 4, 5, 8, 9, 11], true));
listaEscalas.push(new Escala("Dórico #4", [0, 2, 3, 6, 7, 9, 10], true));
listaEscalas.push(new Escala("Frígio Maior", [0, 1, 4, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Mixolídio b9 b13", [0, 1, 4, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Lídio #9", [0, 3, 4, 6, 7, 9, 11], true));
listaEscalas.push(new Escala("Diminuta Harmonica", [0, 1, 3, 4, 6, 8, 9], true));

listaEscalas.push(new Escala("Menor Melódica", [0, 2, 3, 5, 7, 9, 11], true));
listaEscalas.push(new Escala("Dórico b9", [0, 1, 3, 5, 7, 9, 10], true));
listaEscalas.push(new Escala("Frígio 6M", [0, 1, 3, 5, 7, 9, 10], true));
listaEscalas.push(new Escala("Lídio #5", [0, 2, 4, 6, 8, 9, 11], true));
listaEscalas.push(new Escala("Lídio b7", [0, 2, 4, 6, 7, 9, 10], true));
listaEscalas.push(new Escala("Mixolídio #4", [0, 2, 4, 6, 7, 9, 10], true));
listaEscalas.push(new Escala("Mixolídio b13", [0, 2, 4, 5, 7, 8, 10], true));
listaEscalas.push(new Escala("Lócrio 9M", [0, 2, 3, 5, 6, 8, 10], true));
listaEscalas.push(new Escala("Alterada", [0, 1, 3, 4, 6, 8, 10], true));

listaEscalas.push(new Escala("Diminuta", [0, 2, 3, 5, 6, 8, 9, 11], true));
listaEscalas.push(new Escala("Tons Inteiros", [0, 2, 4, 6, 8, 10], true));
listaEscalas.push(new Escala("Maior Harmonica", [0, 2, 4, 5, 7, 8, 11], true));
listaEscalas.push(new Escala("Aumentada", [0, 3, 4, 7, 8, 11], true));
listaEscalas.push(new Escala("Penta m7", [0, 3, 5, 7, 10], true));
listaEscalas.push(new Escala("Penta m6", [0, 3, 5, 7, 9], true));
listaEscalas.push(new Escala("Penta M7", [0, 4, 5, 7, 10], true));
listaEscalas.push(new Escala("Cromática", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
listaEscalas.push(new Escala("Simetrica 124", [0, 1, 3, 6, 7, 9], true));
listaEscalas.push(new Escala("Simetrica 134", [0, 2, 3, 6, 8, 9], true));