import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Card, Image, Icon } from "semantic-ui-react";
import * as actions from "../actions/posts";

class Posts extends Component {
  showPosts() {
    return this.props.posts.map(post => (
      <Card key={post.id} fluid>
        <Image
          onDoubleClick={this.addLike.bind(null, post.id)}
          src={post.image}
          fluid
        />
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

  addLike = id => {
    this.props.actions.addLike(id);
  };

  render() {
    return <div>{this.showPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
