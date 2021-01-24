#### [GO TO BACK](../README.md)

# 4. 이벤트 헨들링

### 4.1 리액트의 이벤트 시스템

#### 이벤트 종류

- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

### 4.2 예제로 이벤트 핸들링 익히기

#### 컴포넌트 생성

```javascript
handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
  });
};
```

```javascript
const [username, setUsername] = useState("");
const [message, setMessage] = useState("");
const onChangeUsername = (e) => setUsername(e.target.value);
const onChangeMessage = (e) => setMessage(e.target.value);
const onClick = () => {
  alert(username + ": " + message);
  setUsername("");
  setMessage("");
};
```

```javascript
const [form, setForm] = useState({
  username: "",
  message: "",
});

const { username, message } = form;
const onChange = (e) => {
  const nextForm = {
    ...form,
    [e.target.name]: e.target.value,
  };
  setForm(nextForm);
};
const onClick = () => {
  alert(username + ": " + message);
  setForm({
    username: "",
    message: "",
  });
};
```
