import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('home')
@observer
class Index extends React.Component {
  componentDidMount() {
    const { home } = this.props
    console.log(home)
  }

  render() {
    return (
      <>
        <div>12</div>
      </>
    )
  }
}

export default Index
