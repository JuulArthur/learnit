export async function fetchAPI(url, method = 'GET', body) {
    const responseStream = await fetch(url, {
        method,
        headers: {
            Accept: 'application/json',
        },
        body,
    });
    const jsonResponse = await responseStream.json();
    return jsonResponse;
}