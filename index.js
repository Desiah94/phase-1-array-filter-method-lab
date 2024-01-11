function findMatching(arrayOfDrivers, name) {
    const matchingRecords = arrayOfDrivers.filter((element) => element.toLowerCase() === name.toLowerCase());
    return matchingRecords; 
}
function fuzzyMatch(arrayOfDrivers, name) {
    const matchingDrivers = arrayOfDrivers.filter((element) => name[0] === element [0])
    return matchingDrivers;
}
function matchName(arrayOfDriverObjects, string) {
    const newArray = arrayOfDriverObjects.filter((element) => element.name === string)
    return newArray
}