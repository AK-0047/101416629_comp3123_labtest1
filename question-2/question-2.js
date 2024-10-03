const resolvedPromise = () => {
    var p1 = new Promise((resolve) => {
        setTimeout(() => {
            let success = {'message' : 'delayed success!'};
            resolve(success);
        }, 500);
    });
    return p1;
}

const rejectedPromise = () => {
    var p2 = new Promise((reject) => {
        setTimeout(() => {
            let err = {'error' : 'delayed exception!'};
            reject(err);
        }, 500);
    });
    return p2;
}

resolvedPromise().then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});

rejectedPromise().then((result) => {
    console.log(result);
}, (error) => {
    console.log(error);
});