import React from 'react';
import ReactDom from 'react-dom';
// HTML 생성하는 새로운 컴포넌트를 만든다
// some HTML
const App = function() {
  return <div>Hi!</div>;
};
// 이 컴포넌트가 만든 HTML 을 갖고 페이지에 반영한다.
// 렌더 함수는 인스턴스화된 컴포넌트를 받는다. JSX의 인스턴스화는 태깅으로
ReactDom.render(<App/>);