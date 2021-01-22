import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTsearch from 'youtube-api-search';
import SETTINGS from '../secret';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = SETTINGS.API_KEY;

// HTML 생성하는 새로운 컴포넌트를 만든다
// some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('영어');
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 1000);
    return (
        <div>
          <SearchBar handleTermChange={term => videoSearch(term)} />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
              handleVideoSelect={selectedVideo => this.setState(
                  {selectedVideo})}
              videos={this.state.videos}
          />
        </div>
    );
  }

  videoSearch(term) {
    YTsearch({
      key: API_KEY,
      term: term,
    }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });
    });
  }
}

// 이 컴포넌트가 만든 HTML 을 갖고 페이지에 반영한다.
// 렌더 함수는 인스턴스화된 컴포넌트를 받는다. JSX의 인스턴스화는 태깅으로
// 두번째 인자로 매핑할 노드를 알려준다.
ReactDom.render(<App />, document.querySelector('.container'));