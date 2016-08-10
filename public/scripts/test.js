

class Main extends React.Component {
	   constructor(props) {
		   super(props);
		          this.state = {
			      data: [],
	            };
	    }
	var lists = [{
    id: 1,
    text: "Do something ",
    completed: false,
    deleted: false,
},{
    id: 2,
    text: "Do something 2",
    completed: false,
    deleted: false,
},{
    id: 3,
    text: "Do something 3",
    completed: false,
    deleted: false,
},{
    id: 4,
    text: "Do something 4",
    completed: false,
    deleted: false,
},{
    id: 5,
    text: "Do somethingf 5",
    completed: false,
    deleted: false,
}]    
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
	
	render() {
		return (
              <ul>
           
               </ul>
			);
	}
}

ReactDOM.render(
  <Main />,
  document.getElementById('parent')
);