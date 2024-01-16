import { useState } from "react";

import MondatokModel from "../model/MondatokModel.js";
import MondatKiegeszit from "./MondatKiegeszit.js";

export default function Kiegeszit() {
    const mondatokModel = new MondatokModel();
    let cim = mondatokModel.cim;
    let sugoSzoveg = mondatokModel.sugoSzoveg;

    const [mondat, setMondat] = useState(mondatokModel.aktMondatOsszeallit(2));

    function kovetkezo(index) {
        let i = MondatokModel.kovElem(index)
        setMondat(mondatokModel.aktMondatOsszeallit(i))
    }

    function sugoMutat() {

    }

    return (
        <main>
            <header>
                <h1>Nyelvvarázsló</h1>
            </header>
            <article className="tartalom">
                <h3>
                    {cim}
                    <button className="sugo-btn btn btn-success"
                        onClick={sugoMutat}>?</button>
                </h3>
                <h4>Egészítsd ki!</h4>
                <section className="mondat">
                    <MondatKiegeszit mondatObj={mondat} kovetkezo={kovetkezo} />
                </section>
            </article>
            <footer>Családi Alexandra</footer>
        </main>
    );
}