# 알고리즘
주어진 문제를 논리적으로 해결하기 위해 필요한 절차, 방법, 명령어(코드)를 모아 놓은 것

## 1. 자료구조
- 요구사항과 스팩
- 실행/동작 여부
- 테스트 및 에러 처리

코드 품질은 어떤 기준으로 측정되는지
- 가독성
- 모듈러
- 성능 -> 빠르게 동작하는지, 효율적인지

### 자료구조란?
데이터가 어떻게 조직되어 있는지
어떤 자료구조든 트레이드 오프(trade-off)가 존재
상황에 맞는 자료구조 선택
- 사용자 대기열: Queue
- 코드 에디터의 undo 기능: Stack
- GPS/Navigation 시스템: Graph
- 사용자 인증/조회: Hash Table

## 2. 자료구조와 메모리
- 자료구조의 데이터는 메모리에 저장된다.
- 메모리: 컴퓨터를 동작시키는 핵심 장치이며 메모리를 임시적으로 저장할 수 있게 해줌
- RAM(Random Access Memory): 순서대로 접근이 아닌 메모리의 주소를 통해 임의적 접근 가능

### 메모리 주소
- 컴퓨터 메모리(RAM) 내에 있는 각 데이터(Byte)의 위치를 식별하는데 사용되는 숫자
- 각 변수나 데이터 구조는 메모리 주소에 할당되며 이 주소를 통해 데이터에 접근

- CPU를 통해 필요할 때마다 해당 변수의 값을 읽어옴

### Byte
- 메모리 용량을 나타내는 단위
- `8 Bits` === `1 Byte`
  - 1 bit: `0`, `1` => 2가지
  - 2 bit: `00`, `01`, `10`, `11` => 4가지
  - 1 byte: 256가지(2^8)
- 메모리에 저장되는 상태(컴퓨터가 이해할 수 있는 숫자): 2진법
- 프로그래밍을 할 때: 10진법 사용
- 문자: 숫자를 각 글자에 1:1 매핑하여 사용
  - ASCII 코드를 사용(문자를 숫자로 표현하는데 사용하는 컴퓨터 인코딩 시스템)

### 메모리 할당

### c언어 예시
1. 변수 선언에 대한 메모리 할당
- c언어에서 숫자 5라는 값은 총 4 Byte 용량을 차지함
- 메모리에서 4 Byte 용량을 확보해 이 값에는 참조할 수 있는 주소가 생기게 됨
- 값을 저장할 때 메모리 위치는 직접 정하는 것이 아님
- 값이 2진법으로 변경돼 해당 값이 메모리에 임시적으로 저장

<img width="500" alt="c언어 변수 4 Byte와 메모리 할당" src="https://github.com/user-attachments/assets/37d39f92-d3d7-44fd-a630-d2e2412a0f19" />

<br/>

2. 배열에 대한 메모리 할당
- 길이가 3인 배열은 3개의 연속된 공간이 필요하고 총 12 Byte 용량(메모리 공간)을 확보해야 함
- 10 옆에는 무조건 20, 20 옆에는 무조건 30으로 연속되어 이어진 메모리 공간을 사용
  
<img width="500" alt="c언어 변수 4 Byte와 메모리 할당" src="https://github.com/user-attachments/assets/70a6c094-2974-4f7e-86a9-e0b5dcdfca83" />

### javascript?
- javascript 엔진은 추상화된 레벨에서 메모리를 할당
- 엔진 자체적으로 메모리 할당과 해제를 관리

### 자료 타입

<img width="563" alt="스크린샷 2025-02-10 오후 10 27 48" src="https://github.com/user-attachments/assets/16f3374f-c591-415e-a729-f39ef7edf850" />

<br><br>

|           | 스택 메모리 | 힙 메모리 |
| --------- | --------- | --------- |
| 메모리할당   | 컴파일 시 결정(정적) | 런타임 시 결정(동적) |
| 메모리 해제  | 함수 종료시 자동 해제 | 가비지 컬렉터가 관리 |
| 용도       | 로컬 변수, 함수 호출  | 객체, 배열 생성 및 사용 |
| 동작 방식   | LIFO 방식         | 필요에 따라 할당/해제 |

<br>

## 3. 배열(Array)

- 컴퓨터 과학/프로그래밍에서 가장 기초적인 자료구조
- 배열은 고정된 크기를 갖는 자료 구조이며 메모리 상에서 값들이 연속적으로 이어져 있음
- 즉, 하나의 메모리 덩어리에 데이터를 순차적으로 저장하는 구조


