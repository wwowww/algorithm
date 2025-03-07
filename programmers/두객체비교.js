const obj1 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1
  }
}

const obj2 = {
  a: "a",
  b: 1,
  c: ["a", "b", "c"],
  d: {
    e: null,
    f: -1
  }
}

const obj3 = {
  a: "a",
  c: ["a", "b", "c"],
  d: {
    f: -1,
    e: null
  },
  b: 1
}

// js 객체는 "참조 타입"이라 직접적으로 비교 불가
// obj1 === obj2 이런식으로 비교할 수 없음

// 1. 빌트인 함수 JSON 활용
function isEqaul(objA, objB) {
  let a = JSON.stringify(objA);
  let b = JSON.stringify(objB);

  // key의 순서가 바뀌면 동등해도 false이기 떄문에 정렬까지 해줘야 함
  return a.split("").sort().join("") === b.split("").sort().join("");
}

console.log(isEqaul(obj1, obj2));
console.log(isEqaul(obj1, obj3));


// 2. 함수형 Object, Array, 재귀함수 활용
function isEqaul2(objA, objB) {
  const checkObjects = objA && objB && typeof objA === "object" && typeof objB === "object";

  if (checkObjects && Object.keys(objA).length === Object.keys(objB).length) {
    return Object.keys(objA).reduce((equal, key) => {
      return equal && isEqaul2(objA[key], objB[key]);
    }, true);
  } else {
    return objA === objB;
  }
}

console.log(isEqaul2(obj1, obj2));
console.log(isEqaul2(obj1, obj3));