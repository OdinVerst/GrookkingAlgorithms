let processed = {};

const findLowestCost = costs => {
	let lowestCost = Infinity;
	let lowestCostNode;
	for (let node in costs) {
		let cost = costs[node];
		if (cost < lowestCost && !processed[node]) {
			lowestCost = cost;
			lowestCostNode = node;
		}
	}
	return lowestCostNode;
};

const Dijkstra = () => {
	let graph = {
		a: {
			fin: 1
		},
		b: {
			a: 3,
			fin: 5
		},
		fin: {}
	};
	let costs = {
		a: 6,
		b: 2,
		fin: Infinity
	};

	let parents = {
		a: 'start',
		b: 'start',
		fin: null
	};

	let node = findLowestCost(costs);
	while (node) {
		let cost = costs[node];
		let neghbors = graph[node];
		for (let n in Object.keys(neghbors)) {
			let newCost = cost + neghbors[n];
			if (costs[n] > newCost) {
				costs[n] = newCost;
				parents[n] = node;
			}
		}
		processed[node] = true;
		node = findLowestCost(costs);
	}
	console.log(node);
};

export default Dijkstra;
