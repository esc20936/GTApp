import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export async function login(email, password) {
    const response = await fetch("http://3.224.96.87:4000/login",{
        mode: 'cors',
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({ correo:email, password })
    });

    const data = await response.json();
    return data;
}
  
