import React, { Component } from "react";
import Candidates from "./components/Candidates";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      candidates: [],
      previousVotes: [],
      previousPercentages: [],

    };
    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(async () => {
      // fetch('http://localhost:8080/votes').then(res =>{
      //   return res.json().then(json => {
      //     console.log(json)
      //   })
      // })
      const res = await fetch("http://localhost:8080/votes");
      const json = await res.json();
      // con  sole.log(json); é substuido por: abaixo

      const previousVotes = this.state.candidates.map(({id, votes})=>{
        return { id, votes}
      })
      const previousPercentages = this.state.candidates.map(({id, percentage})=>{
        return { id, percentage}
      })
      
      this.setState({
        candidates: json.candidates,
        previousVotes,
        previousPercentages,
      });
    }, 1000);
  }

  render() {
    const { candidates, previousVotes, previousPercentages } = this.state;

    if (candidates.length === 0) {
      return <Spinner description="Carregando..." />;
    }
    return (
      <div className="container">
        {/* <Header title="Votação" /> */}
        <Header>Índice de popularidade em Hollywood</Header>
        <Candidates previousPercentages={previousPercentages} previousVotes={previousVotes} candidates={candidates} />
      </div>
    );
  }
}
