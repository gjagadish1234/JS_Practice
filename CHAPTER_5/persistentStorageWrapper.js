//Make a closure-based wrapper around localStorage to namespace your keys and allow get/set access


function createStorage(nameSpace) {
    let obj = {};
    function set(key, value){
        obj[nameSpace + key] = value;
    }
    function get(key){
        return obj[nameSpace + key];
    }
    return {set, get};
}

const userPrefs = createStorage("prefs");
userPrefs.set("theme", "dark");

console.log(userPrefs.get("theme"));