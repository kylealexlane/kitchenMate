import React from "react";
import styled, { withTheme } from "styled-components";
import { Square } from "../Square"
import { Button } from 'antd';


const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap
  width: 300px;
  align-self: center;
`;

const RestartButton = styled(Button)`
  margin-top: 24px;
`;

const WrapperCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: "100%";
  flex-direction: column;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: Array(9).fill(-1),
      message: "Click an open box",
      oTurn: true,
      winner: -1,
      turnNum: 1,
    };
    this.restartGame = this.restartGame.bind(this);
    this.displayWinnerMessage = this.displayWinnerMessage.bind(this);
  }

  changeVal(index, val){
    if(val !== -1){
      this.setState({ message: "Please click an empty box"});
      return(false);
    } else {
      let newValues = this.state.values;
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({
        values: newValues,
        turnNum: this.state.turnNum+1,
        oTurn: !this.state.oTurn,
      });
      return(true);
    }
  }

  checkWinner(){
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const v = this.state.values;
    for(let i = 0; i<wins.length; i++){
      const winCombo = wins[i];
      if((v[winCombo[0]] !== -1) && (v[winCombo[0]] === v[winCombo[1]] && v[winCombo[0]] === v[winCombo[2]])) {
        this.setState({
          message: "There is a winner!!!!",
          winner: v[winCombo[0]]
        });
        return true;
      }
    }
    for(let i = 0; i<v.length; i++){
      if(v[i] === -1){
        return false;
      }
    }
    this.setState({
      message: "The game is a draw",
    });
    return false;
  }

  handleClick(index, val){
    if(this.state.winner === -1 && this.changeVal(index, val)){
      this.checkWinner();
    }
  }

  displayWinnerMessage(){
    if(this.state.winner===1){
      return("Xs have won!!")
    }
    if(this.state.winner===2){
      return("Os have won!!")
    }
    return("")
  }

  restartGame() {
    this.setState({
      values: Array(9).fill(-1),
      message: "Click an open box",
      oTurn: true,
      winner: -1,
      turnNum: 1,
      });
  }

  render() {
    const v = this.state.values;
    const RenderSquare = ({ index }) => (
      <Square val={v[index]} index={index} handleClick={(i, v) => this.handleClick(i, v)}/>
    );
    return (
      <WrapperCenter>
        <h1>{this.state.message}</h1>
        <h2>{this.displayWinnerMessage()}</h2>
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
        <Row>
          <RenderSquare index={0}/>
          <RenderSquare index={1}/>
          <RenderSquare index={2}/>
        </Row>
        <Row>
          <RenderSquare index={3}/>
          <RenderSquare index={4}/>
          <RenderSquare index={5}/>
        </Row>
        <Row>
          <RenderSquare index={6}/>
          <RenderSquare index={7}/>
          <RenderSquare index={8}/>
        </Row>
        <RestartButton onClick={this.restartGame}>Restart</RestartButton>
      </WrapperCenter>
    );
  }
}

export default withTheme(Board);
