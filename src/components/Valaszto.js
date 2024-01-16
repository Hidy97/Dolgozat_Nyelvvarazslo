import {useState} from "react";

import MondatokModel from "../model/MondatokModel.js";
import MondatSelect from "./MondatSelect.js";

export default function Valaszto() {
    const mondatokModel = new MondatokModel();
    let cim = mondatokModel.cim;
    let sugoSzoveg = mondatokModel.sugoSzoveg;

    const [mondat, setMondat] = useState(mondatokModel.aktMondatOsszeallit(2));
    function kovetkezo(index){
        let i = MondatokModel.kovElem(index)
        setMondat(mondatokModel.aktMondatOsszeallit(i))
    }

    function sugoMutat(){

    }
    
    return(
        <article className="tartalom">
            <h3>
                {cim}
                <button className="sugo-btn btn btn-success"
                onClick={sugoMutat}>?</button>
            </h3>
            <h4>Válaszd ki a megfelelő alakot!</h4>
            <section className="mondat">
                <MondatSelect mondatObj={mondat} kovetkezo={kovetkezo} />
            </section>
        </article>
    );
}