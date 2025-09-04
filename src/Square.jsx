export default function Square({ value, onSquareClick }) {
  return (
    <button
      onClick={onSquareClick}
      style={{
        width: "60px",
        height: "60px",
        fontSize: "24px",
        margin: "5px"
      }}
    >
      {value}
    </button>
  );
}
