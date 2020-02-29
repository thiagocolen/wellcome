import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

// CUSTOM COMPONENTS
import BgImage from '../../components/BgImage'
import SuperTitle from '../../components/SuperTitle'
import Weather from '../../components/Weather'
// import TesteComponent from '../../components/TesteComponent'
import TextBar from '../../components/TextBar'

import * as actions from '../../actions/actions' 


class Home extends React.Component {

	constructor(props) {
		super(props)	
		this.textStyle = {
			fontSize: 16,
  			lineHeight: '26px',
			padding: 50,
			fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
		}
	}

	componentDidMount() {
	}


	render() {
		return(
			<React.Fragment>

				<SuperTitle title="THIAGO COLEN"/>

				<BgImage />
					
				<Weather />

				<TextBar />

				<div style={this.textStyle}>
					Phasellus turpis quam, lacinia in tincidunt quis, rhoncus vitae augue. Vivamus porttitor imperdiet enim ut mattis. Proin id sagittis arcu, at fringilla lectus. Donec iaculis, arcu et dapibus dignissim, ipsum lectus auctor sem, non condimentum odio ipsum a neque. Vestibulum facilisis lacus id enim fringilla, quis placerat augue eleifend. Donec gravida leo tempor, pharetra tortor dapibus, consequat ipsum. Sed facilisis porta nulla non dapibus. Curabitur eu mattis felis, non auctor augue. Nullam efficitur quam et consectetur mollis. Sed hendrerit sollicitudin pharetra. Pellentesque sit amet ligula id enim aliquam rhoncus et nec arcu. Aenean sed vehicula ipsum. Suspendisse sodales hendrerit purus eu porta. Nullam et consequat enim. Sed justo ligula, tempor eu massa eget, fermentum imperdiet nisl. Nam commodo nisi ac erat condimentum, sed pharetra velit dignissim.
					<br />
					Vivamus viverra tortor nisi, ac facilisis risus pulvinar sed. Pellentesque volutpat lorem vel aliquam cursus. Phasellus hendrerit, odio in euismod pulvinar, sapien tellus faucibus velit, at sodales justo leo pretium purus. Donec mollis, orci et posuere ullamcorper, mauris sapien feugiat dolor, eget luctus mauris erat at elit. Donec eget sem ac erat porta malesuada. Etiam eu ante id justo laoreet consequat quis sed ex. Praesent porttitor, odio sed ornare pellentesque, ex odio blandit metus, a bibendum risus justo ut ligula. Proin sodales sodales nisi, ut efficitur arcu iaculis at. Cras tincidunt efficitur ex, quis ultricies lectus convallis et. Suspendisse maximus dictum accumsan. Nam luctus risus lorem, eget faucibus est placerat at. Etiam posuere nec orci ac dignissim. Vivamus sed cursus tellus. Fusce at sem nisi.
					<br />
					Nullam volutpat cursus libero, ac accumsan sapien hendrerit sed. Cras justo est, tincidunt at nulla vitae, aliquam malesuada arcu. Nunc ultrices accumsan leo, ut pharetra arcu dapibus sit amet. Proin sit amet ex tempor, vestibulum mauris vel, tincidunt augue. In ac cursus eros, facilisis tristique metus. Maecenas ornare suscipit metus et lacinia. Quisque mollis lorem rutrum, cursus nisi eu, tempor magna.
				</div>

			</React.Fragment>
		)
	}
}

Home.propTypes = {
	randomPhoto: PropTypes.object
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
