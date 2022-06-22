// Task 1

const obj = {
  value: '1',
  getSecret: function () {
    return this.value;
  },
  setSecret: function (secret) {
    return (this.value = secret);
  },
};

console.log(obj.getSecret());
console.log(obj.setSecret(5));
console.log(obj.getSecret());

// Task 2

const array = [7, 6, 15, 8];

function arrSort(arr) {
  return arr
    .map((x) => x.toString(2).split('').reverse().join(''))
    .sort((a, b) => a - b)
    .map((x) => x.split('').reverse().join(''))
    .map((x) => parseInt(x, 2));
}

console.log(arrSort(array));

// Task 3

const languages1 = { Java: 10, Ruby: 80, Python: 65 };
const languages2 = { Hindi: 60, Dutch: 93, Greek: 71 };
const languages3 = { 'C++': 50, ASM: 10, Haskell: 20 };

function myLanguages(results) {
  let arr = Object.entries(results)
    .filter((n) => n[1] >= 60)
    .sort((a, b) => b[1] - a[1]);
  let arr2 = [];
  for (let key of arr) {
    if (typeof key[0] === 'string') {
      arr2.push(key[0]);
    }
  }
  return arr2;
}

console.log(myLanguages(languages1));
console.log(myLanguages(languages2));
console.log(myLanguages(languages3));

// Task 4

function numbersOutput() {
  setTimeout(() => {
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  }, 1000);
}

numbersOutput();
