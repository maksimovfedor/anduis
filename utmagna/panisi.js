function initScale(spec, scope) {
    // Assume `spec` or `scope` contains the `cells` object and a key
    const cells = spec.cells;
    const key = scope.key;

    // Accessing the tuple property
    let t = cells[key].tuple;
    
    // You can now use `t` within your function logic
    console.log(t);
}

// Example usage
const spec = {
    cells: {
        cell1: { tuple: [1, 2, 3] },
        cell2: { tuple: [4, 5, 6] },
        cell3: { tuple: [7, 8, 9] }
    }
};

const scope = {
    key: 'cell2'
};

initScale(spec, scope); // Output: [4, 5, 6]
