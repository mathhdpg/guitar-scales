const numFrets = 21;
const sortingInterval = [1, 5, 7];
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const notes2 = ['', 'Db', '', 'Eb', '', '', 'Gb', '', 'Ab', '', 'Bb', ''];
const degrees = ['T', '2m', '2M', '3m', '3M', '4J', '4A', '5J', '6m', '6M', '7m', '7M'];
const degreesExtenso = ["Tônica", "Segunda Menor", "Segunda Maior", "Terça Menor", "Terça Maior", "Quarta Justa", "Quinta Justa / Quarta Aumentada / Quinta Diminuta", "Sexta Menor", "Sexta Maior", "Sétima Menor", "Sétima Maior"];
const classeDegrees = ['tonica', 'segundaMenor', 'segundaMaior', 'tercaMenor', 'tercaMaior', 'quartaJusta', 'quartaAumentada', 'quintaJusta', 'sextaMenor', 'sextaMaior', 'setimaMenor', 'setimaMaior'];

const listScales = [];
const listTunings = [];

listTunings.push(new Tuning("Standart", ["E", "B", "G", "D", "A", "E"]));
listTunings.push(new Tuning("Drop D", ["E", "B", "G", "D", "A", "D"]));
listTunings.push(new Tuning("DADGAD", ["D", "A", "G", "D", "A", "D"]));
listTunings.push(new Tuning("FAGDAD", ["F", "A", "G", "D", "A", "D"]));

listScales.push(new Scale("Tríade Maior", [0, 4, 7]));
listScales.push(new Scale("Tríade Menor", [0, 3, 7]));
listScales.push(new Scale("Tríade sus4", [0, 5, 7]));
listScales.push(new Scale("Tríade Aumentada", [0, 4, 8]));
listScales.push(new Scale("Tríade Diminuta", [0, 3, 6]));

listScales.push(new Scale("Diatônica Maior", [0, 2, 4, 5, 7, 9, 11], true));

listScales.push(new Scale("Jônico", [0, 2, 4, 5, 7, 9, 11], true));
listScales.push(new Scale("Dórico", [0, 2, 3, 5, 7, 9, 10], true));
listScales.push(new Scale("Frígio", [0, 1, 3, 5, 7, 8, 10], true));
listScales.push(new Scale("Lídio", [0, 2, 4, 6, 7, 9, 11], true));
listScales.push(new Scale("Mixolídio", [0, 2, 4, 5, 7, 9, 10], true));
listScales.push(new Scale("Aeólio", [0, 2, 3, 5, 7, 8, 10], true));
listScales.push(new Scale("Lócrio", [0, 1, 3, 5, 6, 8, 10], true));

listScales.push(new Scale("Menor Natural", [0, 2, 3, 5, 7, 8, 10], true));
listScales.push(new Scale("Menor Harmonica", [0, 2, 3, 5, 7, 8, 11], true));
listScales.push(new Scale("Lócrio 6M", [0, 1, 3, 5, 6, 9, 10], true));
listScales.push(new Scale("Jônico #5", [0, 2, 4, 5, 8, 9, 11], true));
listScales.push(new Scale("Dórico #4", [0, 2, 3, 6, 7, 9, 10], true));
listScales.push(new Scale("Frígio Maior", [0, 1, 4, 5, 7, 8, 10], true));
listScales.push(new Scale("Mixolídio b9 b13", [0, 1, 4, 5, 7, 8, 10], true));
listScales.push(new Scale("Lídio #9", [0, 3, 4, 6, 7, 9, 11], true));
listScales.push(new Scale("Diminuta Harmonica", [0, 1, 3, 4, 6, 8, 9], true));

listScales.push(new Scale("Menor Melódica", [0, 2, 3, 5, 7, 9, 11], true));
listScales.push(new Scale("Dórico b9", [0, 1, 3, 5, 7, 9, 10], true));
listScales.push(new Scale("Frígio 6M", [0, 1, 3, 5, 7, 9, 10], true));
listScales.push(new Scale("Lídio #5", [0, 2, 4, 6, 8, 9, 11], true));
listScales.push(new Scale("Lídio b7", [0, 2, 4, 6, 7, 9, 10], true));
listScales.push(new Scale("Mixolídio #4", [0, 2, 4, 6, 7, 9, 10], true));
listScales.push(new Scale("Mixolídio b13", [0, 2, 4, 5, 7, 8, 10], true));
listScales.push(new Scale("Lócrio 9M", [0, 2, 3, 5, 6, 8, 10], true));
listScales.push(new Scale("Alterada", [0, 1, 3, 4, 6, 8, 10], true));

listScales.push(new Scale("Diminuta", [0, 2, 3, 5, 6, 8, 9, 11], true));
listScales.push(new Scale("Tons Inteiros", [0, 2, 4, 6, 8, 10], true));
listScales.push(new Scale("Maior Harmonica", [0, 2, 4, 5, 7, 8, 11], true));
listScales.push(new Scale("Aumentada", [0, 3, 4, 7, 8, 11], true));
listScales.push(new Scale("Penta m7", [0, 3, 5, 7, 10], true));
listScales.push(new Scale("Penta m6", [0, 3, 5, 7, 9], true));
listScales.push(new Scale("Penta M7", [0, 4, 5, 7, 10], true));
listScales.push(new Scale("Cromática", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
listScales.push(new Scale("Simetrica 124", [0, 1, 3, 6, 7, 9], true));
listScales.push(new Scale("Simetrica 134", [0, 2, 3, 6, 8, 9], true));