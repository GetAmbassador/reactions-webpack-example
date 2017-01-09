/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import Dropdown from 'react-ions/lib/Dropdown'
import Button from 'react-ions/lib/Button'
import Badge from 'react-ions/lib/Badge'

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>React&#123;ions&#125;</h1>
        <p>Quick start page</p>

        <Button>Basic Button</Button>

        <Dropdown trigger={<Button>Dropdown</Button>}>
          <Badge icon='icon-check-1-1' theme='success' /><span>Dropdown content here.</span>
        </Dropdown>
      </div>
    )
  }
}
