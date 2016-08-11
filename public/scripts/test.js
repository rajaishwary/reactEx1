class Main extends React.Component {
	   constructor(props) {
		   super(props);
		          this.state = {
			      data: [{
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
					    completed: true,
					    deleted: false,
					}],
	            };
	            this.addItem = this.addItem.bind(this);
	            this.handleDeleted = this.handleDeleted.bind(this);
	            this.handleCompleted = this.handleCompleted.bind(this);
	    }
	   
    addItem() {
    	const nextState = Object.assign({}, this.state);
	    const textVal =this.refs.textarea.refs.textarea.value;
	    const Id = Math.random();
    	nextState.data.unshift({id: Id, text: textVal, completed: false, deleted: false});    
    	this.setState(nextState);
    }  
    
    handleDeleted(id) {
		const nextState = Object.assign({}, this.state);
		let indexToDelete;
		nextState.data.map((item,index) => {
			if (item.id === id) {
				indexToDelete = index;
			}
		});
		if (typeof indexToDelete !== 'undefined') {
			nextState.data.splice(indexToDelete, 1);
		}
		this.setState(nextState);
	}

	handleCompleted(id) {
       const nextState = Object.assign({}, this.state);
       let indexToComplete;
	   nextState.data.map((item) => {
			if (item.id === id) {
				item.completed = true;
		    }
	    });
     this.setState(nextState);
	console.log(nextState.data);
	}
        render() {
        	const lists =  this.state;		     
					return (
						    <div>
			                    <Textbox ref="textarea" addItem={this.addItem} /> 
			                    <List lists = {lists} handleDeleted={this.handleDeleted.bind(this)} handleCompleted={this.handleCompleted.bind(this)}/>
						        </div>
						    );

		}
}


class Textbox extends React.Component {
	render() {
		return (
            <input ref="textarea" onKeyPress={(e) => {
              	if (e.key === 'Enter') {
              		this.props.addItem();
              		e.target.value="";
              	}
            }} />
		);
	}
}

class List extends React.Component {
	constructor(props) {
		super(props);
		this.getLi = this.getLi.bind(this);
	}
	getLi(list) {		
	}
	render() {
		var lists = this.props.lists.data;        
        console.log(lists);  
        
		return (
			<ul>
               {lists.map(list => <Li  key={list.id} list={list} onClick={() => { this.props.handleDeleted(list.id); }} onClick1={() => { this.props.handleCompleted(list.id); }}/>)}
            </ul>
			);
	}
}

const Li = ({ list, onClick, onClick1}) => (
	<li>
		{list.completed ? <strike>{list.text}</strike> : <span>{list.text}</span>} 
 		<Button  onClick={onClick1} text='Mark Complete' />
 		<Button onClick={onClick} text='Delete' />
	</li>
);

const Button = ({ onClick, text }) => (
	<button onClick={onClick}>
    	{text}
    </button>		
);

ReactDOM.render(
  <Main />,
  document.getElementById('parent')
);