const map = new Map();
map.set("", "");
map.set("", "");
map.set("", "");
console.log(map);

// if the map contains the key, get it and print it
if (map.has("Key1")) {
    const a = map.get("Key1");
    console.log(`value for key "Key1" is: ${a}`);
}

