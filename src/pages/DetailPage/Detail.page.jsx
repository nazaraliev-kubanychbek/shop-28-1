import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailPage = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data}) => setData(data))
    },[])
    return (
        <div>
            <h1>detail page</h1>
        </div>
    );
}

export default DetailPage;
