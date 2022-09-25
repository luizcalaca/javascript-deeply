const map = new Map()
map.set(1, 'maça')
map.set(5, 'pêra')

map.forEach((_value, key) => {
    console.log(map.get(key))
})

const keys = Array.from(map.keys());
const values = Array.from(map.values());