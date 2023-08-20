import React, { useState, useEffect } from "react";
import axios from "axios";

function DataDisplay() {
    const [catFacts, setCatFacts] = useState([]);

    useEffect(() => {
        axios
            .get("https://cat-fact.herokuapp.com/facts")
            .then((response) => {
                setCatFacts(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return ( <
        div >
        <
        h2 > Cat Facts < /h2> <
        ul > {
            catFacts.map((fact) => ( <
                li key = { fact._id } > { fact.text } < /li>
            ))
        } <
        /ul> <
        /div>
    );
}

export default DataDisplay;