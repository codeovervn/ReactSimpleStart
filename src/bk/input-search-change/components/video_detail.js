import React from 'react';
//import ReactDOM from 'react-dom';

const VideoDetail =({video}) => {
	console.log(video);
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = 'https://www.youtube.com/embed/${videoId}';
	
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive emded-responsive-16by9">
				<iframe className="embed-responsive-items" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	);
};

export default VideoDetail;