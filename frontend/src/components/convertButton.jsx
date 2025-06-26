import "./convertButton.css";

const ConvertButton = ({ onClick }) => {
  return (
    <button className="convert-button" onClick={onClick}>
      convert
    </button>
  );
};

export default ConvertButton;
