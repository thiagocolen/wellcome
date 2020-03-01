import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LayersIcon from '@material-ui/icons/Layers';
import grey from '@material-ui/core/colors/grey';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ImageIcon from '@material-ui/icons/Image';

import * as actions from '../../actions/actions' 

import './styles.css'


class BgImage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
			imageUrl: '',
			blendModes: [
				'normal', 'multiply', 'screen', 'overlay',
				'darken','lighten','color-dodge','color-burn',
				'hard-light','soft-light','difference','exclusion',
				'hue','saturation','color','luminosity'
			],
			imgCover: {
				backgroundColor: '',
				backgroundImage: '',
				backgroundBlendMode: '',
			},
			randomPhoto: {},
			sorry: {},
        }
    }


	componentDidMount() {
		this.setRandomRGBColor()
		this.props.actions.getRandomPhoto()
		setTimeout(() => {
			this.changeBlendMode()
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (prevProps.randomPhoto !== this.props.randomPhoto) {
			this.setBgImageUrl(prevProps)
		}
		
		if (prevProps.sorry !== this.props.sorry) { 
			this.setState({
				sorry: this.props.sorry.msg
			})
		}
	}
	
	toggleFullScreen = () => {
		// parei aqui
		var elem = document.getElementById("root");
		if (elem.requestFullscreen) {
		elem.requestFullscreen();
		}

		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen()
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen()
			}
		}
	}
	
	setRandomRGBColor = () => {
		const rValue = Math.floor(Math.random() * Math.floor(255))
		const gValue = Math.floor(Math.random() * Math.floor(255))
		const bValue = Math.floor(Math.random() * Math.floor(255))
		const rgbColor = `rgb(${rValue}, ${gValue}, ${bValue})`
		this.setState({
			imgCover: {
				...this.state.imgCover,
				backgroundColor: rgbColor,
			}
		})
	}

	setBgImageUrl = () => {
		this.setState({
			imgCover: {
				...this.state.imgCover,
				backgroundImage: `url(${ this.props.randomPhoto.urls.small })`,
			}
		})
	}
	

	changeBlendMode = () => {
		const blendIndex = Math.floor(Math.random() * Math.floor(this.state.blendModes.length))		

		this.setState({
			imgCover: {
				...this.state.imgCover,
				backgroundBlendMode: this.state.blendModes[blendIndex],
			}
		})
	}

	render() {
		return(
			<React.Fragment>
				
				{/*
				<div onClick={ console.log('parei aqui') }
					className="iconCaptureButton">
					<ImageIcon style={{ color: grey[50] }} />
				</div>
				*/}
				<div onClick={ this.props.actions.getRandomPhoto }
					className="iconImageButton">
					<ImageIcon style={{ color: grey[50] }} />
				</div>
				<div onClick={ this.setRandomRGBColor }
					className="iconColorButton">
					<ColorLensIcon style={{ color: grey[50] }} />
				</div>
				<div onClick={ this.changeBlendMode }
					className="iconBlendButton">
					<LayersIcon style={{ color: grey[50] }} />
				</div>
				<div style={ this.state.imgCover } 
					className="imgCover"></div>
			</React.Fragment>
		)
	}
}

BgImage.propTypes = {
	randomPhoto: PropTypes.object,
	sorry: PropTypes.object,
}

const mapStateToProps = state => ({
	randomPhoto: state.bgImageReducer.randomPhoto,	
	sorry: state.bgImageReducer.sorry	
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(BgImage)  
