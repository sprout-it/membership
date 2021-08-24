import axios from 'axios'

const getBearer = async function () {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', 'admin');
    params.append('password', 'p@ssw0rd');
    const token = await axios.post(`https://www.bsv-th-authorities.com/ApiGateway/token`, params,
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )

    return token.data
}

export default getBearer()