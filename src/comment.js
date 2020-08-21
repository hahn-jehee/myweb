import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";
import moment from "moment";

import atoface from "./atoface.jpg";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={atoface} />
        <Comment.Author as="a"  style = {{color : "white", marginLeft : "8px"}}>{detail.info.userName}</Comment.Author>
        <Comment.Metadata>
          <div  style = {{color : "white"}}>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text  style = {{color : "white", marginLeft : "43px"}}>{detail.info.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputcontent: "",
      inputTime: "",
      userName : "",
      commentsList: [],
    };
  }

  render() {
    console.log(this.state.commentsList);
    return (
      <Comment.Group>
        <Header as="h3" dividing style = {{color : "white"}}>
          Comments
        </Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment info={comments} />
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
            onClick={() => {
              if (this.state.inputContent != "") {
                this.setState((prevState) => {
                  return {
                    commentsList: [
                      ...prevState.commentsList,
                      {
                        content: this.state.inputContent,
                        time: moment().format("YYYY년 MM월 DD일 HH시 mm분"), userName : this.props.userName
                      },
                    ],
                    inputContent: "",
                  };
                });
              } else {
                alert("내용을 입력해주세요");
              }
            }}
          />
        </Form>
      </Comment.Group>
    );
  }
}

export default Comments;
