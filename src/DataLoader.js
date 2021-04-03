
import React, { useEffect, useState } from 'react';

function DataLoader() {
    const [data, setState] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setState(data);
            });
    });
       
    return (
      <div>
        <ul>
          {data.map((item) => (
              <li key={item.id}>{item.name},{item.username},{item.email},{item.address.city},{item.phone}</li>
          ))}
        </ul>
      </div>
    );
 
}
export default DataLoader;