import React, { Component } from 'react';
// import Ser1 from './image/s1.png';

class Services1 extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <div>
                <div>
            <div className="serv1img">
            
                <div >
                {this.props.children[0]}
                </div> 
                <div  className="paragraph">  
                <p> </p>         {/* <img src={Ser1} width="200px" height="100px"/> */}
            </div>
            </div>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            <p>asdkbvkjaxchvgfsdbvgjksdk;jcvkxjbvsdgjb</p>
            
            </div>
            {this.props.children[1]}
            
            </div>
        )
    }  
}
export default Services1;
