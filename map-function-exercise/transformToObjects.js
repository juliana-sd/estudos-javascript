function transformToObjects(numbers) {
    return numbers.map(num => ({ val: num }));

}
console.log(transformToObjects([1, 2, 3, 4, 5]));
