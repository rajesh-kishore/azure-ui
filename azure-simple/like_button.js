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
.then(response => response.text())
.then(response => {
  this.setState({ testVariable: response }) 
});


      return this.testVariable;
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
