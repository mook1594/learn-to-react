#### [GO TO BACK](../README.md)

# 7. 컴포넌트의 라이프사이클 메서드

### 7.1 라이프사이클 메서드의 이해

- will: 전, did: 후
- 마운트
- 업데이트
- 언마운트

#### 마운트

- constructor: 생성자
- getDeriivedStateFromProps: props에 있는 값을 state에 넣을 때
- render: UI 렌더링
- componentDidMount: 브라우저상 나타난 후 호출하는 메서드

#### 업데이트

- props가 변경될 때
- state가 변경될 때
- 부모 컴포넌트가 리렌더링될 때
- this.forceUpdate로 강제 렌더링 트리거할 때

#### 리랜더링

- getDerivedStateFromProps: 마운트시, 업데이트 시작전 호출 , 주로 props 변화에 state 변화를 주고 싶을때 사용
- shouldComponentUpdated: 컴포넌트가 리렌더링을 할지말지. boolean 리턴,forceUpdate()는 이 과정을 생략
- render: 컴포넌트 리렌더링
- getSnapshotBeforeUpdated: 컴포넌트 변화를 DOM에 반영하기 직전
- componentDidUpdated: 컴포넌트 업데이트 작업 끝난 후

#### 언마운트

- componentWillUnmount: 컴포넌트가 웹 브라우저에서 사라지기 전

### 7.2 라이프사이클 메서드 살펴보기

#### render()

- 이 메서드 안에서 이벤트 설정이 아닌곳에서 setState 해서는 안된다.
- 브러우저의 DOM에 접근해서도 안된다.
- DOM정보, state변화를 할땐 componentDidMount에 처리

#### constructor

#### getDerivedStateFromProps()

- props 받아온 값을 state동기화 용도
- 마운트될때, 업데이트 될때 호출

```javascript
static getDerivedStateFromProps(nextProps, prevState) {
    // 조건에 따라 특정값 동기화
    if(nextProps.value !== prevState.value) {
        return { value: nextProps.value };
    }
    return null;
}
```

#### componentDidMount()

- 첫 렌더링 다 마친 후 실행
- 이벤트 등록
- setTimeout
- setInterval
- 네트워크 요청, 비동기 작업 처리

#### shouldComponentUpdated()

#### getSnapshotBeforeUpdated()

```javascript
getSnapshotBeforeUpdate(prevProps, prevState) {
    if(prevState.array !== this.state.array) {
        const { scrollTop, scrollHeight } = this.list
        return { scrollTop, scrollHeight };
    }
}
```

#### componentDidUpdated()

- 리렌더링 완료 후 실행
- DOM 관련 처리 가능
- prevProps, prevState로 이전 데이터 접근 가능
- getSnapshotBeforeUpdate에서 반환값이 있다면 snapshot 값을 받을 수 있다

#### componentWillUnmount()

- DOM 제거 할 때
- componentDidMount에서 등록한 것들 제거할때
- 이벤트, 타이머, 직접 생성한 DOM

#### componentDidCatch()

- 렌더링 중 에러 발생했을때

```javascript
componentDidCatch(error, info) {
    this.setState({
        error:true
    })
    console.log({error, info})
}
```

### 7.3 라이프사이클 메서드 사용하기

### 7.4 정리
