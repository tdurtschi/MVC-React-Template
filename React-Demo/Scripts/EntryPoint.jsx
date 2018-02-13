// 1. Create a React component that renders some HTML.
class Page extends React.Component {
    render() {
        return (<div className="react-container">
                    <h1>{"Hello world! The state.content variable is: " + this.props.content}</h1>
                    <a href="#" onClick={this.props.changeState}>Click to change the state.</a>
                </div>);
    }
}

// 2. Connect the React component (Page) to Redux state management.
// (The objects returned from both methods are combined and become 'this.props' in the React component).
const ReduxConnectedPage = ReactRedux.connect(
    // Map state to props
    function(state) {
        return state;
    },
    // Map dispatch to props
    function (dispatch) {
        return {
            changeState: function() { dispatch({ type: "EXAMPLE_ACTION" }); }
        };
    })
(Page);

// 3. Set up a Reducer function to update the state whenever an event occurs.
// 'state' is the current page state, and 'action' contains info about what event occurred.
const Reducer = function (state, action) {
    if (action.type === "EXAMPLE_ACTION") {
        return {
            content: "it changed " + state.number++ + " times", 
            number: state.number
        };
    }

    return { content: "some-random-state-info", number: 1 };
}

// 4. This is just boilerplate to get everything hooked up and rendered on the page.
const ReduxStore = Redux.createStore(Reducer);
$(document).ready(function() {
    ReactDOM.render(
		<ReactRedux.Provider store={ReduxStore}>
            <ReduxConnectedPage/>
        </ReactRedux.Provider>,
		document.getElementById('react-demo')
	);
});