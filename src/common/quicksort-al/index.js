/**
 * Swap (ES6)
 * @param {Array} items
 * @param {Number} firstIndex
 * @param {Number} secondIndex
 */
function swap(items, firstIndex, secondIndex) {
	[items[firstIndex], items[secondIndex]] = [items[secondIndex], items[firstIndex]];
}

function partition(items, left, right) {
	let pivot = items[Math.floor((right + left) / 2)];
	while (left <= right) {
		while (items[left] < pivot) {
			left++;
		}
		while (items[right] > pivot) {
			right--;
		}
		if (left <= right) {
			swap(items, left, right);
			left++;
			right--;
		}
	}
	return left;
}

function quickSort(items, left, right) {
	if (items.length > 1) {
		let index;
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
}

export default quickSort;
