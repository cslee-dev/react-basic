import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, handleVideoSelect}) => {
  const videoItems = videos.map(video => {
    return (
        <VideoListItem
            handleVideoSelect={handleVideoSelect}
            video={video}
            key={video.id.videoId}
        />
    );
  });
  return (
      <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
  );
};

export default VideoList;