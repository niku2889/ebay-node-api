

const { makeRequest, makeRequestUSA, makeRequestGermany, makeRequestAT, makeRequestAU, makeRequestBE, makeRequestCA,
    makeRequestCH, makeRequestES, makeRequestFR, makeRequestIE,
    makeRequestIT, makeRequestNL } = require('./request');

const getItem = function (itemId) {
    if (!itemId) throw new Error("Item Id is required");
    if (!this.options.access_token) throw new Error("Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    const id = encodeURIComponent(itemId);
    return makeRequest(this.options.baseUrl, `/buy/browse/v1/item/${id}`, 'GET', this.options.body, auth).then((result) => {
        return JSON.parse(result);
    });
};

const getItemByLegacyId = function (legacyOptions) {
    if (!legacyOptions) throw new Error("Error Required input to get Items By LegacyID");
    if (!this.options.access_token) throw new Error("Missing Access token, Generate access token");
    if (!legacyOptions.legacyItemId) throw new Error("Error Legacy Item Id is required");
    const auth = "Bearer " + this.options.access_token;
    let param = "legacy_item_id=" + legacyOptions.legacyItemId;
    param += legacyOptions.legacyVariationSku ? "&legacy_variation_sku=" + legacyOptions.legacyVariationSku : '';

    makeRequest(this.options.baseUrl, `/buy/browse/v1/item/get_item_by_legacy_id?${param}`, 'GET', this.options.body, auth).then((result) => {
        return JSON.parse(result);
    }).then((error) => {
        console.log(error.errors);
        console.log("Error Occurred ===> " + error.errors[0].message);
    });
};

const getItemByItemGroup = function (itemGroupId) {
    if (typeof itemGroupId == "object") throw new Error("Expecting String or number (Item group id)");
    if (!itemGroupId) throw new Error("Error Item Group ID is required");
    if (!this.options.access_token) throw new Error("Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    return new Promise((resolve, reject) => {
        makeRequest(this.options.baseUrl, `/buy/browse/v1/item/get_items_by_item_group?item_group_id=${itemGroupId}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    })
};

const searchItems = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequest(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsUSA = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestUSA(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsGermany = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestGermany(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsAT = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestAT(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsAU = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestAU(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsBE = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestBE(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsCA = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestCA(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsCH = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestCH(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsES = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestES(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsFR = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestFR(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsIE = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestIE(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsIT = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestIT(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};

const searchItemsNL = function (searchConfig) {
    if (!searchConfig) throw new Error("Error --> Missing or invalid input parameter to search");
    if (!searchConfig.keyword && !searchConfig.categoryId && !searchConfig.gtin) throw new Error("Error --> Keyword or category id is required in query param");
    if (!this.options.access_token) throw new Error("Error -->Missing Access token, Generate access token");
    const auth = "Bearer " + this.options.access_token;
    let queryParam = searchConfig.keyword ? "q=" + searchConfig.keyword : "";
    queryParam = queryParam + (searchConfig.gtin ? "&gtin=" + searchConfig.gtin : '');
    queryParam = queryParam + (searchConfig.categoryId ? "&category_ids=" + searchConfig.categoryId : '');
    queryParam = queryParam + (searchConfig.limit ? "&limit=" + searchConfig.limit : "");
    queryParam = queryParam + (searchConfig.sort ? "&sort=" + searchConfig.sort : "");
    if (searchConfig.fieldgroups != undefined) queryParam = queryParam + "&fieldgroups=" + searchConfig.fieldgroups;
    if (searchConfig.filter != undefined) queryParam = queryParam + "&filter=" + searchConfig.filter;
    return new Promise((resolve, reject) => {
        makeRequestNL(this.options.baseUrl, `/buy/browse/v1/item_summary/search?${queryParam}`, 'GET', this.options.body, auth).then((result) => {
            resolve(result);
        }).then((error) => {
            reject(error);
        });
    });
};


module.exports = {
    getItem,
    getItemByLegacyId,
    getItemByItemGroup,
    searchItems,
    searchItemsUSA,
    searchItemsGermany,
    searchItemsAT,
    searchItemsAU,
    searchItemsBE,
    searchItemsCA,
    searchItemsCH,
    searchItemsES,
    searchItemsFR,
    searchItemsIE,
    searchItemsIT,
    searchItemsNL
}
