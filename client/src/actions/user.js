import axios from "axios";

export const registration = async (name, email, password) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/registration', {
            name,
            email,
            password
        })
        alert(response.data.message)
    }catch (e) {
        alert(e.response.data.message)
    }
}

export const login = async (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password
            })
            console.log(response.data)
        }catch (e) {
            alert(e.response.data.message)
        }
    }
}


