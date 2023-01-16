import React, { useState } from 'react'

class Hover1 extends React.Component {
  state = { hovering: false }
  mouseOver = () => this.setState({ hovering: true })
  mouseOut = () => this.setState({ hovering: false })
  render () {
    return (
      <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}

const useHover = () => {

  const [hovering, setHovering] = useState(false);
  const mouseOver = () => setHovering(true);
  const mouseOut = () => setHovering(false);

  const attrs = {
    onMouseOver: mouseOver,
    onMouseOut: mouseOut
  }

  return [hovering, attrs];

}

export default useHover;