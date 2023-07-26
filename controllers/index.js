const Numbers = [
    {"numbers": [1,2,3,4,5,6,7,8,9,10,11,12,13] }
]

const primeNumbers = [
    {"numbers": [2,3,5,7,11,13,17,19,21,23]}
]

const fibo = [
    {"numbers": [1,1,2,3,5,8,13,21]}
]

const odd = [
    {"numbers": [1,3,5,7,9,11,13,15,17,19,21,23]}
]

const even = [
    {"numbers": [0,2,4,6,8,10,12,14,16,18,20,22]}
]

export const getNumbers = (req, res) => {
  res.send(Numbers);
};

export const getPrime = (req, res) => {
  res.send(primeNumbers);
};

export const getFibo = (req, res) => {
  res.send(fibo);
};

export const getOdd = (req, res) => {
  res.send(odd);
};

export const getEven = (req, res) => {
  res.send(even);
};
