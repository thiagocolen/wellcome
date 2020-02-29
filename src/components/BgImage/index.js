import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import LayersIcon from '@material-ui/icons/Layers';
import grey from '@material-ui/core/colors/grey';

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
			imgCover: {},
			randomPhoto: {}
        }
    }


	componentDidMount() {
		this.props.actions.getRandomPhoto()
	}

	componentDidUpdate(prevProps, prevState, snapshot) { 
		this.setBgImageUrl(prevProps)
	}
	

	setBgImageUrl (prevProps) {
		if (prevProps.randomPhoto !== this.props.randomPhoto) {
			const initialBlendIndex = 10
			this.setState({
				imgCover: {
					backgroundImage: `url(${ this.props.randomPhoto.urls.regular })`,
					backgroundBlendMode: this.state.blendModes[initialBlendIndex],
				}
			})
		}
	}


	changeBlendMode = () => {
		const blendIndex = Math.floor(Math.random() * Math.floor(this.state.blendModes.length));		
		this.setState({
			imgCover: {
				backgroundImage: `url(${ this.props.randomPhoto.urls.regular })`,
				backgroundBlendMode: this.state.blendModes[blendIndex],
			}
		})
	}


	render() {
		return(
			<React.Fragment>
				<div onClick={ this.changeBlendMode }
					className="iconButton">
					<LayersIcon style={{ color: grey[50] }} />
				</div>
				<div style={ this.state.imgCover } 
					className="imgCover"></div>
			</React.Fragment>
		)
	}

}

BgImage.propTypes = {
	randomPhoto: PropTypes.object
}

const mapStateToProps = state => ({
	randomPhoto: state.bgImageReducer.randomPhoto	
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(BgImage)  
