import React from "react"

export default class UserName extends React.Component {
  render() {
    const { data, removeSuggestion } = this.props
    return (
      <div className="chip">
        <span className="name">{data.name}</span>
        <span className="closebtn" onClick={() => {removeSuggestion(data.id)}}>&times;</span>
      </div>
    )
  }
}