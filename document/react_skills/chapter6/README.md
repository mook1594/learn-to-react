#### [GO TO BACK](../README.md)

# 6. 컴포넌트 반복

### 6.1 자바스크립트 배열의 map() 함수

#### 문법

##### arr.map(callback, [thisArg])

- callback: 배열 요소 생성하는 함수
  - currentValue: 현재 요소
  - index: 현재 인덱스
  - array: 원본 배열
- thisArg(optional): callback 내부에서 사용

### 6.2 데이터 배열을 컴포넌트 배열로 변환하기

```react
const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name) => <li>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

### 6.3 key

```react
const IterationSample = () => {
  const names = ["눈사람", "얼음", "눈", "바람"];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);
  return <ul>{nameList}</ul>;
};
```

### 6.4 응용

```react

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return <ul>{nameList}</ul>;
};
```

```react
const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);
  const onChange = (e) => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

```

```react
  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    console.log(id);
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };
```

### 6.5 정리