```js
const arr = [10, 20, 30]
```

3개의 값이 들어가는 배열이 있을 때 어떤 작업이 수행될까?
1. 프로그래밍 언어로 코드 작성
2. 운영체제(OS)를 통해 3개의 메모리 주소를 저장할 공간을 확보해라
3. 메모리 공간에서 적당한 공간을 찾아 할당(연속된 공간에 저장)

- 코드를 통해서 메모리에 있는 값들에 접근 가능
- 배열에는 각 요소의 위치를 index를 통해 알 수 있음
- 배열의 크기 === 요소의 개수
- index를 통해 요소에 접근 가능

```js
arr[0] // 10
arr[1] // 20
arr[2] // 30
```

- 배열은 연속적인 메모리 공간을 사용하기 때문에 인덱스를 알고 있으면 특정 요소에 빠른(상수 시간) 접근 가능
- 만약 1000개의 요소가 들어 있는 요소라면, index를 사용해서 접근하는 경우 모두 비슷한 속도로 위치에 접근 가능
- 배열에도 trade-off가 존재함

### 만약 배열에 하나의 요소를 더 추가하고 싶다면? 

- 메모리 공간이 이미 할당된 이후에는 배열의 크기를 동적으로 조절할 수 없음 -> 크기 변경 불가
- 다음 이어지는 메모리 공간에 이미 데이터가 존재할 수 있기 때문(빨간색 부분) -> 메모리 내부에서 충돌될 수 있음

<img width="563" alt="메모리 공간이 이미 할당된 경우" src="https://github.com/user-attachments/assets/821f2428-f107-41c5-930f-ef58f805f385" />

### 그러면 배열을 확장하는 방법은?

- 새로운 사이즈에 맞게 메모리 공간 재할당
- 기존 요소들을 새로운 공간으로 복사

### 삭제하고 싶다면?

- 본질적으로 고정 크기를 가진 배열에서는 삭제라는 개념이 존재하지 않음
- 값을 덮어씌우기 하는 방식으로 대체

<img width="563" alt="배열 값 삭제" src="https://github.com/user-attachments/assets/e616fb8b-1bda-487f-b406-bc3a1f976c37" />

- 삭제할 요소 이후의 모든 요소를 한 칸씩 앞으로 이동

### 만약 1,000,000 사이즈 배열에서 하나의 요소를 삭제한다면?
- 삭제 대상 요소의 위치에 따라 0 - 999,999 번의 작업이 필요
- 비효율 적인 방법

### 배열의 특징
- 연속된 메모리 공간에 데이터가 저장되며 사이즈가 고정되어 있다
- 특정 요소에 빠르게 접근 가능하다(인덱스/주소를 통해)
- 삽입/삭제 작업이 본질적으로 불가능(새로운 배열 생성 또는 요소를 한 칸씩 이동시키는 방법 사용 - 비효율적)

### 동적 배열(Dynamic Array)
- 프로그램의 런타임에서 크기를 변경 가능
- 필요에 따라 자동으로 확장 또는 축소
  - Java: ArrayList
  - Python: List


|           | 배열(정적) | 동적 배열 |
| --------- | --------- | --------- |
| 크기 유연성  | 고정, 선언시 결정된 크기 변경 불가 | 실행 중 크기 변경 가능, 자동 확장/축소 |
| 메모리 할당 | 컴파일 타임에 할당 | 런타임에 할당 |
| 성능       | 연송적인 메모리를 활용 빠른 읽기/쓰기 | 크기 변경 시 오버헤드 발생 가능 |
| 재할당/복사 | 수동으로 새 배열을 만들거나 덮어쓰기 | 필요에 따라 자동으로 조정 |


### javascript에서의 배열
- js에서 사용하는 일반 배열은 **동적 배열**처럼 동작함
- 크기가 자유롭게 변경되며 속성/메서드가 기본적으로 제공
- js의 배열은 사실 **객체**이다
  - 내부적으로 `키: 값`쌍으로 데이터를 저장
  - `메소드/속성`: 배열의 요소 처리/조작을 위해 내장 메서드 (`push()`, `pop()`, ... etc) 사이즈를 반환하는 `length` 속성이 제공됨
    
## 4. Javascript 배열 특징

### 초기화 

