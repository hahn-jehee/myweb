import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";

import atoface from "./atoface.jpg";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={atoface} />
        <Comment.Author as="a">방문자</Comment.Author>
        <Comment.Metadata>
          <div>Today</div>
        </Comment.Metadata>
        <Comment.Text>{detail.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputcontent: "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group style={{ marginLeft: "530px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment content={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder="Thank you for the comment"
            onChange={(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() =>
              this.setState((prevState) => {
                return {
                  commentsList: [
                    ...prevState.commentsList,
                    this.state.inputContent,
                  ],
                  inputContent: "",
                };
              })
            }
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
