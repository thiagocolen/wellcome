import React from 'react'
// import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions' 

import './styles.css'

class TextBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            fakeText: 'In hac habitasse platea dictumst. Cras congue, libero sed porttitor tristique, libero elit maximus velit, ut facilisis ipsum mi ac sem. Nulla nec arcu at odio gravida pulvinar. Donec rutrum ex id dolor ultricies, ut tempor dolor aliquam. Mauris et interdum neque, at tincidunt metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque tempus egestas mi, nec elementum libero sodales et. In hac habitasse platea dictumst. Phasellus consectetur augue quis ante condimentum rhoncus. Cras at nunc gravida, accumsan diam quis, vehicula tortor. Curabitur fringilla, purus vitae scelerisque auctor, ante nulla mattis ex, id malesuada turpis erat quis odio.',
            textStyle: { left: 0 }
        }
        this.weatherText = React.createRef();
    }

    componentDidMount() {
        setInterval(this.animateText, 12)
    }

    animateText = () => {
        const left = Number( this.state.textStyle.left ) 
        const width = Number( this.weatherText.current.offsetWidth * -1 / 2 )

        if (left > width) {            
            this.setState({ textStyle: { left: left - 2 } })
        } else {
            this.setState({ textStyle: { left: 0 } })
        }
    }

    render() {
        return(
            <React.Fragment>
                <div className="text-bar">
                    <p style={this.state.textStyle} ref={this.weatherText}>
                        {this.state.fakeText} 
                        {this.state.fakeText}
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

TextBar.propTypes = {
}

const mapStateToProps = state => ({
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(TextBar)  