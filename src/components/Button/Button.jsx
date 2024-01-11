import "./Button.css";

export default function Button({ children, onClick }) {
  return (
    <button className="filter-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
}
