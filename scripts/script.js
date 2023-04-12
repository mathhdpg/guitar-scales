var listNotes = getListNotes();
function getListNotes() {
	var arr = [];
	for (var i = 0; i < notes.length; i++) {
		var note = new Note(notes[i], notes2[i]);
		arr.push(note);
		if (i > 0) arr[i-1].setNext(note);
	}
	arr[arr.length-1].setNext(arr[0]);
	return arr;
}

function selectNote(name) {
	for (var i = 0; i < notes.length; i++) {
		if (listNotes[i].name == name) return listNotes[i];
		if (listNotes[i].name2 == name) return listNotes[i];
	}
	throw 'Nota (' +name+ ') não encontrada';
}

window.onload = function() {
	createCheckboxDegrees();
	createTHFrets();
	
	createOptionsByArray(listNotes, "key");
	createOptionsByArray(listScales, "scale");
	createOptionsByArray(listTunings, "tuning");
	
	createStrings(listTunings[0].notes);
	redraw();
	
	showNeck(0);
	
	document.querySelectorAll(".checkInterval").forEach(checkbox => {
		checkbox.addEventListener("change", function() {
			var idKey = document.getElementById("key").value;
			colorIntervals(idKey)
		});
	});
}

function createCheckboxDegrees() {
	degreesExtenso.forEach((grau, index) => {
		let html = 
		`<div class="form-check">
			<input type="checkbox" class="form-check-input checkInterval" id="cbIntervals_${index}" value="${index}" checked="checked"/>
			<label class="form-check-label" for="cbIntervals_${index}">${grau}</label>
		</div>`;
		$(".intervals").append(html);
	});
}

function createStrings(tuning) {
	for (var o = 0; o < 6; o++) {
		var html = "<th class='note_" + tuning[o].replace("#", "x") + "'><span class='note'>" + tuning[o] + "</span><span class='interval'><span></th>";
		var note = selectNote(tuning[o]);
		for (var i = 1; i <= numFrets; i++) {
			note = note.getNext();
			var classe = "note_" + note.name.replace("#", "x");
			if (note.name2 != "") classe += " note_" + note.name2;
			html += "<td class='" + classe + "'><span class='note'>" + note.name + "</span><span class='interval'><span></td>";
		}
		$('#string' + (o+1)).html(html);
	}
	var note = listNotes[$("#key").val()];
	for (var k in degrees) {
		$(".note_" + note.name.replace("#", "x")).find("span.interval").html(degrees[k]);
		note = note.getNext();
	}
}

function createTHFrets() {
	var html = "<th></th>";
	for (var i = 1; i <= numFrets; i++) {
		html += "<th>" + i + "</th>";
	}
	$('.frets').html(html);
}



function createOptionsKeySorted(idOrdem) {
	var html = "";
	var interval = sortingInterval[idOrdem];
	var aux = 0;
	for (var i = 1; i <= 12; i++)  {
		html += "<option value='" + aux + "' " + (aux == 0 ? 'selected="selected"' : '') + ">" + notes[aux] + "</option>";
		aux += interval;
		if (aux >= notes.length)  aux -= notes.length;
	}

	$("#key").html(html);
}
function createOptionsByArray(array, idSelect) {
	array.forEach((item, index) => {
		$("#" + idSelect).append(`<option value='${index}' ${index == 0 ? 'selected="selected"' : ''}>${item.name}</option>`);
	});
}
function changeTuning(idTuning) {
	createStrings(listTunings[idTuning].notes);
	colorIntervalsScale($("#scale").val());
}
function colorIntervals(idKey) {
	createStrings(listTunings[$("#tuning").val()].notes);
	var note = listNotes[idKey];
	var htmlCores = "";
	for (var k in degrees) {
		$(".note_" + note.name.replace("#", "x")).find('span').hide();
		if ($("#cbIntervals_" + k).is(":checked")) {
			$(".note_" + note.name.replace("#", "x")).addClass(classeDegrees[k]);
			
			htmlCores += "<div class='" + classeDegrees[k] + "'>" + degrees[k] + "</div>";
			
			if ($("#showNeck").val() == 0) $(".note_" + note.name.replace("#", "x")).find('span.note').show();
			else $(".note_" + note.name.replace("#", "x")).find('span.interval').show();
		}
		note = note.getNext();
	}
	$(".intervalsScale").html(htmlCores);
}

function colorIntervalsScale(idScale) {
	$(".checkInterval").prop("checked", false);
	var scale = listScales[idScale];
	for (var i = 0; i < scale.intervals.length; i++) {
		$("#cbIntervals_" + scale.intervals[i]).prop("checked", true);
	}
	var idKey = $("#key").val();
	colorIntervals(idKey)
}

function showNeck(idExibicao) {
	if (idExibicao == 0) {
		$('span.note').show();
		$('span.interval').hide();
	} else {
		$('span.interval').show();
		$('span.note').hide();
	}
	redraw();
}
function redraw() {
	colorIntervalsScale($("#scale").val());
	$("input:checkbox:not(:checked)").each(function() {
		$(this).val();
	});
}