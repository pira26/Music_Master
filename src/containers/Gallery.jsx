import React, { Component } from 'react';

export default class Gallery extends Component {

	constructor(props) {
		super(props);
		this.state = {
			playingUrl: '',
			audio: null,
			playing: null

		}
	}

	playAudio(previewUrl) {
		const audio = new Audio(previewUrl);
		if(!this.state.playing) {
			audio.play();
			this.setState({
				playing: true,
				playingUrl: previewUrl,
				audio
			});	
		}
		else {
			if(this.state.playingUrl === previewUrl) {
				this.state.audio.pause();
				this.setState({playing: false});	
			}
			else {
				this.state.audio.pause();
				audio.play();
				this.setState({
					playing: true,
					playingUrl: previewUrl,
					audio
				});
			}
		}
		
	}

	render() {
		
		const { tracks } = this.props;

		return(

			<div className="gallery">
				{
					tracks.map((track, i) => {
						const trackImg = track.album.images[0].url;
						return (
							<div className="track" 
							 key={i}
							 onClick={() => this.playAudio(track.preview_url)} >

								<img src={trackImg} 
									 alt="Track" 
									 className="track-img" />

								<div className="track-play">
									<div className="track-play-inner">
										{
											this.state.playingUrl === track.preview_url
											? <span>| |</span>
											: <span>&#9654;</span>
										}
									</div>
								</div>
								
								<p className="track-text">{track.name}</p>
							</div>
						)
						
					})
				}
			</div>
		);
	}
}