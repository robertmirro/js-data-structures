;
(function(global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        global.LinkedList = factory();
    }
})(this, function factory() {
    'use strict';
    //console.clear();

    return LinkedList;

    function LinkedList(datum, addNodeLast) {
        var _head = null,
            _tail = null,
            _current = null,
            _length = 0,
            _typeOf = Function.call.bind(Object.prototype.toString),

            linkedList = Object.create(Object.prototype, {
                'size': {
                    'get': size,
                    'enumerable': true,
                    'configurable': false
                },
                'isEmpty': {
                    'get': isEmpty,
                    'enumerable': true,
                    'configurable': false
                },
                'empty': {
                    'value': empty,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'first': {
                    'value': first,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'last': {
                    'value': last,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'current': {
                    'value': current,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'next': {
                    'value': next,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'get': {
                    'value': get,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'getAt': {
                    'value': getAt,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'add': {
                    'value': addFirst,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'addLast': {
                    'value': addLast,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'addAt': {
                    'value': addAt,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'remove': {
                    'value': remove,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'removeAt': {
                    'value': removeAt,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'removeCurrent': {
                    'value': removeCurrent,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'toArray': {
                    'value': toArray,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                },
                'forEach': {
                    'value': forEachNode,
                    'enumerable': true,
                    'configurable': false,
                    'writable': false
                }
            });

        if (datum !== undefined) {
            add(datum, addNodeLast);
        }

        return linkedList;

        function size() {
            return _length;
        }

        function lastNodeIndex() {
            return size() - 1;
        }

        function isEmpty() {
            return size() === 0;
        }

        function empty() {
            _head = _tail = _current = null;
            _length = 0;
            return linkedList;
        }

        function first() {
            return (_current = _head);
        }

        function last() {
            return (_current = _tail);
        }

        function current() {
            return _current;
        }

        function next() {
            return (_current = _current ? _current.next() : null);
        }

        function get(value) {
            return (_current = getNodeByValue(value));
        }

        function getNodeByValue(value) {
            if (value != null) {
                return forEachNode(function(nodeValue, nodeIndex, node) {
                    return nodeValue === value;
                });
            }
            return null;
        }

        function getAt(index) {
            return (_current = getNodeByIndex(index));
        }

        function getNodeByIndex(index) {
            if (isNumeric(index) && index >= 0 && index <= lastNodeIndex()) {
                return forEachNode(function(nodeValue, nodeIndex, node) {
                    return nodeIndex === index;
                });
            }
            return null;
        }

        function addFirst(data) {
            return add(data, false);
        }

        function addLast(data) {
            return add(data, true);
        }

        function add(data, addNodeLast) {
            addNodeLast = Boolean(addNodeLast);
            Array.isArray(data) ? data.forEach(function(data) {
                addNode(data, addNodeLast);
            }) : addNode(data, addNodeLast);
            return linkedList;
        }

        function addNode(data, addNodeLast) {
            var node;

            if (node = newNode(data, (addNodeLast ? null : _head))) {
                if (addNodeLast) {
                    if (_tail) {
                        _tail.setNextNode(node);
                    }
                    _tail = node;
                    _head = _head || node;
                } else {
                    _head = node;
                    _tail = _tail || node;
                }
                _length++;
            }
        }

        function addAt(index, data) {
            var nodeBefore, nodeAfter, nodeToAdd;

            if (isNumeric(index)) {
                if (index <= 0 || isEmpty()) {
                    addFirst(data);
                } else if (index > lastNodeIndex()) {
                    addLast(data);
                } else {
                    nodeBefore = getNodeByIndex(index - 1);
                    nodeAfter = nodeBefore.next();
                    if (nodeToAdd = newNode(data, nodeAfter)) {
                        nodeBefore.setNextNode(nodeToAdd);
                        _length++;
                    }
                }
            }
            return linkedList;
        }

        function remove(value) {
            return removeNode(value, 'value');
        }

        function removeAt(index) {
            return removeNode(index, 'index');
        }

        function removeCurrent(node) {
            return removeNode(node, 'node');
        }

        function removeNode(removeBy, removeMethod) {
            var nodeBefore, nodeToDelete, nodeIndexToDelete;

            if ((removeMethod === 'value' && removeBy != null) || (removeMethod === 'index' && isNumeric(removeBy) && removeBy >= 0 && removeBy <= lastNodeIndex()) || (removeMethod === 'node' && removeBy != null)) {
                nodeToDelete = forEachNode(function(nodeValue, nodeIndex, node) {
                    return (removeMethod === 'value' && nodeValue === removeBy) || (removeMethod === 'index' && nodeIndex === removeBy) || (removeMethod === 'node' && node === removeBy) ? (nodeIndexToDelete = nodeIndex, true) : false;
                });

                if (nodeToDelete) {
                    if (nodeToDelete === _head) {
                        _head = nodeToDelete.next();
                        _tail = nodeToDelete === _tail ? null : _tail;
                    } else if (nodeBefore = getNodeByIndex(nodeIndexToDelete - 1)) {
                        nodeBefore.setNextNode(nodeToDelete.next());
                        _tail = nodeToDelete === _tail ? nodeBefore : _tail;
                    }
                    _current = null;
                    _length--;
                }
            }
            return linkedList;
        }

        function toArray() {
            var array = [];

            forEachNode(function(nodeValue, nodeIndex, node) {
                return array.push(nodeValue), false; // force iteration of all nodes
            });
            return array;
        }

        function forEachNode(cb) {
            var node = _head,
                index = 0;

            if (isFunction(cb)) {
                while (node != null) {
                    if (cb(node.value, index, node)) {
                        return node;
                    }
                    node = (index++, node.next());
                }
            }
            return null;
        }

        function newNode(value, nextNode) {
            var _nextNode = nextNode,
                node = null;

            if (value != null && nextNode !== undefined) {
                node = Object.create(Object.prototype, {
                    'value': {
                        'value': value,
                        'enumerable': true,
                        'configurable': false,
                        'writable': false
                    },
                    'next': {
                        'value': next,
                        'enumerable': true,
                        'configurable': false,
                        'writable': false
                    },
                    'setNextNode': {
                        'value': setNextNode,
                        'enumerable': false,
                        'configurable': false,
                        'writable': false
                    }
                });
            }

            return node;

            function next() {
                return (_current = _nextNode);
            }

            function setNextNode(nextNode) {
                _nextNode = nextNode;
            }
        }

        function isNumeric(num) {
            return !isNaN(num) && isFinite(num);
        }

        function isFunction(fn) {
            return _typeOf(fn) === _typeOf(function() {});
        }
    }
});
