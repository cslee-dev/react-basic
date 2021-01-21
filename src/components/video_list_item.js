import React from 'react';

const VideoListItem = ({video}) => {
  const IMAGE_URL = video.snippet.thumbnails.default.url;
  const VIDEO_TITLE = video.snippet.title;
  return (
      <li className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img
                className="media-object"
                src={IMAGE_URL}
            />
          </div>
          <div className="media-body">
            <div className="media-heading">
              {VIDEO_TITLE}
            </div>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;