```js
let arr = []; // 빈 배열 초기화
let arr2 = new Array(); // 빈 배열 초기화

let arr3 = new Array(5) // array length를 지정 (size가 5인 배열)
// [undefined, undefined, undefined, undefined, undefined]
// 모든 요소들이 undefined로 초기화되는데, 값이 할당이 안돼있어서 어떤 값이든 undefined이기 때문에 fill이라는 메서드를 함께 사용

let arr3 = new Array(5).fill(0) // [0, 0, 0, 0, 0]
```

### array.prototype

- 프로토타입 객체를 가지는데, 프로토타입 객체에는 배열을 조작하기 위한 다양한 메서드와 속성들이 내부적으로 정의돼 있음
- 배열 객체마다 모듈안에 배열이 100개가 넘게 있다고 했을 때 수많은 매서드들이 있다면 비효율적인게 아닐까?
  - 배열 인스턴스에 직접적으로 존재하는게 아님
  - array.prototype에 메서드 집합에 대한 단일 참조를 사용함 -> 메모리 관리를 효율적으로 사용 가능
  - 배열 인스턴스가 100개가 있어도 array.prototype에 존재하는 메서드와 속성들을 단일 참조를 하게 해줌
  - 하나의 참조를 통해 메서드와 속성들을 호출하는 것임
  - 프로토타입을 통해 메서드를 참조를 공유한다고 할 수 있음

<img width="500" alt="" src="https://github.com/user-attachments/assets/acf73f99-6f07-4c83-894a-f8638ec2a633" />

### 배열의 기본적인 연산

```js
// Arrays in Javascript
let cart = ["apple", "banana", "orange", "blackberry", "strawberry"];
```

#### 1. 읽기 (상수 시간, 항상 일정한 시간이 걸림)

```js
console.log(cart[0])
console.log(cart[1])
console.log(cart[2])

console.log(cart[8]) // undefined
```

#### 2. 검색 (선형 시간, 배열의 크기 증가에 따라 탐색하는 시간도 증가)

```js
cart.indexOf("apple") // 0 반환
```

#### 3. 삽입(선형 시간)

```js
cart.push("watermelon") // 배열 끝에 삽입
cart.unshift("kiwi") // 배열 맨 앞에 삽입
```
- push: 맨 뒤의 요소를 제거하기 때문에 일정한 시간
- unshift: 모든 요소들을 오른쪽으로 한 칸씩 이동시키고, 삽입하기 때문에 배열의 사이즈에 비례하는 시간이 걸림

#### 4. 삭제(선형 시간)
```js
cart.pop() // 배열의 마지막 요소 제거
cart.shift() // 배열 첫번쨰 요소 제거
cart.splice(시작지점 인덱스, 삭제 요소 수) // 배열 원하는 위치 제거
```
- shift, splice: 삭제되는 요소의 다음 요소들이 모두 한 칸씩 이동

## 5. 스택
- LIFO(후입선출)원칙을 따르는 선형 자료구조
- Last-In-First-Out
- 가장 나중에 들어간 데이터가 가장 먼저 나온다
- 스택은 ADT(Abstract data type) 추상 자료형이다
  - 데이터 구조의 논리적인 특성을 정의하지만 직접적인 구현은 추상화하는 것

### 제약 사항
- 데이터는 스택의 끝에서만 삽입 가능하다 -> `push()`
- 데이터는 스택의 끝에서만 삭제 가능하다 -> `pop()`
- 스택의 마지막 요소만 읽을 수 있다 -> `peek()`


```js
class Stack {
  constructor() {
    this._items = [];
  }
  push(item) {
    this._items.push(item)
  }
  pop() {
    this.)items.pop()
  }
  peek() {
    return this._items.at(-1)
  }
}
```

```js
const s = new Stack();

s.push(10);
s.push(20);
s.push(30);
console.log(s) // [10, 20, 30]

s.pop() // [10, 20]

console.log(s.peek()) // 20
```

- push(): 상수시간 O(1) - 다른 요소를 이동 시킬 필요 없음
- pop():  상수시간 O(1) 
- peek(): 상수시간 O(1) - 단순 참조

- 스택은 간단하지만 효율적인 선형 자료구조임
- 후입선출의 원칙에 따라 동작한다
- 최근 추가된 요소부터 처리
- 일정한 실행 시간을 보장하게 됨(모두 상수 시간으로 동작함)


## 6. 큐
- 큐는 FIFO 원칙을 따르는 선형 자료구조
- 선입선출(First-In-First-Out)
- 추상 자료형
- 추가/제거 방향이 같음

