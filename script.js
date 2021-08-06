// Finding largest Number Form the array


const largestElement = (number) => {
    let largest = 0;
    for (let i = 0; i < number.length; i++) {
        let element = number[i];
        if (element > largest) {
            largest = element;
        }
    }
    return largest;
}

const ages = [12, 23, 23, 452, 53, 23];
const result = largestElement(ages);
console.log(result)