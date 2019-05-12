/**
 * Swap (ES6)
 * @param {*} items
 * @param {*} firstIndex
 * @param {*} secondIndex
 */
function swap(items, firstIndex, secondIndex) {
	[items[firstIndex], items[secondIndex]] = [
		items[secondIndex],
		items[firstIndex]
	];
}


function partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)],
		i = left,
		j = right;

	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

var quickSort = function(items, left, right) {
	var index;
	if (items.length > 1) {
		left = typeof left != 'number' ? 0 : left;
		right = typeof right != 'number' ? items.length - 1 : right;
		index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
	}
	return items;
};

function test(arr) {
	console.log(1);
}
console.log(quickSort([1, 2, 4, 3, 5]));
console.log([1, 2, 4, 3, 5].sort());

export default test;