```js
class Queue {
  constructor() {
    this._items = [];
  }
``enqueue(item) {
    this._items.push(item)
  }
  dequeue() {
    if(this.)items.length === 0) {
      console.log("Queue is empty")
      return
    }
    return this._items.shift();
  }
}
```

```js
const queue = new Queue();

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
console.log(queue) // [20, 30]
```

### 시간 복잡도
- push(): 상수시간 O(1)
- shift(): 선형시간 O(n) - 배열의 모든 요소들을 n만큼의 한 칸씩 이동시켜야 함

dequeue가 배열을 사용할 경우 선형시간이 될 수 있고 연결 리스트는 상수 시간으로 dequeue 작업을 수행할 수 있음

## 7. 연결 리스트(Linked List)
- 연속된 노드의 연결체(체인처럼 연결됨)
- Node란?
  - 연결 리스트에서 사용되는 하나의 데이터 덩어리,
  - 노드 안에는 2가지 -> 데이터와 필드가 있음

<img src="https://github.com/user-attachments/assets/ee3d7bdb-f5fe-4714-8eb3-f2e653cb1b00" alt="" width="200" />

- data: 노드가 담고 있는 데이터/값
- next: 링크/포인터 역활, 다음 노드 주소를 저장
- 양방향 연결 리스트의 경우, prev 포인터(이전 노드 주소 참조 필드) 추가

### 연결 리스트의 구조

- 시작 지점에 있는 노드를 head
- 마지막 노드를 tail 노트라고 부름

<img src="https://github.com/user-attachments/assets/efc4d5d6-16e7-4f38-b01a-8f1d72fcadce" alt="" width="500" />


### 배열 vs 연결 리스트

- 하나의 노드들이 각자 메모리공간 어딘가에 불특정한 공간에 존재하기 때문에 pointer를 활용해서 연결시켜줘야함
- 때문에 선형 시간이 걸림
- c노드를 가고 싶으면 a, b를 거쳐야 가능

<img src="https://github.com/user-attachments/assets/12a7e9c3-d5ad-469f-8e10-410fac1bee56" alt="" width="700" />



#### 배열
- random access가 가능
- 배열의 n번째 원소 방문 시 O(1) 시간으로 방문 가능
  - 예: arr[3]
- 원소 삽입 & 삭제는 일반적으로 O(n) 시간 소요

#### 연결 리스트
- random access 불가능
- 리스트의 n번째 노드 방문 시 O(n) 시간 소요
  - 예: head 노드부터 n번째 노드까지 순회
- 배열보다 빨라질 수 있는 노드 삽입, 삭제
  - 연결 리스트의 노드를 맨 앞에 삽입시켜줄 때는 **헤드 노드의 참조 위치만 바뀌기 때문**에 상수 시간이라 빠른 속도로 처리 가능


### 연결리스트 종류

#### 1. 단일 연결 리스트(Singly Linked List)
- 다음 노드에 대한 포인터만 가지고 있고, 한 쪽 방향으로만 흐르는 데이터 구조 패턴

<img src="https://github.com/user-attachments/assets/e85aa3c8-56df-42e7-8d47-953460650d9c" alt="" width="600" />

#### 2. 이중 연결 리스트(Doubly Linked List)
- 다음 노드에 대한 포인터 뿐만아니라 이전 노드를 가리키는 포인터도 가지고 있음
- 앞, 뒤로 탐색이 빠르다는 장점이 있지만
- 2개의 포인터를 관리해줘야 하기 때문에 데이터의 구조와 흐름이 복잡해질 수 있음

<img src="https://github.com/user-attachments/assets/f31e1b3a-436c-40c8-9797-62d6bc24f088" alt="" width="600" />


#### 3. 원형 연결 리스트(Circular Linked List)
- 일반적인 연결 리스트에 마지막 노드가 가리키는 포인터가 헤드 노드를 가리키는 것

<img src="https://github.com/user-attachments/assets/4987e613-43f4-4a21-bffd-19eb27b41353" alt="" width="460" />

### 구현 방법
#### 1. 노드 구현 방법
```js
class Node {
  constructor(data) {
    this.data = data; // 데이터 필드
    this.next = null; // 링크 역할을 해주는 next 필드
  }
}
```

#### 2. 연결 리스트
```js
let head = new Node("a");
head.next = new Node("b");
head.next.next = new Node("c");
head.next.next.next = new Node("d");
```

<img src="https://github.com/user-attachments/assets/868e34dc-b7c7-4c20-9bd5-d9c9d4521c07" alt="" width="700" />

