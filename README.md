# react-optimizing-mobx
$ `git add .`<br>
$ `git commit -m "commit something"`<br>
$ `git push -u origin master`<br>

### 프로젝트 생성
$ `npx create-react-app mobx-with-react`<br>
$ `cd mobx-with-react`<br>

$ `yarn eject`<br>

### 모듈 추가
$ `yarn add babel-preset-mobx`<br>
$ `yarn add @babel/plugin-transform-react-jsx-source`<br>
$ `yarn add @babel/plugin-transform-react-jsx-self`<br>
$ `yarn add mobx mobx-react`<br>

### babel 부분 수정
$ `vi package.json` <br>

>"babel": {<br>
>"presets": [<br>
>>>      		"react-app",<br>
>>>      		"mobx"<br>
>>    ]<br>
>}<br>

### 개발자 도구 설치(선택)
$ `yarn add mobx-react-devtools`

## 프로그램 시작 
$ `npm run start`


### 참조 
[mobx 최적화](https://mobx.js.org/best/react-performance.html) <br>
[mobx 예제 사이트](https://velog.io/@velopert/MobX-3-%EC%8B%AC%ED%99%94%EC%A0%81%EC%9D%B8-%EC%82%AC%EC%9A%A9-%EB%B0%8F-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B0%A9%EB%B2%95-tnjltay61n)

