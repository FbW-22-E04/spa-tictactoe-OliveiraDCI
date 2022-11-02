import { useRef, useContext } from "react";
import { Context } from "../context/ContextProvider";

function Square(props) {
  const { player, setPlayer, board, setBoard, setWinner } = useContext(Context);
  const squareRef = useRef();

  const handleClick = (e) => {
    if (squareRef.current.innerHTML !== "") return;
    squareRef.current.innerHTML = `${player}`;
    if (player === "X") setPlayer("O");
    if (player === "O") setPlayer("X");
    setBoard((prev) => {
      return { ...prev, [props.squareNum]: player };
    });
  };

  if (
    (board[0] && board[0] === board[1] && board[0] === board[2]) ||
    (board[3] && board[3] === board[4] && board[3] === board[5]) ||
    (board[6] && board[6] === board[7] && board[6] === board[8]) ||
    (board[0] && board[0] === board[3] && board[0] === board[6]) ||
    (board[1] && board[1] === board[4] && board[1] === board[7]) ||
    (board[2] && board[2] === board[5] && board[2] === board[8]) ||
    (board[0] && board[0] === board[4] && board[0] === board[8]) ||
    (board[2] && board[2] === board[4] && board[2] === board[6])
  ) {
    document.querySelector(".status").style.visibility = "hidden";
    document.querySelector(".winner").style.visibility = "visible";
    setWinner(player === "X" ? "O" : "X");
    setPlayer("X");
    setBoard({
      0: "",
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
    });
  } else if (
    board[0] &&
    board[1] &&
    board[2] &&
    board[3] &&
    board[4] &&
    board[5] &&
    board[6] &&
    board[7] &&
    board[8]
  ) {
    setWinner("nobody ");
    document.querySelector(".winner").style.visibility = "visible";
  }
  return (
    <button className="square" onClick={handleClick} ref={squareRef}></button>
  );
}

export default Square;
