function Nota(nome, nome2) {
	this.next;
	this.nome = nome;
	this.nome2 = nome2;

	this.setNext = function(nota) {
		this.next = nota;
	}
	this.getNext = function() {
		return this.next;
	}
}