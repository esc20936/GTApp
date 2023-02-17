export const setBalance = async (id,amount) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, amount })
    };
    const response =  await fetch('http://3.224.96.87:4000/balance', requestOptions)
    const data = await response.json();
    return data;
}

export const insertTransaction = async (id,amount,tipo) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, amount, tipo })
    };
    const response =  await fetch('http://3.224.96.87:4000/transaction', requestOptions)
    const data = await response.json();
    return data;
}

export const getUserData = async (id) => {
    const response =  await fetch('http://http://3.224.96.87:4000/user/'+id);
    const data = await response.json();
    return data;
}