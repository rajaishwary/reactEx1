class Exerthree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
		};
		this.handleClick = this.handleClick.bind(this);
	}

  }

    
    handleClick(color) {
    	/*const val = this.refs.textarea.value;
    	console.log(val);*/
    	this.setState({color});

    }

	render() {
		return (
			const {color} = this.state;
			<div>
			<Background color={color}/>
			<Textarea />
			<Button onClick={this.handleChange.bind(this)}/>
			</div>
			);
	} 
}

class Textarea extends React.Component {

    handleChange(e){
    	const color = e.target.value;
    	this.props.handleClick(color);
        
    }
    
	render() {
		return (
              <input onChange={this.handleChange.bind(this)}/> 
			);
	}
}



class Background extends React.Component {
    render() {
    	return (
             <div style={{
				backgroundColor: this.props.color,
			}}> hello </div>
    		);
    }

}


class Button extends React.Component {
    
   
	render() {
		return (
             <button onClick={this.props.onClick}>
             	Click
             </button>
			);
	}
}

ReactDOM.render(
  <Exerthree />,
  document.getElementById('parent')
);
