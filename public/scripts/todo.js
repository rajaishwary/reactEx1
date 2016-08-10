
const data = require('json!./data.json');

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: 'blue',
			data: [],
		};
	}

	render() {
		return (
			<div>
               <Textbox /> 
               <List />
			</div>
			);

	}
}

class Textbox extends React.Component {
	render() {
		return (
            <input />
			);
	}
}


class List extends React.Component {
	loadListFromJson() {
	  $.ajax({
      url: "data",
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

	}
	render() {
		return (
              <ul>
                 {this.loadListFromJson}
               </ul>
			);
	}
}

ReactDOM.render(
  <Main />,
  document.getElementById('parent')
);