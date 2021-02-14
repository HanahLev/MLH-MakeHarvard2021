import { useHistory } from 'react-router-dom';


export function CustomLink(props) {
    let history = useHistory();

    function handleClick() {
        history.push(props.to);
    }
    return (
        <div {...props}
            onClick={handleClick}
        >
            {props.children}
        </div>
    )
}

