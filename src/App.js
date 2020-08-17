import React from "react";
import {
  Button,
  Image,
  Divider,
  Header,
  Icon,
  Grid,
  Label,
} from "semantic-ui-react";

import Comments from "./comment.js";
import Buttons from "./buttons.js";

import ato from "./ato.jpg";

function App() {
  return (
    <div style = {{backgroundColor : "white"}}>
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
        <Header as="h4">
          <Icon name="comments" style = {{color : "black"}}/>
          Comments
        </Header>
      </Divider>

      <Comments />
      <Divider horizontal>
        <Header as="h4">
          <Icon name="share alternate" />
          Contact
        </Header>
      </Divider>
      <br />
      <div>
        <Grid centered>
          <Button circular color="facebook" size="small" icon="facebook" />
          <Button circular color="twitter" size="small" icon="twitter" />
          <Button
            circular
            color="instagram"
            size="small"
            icon="instagram"
            onClick={() =>
              window.open("https://www.instagram.com/j_e_heeeeee/")
            }
          />
          <Button circular color="youtube" size="small" icon="youtube" />
        </Grid>
      </div>
    </div>
  );
}

export default App;
