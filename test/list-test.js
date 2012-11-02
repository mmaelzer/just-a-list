
var should = require('should');
var List = require('../lib/list');

var testData = ['hello', 'my', 'name', 'is', 'simon'];

describe('just-a-list', function() {

	var list = null;

	beforeEach(function(done) {
		list = new List();
		done();
	});

	afterEach(function(done) {
		list.clear();
		list = null;
		done();
	});

	describe("#insertBeginning(data)", function() {
		it("inserts data at the beginning of the linked list", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			(list.length).should.equal(testData.length);
			list.head.data.should.equal(testData[testData.length - 1]);
			done();
		});

		it("returns the newly created list node after insertion", function(done) {
			var node = list.insertBeginning(testData[0]);
			node.data.should.equal(testData[0]);
			done();
		});
	});

	describe("#insertAfter(node, data)", function() {
		it("insert data after the given node", function(done) {
			var first = list.insertBeginning(testData[0]);
			list.insertAfter(first, testData[1]);

			list.head.data.should.equal(testData[0]);
			done();
		});

		it("returns the newly created list node after insertion", function(done) {
			var first = list.insertBeginning(testData[0]);
			var node = list.insertAfter(first, testData[1]);
			node.data.should.equal(testData[1]);
			done();
		});
	});

	describe("#removeAfter(node)", function() {
		it("removes the node after the given node", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			var length = list.length;
			var expectedNode = list.head.next.next;
			list.removeAfter(list.head);
			list.length.should.equal(length - 1);
			list.head.next.should.equal(expectedNode);
			done();
		});

		it("returns the node after removal", function(done) {
			var first = list.insertBeginning(testData[0]);
			var node = list.insertAfter(first, testData[1]);
			var removed = list.removeAfter(first);
			removed.data.should.equal(testData[1]);
			should.not.exist(list.head.next);
			done();
		});
	});

	describe("#removeBeginning()", function() {
		it("removes the first node in the list", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			var data = list.removeBeginning().data;
			data.should.equal(testData[testData.length - 1]);
			list.head.data.should.equal(testData[testData.length - 2]);
			done();
		});
	});

	describe("#length()", function() {
		it("returns the number of items in the list", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			(list.length).should.equal(testData.length);
			done();
		});
	});

	describe("#reverse()", function() {
		it("reverses the nodes in the list", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			list.reverse();
			list.head.data.should.equal(testData[0]);
			done();
		});
	});

	describe("#clear()", function() {
		it("clears the list of all nodes", function(done) {
			testData.forEach(function(data) {
				list.insertBeginning(data);
			});

			list.clear();
			list.length.should.equal(0);
			should.not.exist(list.head);
			done();
		});
	});
});
