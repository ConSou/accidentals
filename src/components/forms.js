import React, { Component } from 'react';

class Forms extends Component {
  constructor(props){
    super(props);

    this.tempState = {
      note: 0,
      scale: 0,
      modifier: 0
    }

    this.state = {
      note: 0,
      scale: 0
    }

  }

  setNote(e){
    this.tempState.note = Number(e.target.value);
    console.log(this.tempState);
  }

  setScale(e){
    this.tempState.scale = e.target.value;
    console.log(this.tempState)
  }

  setModifier(e){
  this.tempState.modifier = Number(e.target.value);
  console.log(this.tempState);
  }

  handleClick(e){
    e.preventDefault();
    const finalNote = this.tempState.note + this.tempState.modifier;
    this.setState({note: finalNote, scale: this.tempState.scale})
    console.log(finalNote)
  }

  render() {
    return (
      <div>
          <form>
          <label>Note:</label>
              <select id="note" onChange={(e) => this.setNote(e)}>
                <option value="0" >C</option>
                <option value="2">D</option>
                <option value="4">E</option>
                <option value="5">F</option>
                <option value="7">G</option>
                <option value="9">A</option>
                <option value="11">B</option>
              </select>
          <label>Modifier:</label>
              <select name="modifier" onChange={(e) => this.setModifier(e)}>
                <option value="0"> </option>
                <option value="1">#</option>
                <option value="-1">b</option>
              </select>

          <label>Scale:</label>
              <select name="scale" onChange={(e) => this.setScale(e)}>
                <option value="0">Major</option>
                <option value="1">Minor</option>
              </select>
              <button type="submit" onClick={(e)=> {this.handleClick(e)}}>Submit</button>
          </form>
      </div>
    );
  }
}

export default Forms;
