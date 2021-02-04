export const createDelivery = async(deliveryDetails) => {
    //set cod option
    if (deliveryDetails.CODOption === undefined) {
        deliveryDetails['cod'] = false;
    } else {
        deliveryDetails['cod'] = true;
    }
    delete deliveryDetails.CODOption;

    const response = await fetch('/delivery/create', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(deliveryDetails)
    });

    const responseBody = await response.json();

    return responseBody;
}

export const getDeliveries = async() => {
    const response = await fetch('/delivery/getList', {
        headers: {
            'Content-Type': 'application/jkson'
        },
        credentials: 'include'
    });

    const result = await response.json();

    return result;
}