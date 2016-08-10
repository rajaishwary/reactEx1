


class Parent extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	// divStyle = {
	// 	background-color: 'white';
	// }

  handleClick() {

    this.setState({
    	color: 'red',
    });
  }

  render() {
  	// const color = this.state.color;
  	const { color } = this.state;
  	return (
	    <div>
	      <Button onClick={() => { this.handleClick(); }}/>
	      <Background color={color} />
	    </div>
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

class Background extends React.Component{

	render() {
		return (
			<div style={{
				backgroundColor: this.props.color,
			}}> hello </div>
		);
	}
}

ReactDOM.render(
  <Parent />,
  document.getElementById('parent')
);

