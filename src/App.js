import React from "react";
import firebase from "firebase";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Label,
  Input,
  Menu,
  Component,
} from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";
import auth from "./fb.js";

import ato from "./ato.jpg";

var provider = new firebase.auth.GoogleAuthProvider();

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName : "Visitor"
    }
  }
  render () {
    return (
      <div style={{ backgroundColor: "brown" }}>
        <Menu inverted widths={8}>
          <Menu.Item> </Menu.Item>
          <Menu.Item> </Menu.Item>
          <Menu.Item> </Menu.Item>
          <Menu.Item> </Menu.Item>
          <Menu.Item> </Menu.Item>
          <Menu.Item> </Menu.Item>
          <Menu.Item
            onClick={() => {
              firebase
                .auth()
                .signInWithPopup(provider)
                .then(function (result) {
                  // This gives you a Google Access Token. You can use it to access the Google API.
                  var token = result.credential.accessToken;
                  // The signed-in user info.
                  var user = result.user;
                  return user.displayName
                  this.setState({userName : user.displayName})
                  // ...
                }).then(result => this.setState({userName : result}))
                .catch(function (error) {
                  // Handle Errors here.
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  // The email of the user's account used.
                  var email = error.email;
                  // The firebase.auth.AuthCredential type that was used.
                  var credential = error.credential;
                  // ...
                });
            }}
          >
            {" "}
            Login{" "}
          </Menu.Item>
           <Menu.Item>{`${this.state.userName}`} </Menu.Item>
        </Menu>
        <br />
        <Divider horizontal>
          <Icon name="quote left" style={{ color: "white" }} centered />
          <h3 style={{ color: "white", textAlign: "center" }}> Hahn - Jehee </h3>
          <br />
          <Icon name="quote right" style={{ color: "white" }} />
        </Divider>
        <br />

        <Grid centered>
          <Grid.Row>
            <Image src={ato} style={{ width: 600, height: 600 }} centered />
          </Grid.Row>

          <Grid.Row>
            <Buttons />
          </Grid.Row>
        </Grid>
        <br />

        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="comments" style={{ color: "white" }} />
            Comments
          </Header>
        </Divider>

        <Grid centered columns = {3} >
        <Grid.Column>

        <Comments userName = {this.state.userName}/> </Grid.Column></Grid>
        <Divider horizontal>
          <Header as="h4" style={{ color: "white" }}>
            <Icon name="share alternate" style={{ color: "white" }} />
            Contact
          </Header>
        </Divider>
        <br />
        <div>
          <Grid centered>
            <Button
              circular
              color="facebook"
              size="small"
              icon="facebook"
              onClick={() => alert("준비 중입니다")}
            />
            <Button
              circular
              color="twitter"
              size="small"
              icon="twitter"
              onClick={() => alert("준비 중입니다")}
            />
            <Button
              circular
              color="instagram"
              size="small"
              icon="instagram"
              onClick={() =>
                window.open("https://www.instagram.com/j_e_heeeeee/")
              }
            />
            <Button
              circular
              color="youtube"
              size="small"
              icon="youtube"
              onClick={() => alert("준비 중입니다")}
            />
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
