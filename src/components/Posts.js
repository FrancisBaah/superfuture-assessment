import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/postActions";

class Posts extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const postItems = this.props.posts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <h2>{post.body}</h2>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
});
export default connect(mapStateToProps, { fetchData })(Posts);
