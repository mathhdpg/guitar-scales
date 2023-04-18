const numFrets = 21;
const sortingInterval = [1, 5, 7];
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notes2 = ['', 'Db', '', 'Eb', '', '', 'Gb', '', 'Ab', '', 'Bb', ''];
const degrees = ['T', '2m', '2M', '3m', '3M', '4J', '4A', '5J', '6m', '6M', '7m', '7M'];
const degreesExtenso = ["Tônica", "Segunda Menor", "Segunda Maior", "Terça Menor", "Terça Maior", "Quarta Justa", "Quinta Justa / Quarta Aumentada / Quinta Diminuta", "Sexta Menor", "Sexta Maior", "Sétima Menor", "Sétima Maior"];
const classeDegrees = ['tonica', 'segundaMenor', 'segundaMaior', 'tercaMenor', 'tercaMaior', 'quartaJusta', 'quartaAumentada', 'quintaJusta', 'sextaMenor', 'sextaMaior', 'setimaMenor', 'setimaMaior'];

const scalesList = [];
const tuningsList = [];
const chordsList = [];

tuningsList.push(new Tuning("Standart", ["E", "B", "G", "D", "A", "E"]));
tuningsList.push(new Tuning("Drop D", ["E", "B", "G", "D", "A", "D"]));
tuningsList.push(new Tuning("DADGAD", ["D", "A", "G", "D", "A", "D"]));
tuningsList.push(new Tuning("FAGDAD", ["F", "A", "G", "D", "A", "D"]));

scalesList.push(new Scale("Tríade Maior", [0, 4, 7]));
scalesList.push(new Scale("Tríade Menor", [0, 3, 7]));
scalesList.push(new Scale("Tríade sus4", [0, 5, 7]));
scalesList.push(new Scale("Tríade Aumentada", [0, 4, 8]));
scalesList.push(new Scale("Tríade Diminuta", [0, 3, 6]));

scalesList.push(new Scale("Diatônica Maior", [0, 2, 4, 5, 7, 9, 11], true));

scalesList.push(new Scale("Jônico", [0, 2, 4, 5, 7, 9, 11], true));
scalesList.push(new Scale("Dórico", [0, 2, 3, 5, 7, 9, 10], true));
scalesList.push(new Scale("Frígio", [0, 1, 3, 5, 7, 8, 10], true));
scalesList.push(new Scale("Lídio", [0, 2, 4, 6, 7, 9, 11], true));
scalesList.push(new Scale("Mixolídio", [0, 2, 4, 5, 7, 9, 10], true));
scalesList.push(new Scale("Aeólio", [0, 2, 3, 5, 7, 8, 10], true));
scalesList.push(new Scale("Lócrio", [0, 1, 3, 5, 6, 8, 10], true));

scalesList.push(new Scale("Menor Natural", [0, 2, 3, 5, 7, 8, 10], true));
scalesList.push(new Scale("Menor Harmonica", [0, 2, 3, 5, 7, 8, 11], true));
scalesList.push(new Scale("Lócrio 6M", [0, 1, 3, 5, 6, 9, 10], true));
scalesList.push(new Scale("Jônico #5", [0, 2, 4, 5, 8, 9, 11], true));
scalesList.push(new Scale("Dórico #4", [0, 2, 3, 6, 7, 9, 10], true));
scalesList.push(new Scale("Frígio Maior", [0, 1, 4, 5, 7, 8, 10], true));
scalesList.push(new Scale("Mixolídio b9 b13", [0, 1, 4, 5, 7, 8, 10], true));
scalesList.push(new Scale("Lídio #9", [0, 3, 4, 6, 7, 9, 11], true));
scalesList.push(new Scale("Diminuta Harmonica", [0, 1, 3, 4, 6, 8, 9], true));

scalesList.push(new Scale("Menor Melódica", [0, 2, 3, 5, 7, 9, 11], true));
scalesList.push(new Scale("Dórico b9", [0, 1, 3, 5, 7, 9, 10], true));
scalesList.push(new Scale("Frígio 6M", [0, 1, 3, 5, 7, 9, 10], true));
scalesList.push(new Scale("Lídio #5", [0, 2, 4, 6, 8, 9, 11], true));
scalesList.push(new Scale("Lídio b7", [0, 2, 4, 6, 7, 9, 10], true));
scalesList.push(new Scale("Mixolídio #4", [0, 2, 4, 6, 7, 9, 10], true));
scalesList.push(new Scale("Mixolídio b13", [0, 2, 4, 5, 7, 8, 10], true));
scalesList.push(new Scale("Lócrio 9M", [0, 2, 3, 5, 6, 8, 10], true));
scalesList.push(new Scale("Alterada", [0, 1, 3, 4, 6, 8, 10], true));

scalesList.push(new Scale("Diminuta", [0, 2, 3, 5, 6, 8, 9, 11], true));
scalesList.push(new Scale("Tons Inteiros", [0, 2, 4, 6, 8, 10], true));
scalesList.push(new Scale("Maior Harmonica", [0, 2, 4, 5, 7, 8, 11], true));
scalesList.push(new Scale("Aumentada", [0, 3, 4, 7, 8, 11], true));
scalesList.push(new Scale("Penta m7", [0, 3, 5, 7, 10], true));
scalesList.push(new Scale("Penta m6", [0, 3, 5, 7, 9], true));
scalesList.push(new Scale("Penta M7", [0, 4, 5, 7, 10], true));
scalesList.push(new Scale("Cromática", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
scalesList.push(new Scale("Simetrica 124", [0, 1, 3, 6, 7, 9], true));
scalesList.push(new Scale("Simetrica 134", [0, 2, 3, 6, 8, 9], true));

let x = null;
chordsList.push(new Chord("C", "C",   [x, 3, 2, 0, 1, 0]));
chordsList.push(new Chord("D", "D",   [x, x, 0, 2, 3, 2]));
chordsList.push(new Chord("E", "E",   [0, 2, 2, 1, 0, 0]));
chordsList.push(new Chord("F", "F",   [1, 3, 3, 2, 1, 1]));
chordsList.push(new Chord("G", "G",   [3, 2, 0, 0, 0, 3]));
chordsList.push(new Chord("A", "A",   [x, 0, 2, 2, 2, 0]));
chordsList.push(new Chord("B", "B",   [x, 2, 4, 4, 4, 2]));
chordsList.push(new Chord("C", "Cm",  [x, 3, 5, 5, 4, 3]));
chordsList.push(new Chord("D", "Dm",  [x, x, 0, 2, 3, 1]));
chordsList.push(new Chord("E", "Em",  [0, 2, 2, 0, 0, 0]));
chordsList.push(new Chord("F", "Fm",  [1, 3, 3, 1, 1, 1]));
chordsList.push(new Chord("G", "Gm",  [3, 5, 5, 3, 3, 3]));
chordsList.push(new Chord("A", "Am",  [x, 0, 2, 2, 1, 0]));
chordsList.push(new Chord("B", "Bm",  [x, 2, 4, 4, 3, 2]));