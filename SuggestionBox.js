import React from "react"

export default class SuggestionBox extends React.Component {
  render = () => {
    const { suggestions, addSuggestion } = this.props
    return (
      <ul class="SuggestionBox">
        {suggestions.map(item =>
          {return (
            <li
              key={item.id}
              clasName="suggestionItem"
              onClick={() => {addSuggestion(item.id)}}
            >
              {item.name}
            </li>
        )})}
      </ul>
    )
  }
}