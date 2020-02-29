import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions/actions' 

import './styles.css'

class TextBar extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            textStyle: { left: 0 }
        }
        this.weatherText = React.createRef();
    }

    componentDidMount() {
        this.getNews()
        setInterval(this.animateText, 10)
    }

    componentDidUpdate(prevProps, prevState, snapshot) { 
        this.getNewsTitles(prevProps)
    }

    getNewsTitles = (prevProps) => {
        if (this.props.articles !== prevProps.articles) {
            this.setState({
                articles: this.props.articles
            })
        }    
    }

    getNews = () => {
		this.props.actions.getNews()
    }

    animateText = () => {
        const left = Number( this.state.textStyle.left ) 
        const width = Number( this.weatherText.current.offsetWidth * -1 / 2 )

        if (left > width) {            
            this.setState({ textStyle: { left: left - 1 } })
        } else {
            this.setState({ textStyle: { left: 0 } })
        }
    }

    render() {

        const Articles = () => {
            let result = this.state.articles.map((item) => {
                const formatedTitle =  item.title.split(' - ')
                return ( 
                    <span> 
                        &nbsp;&nbsp;&nbsp;.&nbsp;&nbsp;&nbsp;
                        { formatedTitle[0] }
                        <small>&nbsp;-&nbsp;{ formatedTitle[1] }</small>
                    </span> 
                )
            })
            return result
        }

        return(
            <React.Fragment>
                <div className="text-bar">
                    <p style={this.state.textStyle} ref={this.weatherText}>
                        <Articles/>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

TextBar.propTypes = {
	articles: PropTypes.array
}

const mapStateToProps = state => ({
    articles: state.newsReducer.news.articles
})
  
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
  
export default connect(mapStateToProps,mapDispatchToProps)(TextBar)  