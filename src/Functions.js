export const nums = () => {
  let arr = [];
  for (let i = 1; i < 26; i++) {
    arr.push(i);
  }
  arr = arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
  return arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
};

const numsTo50 = (x = 0) => {
  let arr = [];
  for (let i = 1; i < 26; i++) {
    arr.push(i + 25);
  }
  arr = arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
  return arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
};

export const replacementArr = numsTo50();

export const easy = () => {
  let arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(i);
  }
  arr = arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
  return arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
};

export const easy2 = () => {
  let arr = [];
  for (let i = 1; i < 10; i++) {
    arr.push(i + 9);
  }
  arr = arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
  return arr.reduce(
    (a, v) => a.splice(Math.floor(Math.random() * a.length), 0, v) && a,
    []
  );
};
