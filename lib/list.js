
var List = function() {
	this.head = null;	
 	 this.length = 0;
};

List.prototype.clear = function() {
  	this.head = null;
  	this.length = 0;
}

List.prototype.contains = function(node) {
	var currentNode = this.head;
	while (currentNode) {
		if (currentNode === node) return true; 
    	currentNode = currentNode.next;		
	}
	return false;
};

List.prototype.insertBeginning = function(data) {
  	this.length++;
	return this.head = {data: data, next: this.head};
};

List.prototype.insertAfter = function(node, data) {
	if (!this.contains(node)) throw new Error("No node found");
  	this.length++;
	return node.next = { data: data, next: node.next };
};

List.prototype.removeBeginning = function() {
	if (this.head === null) return null;
	this.length--;
	var removed = this.head;
 	this.head = this.head.next;
	return removed;
};

List.prototype.removeAfter = function(node) {
	if (!this.contains(node)) throw new Error("No node found");
	if (node.next === null) throw new Error ("No next node");
 	this.length--;
 	var removed = node.next;
	node.next = removed.next;
	return removed;
};

List.prototype.reverse = function() {
	var currentNode = this.head;
	var next = null;
	var prev = null;

	while (currentNode) {
		next = currentNode.next;
		currentNode.next = prev;
		prev = currentNode;
		currentNode = next;
	}

	this.head = prev;
};

module.exports = List;
