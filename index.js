// Code your solution in this file!
const returnFirstTwoDrivers = function (arr1) {
    (function () {
        arr1 = arr1.slice(0, 2)
    })
        ();
    return arr1;
}

const returnLastTwoDrivers = function (arr2) {
    (function () {
        arr2 = arr2.slice(arr2.length - 2, arr2.length)
    })
        ();
    return arr2;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num1) {
    return function (num2) {
        return num1 * num2;
    }
}


const fareDoubler = function (fare) {
    let a = createFareMultiplier(fare)
    return a(2)
    // return createFareMultiplier(2)(fare)
}

const fareTripler = (fare) => {
    return createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = (array,f) => {
    if (f = returnFirstTwoDrivers) {
        return returnFirstTwoDrivers()
    }
     
}