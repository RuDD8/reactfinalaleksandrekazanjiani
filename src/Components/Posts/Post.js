import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

const arr1 = [];
const arr2 = [];
const Header = (props) => {
    return (
        <h3>Post {props.header}</h3>
    );
}

const Text = (props) => {
    return (
        <p>The description of a Post {props.text}</p>
    )
}
const Poster = () =>{
    
    return(  
        
        <Fragment>
        <div>{arr1[1]}{arr2[1]}</div>
        <div>{arr1[2]}{arr2[2]}</div>
        <div>{arr1[3]}{arr2[3]}</div>
        <div>{arr1[4]}{arr2[4]}</div>
        <div>{arr1[5]}{arr2[5]}</div>
        <div>{arr1[6]}{arr2[6]}</div>
        <div>{arr1[7]}{arr2[7]}</div>
        <div>{arr1[8]}{arr2[8]}</div>
        <div>{arr1[9]}{arr2[9]}</div>
        <div>{arr1[10]}{arr2[10]}</div>
        </Fragment>
    )
}

export class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 'Click - or + ',
            arr: []
        }
    }
    handlePlusClick = () => {
        if (typeof(this.state.count) === 'string'){
            this.setState({ count: 0 });
        } 
        else{
            this.setState({ count: this.state.count + 1 })
            arr1.push(<Header header={this.state.count}/>)
            arr2.push(<Text text={this.state.count}/>)
            if (this.state.count === 10){
                this.setState({ count: 0 });
            }
        }
        
    }
    handleMinusClick = () => {
        if (typeof(this.state.count) === 'string') {
            this.setState({ count: 0 });
        }  
        else{
            this.setState({ count: this.state.count - 1})
            const i = arr1.indexOf(this.state.count);
            arr1.splice(i,1);
            const e = arr2.indexOf(this.state.count);
            arr2.splice(e,1);
            if (this.state.count === -10){
                this.setState({ count: 0 });
            }
        }
        
    }
    render(){
        return (
            <div>
                <button onClick={this.handleMinusClick}>-</button>
                <input type="text" value={this.state.count}/>
                <button onClick={this.handlePlusClick}>+</button>
                <Poster />
            </div>
            
        );
    }
}
export default Posts;
