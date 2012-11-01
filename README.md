just-a-list
===========

A linked list implementation that draws on [wikipedia's article on linked lists](http://en.wikipedia.org/wiki/Linked_list#Linked_list_operations) for available operations.

----------------------


### Objects ###

**List**  
The linked list object returned when require is called on this library  

	var List = require('just-a-list');
	var list = new List();


**Node**  
The returned object type after insertion or removal from the list  

	var list = new List();
	var node = list.insertBeginning('hello');
	// list.head === node
	// node.data === 'hello'
	// node.next === null


### Methods ###

**insertBeginning(data)**  
Inserts data to the beginning of the list  

	var text = "hello my name is simon";
	list.insertBeginning(text);


**insertAfter(node, data)**  
Inserts data after the passed-in node  

	var intro = "hello my name";
	var name = "is simon";
	var node = list.insertBeginning(intro);
	list.insertAfter(node, name);


**removeBeginning()**  
Remove data from the beginning of the list  

	// list.length() === 6
	var node = list.removeBeginning();
	// list.length() === 5
	// node.data === "some data"


**removeAfter(node)**  
Remove data after the passed-in node  

	var removedNode = list.removeAfter(node);


**clear()**  
A convenience method that calls `removeBeginning()` until the list is empty  

	// list.length() === 5
	list.clear();
	// list.length() === 0


**length()**  
A convenience method that walks the list and returns the count of nodes. Note that calling `list.length()` will take O(n) to execute.  

	console.log(list.length());
	//> 5


**reverse()**  
A convenience method that reverses the list  

	// list: 5 -> 6 -> 1 -> 4
	list.reverse();
	// list: 4 -> 1 -> 6 -> 5
