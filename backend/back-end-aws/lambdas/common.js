export function success(body) {
    let ret = buildResponse(200, body);
    return ret;
}
// export function failure(body) {
//     return buildResponse(500, body);
// }

// export const mysqlConnection = mysql.createConnection({
//     host: 'dl.crikdd7zhfgv.us-east-2.rds.amazonaws.com',
//     user: 'admin',
//     password: 'admin1234',
//     port: 3306,
//     database: 'DLmmic',
//     debug: false
// });

// s

function buildResponse(statusCode, body) {
    console.log('-------------------------------------');
    console.log(body);
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "*",
            "X-Requested-With": "*",
            "Access-COntrol-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
        },
        data: JSON.stringify(body)
    };
}