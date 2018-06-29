import React from "react"
import UserName from "./username"

export default class SelectedItems extends React.Component {
  render = () => {
    const { dataList } = this.props
    return (
      <div>
        {dataList.map((item) => {
          if (item.selected) {
            return <UserName data={item} />
          }
          return null
        })}
      </div>
    )
  }
}