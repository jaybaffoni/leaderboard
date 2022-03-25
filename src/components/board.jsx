import React, {useState, useEffect} from "react"
import { getRankings } from "../services/api";
import Ranking from "./ranking";

const Board = (props) => {

  //state variables here
  const [rankings, setRankings] = useState([]);

  //runs on first load
  useEffect(() => {
      setRankings(getRankings());
  }, []);

  return rankings.map((rank, i) => <Ranking key={i} number={i+1} data={rank}/>);
};

export default Board;
