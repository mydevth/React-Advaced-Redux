## Topic: Advanced Redux Toolkit and Best Practice for React/React Native
## Time: Mar 8, 2023 08:00 PM Bangkok
#### [Slide, VDO and Resources](http://bit.ly/41S2417)
#### [โค้ดระหว่างเรียน](https://gitlab.com/codingthailand/advanced-redux-app)

**เตรียม**
1. [ติดตั้ง Node.js เวอร์ชัน LTS (ตอนนี้เวอร์ชัน 18)](https://nodejs.org/dist/v18.14.0/node-v18.14.0-x64.msi)
2. [ติดตั้งโปรแกรม Visual Studio Code](https://code.visualstudio.com/)
3. [ติดตั้ง Git](https://git-scm.com/download/win)
4. ติดตั้ง [Redux DevTools Extensions](https://github.com/reduxjs/redux-devtools) ที่ [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd), [Edge](https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nnkgneoiohoecpdiaponcejilbhhikei) หรือ [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
5. [สมัคร Firebase Account ที่นี่](https://firebase.google.com/)

==================

[ลิงก์เข้าเรียนโปรแกรม Zoom](https://us06web.zoom.us/j/84738878611?pwd=TjRGSzl0d3FMb09qb1hnd2ZnR0xyUT09)

**VS Extension**
- simple React snippets
- html to JSX
- Material Icon Theme
- Prettier - Code formatter

**Create React Project**
```
npm create vite@latest
```
`y , React , TypeScript + SWC`
```
npm install
```
```
npm doctor
```
### ใส่
```js
server: {
port: 4000
}  
// ที่ vite.config.ts
```
```
npm run dev
```
### Install UI component

https://mui.com/material-ui/getting-started/installation/
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

create theme.tsx , copy content from git example code

### install Router

npm install react-router-dom

https://react-hook-form.com/get-started/
npm install react-hook-form
npm install @hookform/resolvers yup

https://react-hook-form.com/get-started/#SchemaValidation
https://www.npmjs.com/package/yup-password
npm install yup-password
