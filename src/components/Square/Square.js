import React from "react";
import styled, { withTheme } from "styled-components";
import donut from "../../assets/donut.svg"
import cs from "../../assets/cinnamon_sticks.svg"


const SquareButton = styled.button`
  width: 100px;
  height: 100px;
  border-width: 2px;
  border-color: #000;
`;


const InnerImage = styled.img`
  width: 100%;
  height: 100%;
`;

const EmptyDiv = styled.div`
  width: 100%;
  height: 100%;
`;

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: this.props.index ? this.props.index : 0,
      value: this.props.val ? this.props.val : -1,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.val){
      this.setState({ value: nextProps.val });
    }
    if(nextProps.index){
      this.setState({ index: nextProps.index });
    }
  }

  renderImage(v) {
    if(v===2){
      return(
        <InnerImage src={donut}/>
      );
    } else if (v===1){
      return(
        <InnerImage src={cs}/>
      );
    } else {
      return(
        <EmptyDiv />
      );
    }
  }


  render() {
    const v = this.state.value;
    return (
      <React.Fragment>
        <SquareButton onClick={() => this.props.handleClick(this.state.index, this.state.value)}>
          {this.renderImage(v)}
        </SquareButton>
      </React.Fragment>
    );
  }
}

export default withTheme(Square);
