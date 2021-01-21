import ReactDom from 'react-dom';
// HTML 생성하는 새로운 컴포넌트를 만든다
// some HTML
const App = function() {
  return <div>Hi!</div>;
};
// 이 컴포넌트가 만든 HTML 을 갖고 페이지에 반영한다.
ReactDom.render(App);