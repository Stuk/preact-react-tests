const preact = require('preact-compat');

exports.renderIntoDocument = function renderIntoDocument(element) {
	const container = document.createElement('div');
	return preact.render(element, container);
};

const EVENTS = 'click mouseOver mouseOut'.split(' ');

exports.Simulate = EVENTS.reduce((memo, type) => {
	memo[type] = function (element, data) {
		const event = new Event(type);

		// STUART Can I use object.assign?
		Object.assign(event, data);

		element.dispatchEvent(event);
	};
	return memo;
}, {});

// FIXME
window.SVGElement = function () {};
