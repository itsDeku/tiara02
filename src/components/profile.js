import React from "react"

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      postpoxWidth : "",
    }
    this.myInput = React.createRef()
  }

  componentDidMount () {
    console.log(this.myInput.current.offsetWidth)
    this.setState({postpoxWidth : this.myInput.current.offsetWidth})
  }

  render() {
    console.log(this.state.postpoxWidth);
    
    return (
      <div className="profile">
      <div className="profile-contants">
        <div className="username"><p>Mysterios_soul</p></div>
        <div className="tags">#artist #blooger</div>
        <div className="bio-block mt-2">
          <div className="bio-quotes-left"><span className="iconify " data-inline="false" data-icon="clarity:block-quote-line" style={{fontSize: 15+'px'}}></span></div>
          <div className="bio-text">just trying to change the world noting to serious</div>
          <div className="bio-quotes-right"><span className="iconify " data-inline="false" data-icon="clarity:block-quote-line" style={{fontSize: 15+'px'}}></span></div>
        </div>
        <div className="profile-pic"><img src="./user.png" style={{width:100+'%', height:100+'%'}}></img></div>
        <div className="posts-data">
          <div className="posts">
            <div className="posts-no">{this.state.postpoxWidth}</div>
            <div className="posts-text">Posts</div>
          </div>
          <div className="followers">
            <div className="followers-no">150</div>
            <div className="followers-text">followers</div>
          </div>
          <div className="following">
            <div className="following-no">300</div>
            <div className="following-text">following</div>
          </div>
          <div className="edit-button"><span className="edit-text">edit</span></div>
        </div>
      </div>
      <div className="profile-posts">
        <div ref={this.myInput} className="posts-box" style={{height:this.state.postpoxWidth}}>
          <span className="iconify add-posts" data-inline="false" data-icon="bi:plus-circle"></span>
        </div>
      </div>
    </div>
    )
  }
}


export default Profile