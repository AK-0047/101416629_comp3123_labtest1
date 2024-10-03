function lowerCaseWords(mixedArray){
    var p1 = new Promise((resolve, reject) => {
        if(Array.isArray(mixedArray)) {
            var words = mixedArray.filter(function(item) {
                return typeof item === 'string'
            });
            var lowerCasedWords = [];
            for(var i = 0; i < words.length; i++) {
                lowerCasedWords.push(words[i].toLowerCase());
            }
            resolve(lowerCasedWords);
        } else {
            reject('Not an array');
        }
    });
    return p1;
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

lowerCaseWords(mixedArray)
    .then((result) => {
        console.log(result)
    }, (error) => {
        console.log(error)
    })    