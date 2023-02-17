import axios from "axios";

export const setBalanceA = async (id,amount) => {
    console.log(id,amount);
    const response = await fetch("http://3.224.96.87:4000/balance",{
        mode: 'cors',
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id,amount})
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const insertTransaction = async (id,amount,tipo,fecha) => {
    console.log(id,amount,tipo,fecha);

    const response = await fetch("http://3.224.96.87:4000/transaction",{
        mode: 'cors',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({idusuario:id,monto:amount,tipo,fecha})
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const getUserData = async (id) => {
    console.log(id);
    const response =  await fetch(`http://3.224.96.87:4000/user/${id}`,{
        mode: 'cors',
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export const getLasTransaction = async (id) => {
    const response =  await fetch(`http://3.224.96.87:4000/getLastTransaction/${id}`,{
        mode: 'cors',
    });
    const data = await response.json();
    console.log(data);
    return data;
}