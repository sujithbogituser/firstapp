import React, { useState, useEffect } from 'react';

const App = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('');

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        } else {
            // Default 3 items
            const defaultItems = ['Item 1', 'Item 2', 'Item 3'];
            setItems(defaultItems);
            localStorage.setItem('items', JSON.stringify(defaultItems));
        }
    }, []);

    const addItem = () => {
        if (newItem.trim()) {
            const updatedItems = [...items, newItem];
            setItems(updatedItems);
            localStorage.setItem('items', JSON.stringify(updatedItems));
            setNewItem('');
        }
    };

    return (
        <div>
            <h1>Hello World</h1>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Add new item"
            />
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default App;