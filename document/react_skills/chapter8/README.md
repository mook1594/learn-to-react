#### [GO TO BACK](../README.md)

# 8. Hooks

### 8.1 useState

```javascript
const [value, setValue] = useState(0);
```

#### useState를 여러번 사용하기

```javascript
const [name, setName] = useState("");
const [nickname, setNickname] = useState("");

const onChangeName = (e) => {
  setName(e.target.value);
};

const onChangeNickname = (e) => {
  setNickname(e.target.value);
};
```

### 8.2 useEffect

- 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook
- componentDidMount, componentDidUpdate를 합친 형태롤 생각하면 됨

```javascript
useEffect(() => {
  console.log("렌더링");
});
```

#### 마운트될 때만 실행하고 싶을 때

- 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됨

```javascript
useEffect(() => {
  console.log("마운트");
}, []);
```

#### 특정 값이 업데이트 도리때만 실행하고 싶을 때

- 두 번째 파라미터에 검사하고 싶은 값을 넣어줌

```javascript
useEffect(() => {
  console.log(name);
}, [name]);
```

#### 뒷정리하기

- 언마운트되기 전이나 업데이트 되기 직전에 작업을 수행하고 싶다면 뒷정리 함수 반환

```javascript
useEffect(() => {
  console.log("effect");
  return () => {
    console.log("cleanup");
    console.log(name);
  };
}, [name]);
```

#### 언마운트 될때만

- 두 번째 파라미터에 비어 있는 배열을 넣으면 언마운트 될 때만

### 8.3 useReducer

```javascript
const [state, dispatch] = useReducer(reducer, { value: 0 });
```

#### 인풋 상태 관리하기

- 여러개의 인풋 상태 관리

### 8.4 useMemo

- 컴포넌트 내부 연산 최적화

```javascript
const avg = useMemo(() => getAverage(list), [list]);
```

- list가 변환할때만 getAverage 호출

### 8.5 useCallback

- useMemo와 비슷, 재사용, 최적화

##### as-is

```javascript
const onChange = (e) => {
  setNumber(e.target.value);
};

const onInsert = (e) => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber("");
};
```

##### to-be

```javascript
const onChange = useCallback((e) => {
  setNumber(e.target.value);
}, []);

const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber("");
}, [number, list]);
```

- 첫번째 파라미터는 생성하고 싶은 함수, 두번째 파라미터는 배열 (어떤값이 바뀌었을때 생성할지)
- 두번째가 비어있으면, 컴포넌트가 랜더링 될 때 만들었던 함수를 계속해서 사용, 값이 있으면 항목이 추가되거나 바뀔때 마다 새로 생성하여 사용

### 8.6 useRef

- 함수형 컴포넌트에서 Ref 사용을 쉽게 함.
- 포커스, 로컬 변수(렌더링과 연관되지 않은 바뀔수 있는 값)

### 8.7 커스텀 Hooks 만들기

```javascript
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);
  const onChange = (e) => {
    dispatch(e.target);
  };
  return [state, onChange];
}
```

### 8.8 다른 Hooks

### 8.9 정리
