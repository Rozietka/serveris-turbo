const handler = {};

handler.math = async (data, callback) => {
    const acceptableMethods = ['get'];

    if (acceptableMethods.includes(data.httpMethod)) {
        return await handler._method[data.httpMethod](data, callback);

    };
    return callback(400, 'Account: veiksmas NEleistinas');
};
handler._method = {};
/**
 * Vartotojo paskyros sukurimas
 */
handler._method.get = async (data, callback) => {
    const url = data.trimmedPath;
    const urlParts = url.split('/');
    const num1 = +urlParts[3];
    const num2 = +urlParts[4];
    const operation = urlParts[2];

    if (urlParts.length !== 5 || isNaN(num1) || isNaN(num2)) {
        return callback(400, {
            status: 'Error',
            msg: 'ismok skaicius',
        });
    };
    const math = {
        suma: (a, b) => a + b,
        skirtumas: (a, b) => a - b,
        sandauga: (a, b) => a * b,
        dalyba: (a, b) => a / b,
      };   
      if (!math[operation]) {
        return callback(400, {
          status: 'Error',
          msg: 'Netinkama operacija',
        });
      }   
      const ans = math[operation](num1, num2);   
      return callback(200, {
        first: num1,
        second: num2,
        result: ans,
      });
    };
    export default handler;