var dnd = (function() {
	var myX = '';
	var myY = '';
	var artwork = '';

	var hoverBorderStyle = "2px dashed #999999";

	function resetZ() {
		var elements = document.querySelectorAll('img');
		for(var i = elements.length -1; i >=0; i--) {
			elements[i].style.zIndex = 5;
		};
	}

	//event handlers
	function dragStart(e) {
		artwork = e.target;
		//if e.offset is undefined, it is e.layerX, else it will be e.offsetX
		myX = e.offsetX === undefined ? e.layerX : e.offsetX;
		myY = e.offsetY === undefined ? e.layerY : e.offsetY;
		this.style.border = hoverBorderStyle;
		resetZ();
		artwork.style.zIndex = 10;
	}

	//Drag over handler
	function dragOver(e) {
		e.preventDefault();
	}

	function dragDrop(e) {
		e.preventDefault();
		artwork.style.left = e.pageX - myX + "px";
		artwork.style.top = e.pageY - myY + "px";
	}

	//Event Listeners
	document.querySelector('body').addEventListener('dragstart', dragStart, false);
	document.querySelector('body').addEventListener('dragover', dragOver, false);
	document.querySelector('body').addEventListener('drop', dragDrop, false);
})();