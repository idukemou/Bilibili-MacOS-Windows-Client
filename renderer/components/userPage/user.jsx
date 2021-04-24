import React from 'react';

export default class User extends React.Component{
    render(){
        return(
            <section id='target' name='target' style={{display: (this.props.display? 'block': 'none')}}>

            </section>
        )
    }
}