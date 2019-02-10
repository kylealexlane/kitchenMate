import React from "react";
import styled, { withTheme } from "styled-components";
import { Square } from "../Square"

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap
  width: 300px;
`;

const RestartButton = styled.button`
  padding: 16px;
  border-width: 2px;
  border-color: #000;
  background-color: #fff;
  border-radius: "100%";
  margin: 16px;
`;

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: new Array(9).fill(-1),
      message: "Click any box to start!!",
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      oTurn: true,
      winner: -1,
      turnNum: 1,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
      xTurn: true,
=======
      oTurn: true,
>>>>>>> cf218b0... Added turn tracking.
      winner: -1,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
=======
      oTurn: true,
>>>>>>> cf218b0... Added turn tracking.
      winner: -1,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
=======
      oTurn: true,
>>>>>>> cf218b0... Added turn tracking.
      winner: -1,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
=======
      oTurn: true,
>>>>>>> cf218b0... Added turn tracking.
      winner: -1,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
    };
    this.restart = this.restart.bind(this);
    this.winnerMessage = this.winnerMessage.bind(this);
  }

  changeVal(index, val){
    if(val !== -1){
      this.setState({ message: "Please click an empty box"});
      return(false);
    } else {
      let newValues = this.state.values;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({
        values: newValues,
        turnNum: this.state.turnNum+1,
        oTurn: !this.state.oTurn,
      });
<<<<<<< HEAD
=======
      this.state.xTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({ values: newValues});
      this.setState({ xTurn: !this.state.xTurn });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
<<<<<<< HEAD
      this.setState({ values: newValues});
      this.setState({ oTurn: !this.state.oTurn });
>>>>>>> cf218b0... Added turn tracking.
=======
      this.setState({
        values: newValues,
        turnNum: this.state.turnNum+1,
        oTurn: !this.state.oTurn,
      });
>>>>>>> c612210... Added turn number
=======
      this.state.xTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({ values: newValues});
      this.setState({ xTurn: !this.state.xTurn });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
<<<<<<< HEAD
      this.setState({ values: newValues});
      this.setState({ oTurn: !this.state.oTurn });
>>>>>>> cf218b0... Added turn tracking.
=======
>>>>>>> c612210... Added turn number
=======
      this.state.xTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({ values: newValues});
      this.setState({ xTurn: !this.state.xTurn });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
<<<<<<< HEAD
      this.setState({ values: newValues});
      this.setState({ oTurn: !this.state.oTurn });
>>>>>>> cf218b0... Added turn tracking.
=======
=======
>>>>>>> c612210... Added turn number
      this.setState({
        values: newValues,
        turnNum: this.state.turnNum+1,
        oTurn: !this.state.oTurn,
      });
<<<<<<< HEAD
>>>>>>> c612210... Added turn number
=======
      this.state.xTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({ values: newValues});
      this.setState({ xTurn: !this.state.xTurn });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      this.state.oTurn ? newValues[index] = 2 : newValues[index] = 1;
      this.setState({ values: newValues});
      this.setState({ oTurn: !this.state.oTurn });
>>>>>>> cf218b0... Added turn tracking.
=======
>>>>>>> c612210... Added turn number
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c612210... Added turn number
=======
>>>>>>> c612210... Added turn number
=======
>>>>>>> c612210... Added turn number
=======
>>>>>>> c612210... Added turn number
        this.setState({
          message: "There is a winner!!!!",
          winner: v[winCombo[0]]
        });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
        this.setState({ message: "There is a winner!!!!"});
        this.setState({ winner: v[winCombo[0]] });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
        this.setState({ message: "There is a winner!!!!"});
        this.setState({ winner: v[winCombo[0]] });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
        this.setState({ message: "There is a winner!!!!"});
        this.setState({ winner: v[winCombo[0]] });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
=======
        this.setState({ message: "There is a winner!!!!"});
        this.setState({ winner: v[winCombo[0]] });
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
>>>>>>> c612210... Added turn number
      }
    }
  }

  handleClick(index, val){
    if(this.state.winner === -1 && this.changeVal(index, val)){
      this.checkWinner();
    }
  }

  winnerMessage(){
    if(this.state.winner===1){
      return("Xs have won!!")
    }
    if(this.state.winner===2){
      return("Os have won!!")
    }
    return("")
  }

  restart() {
    this.setState({
      message: "Game has been restarted",
      values: new Array(9).fill(-1),
      winner: -1,
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      oTurn: true,
      turnNum: 1
<<<<<<< HEAD
=======
      xTurn: true,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      oTurn: true,
<<<<<<< HEAD
>>>>>>> cf218b0... Added turn tracking.
=======
      turnNum: 1
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      oTurn: true,
<<<<<<< HEAD
>>>>>>> cf218b0... Added turn tracking.
=======
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      oTurn: true,
<<<<<<< HEAD
>>>>>>> cf218b0... Added turn tracking.
=======
      turnNum: 1
>>>>>>> c612210... Added turn number
=======
      xTurn: true,
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
      oTurn: true,
>>>>>>> cf218b0... Added turn tracking.
=======
      turnNum: 1
>>>>>>> c612210... Added turn number
    })
  }

  render() {
    const v = this.state.values;
    return (
      <React.Fragment>
        <h1>{this.state.message}</h1>
        <h2>{this.winnerMessage()}</h2>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
=======
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
        <h2>Turn: {this.state.oTurn ? "o" : "x"}</h2>
>>>>>>> cf218b0... Added turn tracking.
=======
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
>>>>>>> c612210... Added turn number
=======
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
        <h2>Turn: {this.state.oTurn ? "o" : "x"}</h2>
>>>>>>> cf218b0... Added turn tracking.
=======
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
>>>>>>> c612210... Added turn number
=======
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
        <h2>Turn: {this.state.oTurn ? "o" : "x"}</h2>
>>>>>>> cf218b0... Added turn tracking.
=======
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
>>>>>>> c612210... Added turn number
=======
>>>>>>> e5794e7... Basics done and functionality complete. Square and board finished.
=======
        <h2>Turn: {this.state.oTurn ? "o" : "x"}</h2>
>>>>>>> cf218b0... Added turn tracking.
=======
        <h2>To Play: {this.state.oTurn ? "o" : "x"}</h2>
        <h2>Turn Number: {this.state.turnNum}</h2>
>>>>>>> c612210... Added turn number
        <Row>
          <Square val={v[0]} index={0} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[1]} index={1} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[2]} index={2} handleClick={(i, v) => this.handleClick(i, v)}/>
        </Row>
        <Row>
          <Square val={v[3]} index={3} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[4]} index={4} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[5]} index={5} handleClick={(i, v) => this.handleClick(i, v)}/>
        </Row>
        <Row>
          <Square val={v[6]} index={6} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[7]} index={7} handleClick={(i, v) => this.handleClick(i, v)}/>
          <Square val={v[8]} index={8} handleClick={(i, v) => this.handleClick(i, v)}/>
        </Row>
        <RestartButton onClick={this.restart}>Restart</RestartButton>
      </React.Fragment>
    );
  }
}

export default withTheme(Board);
