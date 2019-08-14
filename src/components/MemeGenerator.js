import React, { Component } from 'react';

class MemeGenerator extends Component {
  state = {
    topText: '',
    bottomText: '',
    randomImg: 'https://i.imgflip.com/26am.jpg',
    allMemeImgs: []
  };
  componentDidMount() {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(response => {
        const { memes } = response.data;
        this.setState({
          allMemeImgs: memes
        });
      });
  }
  handleClick = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.topText === '' || this.state.bottomText === '') {
      alert('please fill input');
      return;
    }
    let randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length);
    let randomMemeImg = this.state.allMemeImgs[randomIndex].url;
    this.setState({ randomImg: randomMemeImg });
  };
  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            onChange={this.handleClick}
            placeholder="toptext"
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            onChange={this.handleClick}
            placeholder="bottomtext"
          />
          <button>Gen</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="img" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;
