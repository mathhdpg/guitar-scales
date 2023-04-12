var listaNotas = getListaNotas();
function getListaNotas() {
	var arr = [];
	for (var i = 0; i < notas.length; i++) {
		var nota = new Nota(notas[i], notas2[i]);
		arr.push(nota);
		if (i > 0) arr[i-1].setNext(nota);
	}
	arr[arr.length-1].setNext(arr[0]);
	return arr;
}

function selectNota(nome) {
	for (var i = 0; i < notas.length; i++) {
		if (listaNotas[i].nome == nome) return listaNotas[i];
		if (listaNotas[i].nome2 == nome) return listaNotas[i];
	}
	throw 'nota (' +nome+ ')não encontrada';
}

$(document).ready(function() {
	criaTHCasas();
	criaOptionsTom();
	criaOptionsAfinacao();
	criaOptionsEscalas();
	criaCordas(listaAfinacoes[0].notas);
	redraw();
	
	exibirBraco(0);
	
	$(".checkIntervalo").change(function() {
		var idTom = $("#tom").val();
		colorirIntervalos(idTom)
	});
});

function criaCordas(afinacao) {
	for (var o = 0; o < 6; o++) {
		var html = "<th class='nota_" + afinacao[o].replace("#", "x") + "'><span class='nota'>" + afinacao[o] + "</span><span class='intervalo'><span></th>";
		var nota = selectNota(afinacao[o]);
		for (var i = 1; i <= QTDE_CASAS; i++) {
			nota = nota.getNext();
			var classe = "nota_" + nota.nome.replace("#", "x");
			if (nota.nome2 != "") classe += " nota_" + nota.nome2;
			html += "<td class='" + classe + "'><span class='nota'>" + nota.nome + "</span><span class='intervalo'><span></td>";
		}
		$('#corda' + (o+1)).html(html);
	}
	var nota = listaNotas[$("#tom").val()];
	for (var k in graus) {
		$(".nota_" + nota.nome.replace("#", "x")).find("span.intervalo").html(graus[k]);
		nota = nota.getNext();
	}
}

function criaTHCasas() {
	var html = "<th></th>";
	for (var i = 1; i <= QTDE_CASAS; i++) {
		html += "<th>" + i + "</th>";
	}
	$('.casas').html(html);
}

function criaOptionsTom() {
	var html = "";
	for (var k in listaNotas) {
		html += "<option value='" + k + "' " + (k == 0 ? 'selected="selected"' : '') + ">" + listaNotas[k].nome + "</option>";
	}
	$("#tom").html(html);
}

function criaOptionsTomOrdenado(idOrdem) {
	var html = "";
	var intervalo = ordenacaoIntervalo[idOrdem];
	var aux = 0;
	for (var i = 1; i <= 12; i++)  {
		html += "<option value='" + aux + "' " + (aux == 0 ? 'selected="selected"' : '') + ">" + notas[aux] + "</option>";
		aux += intervalo;
		if (aux >= notas.length)  aux -= notas.length;
	}

	$("#tom").html(html);
}

function criaOptionsEscalas() {
	var html = "";
	for (var i = 0; i < listaEscalas.length; i++) {
		html += "<option value='" + i + "' " + (i == 0 ? 'selected="selected"' : '') + ">" + listaEscalas[i].nome + "</option>";
	}
	$("#escala").html(html);
}

function criaOptionsAfinacao() {
	var html = "";
	for (var i = 0; i < listaAfinacoes.length; i++) {
		html += "<option value='" + i + "' " + (i == 0 ? 'selected="selected"' : '') + ">" + listaAfinacoes[i].nome + "</option>";
	}
	$("#afinacao").html(html);
}
function mudarOrdenacao(idOrdenacao) {
	getEscala();
}
function alteraAfinacao(idAfinacao) {
	criaCordas(listaAfinacoes[idAfinacao].notas);
	colorirIntervalosEscala($("#escala").val());
}

function colorirIntervalos(idTom) {
	criaCordas(listaAfinacoes[$("#afinacao").val()].notas);
	var nota = listaNotas[idTom];
	var htmlCores = "";
	for (var k in graus) {
		$(".nota_" + nota.nome.replace("#", "x")).find('span').hide();
		if ($("#cbIntervalos_" + k).is(":checked")) {
			$(".nota_" + nota.nome.replace("#", "x")).addClass(classeGraus[k]);
			
			htmlCores += "<div class='" + classeGraus[k] + "'>" + graus[k] + "</div>";
			
			if ($("#exibirBraco").val() == 0) $(".nota_" + nota.nome.replace("#", "x")).find('span.nota').show();
			else $(".nota_" + nota.nome.replace("#", "x")).find('span.intervalo').show();
		}
		nota = nota.getNext();
	}
	$(".intervalosEscala").html(htmlCores);
}

function colorirIntervalosEscala(idEscala) {
	$(".checkIntervalo").prop("checked", false);
	var escala = listaEscalas[idEscala];
	for (var i = 0; i < escala.intervalos.length; i++) {
		$("#cbIntervalos_" + escala.intervalos[i]).prop("checked", true);
	}
	var idTom = $("#tom").val();
	colorirIntervalos(idTom)
}

function exibirBraco(idExibicao) {
	if (idExibicao == 0) {
		$('span.nota').show();
		$('span.intervalo').hide();
	} else {
		$('span.intervalo').show();
		$('span.nota').hide();
	}
	redraw();
}
function redraw() {
	colorirIntervalosEscala($("#escala").val());
	$("input:checkbox:not(:checked)").each(function() {
		$(this).val();
	});
}