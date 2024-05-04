function createHeaders(token: string | null = null) {
    const headers: { [key: string]: string } = {
        'Content-Type': 'application/json'
    };
    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }
    return headers;
}

export async function get(url: string, token: string | null = null) {
    const headers = createHeaders(token);
    const response = await fetch(url, {
        method: 'GET',
        headers
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

export async function post(url: string, data: any, token: string | null = null) {
    const headers = createHeaders(token);
    const response = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}