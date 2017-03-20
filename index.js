var iterativeLog = function (array) {
    array.forEach((element, index) => {
        console.log(`${index}: ${element}`);
    });
};

var iterate = function(callback) {
    let example = ["dog", "fish", "cat"];
    example.forEach(callback);
    return example;
};

var doToArray = function(array, callback) {
    array.forEach(callback);
};
