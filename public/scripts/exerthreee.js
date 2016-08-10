class Exerthree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
			data: [],
		};
		this.changeColor = this.changeColor.bind(this);
	}
 changeColor() {
 	// console.log(this.refs);
 	const color=this.refs.textarea.refs.textarea.value;
 	// console.log(val);
	this.setState({color});
}

completeTodo(id) {
	const nextState = Object.assign({}, this.state);
	nextState.data.map(item => {
		if (item.id === id) {
			item.completed = true;
		}
	});
	this.setState(nextState);
}

deleteTodo() {}

	render() {
		const { color } = this.state;
		return (
			
			<div>
				<Background color={color}/>
				<Textarea ref="textarea" changeColor={this.changeColor} />
				{/*<List data={this.state.data} completeTodo={this.completeTodo} deleteTodo={this.deleteTodo} />*/}
				{/*<Button onClick={() => { this.changeColor(); }}/>*/}
			</div>
			);
	} 
}

class Textarea extends React.Component {

	render() {
		return (
              <input ref="textarea" onKeyPress={(e) => {
              	if (e.key === 'Enter') {
              		this.props.changeColor();
              	}
              }} /> 
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