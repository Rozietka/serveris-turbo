const handler = {};

handler.math = async (data, callback) => {
    const acceptableMethods = ['get'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return await handler._method[data.httpMethod](data, callback);

    }

    return callback(400, 'Account: veiksmas NEleistinas');
}

handler._method = {};
/**
 * Vartotojo paskyros sukurimas
 */
handler._method.get = async (data, callback) => {
    const url = data.trimmedPath;
 
    return callback(200, {
        status: 'Success',
        msg: 'matieka jega',
    })
}

export default handler;