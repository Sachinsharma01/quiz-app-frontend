import axios from "axios";

const request = async (body: any) => {
    let response: any = {};
    if (body.method === 'POST') {
        response = await axios(body.url, {
            data: {...body.data},
            method: body.method,
            headers: {
                authorization: body.headers.authorization,
            }
        })
        return response;
    }
    response = await axios.get(body.url)
    return response;
}

export default request;