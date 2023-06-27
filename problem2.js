const names = ['ariful', 'islam', 'wasim', 'jasim', 'jasmin', 'salim']

const friends = (name) => {
    const newName = [];
    for (let i = 0; i < name.length; i++) {
        if (name[i].length % 2 != 0) {
            newName.push(name[i]);
        }
    }
    return newName;

}
const result = friends(names);

console.log(result);