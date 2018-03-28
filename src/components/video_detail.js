import React from 'react';

const VideoDetail = ({video}) => {
	//console.log("video-detail : " + video);
	if (!video) {
		return <div>Loading...</div>;
	}

	const videoId = video.id.videoId;
	const url = `https://www.youtube.com/embed/${videoId}`;
	
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
		</div> 
	);
};

export default VideoDetail;

//videoId :
	//"_SU5cL7w1tE"
	//"T7jC3LDlLi8"
	//"86E7FuIfo_k"
	//"ZV3sBII8aEo"
	//"dNVhok5PlEI"
