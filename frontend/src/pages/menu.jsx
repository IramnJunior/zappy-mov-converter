import logo from "../assets/images/zappy-logo.png";
import FileUploader from "../components/fileUploader";
import ConvertButton from "../components/convertButton";
import "./menu.css"

function Menu() {

    return (
        <div id="menu">
            <img src={logo} id="logo" />
            <FileUploader/>
            <ConvertButton/>
        </div>
        
    )
}

export default Menu;
