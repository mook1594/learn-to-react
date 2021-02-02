#### [GO TO BACK](../README.md)

# 9. 컴포넌트 스타일링

### 9.1 가장 흔한 방식, 일반 CSS
- 네이밍, 컴포넌트-클래스이름. ex) App-header
- BEM 네이밍: .card__title-primary

### 9.2 Sass 사용하기
- scss, sass 확장자
##### .sass
```css
$font-stack: Helvetica, sans-serif
$primary-color: #333

body
    font: 100% $font-stack
    color: $primary-color
```
##### .scss (주로사용)
```css
$font-stack: Helvetica, sans-serif;
$primary-color: #333;
body {
    font: 100% $font-stack;
    color: $primary-color;
}
```

#### Sass 라이브러리 설치
```shell
$ yarn add node-sass
```

### 9.3 CSS Module

### 9.4 styled-components

### 9.5 정리