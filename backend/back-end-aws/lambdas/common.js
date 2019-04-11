export function success(body) {
    return buildResponse(200, body);
}
export function failure(body) {
    return buildResponse(500, body);
}

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
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Methods": "*"
        },
        body: JSON.stringify(body)
    };
}