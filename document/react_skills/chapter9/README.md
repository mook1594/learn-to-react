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
```bash
$ yarn add node-sass
$ yarn add node-sass@4.14.1
```
#### sass-loader 설정 커스터마이징
```shell
$ yarn eject
```
##### config/webpack.config.js
```javascript
{
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders(
    {
        importLoaders: 3,
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    }
    //'sass-loader'
    ).concat({
    loader: require.resolve('sass-loader'),
    options:{
        sassOptions:{
            includePaths:[paths.appSrc + '/styles']
        },
        sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
        prependData: `@import 'utils';`
    }
    }),
    sideEffects: true,
},
```


### 9.3 CSS Module

### 9.4 styled-components

### 9.5 정리