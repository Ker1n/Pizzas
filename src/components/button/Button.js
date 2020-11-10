import  React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';

function Button ({className,  children, }) { 
    return(
        <button className={className}>{children}</button> 
        // <button 
        // //props - onCLick
        //     className={classNames('button',  className,
        // {
        // 'button--outline' : outline
        // })}>         
        // {children}</button>
    )
};

// Button.propTypes = { 
//     onClick: PropTypes.func.isRequired,
// }


export default Button

