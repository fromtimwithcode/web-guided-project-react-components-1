import React from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  const { cohort, instructor, happy, week } = props;
  // JSX (javascript templating agent)
  return (
    // const div = document.createElement('div);
    // div.classList.add('container');
    <div className='container'>
      <h1 id='mainHeading'>Welcome to React, web{cohort}</h1>
      <p>{instructor} welcomes you!</p>
      <div className='container'>
        <h1>Welcome to React, Web {cohort}</h1>
        {happy ? <div>Very happy!</div> : <div>It must be Monday, eh?</div>}
        <div>It is week {week}</div>
        <input type="text" />
        <button>I'm a button!</button>
      </div>
    </div>
  )
}

render(
  // App({cohort: 37})
  <App cohort='46' instructor='Casey' happy={true} week={2}/>,
  document.querySelector('#root')
)
