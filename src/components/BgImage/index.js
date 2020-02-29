import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
		const BackgroundLoader = () => {
				
			return (
				<React.Fragment>
					<div onClick={ this.changeBlendMode } 
						style={ this.state.imgCover } 
						className="imgCover"></div>
				</React.Fragment>
			)
		}

		return(
			<BackgroundLoader />
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
