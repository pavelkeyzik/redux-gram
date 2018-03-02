import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";

class Posts extends Component {
  showPosts() {
    return this.props.posts.map(post => (
      <Card fluid>
        <Image src={post.image} fluid />
        <Card.Content>
          <Card.Header>{post.author}</Card.Header>
          <Card.Meta>{post.title}</Card.Meta>
          <Card.Description>{post.text}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="heart" /> {post.likes} Likes
          </a>
        </Card.Content>
      </Card>
    ));
  }

  render() {
    return <div>{this.showPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(Posts);
