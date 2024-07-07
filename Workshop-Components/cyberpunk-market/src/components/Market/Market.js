import { useState, useEffect } from 'react';
import { getAllItems } from '../../services/getAllItems';
import MarketItem from './MarketItem';

export default function Market() {
    let [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
            .then(result => {
                setItems(result);
            })
    }, [])
    return (
        <>
            <h3 className="heading">Market</h3>
            <section id="dashboard">

                {items.length > 0
                    ? items.map(x => <MarketItem key={x._id} item={x}/>)
                    : <h3 className="empty">No Items Yet</h3>
                }


            </section>

        </>
    );
}