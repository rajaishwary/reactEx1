


class Exertwo extends React.Component {	
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
		};
		/*this.handleChange = this.handleChange.bind(this);*/
	}
	


changeColor(color) {
	this.setState({color});
} 
  

  render() {
  	const { color } = this.state;
  	return (
	    <div>
	      <Textarea changeColor={this.changeColor.bind(this)}/>
	      <Background color={color} />
	    </div>
    );
  }
}


class Textarea extends React.Component {

	handleChange(e) {
  	const color = e.target.value;
    this.props.changeColor(color);
  }

  render() {   
    return (
      <input onChange={this.handleChange.bind(this)} />  
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
  <Exertwo />,
  document.getElementById('parent')
);

