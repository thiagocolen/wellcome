import React from 'react'
// import PropTypes from 'prop-types'
import './styles.css'

const TesteComponent = () => {

    const inputRef = React.createRef();

    console.log('@@@@@@@', inputRef.current);

    const RenderElement = () => {
        return(
            <div className="teste-component"
                ref={inputRef}>
                aksjdha sa ksjdhaskdajhds a sdkajhdaksjdha daskjadh aksdajdh
            </div>
        )
    }

    return <RenderElement /> 
}

// TesteComponent.propTypes = {
//     // title: PropTypes.string
// }

export default TesteComponent