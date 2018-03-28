import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	//console.log("video-list-item : " + video);
	const imageUrl = video.snippet.thumbnails.default.url;
	
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;

//videoId :
	//"_SU5cL7w1tE"
	//"T7jC3LDlLi8"
	//"86E7FuIfo_k"
	//"ZV3sBII8aEo"
	//"dNVhok5PlEI"