## 8. 트리(Tree)

- 노드의 앞-뒤 관계가 1:N 또는 N:N
- 비선형 계층적 구조
- 다수의 노드가 연결된 비선형 자료 구조
- `부모-자식`의 계층 구조를 가지고 있다

#### 참고: 선형 자료 구조
  - 배열, 연결리스트, 스택, 큐
  - 노드/원소의 앞-뒤 관계가 1:1인 구조


<img src="https://github.com/user-attachments/assets/888737f9-f6bc-48b8-8ad7-23db4852c1a1" alt="" width="500">

- `root노드`가 존재하고, 하위의 노드들을 `자식 노드`라고 하고, 이어주는 것: `edge`라 함
- 자식 노드는 또 자식 노드를 가질 수 있고, 맨 마지막 자식 노드를 `leaf 노드`라 함

### 트리 구현하기

```js
class TreeNode {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  addChildren(childNode) {
    this.children.push(childNode)
  }
}

const root = new TreeNode("A");
const node2 = new TreeNode("B");
const node3 = new TreeNode("C");

root.addChild(node2);
root.addChild(node3);
```

- 각 node는 하나의 객체로 표현됨
- node에 데이터와 자식 노드들을 저장할 수 있음

### 용어 설명

#### sub tree
- 노란 삼각형: 트리의 sub tree라고 함
- 하나의 트리는 다수의 sub tree로 구성되어 있다고 볼 수 있음
- sub tree 내에서 상위 노드를 부모, 하위 노드를 자식 노드라고 표현

<img src="https://github.com/user-attachments/assets/ce52d54b-3f7e-46f4-a46b-b79e7bcfe005" alt="" width="400">

#### sibling
- 같은 부모를 가지고 있는 노드를 sibling(형제)라고 표현
<img src="https://github.com/user-attachments/assets/4ed3b359-f4d6-47ec-bc39-78902fb22938" alt="" width="400">

#### size
- root를 포함한 모든 Node의 수
- 위 사진에서 노드의 개수는 7

#### depth(깊이)
- Node에서 root까지의 거리
- root node: 깊이 0
- 그다음 자식노드: 깊이 1
- ...

#### 높이(height)
- root 노드를 기준으로 가장 깊숙히 위치한 노트까지 도착할 때 필요한 edge 개수


### 이진 트리(Binary tree)
- 자식 노드가 최대 2개로 제한
- 자식이 있어도, 없어도 최대 2개만 넘지 않으면 됨

### 이진 탐색 트리(Binary search tree)
- 왼쪽 자식 노드 값 < 부모 노드 값
- 부모 노드 값 < 오른쪽 자식 노드 값

<img src="https://github.com/user-attachments/assets/4036c30f-6a29-4695-9a47-8351a2fcc5ec" alt="" width="500">


### 트리 순회

#### in-order traversal (중위 순회)
- left -> visit -> right
- DFS(깊이 우선 탐색)를 사용해 순회
- a -> b -> d 방문처리(출력) -> b(출력) -> e(출력) -> b -> a(출력) -> c -> f(출력) -> c(출력) -> g(출력) -> c(출력) => 왼쪽 자식 노드가 없으면 출력
- ⭐️ 출력 순서: `d -> b -> e -> a -> f -> c -> g`

```js
function inOrderTraversal(node) {
  if(node !== null) {
    inOrderTraversal(node.left);
    console.log(node.value);
    inOrderTraversal(node.right)
  }
}
```
1. 왼쪽 sub tree 순회
2. node 방문
3. 오른쪽 sub tree 순회

<img src="https://github.com/user-attachments/assets/94162a91-99d4-4a38-b5d5-784014928859" alt="" width="300" >

#### pre-order traversal (전위 순회)
- visit -> left -> right
- a(방문) -> b(방문) -> d(방문) -> b -> e(출력) -> a -> c(출력) -> f(출력) -> c -> g(출력) -> c -> a 
- ⭐️ 출력 순서: `a -> b -> d -> e -> c -> f -> g`

```js
function preOrderTraversal(node) {
  if (node !== null) {
    console.log(node.value);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}
```
1. node 방문
2. 왼쪽 sub tree 순회
3. 오른쪽 sub tree 순회

#### post-order traversal(후위 순회)
- left -> right -> visit
- ⭐️ 출력 순서: `d -> e -> b -> f -> g -> c -> a`

