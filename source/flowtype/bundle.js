(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _tcomb = __webpack_require__(1);

	var _tcomb2 = _interopRequireDefault(_tcomb);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Person(name) {
	    _assert(name, _tcomb2.default.String, 'name');

	    this.name = name;
	}

	module.exports = Person;

	function _assert(x, type, name) {
	    function message() {
	        return 'Invalid value ' + _tcomb2.default.stringify(x) + ' supplied to ' + name + ' (expected a ' + _tcomb2.default.getTypeName(type) + ')';
	    }

	    if (_tcomb2.default.isType(type)) {
	        if (!type.is(x)) {
	            type(x, [name + ': ' + _tcomb2.default.getTypeName(type)]);

	            _tcomb2.default.fail(message());
	        }

	        return type(x);
	    }

	    if (!(x instanceof type)) {
	        _tcomb2.default.fail(message());
	    }

	    return x;
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/*! @preserve
	 *
	 * tcomb.js - Type checking and DDD for JavaScript
	 *
	 * The MIT License (MIT)
	 *
	 * Copyright (c) 2014-2016 Giulio Canti
	 *
	 */

	// core
	var t = __webpack_require__(2);

	// types
	t.Any = __webpack_require__(8);
	t.Array = __webpack_require__(17);
	t.Boolean = __webpack_require__(18);
	t.Date = __webpack_require__(20);
	t.Error = __webpack_require__(21);
	t.Function = __webpack_require__(22);
	t.Nil = __webpack_require__(23);
	t.Number = __webpack_require__(24);
	t.Integer = __webpack_require__(26);
	t.IntegerT = t.Integer;
	t.Object = __webpack_require__(32);
	t.RegExp = __webpack_require__(33);
	t.String = __webpack_require__(34);
	t.Type = __webpack_require__(35);
	t.TypeT = t.Type;

	// short alias are deprecated
	t.Arr = t.Array;
	t.Bool = t.Boolean;
	t.Dat = t.Date;
	t.Err = t.Error;
	t.Func = t.Function;
	t.Num = t.Number;
	t.Obj = t.Object;
	t.Re = t.RegExp;
	t.Str = t.String;

	// combinators
	t.dict = __webpack_require__(36);
	t.declare = __webpack_require__(37);
	t.enums = __webpack_require__(40);
	t.irreducible = __webpack_require__(9);
	t.list = __webpack_require__(41);
	t.maybe = __webpack_require__(42);
	t.refinement = __webpack_require__(27);
	t.struct = __webpack_require__(44);
	t.tuple = __webpack_require__(50);
	t.union = __webpack_require__(51);
	t.func = __webpack_require__(52);
	t.intersection = __webpack_require__(53);
	t.subtype = t.refinement;
	t.inter = __webpack_require__(54); // IE8 alias
	t['interface'] = t.inter;

	// functions
	t.assert = t;
	t.update = __webpack_require__(56);
	t.mixin = __webpack_require__(38);
	t.isType = __webpack_require__(14);
	t.is = __webpack_require__(31);
	t.getTypeName = __webpack_require__(13);
	t.match = __webpack_require__(57);

	module.exports = t;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(3);
	var isNil = __webpack_require__(4);
	var fail = __webpack_require__(5);
	var stringify = __webpack_require__(6);

	function assert(guard, message) {
	  if (guard !== true) {
	    if (isFunction(message)) { // handle lazy messages
	      message = message();
	    }
	    else if (isNil(message)) { // use a default message
	      message = 'Assert failed (turn on "Pause on exceptions" in your Source panel)';
	    }
	    assert.fail(message);
	  }
	}

	assert.fail = fail;
	assert.stringify = stringify;

	module.exports = assert;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function isFunction(x) {
	  return typeof x === 'function';
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function isNil(x) {
	  return x === null || x === void 0;
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function fail(message) {
	  throw new TypeError('[tcomb] ' + message);
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var getFunctionName = __webpack_require__(7);

	function replacer(key, value) {
	  if (typeof value === 'function') {
	    return getFunctionName(value);
	  }
	  return value;
	}

	module.exports = function stringify(x) {
	  try { // handle "Converting circular structure to JSON" error
	    return JSON.stringify(x, replacer, 2);
	  }
	  catch (e) {
	    return String(x);
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function getFunctionName(f) {
	  return f.displayName || f.name || '<function' + f.length + '>';
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);

	module.exports = irreducible('Any', function () { return true; });


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isString = __webpack_require__(11);
	var isFunction = __webpack_require__(3);
	var forbidNewOperator = __webpack_require__(12);

	module.exports = function irreducible(name, predicate) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isString(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to irreducible(name, predicate) (expected a string)'; });
	    assert(isFunction(predicate), 'Invalid argument predicate ' + assert.stringify(predicate) + ' supplied to irreducible(name, predicate) (expected a function)');
	  }

	  function Irreducible(value, path) {

	    if (process.env.NODE_ENV !== 'production') {
	      forbidNewOperator(this, Irreducible);
	      path = path || [name];
	      assert(predicate(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }

	    return value;
	  }

	  Irreducible.meta = {
	    kind: 'irreducible',
	    name: name,
	    predicate: predicate,
	    identity: true
	  };

	  Irreducible.displayName = name;

	  Irreducible.is = predicate;

	  return Irreducible;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 10 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function isString(x) {
	  return typeof x === 'string';
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var assert = __webpack_require__(2);
	var getTypeName = __webpack_require__(13);

	module.exports = function forbidNewOperator(x, type) {
	  assert(!(x instanceof type), function () { return 'Cannot use the new operator to instantiate the type ' + getTypeName(type); });
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);
	var getFunctionName = __webpack_require__(7);

	module.exports = function getTypeName(ctor) {
	  if (isType(ctor)) {
	    return ctor.displayName;
	  }
	  return getFunctionName(ctor);
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(3);
	var isObject = __webpack_require__(15);

	module.exports = function isType(x) {
	  return isFunction(x) && isObject(x.meta);
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var isNil = __webpack_require__(4);
	var isArray = __webpack_require__(16);

	module.exports = function isObject(x) {
	  return !isNil(x) && typeof x === 'object' && !isArray(x);
	};

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function isArray(x) {
	  return Array.isArray ? Array.isArray(x) : x instanceof Array;
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isArray = __webpack_require__(16);

	module.exports = irreducible('Array', isArray);


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isBoolean = __webpack_require__(19);

	module.exports = irreducible('Boolean', isBoolean);


/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function isBoolean(x) {
	  return x === true || x === false;
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);

	module.exports = irreducible('Date', function (x) { return x instanceof Date; });


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);

	module.exports = irreducible('Error', function (x) { return x instanceof Error; });


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isFunction = __webpack_require__(3);

	module.exports = irreducible('Function', isFunction);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isNil = __webpack_require__(4);

	module.exports = irreducible('Nil', isNil);


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isNumber = __webpack_require__(25);

	module.exports = irreducible('Number', isNumber);


/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = function isNumber(x) {
	  return typeof x === 'number' && isFinite(x) && !isNaN(x);
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var refinement = __webpack_require__(27);
	var Number = __webpack_require__(24);

	module.exports = refinement(Number, function (x) { return x % 1 === 0; }, 'Integer');


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var forbidNewOperator = __webpack_require__(12);
	var isIdentity = __webpack_require__(29);
	var create = __webpack_require__(30);
	var is = __webpack_require__(31);
	var getTypeName = __webpack_require__(13);
	var getFunctionName = __webpack_require__(7);

	function getDefaultName(type, predicate) {
	  return '{' + getTypeName(type) + ' | ' + getFunctionName(predicate) + '}';
	}

	function refinement(type, predicate, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to refinement(type, predicate, [name]) combinator (expected a type)'; });
	    assert(isFunction(predicate), function () { return 'Invalid argument predicate supplied to refinement(type, predicate, [name]) combinator (expected a function)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to refinement(type, predicate, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(type, predicate);
	  var identity = isIdentity(type);

	  function Refinement(value, path) {

	    if (process.env.NODE_ENV !== 'production') {
	      if (identity) {
	        forbidNewOperator(this, Refinement);
	      }
	      path = path || [displayName];
	    }

	    var x = create(type, value, path);

	    if (process.env.NODE_ENV !== 'production') {
	      assert(predicate(x), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }

	    return x;
	  }

	  Refinement.meta = {
	    kind: 'subtype',
	    type: type,
	    predicate: predicate,
	    name: name,
	    identity: identity
	  };

	  Refinement.displayName = displayName;

	  Refinement.is = function (x) {
	    return is(x, type) && predicate(x);
	  };

	  Refinement.update = function (instance, patch) {
	    return Refinement(assert.update(instance, patch));
	  };

	  return Refinement;
	}

	refinement.getDefaultName = getDefaultName;
	module.exports = refinement;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var isNil = __webpack_require__(4);
	var isString = __webpack_require__(11);

	module.exports = function isTypeName(name) {
	  return isNil(name) || isString(name);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var Boolean = __webpack_require__(18);
	var isType = __webpack_require__(14);
	var getTypeName = __webpack_require__(13);

	// return true if the type constructor behaves like the identity function
	module.exports = function isIdentity(type) {
	  if (isType(type)) {
	    if (process.env.NODE_ENV !== 'production') {
	      assert(Boolean.is(type.meta.identity), function () { return 'Invalid meta identity ' + assert.stringify(type.meta.identity) + ' supplied to type ' + getTypeName(type); });
	    }
	    return type.meta.identity;
	  }
	  // for tcomb the other constructors, like ES6 classes, are identity-like
	  return true;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var isType = __webpack_require__(14);
	var getFunctionName = __webpack_require__(7);
	var assert = __webpack_require__(2);
	var stringify = __webpack_require__(6);

	// creates an instance of a type, handling the optional new operator
	module.exports = function create(type, value, path) {
	  if (isType(type)) {
	    return !type.meta.identity && typeof value === 'object' && value !== null ? new type(value, path): type(value, path);
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    // here type should be a class constructor and value some instance, just check membership and return the value
	    path = path || [getFunctionName(type)];
	    assert(value instanceof type, function () { return 'Invalid value ' + stringify(value) + ' supplied to ' + path.join('/'); });
	  }

	  return value;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	// returns true if x is an instance of type
	module.exports = function is(x, type) {
	  if (isType(type)) {
	    return type.is(x);
	  }
	  return x instanceof type; // type should be a class constructor
	};


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isObject = __webpack_require__(15);

	module.exports = irreducible('Object', isObject);


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);

	module.exports = irreducible('RegExp', function (x) { return x instanceof RegExp; });


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isString = __webpack_require__(11);

	module.exports = irreducible('String', isString);


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var irreducible = __webpack_require__(9);
	var isType = __webpack_require__(14);

	module.exports = irreducible('Type', isType);

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var getTypeName = __webpack_require__(13);
	var isIdentity = __webpack_require__(29);
	var isObject = __webpack_require__(15);
	var create = __webpack_require__(30);
	var is = __webpack_require__(31);

	function getDefaultName(domain, codomain) {
	  return '{[key: ' + getTypeName(domain) + ']: ' + getTypeName(codomain) + '}';
	}

	function dict(domain, codomain, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isFunction(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to dict(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to dict(domain, codomain, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(domain, codomain);
	  var domainNameCache = getTypeName(domain);
	  var codomainNameCache = getTypeName(codomain);
	  var identity = isIdentity(domain) && isIdentity(codomain);

	  function Dict(value, path) {

	    if (process.env.NODE_ENV === 'production') {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }

	    var idempotent = true; // will remain true if I can reutilise the input
	    var ret = {}; // make a temporary copy, will be discarded if idempotent remains true
	    for (var k in value) {
	      if (value.hasOwnProperty(k)) {
	        k = create(domain, k, ( process.env.NODE_ENV !== 'production' ? path.concat(domainNameCache) : null ));
	        var actual = value[k];
	        var instance = create(codomain, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + codomainNameCache) : null ));
	        idempotent = idempotent && ( actual === instance );
	        ret[k] = instance;
	      }
	    }

	    if (idempotent) { // implements idempotency
	      ret = value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      Object.freeze(ret);
	    }

	    return ret;
	  }

	  Dict.meta = {
	    kind: 'dict',
	    domain: domain,
	    codomain: codomain,
	    name: name,
	    identity: identity
	  };

	  Dict.displayName = displayName;

	  Dict.is = function (x) {
	    if (!isObject(x)) {
	      return false;
	    }
	    for (var k in x) {
	      if (x.hasOwnProperty(k)) {
	        if (!is(k, domain) || !is(x[k], codomain)) {
	          return false;
	        }
	      }
	    }
	    return true;
	  };

	  Dict.update = function (instance, patch) {
	    return Dict(assert.update(instance, patch));
	  };

	  return Dict;
	}

	dict.getDefaultName = getDefaultName;
	module.exports = dict;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isType = __webpack_require__(14);
	var isNil = __webpack_require__(4);
	var mixin = __webpack_require__(38);
	var getTypeName = __webpack_require__(13);
	var isUnion = __webpack_require__(39);

	// All the .declare-d types should be clearly different from each other thus they should have
	// different names when a name was not explicitly provided.
	var nextDeclareUniqueId = 1;

	module.exports = function declare(name) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + name + ' supplied to declare([name]) (expected a string)'; });
	  }

	  var type;

	  function Declare(value, path) {
	    if (process.env.NODE_ENV !== 'production') {
	      assert(!isNil(type), function () { return 'Type declared but not defined, don\'t forget to call .define on every declared type'; });
	      if (isUnion(type)) {
	        assert(type.dispatch === Declare.dispatch, function () { return 'Please define the custom ' + name + '.dispatch function before calling ' + name + '.define()'; });
	      }
	    }
	    return type(value, path);
	  }

	  Declare.define = function (spec) {
	    if (process.env.NODE_ENV !== 'production') {
	      assert(isType(spec), function () { return 'Invalid argument type ' + assert.stringify(spec) +  ' supplied to define(type) (expected a type)'; });
	      assert(isNil(type), function () { return 'Declare.define(type) can only be invoked once'; });
	      assert(isNil(spec.meta.name) && Object.keys(spec.prototype).length === 0, function () { return 'Invalid argument type ' + assert.stringify(spec) + ' supplied to define(type) (expected a fresh, unnamed type)'; });
	    }

	    if (isUnion(spec) && Declare.hasOwnProperty('dispatch')) {
	      spec.dispatch = Declare.dispatch;
	    }
	    type = spec;
	    mixin(Declare, type, true); // true because it overwrites Declare.displayName
	    if (name) {
	      type.displayName = Declare.displayName = name;
	      Declare.meta.name = name;
	    }
	    Declare.meta.identity = type.meta.identity;
	    Declare.prototype = type.prototype;
	    return Declare;
	  };

	  Declare.displayName = name || ( getTypeName(Declare) + "$" + nextDeclareUniqueId++ );
	  // in general I can't say if this type will be an identity, for safety setting to false
	  Declare.meta = { identity: false };
	  Declare.prototype = null;
	  return Declare;
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var isNil = __webpack_require__(4);
	var assert = __webpack_require__(2);

	// safe mixin, cannot override props unless specified
	module.exports = function mixin(target, source, overwrite) {
	  if (isNil(source)) { return target; }
	  for (var k in source) {
	    if (source.hasOwnProperty(k)) {
	      if (overwrite !== true) {
	        if (process.env.NODE_ENV !== 'production') {
	          assert(!target.hasOwnProperty(k) || target[k] === source[k], function () { return 'Invalid call to mixin(target, source, [overwrite]): cannot overwrite property "' + k + '" of target object'; });
	        }
	      }
	      target[k] = source[k];
	    }
	  }
	  return target;
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	module.exports = function isUnion(x) {
	  return isType(x) && ( x.meta.kind === 'union' );
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var forbidNewOperator = __webpack_require__(12);
	var isString = __webpack_require__(11);
	var isObject = __webpack_require__(15);

	function getDefaultName(map) {
	  return Object.keys(map).map(function (k) { return assert.stringify(k); }).join(' | ');
	}

	function enums(map, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isObject(map), function () { return 'Invalid argument map ' + assert.stringify(map) + ' supplied to enums(map, [name]) combinator (expected a dictionary of String -> String | Number)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to enums(map, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(map);

	  function Enums(value, path) {

	    if (process.env.NODE_ENV !== 'production') {
	      forbidNewOperator(this, Enums);
	      path = path || [displayName];
	      assert(Enums.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected one of ' + assert.stringify(Object.keys(map)) + ')'; });
	    }

	    return value;
	  }

	  Enums.meta = {
	    kind: 'enums',
	    map: map,
	    name: name,
	    identity: true
	  };

	  Enums.displayName = displayName;

	  Enums.is = function (x) {
	    return map.hasOwnProperty(x);
	  };

	  return Enums;
	}

	enums.of = function (keys, name) {
	  keys = isString(keys) ? keys.split(' ') : keys;
	  var value = {};
	  keys.forEach(function (k) {
	    value[k] = k;
	  });
	  return enums(value, name);
	};

	enums.getDefaultName = getDefaultName;
	module.exports = enums;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var getTypeName = __webpack_require__(13);
	var isIdentity = __webpack_require__(29);
	var create = __webpack_require__(30);
	var is = __webpack_require__(31);
	var isArray = __webpack_require__(16);

	function getDefaultName(type) {
	  return 'Array<' + getTypeName(type) + '>';
	}

	function list(type, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to list(type, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to list(type, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(type);
	  var typeNameCache = getTypeName(type);
	  var identity = isIdentity(type); // the list is identity iif type is identity

	  function List(value, path) {

	    if (process.env.NODE_ENV === 'production') {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(isArray(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of ' + typeNameCache + ')'; });
	    }

	    var idempotent = true; // will remain true if I can reutilise the input
	    var ret = []; // make a temporary copy, will be discarded if idempotent remains true
	    for (var i = 0, len = value.length; i < len; i++ ) {
	      var actual = value[i];
	      var instance = create(type, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + typeNameCache) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret.push(instance);
	    }

	    if (idempotent) { // implements idempotency
	      ret = value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      Object.freeze(ret);
	    }

	    return ret;
	  }

	  List.meta = {
	    kind: 'list',
	    type: type,
	    name: name,
	    identity: identity
	  };

	  List.displayName = displayName;

	  List.is = function (x) {
	    return isArray(x) && x.every(function (e) {
	      return is(e, type);
	    });
	  };

	  List.update = function (instance, patch) {
	    return List(assert.update(instance, patch));
	  };

	  return List;
	}

	list.getDefaultName = getDefaultName;
	module.exports = list;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var isMaybe = __webpack_require__(43);
	var isIdentity = __webpack_require__(29);
	var Any = __webpack_require__(8);
	var create = __webpack_require__(30);
	var Nil = __webpack_require__(23);
	var forbidNewOperator = __webpack_require__(12);
	var is = __webpack_require__(31);
	var getTypeName = __webpack_require__(13);

	function getDefaultName(type) {
	  return '?' + getTypeName(type);
	}

	function maybe(type, name) {

	  if (isMaybe(type) || type === Any || type === Nil) { // makes the combinator idempotent and handle Any, Nil
	    return type;
	  }

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(type), function () { return 'Invalid argument type ' + assert.stringify(type) + ' supplied to maybe(type, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to maybe(type, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(type);
	  var identity = isIdentity(type);

	  function Maybe(value, path) {
	    if (process.env.NODE_ENV !== 'production') {
	      if (identity) {
	        forbidNewOperator(this, Maybe);
	      }
	    }
	    return Nil.is(value) ? value : create(type, value, path);
	  }

	  Maybe.meta = {
	    kind: 'maybe',
	    type: type,
	    name: name,
	    identity: identity
	  };

	  Maybe.displayName = displayName;

	  Maybe.is = function (x) {
	    return Nil.is(x) || is(x, type);
	  };

	  return Maybe;
	}

	maybe.getDefaultName = getDefaultName;
	module.exports = maybe;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	module.exports = function isMaybe(x) {
	  return isType(x) && ( x.meta.kind === 'maybe' );
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var String = __webpack_require__(34);
	var Function = __webpack_require__(22);
	var isBoolean = __webpack_require__(19);
	var isObject = __webpack_require__(15);
	var isNil = __webpack_require__(4);
	var create = __webpack_require__(30);
	var getTypeName = __webpack_require__(13);
	var dict = __webpack_require__(36);
	var getDefaultInterfaceName = __webpack_require__(45);
	var extend = __webpack_require__(46);

	function getDefaultName(props) {
	  return 'Struct' + getDefaultInterfaceName(props);
	}

	function extendStruct(mixins, name) {
	  return extend(struct, mixins, name);
	}

	function getOptions(options) {
	  if (!isObject(options)) {
	    options = isNil(options) ? {} : { name: options };
	  }
	  if (!options.hasOwnProperty('strict')) {
	    options.strict = struct.strict;
	  }
	  if (!options.hasOwnProperty('defaultProps')) {
	    options.defaultProps = {};
	  }
	  return options;
	}

	function struct(props, options) {

	  options = getOptions(options);
	  var name = options.name;
	  var strict = options.strict;
	  var defaultProps = options.defaultProps;

	  if (process.env.NODE_ENV !== 'production') {
	    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to struct(props, [options]) combinator (expected a dictionary String -> Type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to struct(props, [options]) combinator (expected a string)'; });
	    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
	    assert(isObject(defaultProps), function () { return 'Invalid argument defaultProps ' + assert.stringify(defaultProps) + ' supplied to struct(props, [options]) combinator (expected an object)'; });
	  }

	  var displayName = name || getDefaultName(props);

	  function Struct(value, path) {

	    if (Struct.is(value)) { // implements idempotency
	      return value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(isObject(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an object)'; });
	      // strictness
	      if (strict) {
	        for (k in value) {
	          if (value.hasOwnProperty(k)) {
	            assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
	          }
	        }
	      }
	    }

	    if (!(this instanceof Struct)) { // `new` is optional
	      return new Struct(value, path);
	    }

	    for (var k in props) {
	      if (props.hasOwnProperty(k)) {
	        var expected = props[k];
	        var actual = value[k];
	        // apply defaults
	        if (actual === undefined) {
	          actual = defaultProps[k];
	        }
	        this[k] = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(k + ': ' + getTypeName(expected)) : null ));
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      Object.freeze(this);
	    }

	  }

	  Struct.meta = {
	    kind: 'struct',
	    props: props,
	    name: name,
	    identity: false,
	    strict: strict,
	    defaultProps: defaultProps
	  };

	  Struct.displayName = displayName;

	  Struct.is = function (x) {
	    return x instanceof Struct;
	  };

	  Struct.update = function (instance, patch) {
	    return new Struct(assert.update(instance, patch));
	  };

	  Struct.extend = function (xs, name) {
	    return extendStruct([Struct].concat(xs), name);
	  };

	  return Struct;
	}

	struct.strict = false;
	struct.getOptions = getOptions;
	struct.getDefaultName = getDefaultName;
	struct.extend = extendStruct;
	module.exports = struct;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var getTypeName = __webpack_require__(13);

	function getDefaultInterfaceName(props) {
	  return '{' + Object.keys(props).map(function (prop) {
	    return prop + ': ' + getTypeName(props[prop]);
	  }).join(', ') + '}';
	}

	module.exports = getDefaultInterfaceName;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isFunction = __webpack_require__(3);
	var isArray = __webpack_require__(16);
	var mixin = __webpack_require__(38);
	var isStruct = __webpack_require__(47);
	var isInterface = __webpack_require__(48);
	var isObject = __webpack_require__(15);
	var refinement = __webpack_require__(27);
	var decompose = __webpack_require__(49);

	function compose(predicates, unrefinedType) {
	  return predicates.reduce(function (type, predicate) {
	    return refinement(type, predicate);
	  }, unrefinedType);
	}

	function getProps(type) {
	  return isObject(type) ? type : type.meta.props;
	}

	function getDefaultProps(type) {
	  return isObject(type) ? null : type.meta.defaultProps;
	}

	function pushAll(arr, elements) {
	  Array.prototype.push.apply(arr, elements);
	}

	function extend(combinator, mixins, options) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(combinator), function () { return 'Invalid argument combinator supplied to extend(combinator, mixins, options), expected a function'; });
	    assert(isArray(mixins), function () { return 'Invalid argument mixins supplied to extend(combinator, mixins, options), expected an array'; });
	  }
	  var props = {};
	  var prototype = {};
	  var predicates = [];
	  var defaultProps = {};
	  mixins.forEach(function (x, i) {
	    var decomposition = decompose(x);
	    var unrefinedType = decomposition.unrefinedType;
	    if (process.env.NODE_ENV !== 'production') {
	      assert(isObject(unrefinedType) || isStruct(unrefinedType) || isInterface(unrefinedType), function () { return 'Invalid argument mixins[' + i + '] supplied to extend(combinator, mixins, options), expected an object, struct, interface or a refinement (of struct or interface)'; });
	    }
	    pushAll(predicates, decomposition.predicates);
	    mixin(props, getProps(unrefinedType));
	    mixin(prototype, unrefinedType.prototype);
	    mixin(defaultProps, getDefaultProps(unrefinedType), true);
	  });
	  options = combinator.getOptions(options);
	  options.defaultProps = mixin(defaultProps, options.defaultProps, true);
	  var result = compose(predicates, combinator(props, options));
	  mixin(result.prototype, prototype);
	  return result;
	}

	module.exports = extend;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	module.exports = function isStruct(x) {
	  return isType(x) && ( x.meta.kind === 'struct' );
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	module.exports = function isInterface(x) {
	  return isType(x) && ( x.meta.kind === 'interface' );
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isType = __webpack_require__(14);

	function isRefinement(type) {
	  return isType(type) && type.meta.kind === 'subtype';
	}

	function getPredicates(type) {
	  return isRefinement(type) ?
	    [type.meta.predicate].concat(getPredicates(type.meta.type)) :
	    [];
	}

	function getUnrefinedType(type) {
	  return isRefinement(type) ?
	    getUnrefinedType(type.meta.type) :
	    type;
	}

	function decompose(type) {
	  return {
	    predicates: getPredicates(type),
	    unrefinedType: getUnrefinedType(type)
	  };
	}

	module.exports = decompose;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var getTypeName = __webpack_require__(13);
	var isIdentity = __webpack_require__(29);
	var isArray = __webpack_require__(16);
	var create = __webpack_require__(30);
	var is = __webpack_require__(31);

	function getDefaultName(types) {
	  return '[' + types.map(getTypeName).join(', ') + ']';
	}

	function tuple(types, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(types) && types.every(isFunction), function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to tuple(types, [name]) combinator (expected an array of types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to tuple(types, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);

	  function Tuple(value, path) {

	    if (process.env.NODE_ENV === 'production') {
	      if (identity) {
	        return value;
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(isArray(value) && value.length === types.length, function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (expected an array of length ' + types.length + ')'; });
	    }

	    var idempotent = true;
	    var ret = [];
	    for (var i = 0, len = types.length; i < len; i++) {
	      var expected = types[i];
	      var actual = value[i];
	      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(i + ': ' + getTypeName(expected)) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret.push(instance);
	    }

	    if (idempotent) { // implements idempotency
	      ret = value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      Object.freeze(ret);
	    }

	    return ret;
	  }

	  Tuple.meta = {
	    kind: 'tuple',
	    types: types,
	    name: name,
	    identity: identity
	  };

	  Tuple.displayName = displayName;

	  Tuple.is = function (x) {
	    return isArray(x) &&
	      x.length === types.length &&
	      types.every(function (type, i) {
	        return is(x[i], type);
	      });
	  };

	  Tuple.update = function (instance, patch) {
	    return Tuple(assert.update(instance, patch));
	  };

	  return Tuple;
	}

	tuple.getDefaultName = getDefaultName;
	module.exports = tuple;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var getTypeName = __webpack_require__(13);
	var isIdentity = __webpack_require__(29);
	var isArray = __webpack_require__(16);
	var create = __webpack_require__(30);
	var is = __webpack_require__(31);
	var forbidNewOperator = __webpack_require__(12);
	var isUnion = __webpack_require__(39);
	var isNil = __webpack_require__(4);

	function getDefaultName(types) {
	  return types.map(getTypeName).join(' | ');
	}

	function union(types, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to union(types, [name]) combinator (expected an array of at least 2 types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to union(types, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);

	  function Union(value, path) {

	    if (process.env.NODE_ENV === 'production') {
	      if (identity) {
	        return value;
	      }
	    }

	    var type = Union.dispatch(value);
	    if (!type && Union.is(value)) {
	      return value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      if (identity) {
	        forbidNewOperator(this, Union);
	      }
	      path = path || [displayName];
	      assert(isFunction(type), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/') + ' (no constructor returned by dispatch)'; });
	      path[path.length - 1] += '(' + getTypeName(type) + ')';
	    }

	    return create(type, value, path);
	  }

	  Union.meta = {
	    kind: 'union',
	    types: types,
	    name: name,
	    identity: identity
	  };

	  Union.displayName = displayName;

	  Union.is = function (x) {
	    return types.some(function (type) {
	      return is(x, type);
	    });
	  };

	  Union.dispatch = function (x) { // default dispatch implementation
	    for (var i = 0, len = types.length; i < len; i++ ) {
	      var type = types[i];
	      if (isUnion(type)) { // handle union of unions
	        var t = type.dispatch(x);
	        if (!isNil(t)) {
	          return t;
	        }
	      }
	      else if (is(x, type)) {
	        return type;
	      }
	    }
	  };

	  Union.update = function (instance, patch) {
	    return Union(assert.update(instance, patch));
	  };

	  return Union;
	}

	union.getDefaultName = getDefaultName;
	module.exports = union;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var FunctionType = __webpack_require__(22);
	var isArray = __webpack_require__(16);
	var list = __webpack_require__(41);
	var isObject = __webpack_require__(15);
	var create = __webpack_require__(30);
	var isNil = __webpack_require__(4);
	var isBoolean = __webpack_require__(19);
	var tuple = __webpack_require__(50);
	var getFunctionName = __webpack_require__(7);
	var getTypeName = __webpack_require__(13);
	var isType = __webpack_require__(14);

	function getDefaultName(domain, codomain) {
	  return '(' + domain.map(getTypeName).join(', ') + ') => ' + getTypeName(codomain);
	}

	function isInstrumented(f) {
	  return FunctionType.is(f) && isObject(f.instrumentation);
	}

	function getOptionalArgumentsIndex(types) {
	  var end = types.length;
	  var areAllMaybes = false;
	  for (var i = end - 1; i >= 0; i--) {
	    var type = types[i];
	    if (!isType(type) || type.meta.kind !== 'maybe') {
	      return (i + 1);
	    } else {
	      areAllMaybes = true;
	    }
	  }
	  return areAllMaybes ? 0 : end;
	}

	function func(domain, codomain, name) {

	  domain = isArray(domain) ? domain : [domain]; // handle handy syntax for unary functions

	  if (process.env.NODE_ENV !== 'production') {
	    assert(list(FunctionType).is(domain), function () { return 'Invalid argument domain ' + assert.stringify(domain) + ' supplied to func(domain, codomain, [name]) combinator (expected an array of types)'; });
	    assert(FunctionType.is(codomain), function () { return 'Invalid argument codomain ' + assert.stringify(codomain) + ' supplied to func(domain, codomain, [name]) combinator (expected a type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to func(domain, codomain, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(domain, codomain);
	  var domainLength = domain.length;
	  var optionalArgumentsIndex = getOptionalArgumentsIndex(domain);

	  function FuncType(value, path) {

	    if (!isInstrumented(value)) { // automatically instrument the function
	      return FuncType.of(value);
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(FuncType.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }

	    return value;
	  }

	  FuncType.meta = {
	    kind: 'func',
	    domain: domain,
	    codomain: codomain,
	    name: name,
	    identity: true
	  };

	  FuncType.displayName = displayName;

	  FuncType.is = function (x) {
	    return isInstrumented(x) &&
	      x.instrumentation.domain.length === domainLength &&
	      x.instrumentation.domain.every(function (type, i) {
	        return type === domain[i];
	      }) &&
	      x.instrumentation.codomain === codomain;
	  };

	  FuncType.of = function (f, curried) {

	    if (process.env.NODE_ENV !== 'production') {
	      assert(FunctionType.is(f), function () { return 'Invalid argument f supplied to func.of ' + displayName + ' (expected a function)'; });
	      assert(isNil(curried) || isBoolean(curried), function () { return 'Invalid argument curried ' + assert.stringify(curried) + ' supplied to func.of ' + displayName + ' (expected a boolean)'; });
	    }

	    if (FuncType.is(f)) { // makes FuncType.of idempotent
	      return f;
	    }

	    function fn() {
	      var args = Array.prototype.slice.call(arguments);
	      var argsLength = args.length;

	      if (process.env.NODE_ENV !== 'production') {
	        // type-check arguments
	        var tupleLength = curried ? argsLength : Math.max(argsLength, optionalArgumentsIndex);
	        tuple(domain.slice(0, tupleLength), 'arguments of function ' + displayName)(args);
	      }

	      if (curried && argsLength < domainLength) {
	        if (process.env.NODE_ENV !== 'production') {
	          assert(argsLength > 0, 'Invalid arguments.length = 0 for curried function ' + displayName);
	        }
	        var g = Function.prototype.bind.apply(f, [this].concat(args));
	        var newDomain = func(domain.slice(argsLength), codomain);
	        return newDomain.of(g, true);
	      }
	      else {
	        return create(codomain, f.apply(this, args));
	      }
	    }

	    fn.instrumentation = {
	      domain: domain,
	      codomain: codomain,
	      f: f
	    };

	    fn.displayName = getFunctionName(f);

	    return fn;

	  };

	  return FuncType;

	}

	func.getDefaultName = getDefaultName;
	func.getOptionalArgumentsIndex = getOptionalArgumentsIndex;
	module.exports = func;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var isFunction = __webpack_require__(3);
	var isArray = __webpack_require__(16);
	var forbidNewOperator = __webpack_require__(29);
	var is = __webpack_require__(31);
	var getTypeName = __webpack_require__(13);
	var isIdentity = __webpack_require__(29);

	function getDefaultName(types) {
	  return types.map(getTypeName).join(' & ');
	}

	function intersection(types, name) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(types) && types.every(isFunction) && types.length >= 2, function () { return 'Invalid argument types ' + assert.stringify(types) + ' supplied to intersection(types, [name]) combinator (expected an array of at least 2 types)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to intersection(types, [name]) combinator (expected a string)'; });
	  }

	  var displayName = name || getDefaultName(types);
	  var identity = types.every(isIdentity);

	  function Intersection(value, path) {

	    if (process.env.NODE_ENV !== 'production') {
	      if (identity) {
	        forbidNewOperator(this, Intersection);
	      }
	      path = path || [displayName];
	      assert(Intersection.is(value), function () { return 'Invalid value ' + assert.stringify(value) + ' supplied to ' + path.join('/'); });
	    }

	    return value;
	  }

	  Intersection.meta = {
	    kind: 'intersection',
	    types: types,
	    name: name,
	    identity: identity
	  };

	  Intersection.displayName = displayName;

	  Intersection.is = function (x) {
	    return types.every(function (type) {
	      return is(x, type);
	    });
	  };

	  Intersection.update = function (instance, patch) {
	    return Intersection(assert.update(instance, patch));
	  };

	  return Intersection;
	}

	intersection.getDefaultName = getDefaultName;
	module.exports = intersection;


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isTypeName = __webpack_require__(28);
	var String = __webpack_require__(34);
	var Function = __webpack_require__(22);
	var isBoolean = __webpack_require__(19);
	var isObject = __webpack_require__(15);
	var isNil = __webpack_require__(4);
	var create = __webpack_require__(30);
	var getTypeName = __webpack_require__(13);
	var dict = __webpack_require__(36);
	var getDefaultInterfaceName = __webpack_require__(45);
	var isIdentity = __webpack_require__(29);
	var is = __webpack_require__(31);
	var extend = __webpack_require__(46);
	var assign = __webpack_require__(55);

	function extendInterface(mixins, name) {
	  return extend(inter, mixins, name);
	}

	function getOptions(options) {
	  if (!isObject(options)) {
	    options = isNil(options) ? {} : { name: options };
	  }
	  if (!options.hasOwnProperty('strict')) {
	    options.strict = inter.strict;
	  }
	  return options;
	}

	function inter(props, options) {

	  options = getOptions(options);
	  var name = options.name;
	  var strict = options.strict;

	  if (process.env.NODE_ENV !== 'production') {
	    assert(dict(String, Function).is(props), function () { return 'Invalid argument props ' + assert.stringify(props) + ' supplied to interface(props, [options]) combinator (expected a dictionary String -> Type)'; });
	    assert(isTypeName(name), function () { return 'Invalid argument name ' + assert.stringify(name) + ' supplied to interface(props, [options]) combinator (expected a string)'; });
	    assert(isBoolean(strict), function () { return 'Invalid argument strict ' + assert.stringify(strict) + ' supplied to struct(props, [options]) combinator (expected a boolean)'; });
	  }

	  var displayName = name || getDefaultInterfaceName(props);
	  var identity = Object.keys(props).map(function (prop) { return props[prop]; }).every(isIdentity);

	  function Interface(value, path) {

	    if (process.env.NODE_ENV === 'production') {
	      if (identity) {
	        return value; // just trust the input if elements must not be hydrated
	      }
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      path = path || [displayName];
	      assert(!isNil(value), function () { return 'Invalid value ' + value + ' supplied to ' + path.join('/'); });
	      // strictness
	      if (strict) {
	        for (var k in value) {
	          assert(props.hasOwnProperty(k), function () { return 'Invalid additional prop "' + k + '" supplied to ' + path.join('/'); });
	        }
	      }
	    }

	    var idempotent = true;
	    var ret = identity ? {} : assign({}, value);
	    for (var prop in props) {
	      var expected = props[prop];
	      var actual = value[prop];
	      var instance = create(expected, actual, ( process.env.NODE_ENV !== 'production' ? path.concat(prop + ': ' + getTypeName(expected)) : null ));
	      idempotent = idempotent && ( actual === instance );
	      ret[prop] = instance;
	    }

	    if (idempotent) { // implements idempotency
	      ret = value;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      Object.freeze(ret);
	    }

	    return ret;

	  }

	  Interface.meta = {
	    kind: 'interface',
	    props: props,
	    name: name,
	    identity: identity,
	    strict: strict
	  };

	  Interface.displayName = displayName;

	  Interface.is = function (x) {
	    if (isNil(x)) {
	      return false;
	    }
	    if (strict) {
	      for (var k in x) {
	        if (!props.hasOwnProperty(k)) {
	          return false;
	        }
	      }
	    }
	    for (var prop in props) {
	      if (!is(x[prop], props[prop])) {
	        return false;
	      }
	    }
	    return true;
	  };

	  Interface.update = function (instance, patch) {
	    return Interface(assert.update(instance, patch));
	  };

	  Interface.extend = function (xs, name) {
	    return extendInterface([Interface].concat(xs), name);
	  };

	  return Interface;
	}

	inter.strict = false;
	inter.getOptions = getOptions;
	inter.getDefaultName = getDefaultInterfaceName;
	inter.extend = extendInterface;
	module.exports = inter;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 55 */
/***/ function(module, exports) {

	function assign(x, y) {
	  for (var k in y) {
	    x[k] = y[k];
	  }
	  return x;
	}

	module.exports = assign;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isObject = __webpack_require__(15);
	var isFunction = __webpack_require__(3);
	var isArray = __webpack_require__(16);
	var isNumber = __webpack_require__(25);
	var assign = __webpack_require__(55);

	function getShallowCopy(x) {
	  if (isObject(x)) {
	    if (x instanceof Date || x instanceof RegExp) {
	      return x;
	    }
	    return assign({}, x);
	  }
	  if (isArray(x)) {
	    return x.concat();
	  }
	  return x;
	}

	function isCommand(k) {
	  return update.commands.hasOwnProperty(k);
	}

	function getCommand(k) {
	  return update.commands[k];
	}

	function update(instance, patch) {

	  if (process.env.NODE_ENV !== 'production') {
	    assert(isObject(patch), function () { return 'Invalid argument patch ' + assert.stringify(patch) + ' supplied to function update(instance, patch): expected an object containing commands'; });
	  }

	  var value = instance;
	  var isChanged = false;
	  var newValue;
	  for (var k in patch) {
	    if (patch.hasOwnProperty(k)) {
	      if (isCommand(k)) {
	        newValue = getCommand(k)(patch[k], value);
	        if (newValue !== instance) {
	          isChanged = true;
	          value = newValue;
	        } else {
	          value = instance;
	        }
	      }
	      else {
	        if (value === instance) {
	          value = getShallowCopy(instance);
	        }
	        newValue = update(value[k], patch[k]);
	        isChanged = isChanged || ( newValue !== value[k] );
	        value[k] = newValue;
	      }
	    }
	  }
	  return isChanged ? value : instance;
	}

	// built-in commands

	function $apply(f, value) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isFunction(f), 'Invalid argument f supplied to immutability helper { $apply: f } (expected a function)');
	  }
	  return f(value);
	}

	function $push(elements, arr) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper { $push: elements } (expected an array)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $push (expected an array)');
	  }
	  if (elements.length > 0) {
	    return arr.concat(elements);
	  }
	  return arr;
	}

	function $remove(keys, obj) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(keys), 'Invalid argument keys supplied to immutability helper { $remove: keys } (expected an array)');
	    assert(isObject(obj), 'Invalid value supplied to immutability helper $remove (expected an object)');
	  }
	  if (keys.length > 0) {
	    obj = getShallowCopy(obj);
	    for (var i = 0, len = keys.length; i < len; i++ ) {
	      delete obj[keys[i]];
	    }
	  }
	  return obj;
	}

	function $set(value) {
	  return value;
	}

	function $splice(splices, arr) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(splices) && splices.every(isArray), 'Invalid argument splices supplied to immutability helper { $splice: splices } (expected an array of arrays)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $splice (expected an array)');
	  }
	  if (splices.length > 0) {
	    arr = getShallowCopy(arr);
	    return splices.reduce(function (acc, splice) {
	      acc.splice.apply(acc, splice);
	      return acc;
	    }, arr);
	  }
	  return arr;
	}

	function $swap(config, arr) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isObject(config), 'Invalid argument config supplied to immutability helper { $swap: config } (expected an object)');
	    assert(isNumber(config.from), 'Invalid argument config.from supplied to immutability helper { $swap: config } (expected a number)');
	    assert(isNumber(config.to), 'Invalid argument config.to supplied to immutability helper { $swap: config } (expected a number)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $swap (expected an array)');
	  }
	  if (config.from !== config.to) {
	    arr = getShallowCopy(arr);
	    var element = arr[config.to];
	    arr[config.to] = arr[config.from];
	    arr[config.from] = element;
	  }
	  return arr;
	}

	function $unshift(elements, arr) {
	  if (process.env.NODE_ENV !== 'production') {
	    assert(isArray(elements), 'Invalid argument elements supplied to immutability helper {$unshift: elements} (expected an array)');
	    assert(isArray(arr), 'Invalid value supplied to immutability helper $unshift (expected an array)');
	  }
	  if (elements.length > 0) {
	    return elements.concat(arr);
	  }
	  return arr;
	}

	function $merge(whatToMerge, value) {
	  var isChanged = false;
	  var result = getShallowCopy(value);
	  for (var k in whatToMerge) {
	    if (whatToMerge.hasOwnProperty(k)) {
	      result[k] = whatToMerge[k];
	      isChanged = isChanged || ( result[k] !== value[k] );
	    }
	  }
	  return isChanged ? result : value;
	}

	update.commands = {
	  $apply: $apply,
	  $push: $push,
	  $remove: $remove,
	  $set: $set,
	  $splice: $splice,
	  $swap: $swap,
	  $unshift: $unshift,
	  $merge: $merge
	};

	module.exports = update;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {var assert = __webpack_require__(2);
	var isFunction = __webpack_require__(3);
	var isType = __webpack_require__(14);
	var Any = __webpack_require__(8);

	module.exports = function match(x) {
	  var type, guard, f, count;
	  for (var i = 1, len = arguments.length; i < len; ) {
	    type = arguments[i];
	    guard = arguments[i + 1];
	    f = arguments[i + 2];

	    if (isFunction(f) && !isType(f)) {
	      i = i + 3;
	    }
	    else {
	      f = guard;
	      guard = Any.is;
	      i = i + 2;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      count = (count || 0) + 1;
	      assert(isType(type), function () { return 'Invalid type in clause #' + count; });
	      assert(isFunction(guard), function () { return 'Invalid guard in clause #' + count; });
	      assert(isFunction(f), function () { return 'Invalid block in clause #' + count; });
	    }

	    if (type.is(x) && guard(x)) {
	      return f(x);
	    }
	  }
	  assert.fail('Match error');
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }
/******/ ])
});
;