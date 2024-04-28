import { useEffect, useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdOutlineRestartAlt } from "react-icons/md";

function App() {
  const [array, setArray] = useState(Array(9).fill(null));
  const [sign, setSign] = useState("X");
  const [finish, setFinish] = useState(0);
  useEffect(() => {
    handleWinner();
  }, [array, sign]);

  const handleClick = (e) => {
    const { id } = e.target;
    const nextSquares = array.slice();

    if (nextSquares[id] == null) {
      if (sign == "X") {
        nextSquares[id] = "X";
        setSign("O");
      } else {
        nextSquares[id] = "O";
        setSign("X");
      }
      setArray(nextSquares);
    } else {
      toast.success(`All Ready Selected`, {
        theme: "dark",
        autoClose: 500,
      });
    }
  };

  const handleWinner = () => {
    if (array[0] != null && array[0] == array[1] && array[1] == array[2]) {
      toast.success(`Winner is ${array[0]}`, {
        theme: "dark",
        autoClose: 500,
      });
      setFinish(1);
    } else if (
      array[3] != null &&
      array[3] == array[4] &&
      array[4] == array[5]
    ) {
      toast.success(`Winner is ${array[3]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[6] != null &&
      array[6] == array[7] &&
      array[7] == array[8]
    ) {
      toast.success(`Winner is ${array[6]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[0] != null &&
      array[0] == array[3] &&
      array[3] == array[6]
    ) {
      toast.success(`Winner is ${array[0]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[1] != null &&
      array[1] == array[4] &&
      array[4] == array[7]
    ) {
      toast.success(`Winner is ${array[1]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[2] != null &&
      array[2] == array[5] &&
      array[5] == array[8]
    ) {
      toast.success(`Winner is ${array[2]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[0] != null &&
      array[0] == array[4] &&
      array[4] == array[8]
    ) {
      toast.success(`Winner is ${array[0]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[2] != null &&
      array[2] == array[4] &&
      array[4] == array[6]
    ) {
      toast.success(`Winner is ${array[2]}`, {
        theme: "dark",
      });
      setFinish(1);
    } else if (
      array[0] != null &&
      array[1] != null &&
      array[2] != null &&
      array[3] != null &&
      array[4] != null &&
      array[5] != null &&
      array[6] != null &&
      array[7] != null &&
      array[8] != null
    ) {
      toast.success(`Game Is Tie`, {
        theme: "dark",
      });
      setFinish(1);
    }
  };
  const handleRestart = () => {
    setFinish(0);
    setArray(Array(9).fill(null));
  };
  return (
    <div class="h-full w-full fixed bg-gray-600">
      <div className="text-center text-7xl font-semibold font-sans">
        <p className="text-teal-400 ">
          Tic
          <span className="text-yellow-400 mx-2">Tac</span>
          Toe
        </p>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col items-center h-full justify-center -mt-10">
        <div className="h-10 flex w-[18%]">
          <div className="w-[25%] font-bold text-2xl">
            <span className="text-teal-400 ">X</span>
            <span className="text-yellow-400 ml-1">O</span>
          </div>
          <div className="w-[50%] flex justify-center">
            <p className="shadow-sm shadow-black w-[90%] rounded-md text-lg text-center pt-1.5 text-gray-300">
              <span className=" text-xl font-bold">{sign}</span> Turn
            </p>
          </div>
          <div className="w-[25%] flex justify-end mt-1">
            <button onClick={handleRestart}>
              <MdOutlineRestartAlt className="p-2 text-4xl bg-gray-300 cursor-pointer shadow-sm shadow-black rounded-md" />
            </button>
          </div>
        </div>
        <div className="">
          <div className="flex my-2">
            <button
              onClick={handleClick}
              disabled={finish}
              id="0"
              className={`w-20 h-20 ${
                array[0] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[0]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="1"
              className={`w-20 h-20 ${
                array[1] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[1]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="2"
              className={`w-20 h-20 ${
                array[2] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[2]}
            </button>
          </div>
          <div className="flex my-2">
            <button
              onClick={handleClick}
              disabled={finish}
              id="3"
              className={`w-20 h-20 ${
                array[3] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[3]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="4"
              className={`w-20 h-20 ${
                array[4] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[4]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="5"
              className={`w-20 h-20 ${
                array[5] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[5]}
            </button>
          </div>
          <div className="flex my-2">
            <button
              onClick={handleClick}
              disabled={finish}
              id="6"
              className={`w-20 h-20 ${
                array[6] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[6]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="7"
              className={`w-20 h-20 ${
                array[7] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[7]}
            </button>
            <button
              onClick={handleClick}
              disabled={finish}
              id="8"
              className={`w-20 h-20 ${
                array[8] == "X" ? "text-teal-400" : "text-yellow-300"
              } text-3xl font-bold mx-1.5 bg-gray-800 rounded-md shadow-black shadow-md `}
            >
              {array[8]}
            </button>
          </div>
          {finish != 0 && (
            <div className="text-2xl mx-auto text-black font-bold w-[80%] p-1 bg-gray-300 text-center rounded-md">
              Game Over
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
