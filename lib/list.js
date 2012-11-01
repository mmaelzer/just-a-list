
var Node = function (data) {
	this.data = data;
	this.next = null;
};

var List = function() {
	this.head = null;	
};

List.prototype.clear = function() {
	while (this.removeBeginning() != null) {}
}

List.prototype.contains = function(node) {
	var currentNode = this.head;
	var found = false;

	while (currentNode !== null && !found) {
		if (currentNode === node) {
			found = true;
		} else {
			currentNode = currentNode.next;		
		}
	}

	return found;
};

List.prototype.insertAfter = function(node, data) {
	if (!this.contains(node)) throw new Error("No node found");
	var newNode = new Node(data);
	newNode.next = node.next;
	node.next = newNode;

	return newNode;
};

List.prototype.insertBeginning = function(data) {
	var node = new Node(data);

	node.next = this.head;
	this.head = node;

	return node;
};

List.prototype.length = function() {
	if (this.head === null) return 0;

	var length = 1;
	var currentNode = this.head;

	while (currentNode.next !== null) {
		length++;
		currentNode = currentNode.next;
	}

	return length;
};

List.prototype.removeAfter = function(node) {
	if (!this.contains(node)) throw new Error("No node found");
	var obsoleteNode = node.next;
	if (obsoleteNode === null) throw new Error ("No next node");
	node.next = obsoleteNode.next;
	obsoleteNode.next = null;

	return obsoleteNode;
};

List.prototype.removeBeginning = function() {
	if (this.head === null) return null;

	var node = this.head;
	var next = this.head.next;
	this.head.next = null;
	this.head = next;

	return node;
};

List.prototype.reverse = function() {
	var currentNode = this.head;
	var next = null;
	var prev = null;

	while (currentNode !== null) {
		next = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = next;
	}

	this.head = prev;
};

module.exports = List;