
function Queue(items, fifo) {
	this.fifo = fifo == null ? true : fifo;
	this.items = items || [];
	this.size = this.items.length;

	this.enqueue = function(item) {
		this.items.push(item);
		return item;
	};

	this.dequeue = function() {
		var fn = this.fifo ? 'shift' : 'pop';
		return this.items[fn]();
	};

	this.next = function() {
		if (this.items.length < 1) return null;
		else 
			if (this.fifo) return this.items[0];
			else return this.items[this.items.length - 1];
	};

	this.print = function() {
		if (this.fifo) {
			console.log('First - ' + this.items.join(', ') + ' - Last');
		} else {
			console.log('Last - ' + this.items.join(', ') + ' - First');
		}
	};

	this.max = function() {
		return applyMath.bind(this)('max');
	};

	this.min = function() {
		return applyMath.bind(this)('min');
	};

	function applyMath(fnName) {
		return Math[fnName].apply(null, this.items);
	}
}