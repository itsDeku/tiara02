import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import PostComponent from './subcomponents/postComponent'

import postsdata from '../data/postsdata' 

class Home extends React.Component {
  constructor() {
    super()  
  }

  state = {
    items: Array.from({length:5}),
    hasMore: true
  };

  fetchMoreData = () => {
    let postslengts = 5

    if (this.state.items.length >= 50) {
      this.setState({ hasMore: false });
      return;
    }
    if (postsdata[0].totalposts - this.state.items.length < 5){
     postslengts = postsdata[0].totalposts - this.state.items.length
     this.setState({ hasMore: false})
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(Array.from({ length: postslengts }))
      });
    }, 500);
  };

  render() {
    return (
      <div id="posts" style={{ paddingBottom: 45 }}>
        <div className="horizontalScroll">
          <div className="parentScroll scrollmenu">
            <span className="scrollButton parentButton-1">hahahaah</span>
            <span className="scrollButton parentButton-2">photography</span>
            <span className="scrollButton parentButton-3">fasion</span>
            <span className="scrollButton parentButton-4">painting</span>
            <span className="scrollButton parentButton-5">painting</span>
          </div>
          <div className="childScroll scrollmenu ">
            <span className="scrollButton childButton-1">painting</span>
            <span className="scrollButton childButton-2">photography</span>
            <span className="scrollButton childButton-3">fasion</span>
            <span className="scrollButton childButton-4">painting</span>
          </div>
        </div>
        <InfiniteScroll
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {this.state.items.map((i, index) => (
            <PostComponent username={postsdata[index].username} profilePic={postsdata[index].profilePic} postsImg={postsdata[index].postImg} liked={postsdata[index].liked} likes={postsdata[index].likes} />
          ))}
        </InfiniteScroll>
        
      </div>
    )
  }

}
export default Home 