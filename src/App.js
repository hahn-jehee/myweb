import React from 'react';
import {Image, Comment, Form, Button, Header} from 'semantic-ui-react'

import ato from "./ato.jpg"
import atoface from "./atoface.jpg"

class Comments extends React.Component{
  render(){
    return(  <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>

        <Comment>
          <Comment.Avatar src={atoface} />
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

        <Form reply>
          <Form.TextArea />
          <Button content='Add Reply' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>)
  }
}

function App() {
  return (
    <div>
    <Image src = {ato} style = {{"width": 400, "height":400}} centered />
    <Comments />
    </div>
  );
}

export default App;
