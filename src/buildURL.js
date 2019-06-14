/**
 * This method is used to build the url based on
 * the type of request.
 */

const buildURL = {
    /**
   * Builds the findings(search)  URL.
   *
   * @param {Object} options
   * @param {String} data
   * @return {String} build url
   * @private
   */
    buildSearchUrl(options) {
        let base_url = `http://${options.baseSvcUrl}/services/search/FindingService/v1?`;
        base_url += "SECURITY-APPNAME=" + options.clientID;
        base_url += "&OPERATION-NAME=" + options.operationName;
        base_url += "&SERVICE-VERSION=1.0.0&RESPONSE-DATA-FORMAT=JSON";
        base_url += options.param ? "&" + options.param + "=" + options.name : '';
        base_url += options.limit ? "&paginationInput.entriesPerPage=" + options.limit : '';
        base_url += options.globalID ? "&GLOBAL-ID=" + options.globalID : '';
        base_url += "&affiliate.trackingId=5338430173&affiliate.networkId=9&outputSelector(0)=SellerInfo";
        base_url += options.seller ? "&itemFilter(0).name=Seller&itemFilter(0).value(0)=" + options.seller : '';
        base_url += options.pageNumber ? "&paginationInput.pageNumber=" + options.pageNumber: '';

        return base_url;
    },

    /**
   * Builds the Shopping(open api)  URL.
   *
   * @param {Object} options
   * @return {String} url
   * @private
   */
    buildShoppingUrl(options) {
        let base_url = `http://${options.baseUrl}/Shopping?`;
        base_url += "appid=" + options.clientID;
        base_url += "&callname=" + options.operationName;
        base_url += "&version=967&siteid=0&responseencoding=JSON&";
        base_url += options.param + "=" + options.name;
        base_url += options.includeSelector ? "&IncludeSelector=" + options.includeSelector : '';
        //base_url += "&GLOBAL-ID=" + oglobalID;
        return base_url;
    },

};

module.exports = buildURL;

