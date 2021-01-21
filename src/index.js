import React from 'react';
import ReactDom from 'react-dom';
import SETTINGS from '../secret';

import SearchBar from './components/search_bar';

const API_KEY = SETTINGS.API_KEY;

// HTML 생성하는 새로운 컴포넌트를 만든다
// some HTML
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
  );
};
// 이 컴포넌트가 만든 HTML 을 갖고 페이지에 반영한다.
// 렌더 함수는 인스턴스화된 컴포넌트를 받는다. JSX의 인스턴스화는 태깅으로
// 두번째 인자로 매핑할 노드를 알려준다.
ReactDom.render(<App />, document.querySelector('.container'));