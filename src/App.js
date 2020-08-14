import React from 'react';
import {Image} from 'semantic-ui-react'

import Comments from './comment.js'

import ato from "./ato.jpg"

function App() {
  return (
    <div>
    <Image src = {ato} style = {{"width": 400, "height":400}} centered />
    <Comments />
    </div>
  );
}

export default App;