```js
function postOrderTraversal(node) {
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.value);
  }
}
```
1. 왼쪽 sub tree 순회
2. 오른쪽 sub tree 순회
3. node 방문


## 9. 힙(Heap)
- 이진트리를 기반으로 한 자료구조
- 부모 노드와 자식 노드간의 대소 관계로 힙의 종류가 나뉘어짐
  - 최대 힙: `부모노드 > 자식노드` 항상 부모노드가 큰 힙
  - 최소 힙: `부모노드 < 자식노드` 항상 자식노드가 큰 힙
- 가장 높은 또는 낮은 키 값이 항상 root 노드에 오게 되는 특징이 있음 -> 이를 활용해 우선순위 큐라는 추상적 자료형을 구현할 때 힙을 사용
  - 우선순위 큐(priority queue): 추상형 자료 타입(ADT), 우선 순위 큐를 구현할 때 사용되는 자료구조
    - 효율적인 삽입과 O(1)의 우선 순위 요소 접근

### Max heap & Min heap

#### Max heap
root 노드가 인덱스 0에 위치할 경우
- left: i * 2 + 1
- right: i * 2 + 2
- parent: (i - 1) / 2

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(); // 힙 재구성 메서드 호출
  }
}
```

- `Heapify(힙의 재구조화)`: 수행과정에서 생길수도 있는 구조의 변화로 인해 힙의 속성이 깨질 수 있기 때문에 삽입/삭제 시 힙의 재구조화가 요구된다.
- Heapify Up(버블 업)
  1. 현재 노드의 인덱스를 구한다
  2. 현재 노드가 부모 노드의 인덱스를 구한다
  3. 현재 노드가 부모 노드보다 크다면 두 노드를 바꾼다
  4. 현재 노드가 인덱스를 부모 노드의 인덱스로 바꾼다
  5. 현재 노드의 부모 노드의 인덱스를 구한다

```js
...
  heapifyUp (index) {
    let currentIndex = index || this.heap. length - 1;
    let parentIndex = Math. floor ((currentIndex - 1) / 2);

    while (this.heap(parentIndex) < this.heap[currentIndex]) ‹
      this.swap (parentIndex, currentIndex)
      currentIndex = parentIndex;
      parentIndex = Math. floor ((currentIndex - 1) / 2) ;
    ｝
  }
...
```

#### 힙의 삭제 연산
- 삽입의 반대
- 현재 힙의 최대 값을 삭제하고 반환을 하는 작업을 delete를 통해서

```js
delete() {
  const max = this.heap[0];
  const last = this.heap.pop();
  if (this.heap.length > 0) {
    this.heap[0] = last;
    this.heapifyDown();
  }
}
```
- Heapify Down(버블 다운)
  1. 좌측 자식 > 현재 요소: 다음 인덱스를 좌측 자식 인덱스로 설정
  2. 우측 자식 > 현재 요소: 다음 인덱스를 우측 자식 인덱스로 설정
  3. 다음 인덱스 !== 현재 인덱스: 현재 요소와 다음 요소를 교환하고 다음 인덱스를 기준으로 다시 `heapifyDown` 호출

```js
heapifyDown (index = 0) {
  let currentIndex = index;
  let leftChildIndex = currentIndex * 2 + 1;
  let rightChildIndex = currentIndex * 2 + 2;
  let nextIndex = currentIndex;

  if (this.heap[nextIndex] < this.heap[leftChildIndex]) {
    nextIndex = leftChildIndex;
  ｝
  if (this.heap[nextIndex] < this.heap[rightChildIndex]) {
    nextIndex = rightChildIndex;
  }
  if (nextIndex !== currentIndex) {
    this.swap(currentIndex, nextIndex);
    this.maxHeapifyDown(nextIndex);
  }
}
```

#### 삽입/삭제 시간 복잡도
- 삭제 및 삽입 연산의 시간 복잡도는 힙의 높이에 의해 결정
- 힙의 높이는 log n에 비례하므로 O(log n)

#### 힙의 주요 메서드
- peek(): 최대/최소 값 리턴
- size(): 힙 사이즈 리턴
- isEmpty(): 힙 사이즈 0 체크



<br><br>

----

## 알고리즘 테스트
- codility: https://app.codility.com/programmers/
- programmers: https://school.programmers.co.kr/learn/challenges?order=recent
- leetcode: https://leetcode.com/problemset/
- goorm: https://level.goorm.io/

---

## 참고
- https://developer.mozilla.org/ko/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes
- https://www.youtube.com/watch?v=lUUtGFSEfBY
