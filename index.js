import React from "react"
import SuggestionBox from "./SuggestionBox"
import SelectedItems from "./selectedItems"
import UserName from "./username"
import "dumbComponents/Desktop/App/styles.css"

class Chip extends React.Component {
  constructor() {
    super()
    this.state = {
      dataList: [
{name: "marina augus", selected: false, id:1},
{name: "nick nick", selected: false, id:2},
{name: "john john", selected: false, id:3},
{name: "megan megan", selected:false, id:4},
{name: "marina marina", selected: false, id: 8},
{name: "maria mario", selected: false, id:9},
{name: "maria augusta", selected: false, id:10},
{name: "maria lin", selected: false, id:11},
{name: "marin adm", selected: false, id:18},
{name: "marin ladvn", selected: false, id: 19},
{name: "marina ksjnvjkdsn", selected: false, id: 20},
{name: "marina sddjvnds", selected: false, id:22},
{name: "marina sdjkvdsv", selected: false, id: 23},
],
      query: "",
      suggestions: [],
    }
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown)
  }

  onKeyDown = (e) => {
    if (e.keyCode === 8 && this.lastId) {
      this.addSuggestion(this.lastId)
    }
  }

  handleInputChange = () => {
    const searchValue = this.search.value
    const { dataList } = this.state
    let updatedData = dataList.filter(item => item.name.indexOf(searchValue) !== -1 && !item.selected)
    this.setState({
      query: this.search.value,
      suggestions: updatedData,
      showSuggestion: true,
    })
  }

  addSuggestion = (index) => {
    const { dataList } = this.state
    const updatedData = []
    dataList.forEach((item) => {
      const updatedItem = { ...item }
      if (item.id === index) {
        updatedItem.selected = true
      }
      updatedData.push(updatedItem)
    })
    this.setState({
      showSuggestion: false,
      dataList: updatedData,
      suggestions: [],
      query: "",
    }, () => {this.search.value = ""})
  }

  removeSuggestion = (index) => {
    const { dataList } = this.state
    const updatedData = []
    dataList.forEach((item) => {
      const updatedItem = { ...item, }
      if (item.id === index) {
        updatedItem.selected = false
      }
      updatedData.push(updatedItem)
    })
    this.setState({
      showSuggestion: false,
      dataList: updatedData,
      suggestions: [],
      query: "",
    }, () => {
      if (!(this.state.dataList.find((item) => item.selected === true))) {
        this.lastId = index
      } else {
        this.lastId = null
      }
    })
  }

  render() {
    const { suggestions, dataList } = this.state
    return (
      <div className="searchContainer">
        <div className="searchedData">
          {dataList.map((item) => {
            if (item.selected) {
              return <UserName data={item} removeSuggestion={this.removeSuggestion}/>
            }
            return null
          })}
          <input
            className="inputData"
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </div>
        <SuggestionBox
          suggestions={suggestions}
          addSuggestion={this.addSuggestion}
        />
      </div>
    )
  }
}

export default Chip