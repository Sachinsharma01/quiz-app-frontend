import axios from "axios";

const request = async (body: any) => {
    let response: any = {};
    if (body.method === 'POST') {
        response = await axios.post(body.url, {
            ...body.data
        })
        return response;
    }
    response = await axios.get(body.url)
    return response;
}

export default request;