import { Button } from "react-bootstrap"
import iconByName from "../../../helpers/iconsUtils";
import "./iconButton.scss";


const IconButton = ({text = 'Button', icon, ...props}) => {

    const Icon = icon ? iconByName(icon) : null;

    return(
        <Button {...props} className="iconButton">
            {icon ? <Icon className="btnIcon" /> : ''}
            <span className="buttonText">{text}</span>
        </Button>
    )
}

export default IconButton;