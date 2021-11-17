import React from 'react'

const Footer = () => {

        let copy_right = 'This is a basic website. Its made by Md.Rabbi';

    return (
        <div>
            <div className="footer">
                <p className="bg-dark text-light text-center"> { copy_right } </p>
            </div>
        </div>
    )
}

export default Footer
