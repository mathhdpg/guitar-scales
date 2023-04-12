function Note(name, name2) {
	this.next;
	this.name = name;
	this.name2 = name2;

	this.setNext = function(note) {
		this.next = note;
	}
	this.getNext = function() {
		return this.next;
	}
}