#### [GO TO BACK](../README.md)

# 5. ref: DOM에 이름 달기

### 5.1 ref는 어떤 상황에 사용할까?

- DOM을 꼭 직접적으로 접근 해야할때

#### DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기

### 5.2 ref 사용

#### 콜백 함수를 통한 ref 설정

```javascript
<input ref={(ref) => {this.input=ref}}>
```

#### createRef 통한 ref 설정

### 5.3 컴포넌트에 ref 달기

```javascript
<MyComponent ref={(ref) => {this.myComponent=ref}}>
```
