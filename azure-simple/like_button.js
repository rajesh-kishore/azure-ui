'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
 
state = { testVarible: "this is a test" }; 
constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {

fetch("https://trailrk2functionapp.azurewebsites.net/api/httptriggerjava1?name=rajesh kishore", {
  "method": "GET"
})
.then(response => response.json())
.then(response => {
  this.setState({
    testVariable: response
  })
})
.catch(err => { console.log(err); 
});

console.log(this.testVarible);
console.log("h");

      return this.testVarible;
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
