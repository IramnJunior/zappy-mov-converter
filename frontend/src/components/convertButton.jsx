import "./convertButton.css"

const ConvertButton = ({ handleConvert }) => {
  return (
    <button className="convert-button" onClick={handleConvert}>
      convert
    </button>
  );
};

export default ConvertButton;
