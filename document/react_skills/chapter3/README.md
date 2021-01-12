#### [GO TO BACK](../README.md)

# 3. 컴포넌트

#### 코드 자동 생성

- rwwd
- est

#### PropTypes

- array
- arrayOf(PropType)
- bool
- func
- object
- string
- symbol
- node: 렌더링 할 수 있는 모든것(숫자, 문자, JSX)
- instanceOf(클래스)
- oneOf(['dog', 'cat']): 주어진 배열 요소중 하나
- oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 종류 중 하나
- objectOf(React.PropTypes.number): 객체 모든 키 값이 인자로 주어진 PropTypes
- shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
- any: 아무 종류
  [더 자세히 보기](https://github.com/facebook/prop-types)
