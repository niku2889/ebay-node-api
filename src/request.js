let httpRequest = require("https");
const qs = require("querystring");

const getRequest = (url) => {
    if (url.includes("http://")) httpRequest = require("http");
    return new Promise(function (resolve, reject) {
        httpRequest.get(url, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                console.log(JSON.parse(body).errorMessage);
                if (JSON.parse(body).errorMessage) {
                    reject(body);
                }
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);

            });
        });
    })

}

const makeRequest = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    // console.log(endpoint);
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "cache-control": "no-cache",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-GB",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
                //console.log(body);
            });
            res.on("end", () => {
                resolve(body);

            });
            res.on("error", (error) => {
                reject(error);

            });
        });
        //console.log("request " + dataString);
        if (methodName == "POST") req.write(dataString)
        req.end();

    })
}

const makeRequestUSA = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    // console.log(endpoint);
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-US",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
                //console.log(body);
            });
            res.on("end", () => {
                resolve(body);

            });
            res.on("error", (error) => {
                reject(error);

            });
        });
        //console.log("request " + dataString);
        if (methodName == "POST") req.write(dataString)
        req.end();

    })
}

const makeRequestGermany = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    // console.log(endpoint);
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-DE",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
                //console.log(body);
            });
            res.on("end", () => {
                resolve(body);

            });
            res.on("error", (error) => {
                reject(error);

            });
        });
        //console.log("request " + dataString);
        if (methodName == "POST") req.write(dataString)
        req.end();

    })
}

const makeRequestAT = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-AT",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestAU = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-AU",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestBE = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-BE",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestCA = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-CA",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestCH = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-CH",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestES = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-ES",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestFR = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-FR",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestIE = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-IE",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestIT = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-IT",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const makeRequestNL = function postRequest(hostName, endpoint, methodName, data, token) {
    methodName == "POST" ? dataString = qs.stringify(data) : '';
    const options = {
        "hostname": hostName,
        "path": endpoint,
        "method": methodName || 'GET',
        "headers": {
            "content-type": methodName == "POST" ? "application/x-www-form-urlencoded" : "application/json",
            "authorization": token,
            "cache-control": "no-cache",
            "X-EBAY-C-ENDUSERCTX":"affiliateCampaignId=5338430173",
            "X-EBAY-C-MARKETPLACE-ID": "EBAY-NL",
        }
    };
    return new Promise(function (resolve, reject) {
        const req = httpRequest.request(options, res => {
            res.setEncoding("utf8");
            let body = "";
            res.on("data", data => {
                body += data;
            });
            res.on("end", () => {
                resolve(body);
            });
            res.on("error", (error) => {
                reject(error);
            });
        });
        if (methodName == "POST") req.write(dataString)
        req.end();
    })
}

const base64Encode = (encodeData) => {
    const buff = new Buffer(encodeData);
    return buff.toString('base64');
}

module.exports = {
    getRequest, makeRequest, makeRequestUSA, makeRequestGermany,
    makeRequestAT, makeRequestAU, makeRequestBE, makeRequestCA, 
    makeRequestCH, makeRequestES, makeRequestFR, makeRequestIE, 
    makeRequestIT, makeRequestNL, base64Encode
};
