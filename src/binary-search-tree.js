const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	root() {
		return this.root;
	}

	add(data) {
		this.root = addValue(this.root, data);

		function addValue(node, value) {
			if (!node) {
				return new Node(value);
			}

			if (node.value === data) {
				return node;
			}

			if (data < node.value) {
				node.left = addValue(node.left, data);
			} else {
				node.right = addValue(node.right, data);
			}
			return node;
		}
	}

	has(data) {
		return search(this.root, data);

		function search(node, value) {
			if (!node) {
				return false;
			}

			if (node.value === value) {
				return true;
			}

			if (node.value < value) {
				return search(node.right, value);
			} else {
				return search(node.left, value);
			}
		}
	}

	find(/* data */) {
		throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(data) {
		this.root = removeData(this.root, data);

		function removeData(node, value) {
			if (!node) {
				return null;
			}

			if (value < node.value) {
				node.left = removeData(node.left, value);
			} else if (value > node.value) {
				node.right = removeData(node.right, value);
			} else {
				if (!node.left && !node.rigth) {
					return null;
				}

				if (!node.left) {
					node = node.right;
					return node;
				}

				if (!node.right) {
					node = node.left;
					return node;
				}

				let maxLeft = node.left;
				while (maxLeft.left) {
					maxLeft = maxLeft.left;
				}
				node.value = maxLeft.value;
				node.left = removeData(node.left, maxLeft.value);
				return node;
			}
		}
	}

	min() {
		if (!this.root) {
			return null;
		}

		let node = this.root;
		while (node.left) {
			node = node.left;
		}

		return node.value;
	}

	max() {
		if (!this.root) {
			return null;
		}

		let node = this.root;
		while (node.right) {
			node = node.right;
		}
		return node.value;
	}
}

const tree = new BinarySearchTree();

tree.add(1);

tree.add(2);
tree.add(3);

tree.add(4);

tree.add(5);

console.log(tree.min());


module.exports = {
  BinarySearchTree
};