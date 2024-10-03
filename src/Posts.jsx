import { useLocation, useParams } from "react-router-dom";

export default function Posts() {
    const { id } = useParams();
    const urlString = new URLSearchParams(useLocation().search);
    const fname = urlString.get("fname");
    const lname = urlString.get("lname");

    return (
        <div>
            <h1>This is Posts page</h1>
            {fname ? <h2>Hello { fname } { lname } ?</h2> : <h2>Hello Id { id }</h2>}
        </div>
    );
}