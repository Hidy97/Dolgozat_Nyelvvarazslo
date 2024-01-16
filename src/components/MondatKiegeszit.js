import MondatokModel from "../model/MondatokModel.js";

export default function MondatKiegeszit(props) {
    const mondatLista = props.mondatObj.mondat.split(" ");
    function kitolt(event) {
        if (event.target.value == props.mondatObj.helyes) {
            document.getElementsByClassName("hiba")[0].classList.add("elrejt");
            document.getElementsByClassName("pipa")[0].classList.remove("elrejt");
        } else {
            document.getElementsByClassName("pipa")[0].classList.add("elrejt");
            document.getElementsByClassName("hiba")[0].classList.remove("elrejt");
        }
    }

    function kovetkezo(index) {
        document.getElementsByClassName("hiba")[0].classList.add("elrejt");
        document.getElementsByClassName("pipa")[0].classList.add("elrejt");
        props.kovetkezo(props.mondatObj.index);
    }

    return (
        <p>
            {mondatLista.map((elem, i) => {
                if (elem === "_") {
                    return (
                        <input type="text"></input>
                    );
                } else {
                    return <span key={i}>{elem} </span>
                }
            })}
            <span> ({props.mondatObj.alap}) </span>
            <span className="elrejt pipa" onClick={kitolt}>
                ✔{" "}
                <button className="btn btn success kovetkezo" onClick={kovetkezo}>
                    Következő
                </button>
            </span>
            <span className="elrejt hiba" onClick={kitolt}> ❌</span>
        </p>
    )
}