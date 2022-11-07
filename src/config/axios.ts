import axios from "axios";

const request = async (body:any) => {
    const config:any = {
        method: body.method,
        headers: body.headers,
    }
    if (body.method === 'POST') {
        config["data"] = body.data;
    }
    const response = await axios(body.url, config)
    return response;
}

export { request as ProcessRest };