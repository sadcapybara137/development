export default function BakeryItem(props) {
    return <div className="item">
        <img src={props.image}/>
        <div>
            <label className="diet"> {vegan(props.vegan)}</label>
            <label className="diet"> {gf(props.gf)}</label>
        </div>
        <p> {props.name}</p>
        <p> Price: ${props.price} </p>
    </div>
}

function vegan(isVegan) {
    if(isVegan) {
        return "Vegan | "
    } else {
        return "Not Vegan | "
    }
}

function gf(isGf) {
    if(isGf) {
        return "Gluten Free"
    } else {
        return "Contains Gluten"
    }
}