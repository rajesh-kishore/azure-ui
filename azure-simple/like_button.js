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
.then ( this.setState({ testVarible: response }))
.catch(err => { console.log(err); 
});

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
