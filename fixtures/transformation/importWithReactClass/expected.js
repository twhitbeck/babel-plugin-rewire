import { node } from './DomUtils.js';
import Card from './Card.js';

class WelcomePanel extends _get_Card() {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className='welcome-panel'>
				<Card content={_get_node().toString()} />
			</div>;
	}

	initPanel(el, content) {
		this.initEl = el;
		this.initContent = content;
	}
};

//export default WelcomePanel;
let _DefaultExportValue = { WelcomePanel: _get_WelcomePanel() };
export default _DefaultExportValue;

function _get_node() {
	return _RewiredData__ === undefined || _RewiredData__['node'] === undefined ? node : _RewiredData__['node'];
}

function _get_Card() {
	return _RewiredData__ === undefined || _RewiredData__['Card'] === undefined ? Card : _RewiredData__['Card'];
}

let typeOfOriginalExport = typeof _DefaultExportValue;

function addNonEnumerableProperty(name, value) {
	Object.defineProperty(_DefaultExportValue, name, {
		value: value,
		enumerable: false,
		configurable: true
	});
}

if ((typeOfOriginalExport === 'object' || typeOfOriginalExport === 'function') && Object.isExtensible(_DefaultExportValue)) {
	addNonEnumerableProperty('__get__', _GetDependency__);
	addNonEnumerableProperty('__GetDependency__', _GetDependency__);
	addNonEnumerableProperty('__Rewire__', _Rewire__);
	addNonEnumerableProperty('__set__', _Rewire__);
	addNonEnumerableProperty('__ResetDependency__', _ResetDependency__);
	addNonEnumerableProperty('__with__', _with__);
	addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);
}

function _get_WelcomePanel() {
	return _RewiredData__ === undefined || _RewiredData__['WelcomePanel'] === undefined ? WelcomePanel : _RewiredData__['WelcomePanel'];
}

let _RewiredData__ = {};
let _GETTERS__ = {
	'node': _get_node,
	'Card': _get_Card,
	'WelcomePanel': _get_WelcomePanel
};

function _GetDependency__(variableName) {
	return _GETTERS__[variableName]();
}

function _Rewire__(variableName, value) {
	return _RewiredData__[variableName] = value;
}

function _ResetDependency__(variableName) {
	delete _RewiredData__[variableName];
}

function _with__(object) {
	var rewiredVariableNames = Object.keys(object);
	var previousValues = {};

	function reset() {
		rewiredVariableNames.forEach(function (variableName) {
			_RewiredData__[variableName] = previousValues[variableName];
		});
	}

	return function (callback) {
		rewiredVariableNames.forEach(function (variableName) {
			previousValues[variableName] = _RewiredData__[variableName];
			_RewiredData__[variableName] = object[variableName];
		});
		let result = callback();

		if (!!result && typeof result.then == 'function') {
			result.then(reset).catch(reset);
		} else {
			reset();
		}

		return result;
	};
}

let _RewireAPI__ = {};

(function () {
	function addPropertyToAPIObject(name, value) {
		Object.defineProperty(_RewireAPI__, name, {
			value: value,
			enumerable: false,
			configurable: true
		});
	}

	addPropertyToAPIObject('__get__', _GetDependency__);
	addPropertyToAPIObject('__GetDependency__', _GetDependency__);
	addPropertyToAPIObject('__Rewire__', _Rewire__);
	addPropertyToAPIObject('__set__', _Rewire__);
	addPropertyToAPIObject('__ResetDependency__', _ResetDependency__);
	addPropertyToAPIObject('__with__', _with__);
})();

export { _GetDependency__ as __get__, _GetDependency__ as __GetDependency__, _Rewire__ as __Rewire__, _Rewire__ as __set__, _ResetDependency__ as __ResetDependency__, _RewireAPI__ as __RewireAPI__ };