var iterativeLog = function (array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
};

var iterate = function(callback) {
    let array = ["dog", "fish", "cat"];
    array.forEach(callback);
    return array;
};

var doToArray = function(array, callback) {
    array.forEach(callback);
};
