import { BiEditAlt } from '../node_modules/react-icons/bi';
import { MdOutlineDownloadDone } from "../node_modules/react-icons/md";
export default function TodoList(props) {

    return (<div className="tasks">
        {props.ele}
        <button onClick={() => {
            props.updateItem(props.index)
        }}> <BiEditAlt /></button>
        <button className ="comp" onClick={() => {
            props.deleteItem(props.index)
        }}> <MdOutlineDownloadDone /></button>
    </div>);

}