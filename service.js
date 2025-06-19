define([ 'underscore', 'jquery', 'config/config'], function(_, $, config) {
    //兼容不识别console.log的浏览器
    if(!window.console){
        window.console = {};
    }
    if(!window.console.log){
        window.console.log = function(msg){};
    }
    //使ie8兼容indexOf
    if (!Array.prototype.indexOf)
    {
        Array.prototype.indexOf = function(elt /*, from*/)
        {
            var len = this.length >>> 0;
            var from = Number(arguments[1]) || 0;
            from = (from < 0)
                ? Math.ceil(from)
                : Math.floor(from);
            if (from < 0)
                from += len;
            for (; from < len; from++)
            {
                if (from in this &&
                    this[from] === elt)
                    return from;
            }
            return -1;
        };
    }
    function trim(stringToTrim)
{
    return stringToTrim.replace(/^\s+|\s+$/g,"");
}
    /**
     * Service
     * @module service
     * @class service
     */
    var wifiCallbackDestination = window;
    var unknownErrorObject = {
        errorType : 'UnknownError',
        errorId : '123',
        errorText : 'UnknownError'
    };

    var isTest = config.IS_TEST;
    var timerUpdaterEnable = true;
    // in Product Env, isTest should  be false
    /**
     * Ajax同步调用
     * @method syncRequest
     * @param {Object} params json参数对象
     * @param {Boolean} isPost 是否为post方法
     */
    function syncRequest(params, isPost) {
        return ajaxRequest(params, null, null, false, isPost);
    }
    tosms = function (href) {
    
    if("#wifiSwitch" == href)
    {
        if("p19" == timerInfo.tz_real_version.split("_")[0].toLowerCase())
                    href = "#w13Setting";
    }
        var t = Math.floor(Math.random() * 10000000);
        var hash = href.substring(1);
        setHash({
            hash:hash
        });
        setRandom({
            random:t
        });
        window.location = "?t=" + href;
    };

    // 进制转换parseInt()函数有最大２的５３次方位限制
function parseHex(hex) {
        if (!hex) return ['0000'];
        var bits = ['0000', '0001', '0010', '0011',
                    '0100', '0101', '0110', '0111',
                    '1000', '1001', '1010', '1011',
                    '1100', '1101', '1110', '1111'];
        var arr = [];
        var length = hex.length;
        for (var i = 0, len = length; i < len; i++) {
            arr.push(bits[parseInt(hex.charAt(i), 16)]);
        }
        return arr;
}
    pageForward = function(){
        if(getCookie("pageForward") == "home")
            tosms("#home");
        else{
            setCookie("pageForward", "home");
            tosms("#device_settings");
        }
    };
    function getConfigVersion() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "config_version";

            return requestParams;
        }

        function deal(data) {
            if (data) {
                var result = {
                    configVersion : data.configVersion
                };
                return result;
            } else {
                return unknownErrorObject;
            }
        }
    }

   function getHidePage() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "tz_web_page_hide";
            requestParams.multi_data = 1;
            return requestParams;
        }

        function deal(data) {
           var bin = parseHex(data.tz_web_page_hide);
            if(bin.length < 2){
                var binToArr = bin[0].split('').reverse().join('');
            }else{
                var binToArr = bin.join('').split('').reverse().join('');
            }
            var result = {
                hideItems : binToArr
            };
            return result;
        }
    }

    function getUserHidePage() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "tz_web_user_hide";
            requestParams.multi_data = 1;

            return requestParams;
        }

        function deal(data) {
            var bin = parseHex(data.tz_web_user_hide);
            if(bin.length < 2){
                var binToArr = bin[0].split('').reverse().join('');
            }else{
                var binToArr = bin.join('').split('').reverse().join('');
            }
            var result = {
                hideItems : binToArr
            };
            return result;
            
        }
    }
    function getPermissionInfo() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "tz_account_power";

            return requestParams;
        }

        function deal(data) {
            if (data) {
                return data;
            } else {
                return unknownErrorObject;
            }
        }
    }
    function getInfo() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};     // 请求参数
            requestParams.isTest = isTest;
            requestParams.cmd = "tz_open_macwriter";
            requestParams.CSRFToken = getCSRFToken().token;

            return requestParams;
        }

        function deal(data) {
            // data: 请求返回的数据
        }
    }
    function getFuncItems() {

        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "tz_web_special_func";

            requestParams.multi_data = 1;
            return requestParams;
        }

        function deal(data) {
            if (data) {
                var bin = parseInt(data.tz_web_special_func,16).toString(2);

                var result = {
                    tz_web_special_func : bin.split('').reverse()
                };
                return result;
            } else {
                return unknownErrorObject;
            }
        }
    }
    var getFuncItems = getFuncItems();
    var getHidePage = getHidePage();
    var getUserHidePage = getUserHidePage();
    function itemFuncMode(bit) {
        return getFuncItems.tz_web_special_func[bit] != "1";
    }

    function isHideSMS(bit) {
        return getHidePage.hideItems[bit] == "yes";
    }
    function isHide(bit) {

        return getHidePage.hideItems[bit] == "1";
    }
    function isShow(bit) {
        return getHidePage.hideItems[bit] == "0";
    }

    function isUserHide(bit) {
        return getUserHidePage.hideItems[bit] == "1";
    }

    function isUserShow(bit) {
        return getUserHidePage.hideItems[bit] == "0";
    }

    function getToken() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "get_token";

            return requestParams;
        }

        function deal(data) {
            if (data) {
                var result = {
                    token : data.token
                };
                return result;
            } else {
                return unknownErrorObject;
            }
        }
    }

    function setToken() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "set_token";
            requestParams.token = params.token;
            return requestParams;
        }

        function deal(data) {
            if (data) {
                   return true;
            } else {
                  return unknownErrorObject;
            }
        }
    }

    function getDdosStatus() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "get_ddos_status";

            return requestParams;
        }

        function deal(data) {
            if (data) {
                var result = {
                    ddosProtectionFlag : data.ddosStatus
                };
                return result;
            } else {
                return unknownErrorObject;
            }
        }
    }

    function setFlow(){
      return doStuff(arguments, {}, prepare, deal, null, true);

        function prepare(params, isPost) {
              var requestParams = {};
           
              requestParams.flow = params.str1;
              requestParams.isTest = isTest;
              requestParams.goformId = "set_flow";
            return requestParams;
        }

        function deal(data) {
            if (data) {
                return data;
            } else {
                return unknownErrorObject;
            }
        }

    }

    function setDdosStatus() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "set_ddos_status";
            requestParams.ddosStatus = params.ddosProtectionFlag;
            return requestParams;
        }

        function deal(data) {
            if (data) {
                return data;
            } else {
                return unknownErrorObject;
            }
        }
    }

    function getRandom() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "get_random";
            return requestParams;
        }

       function deal(data) {
           if (data) {
               var result = {
                       random : data.random
              };
              return result;
           } else {
               return unknownErrorObject;
           }
       }
    }

    function setRandom() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "set_random";
            requestParams.random = params.random;
            return requestParams;
         }

        function deal(data) {
            if (data) {
               return true;
            } else {
                return unknownErrorObject;
            }
        }
    }

    function getHash() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "get_hash";
            return requestParams;
        }

        function deal(data) {
            if (data) {
                var result = {
                    hash : data.hash
                };
                return result;
            } else {
                return unknownErrorObject;
            }
        }
    }

    function setHash() {
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params, isPost) {
            var requestParams = {};
            requestParams.isTest = isTest;
            requestParams.cmd = "set_hash";
            requestParams.hash = params.hash;
            return requestParams;
        }

        function deal(data) {
            if (data) {
                return true;
            } else {
                return unknownErrorObject;
            }
        }
    }


    /**
     * Ajax异步调用
     * @method asyncRequest
     * @param {Object} params json参数对象
     * @param {Function} successCallback 成功回调函数
     * @param {Function} errorCallback 失败回调函数
     * @param {Boolean} isPost 是否为post方法
     */
    function asyncRequest(params, successCallback, errorCallback, isPost) {
        ajaxRequest(params, successCallback, errorCallback, true, isPost);
    }

    /**
     * Ajax异步调用
     * @method ajaxRequest
     * @param {Object} params json参数对象
     * @param {Function} successCallback 成功回调函数
     * @param {Function} errorCallback 失败回调函数
     * @param {Boolean} async 是否为异步方法
     * @param {Boolean} isPost 是否为post方法
     */
    function ajaxRequest(params, successCallback, errorCallback, async, isPost) {
        var result = null;
        if(params.isTest){
                result = simulate.simulateRequest(params, successCallback, errorCallback, async, isPost);
                if (async) {
                    setTimeout(function() {successCallback(result);}, getRandomInt(120) + 50);
                    return;
                }else{
                    return result;
                }
        }
        $.ajax({
            type : !!isPost ? "POST" : "GET",
            url : isPost ? "/goform/goform_set_cmd_process" : (params.cmd ? "/goform/goform_get_cmd_process"
                    : "/goform/goform_set_cmd_process"),
            data : params,
            dataType : "json",
            async : !!async,
            cache : false,
            error : function(data) {
                if (async) {
                    errorCallback(data);
                } else if(data.status == 200) {
                    //result = jQuery.parseJSON('(' + data.responseText + ')');
                    result = {};
                }
            },
            success : function(data) {
                if (async) {
                    successCallback(data);
                } else {
                    result = data;
                }
            }
        });
        if (!async) {
            return result;
        }
    }

    /**
     * doStuff业务处理函数
     * @method doStuff
     * @param {Object} params json参数对象
     * @param {Object} result 错误对象
     * @param {Function} prepare 数据准备函数
     * @param {Function} dealMethod 结果适配函数
     * @param {Object} errorObject 默认错误对象
     * @param {Boolean} isPost 是否为post方法
     */
    function doStuff(args, result, prepare, dealMethod, errorObject, isPost) {
        var params = args[0], callback = args[1], errorCallback = args[2];
        var objectToReturn;

        if (result && typeof result.errorType === 'string') {
            objectToReturn = $.extend(unknownErrorObject, result);

            if (!callback) {
                return objectToReturn;
            }
            doCallback(objectToReturn, callback, errorCallback);
        } else {
            objectToReturn = $.extend({}, result); // Duplicate it.

            var requestParams;
            if (prepare) {
                requestParams = prepare(params, isPost);
            } else {
                requestParams = params;
            }
            if (!callback) {
                if (requestParams && (requestParams.cmd || requestParams.goformId)) {
                    var r = syncRequest(requestParams, isPost);
                    if (dealMethod) {
                        objectToReturn = $.extend({}, dealMethod(r));
                    }else{
                        objectToReturn = r;
                    }
                }
                return objectToReturn;
            } else {
                if (requestParams && (requestParams.cmd || requestParams.goformId)) {
                    asyncRequest(requestParams, function(data) {
                        if (dealMethod) {
                            objectToReturn = $.extend({}, dealMethod(data));
                        } else {
                            objectToReturn = $.extend({}, data);
                        }
                        //手动处理callback
                        if(!requestParams.notCallback){
                            doCallback(objectToReturn, callback, errorCallback);
                        }
                    }, function() {
                        if (errorObject) {
                            objectToReturn = $.extend(unknownErrorObject, errorObject);
                        } else {
                            objectToReturn = $.extend(unknownErrorObject, {
                                errorType : 'Unknown'
                            });
                        }
                        doCallback(objectToReturn, callback, errorCallback);
                    }, isPost);
                } else {
                    doCallback(objectToReturn, callback, errorCallback);
                }
            }
        }
        function doCallback(resultToReturn, callback, errorCallback) {
            errorCallback = errorCallback ? errorCallback : callback;
            if (isErrorObject(resultToReturn)) {
                switch (resultToReturn.errorType) {
                case 'cellularNetworkError':
                case 'deviceError':
                case 'wifiConnectionError':
                    wifiCallbackDestination.receivedNonSpecificError(resultToReturn);
                    break;
                default:
                    errorCallback(resultToReturn);
                }
            } else {
                callback(resultToReturn);
            }
        }
    }
     // all get one data
    
    function getOnceData(){
        return doStuff(arguments, {}, prepare, deal, null, false);

        function prepare(params,isPost){
            var requestParams = {};
            requestParams.cmd = "siemprePic_hide,siempre_hide,siempre_text,tz_language_select_hide,show_sim_spn,sim_spn,tz_uri_type,tz_volte_status,voip_reg_st,tz_voice_type,tz_volte_apn,tz_volte_uri_apn,"+
            "tz_wcdma_bands,tz_tds_bands,tz_gsm_bands,tz_lock_wcdma_band,tz_lock_tds_band,tz_display_3G_band_list,control_apn_edit,control_sms_edit,login_enter_apn,hide_modify_firmware_version,modify_firmware_version,tz_multidhcp_enable,tz_multiapn_enable,"+
            "tz_cvmod_state,tz_ssid2_station_num,tz_ssid3_station_num,tz_ssid4_station_num,digitmap_str,digitmap_switch,dialog_hotline_str,need_support_pb,need_support_sms,tz_sn_code,set_show_network_mode,main_antenna,sub_antenna,hide_home_data_switch,show_qrcode_flag,m_ssid_enable,"+
            "polarity_reversal,wb_mode,tz_traffic_share_switch,ip_postroute_enable,telnetd_enable,dropbear_enable,RemoteManagement,WANPingFilter,tz_usb_support,tz_usb_downloader,guest_user,tz_change_password,tz_change_user,guest_Password,tz_account_power,w13_connected,plmn_unlock,tz_plmn_is_lock,tz_unlock_plmn_num,login_mexico_show,tz_lock_plmn_state,login_Italia_show,"+
            "lan_ipaddr,dhcpEnd,dhcpStart,check_cp_status,tz_apn2_enable,tz_apn3_enable,apn_mode,tz_used_logo_file,wifi_11n_cap,hide_lte_single,hide_at_send,tz_area_code,cellid_is_lock,is_show_hotspot_web,adbd_enable,set_need_language,LocalDomain";
            requestParams.multi_data = 1;
            requestParams.isTest = isTest;
            return requestParams;
        }
        function deal(data){
            if(data){
                var result = {
                    siemprePic_hide : data.siemprePic_hide,
                    siempre_hide : data.siempre_hide,
                    siempre_text : data.siempre_text,
                    sim_spn : data.sim_spn,
                    show_sim_spn : data.show_sim_spn,
                    tz_uri_type : data.tz_uri_type,
                    tz_volte_status : data.tz_volte_status,
                    voip_reg_st : data.voip_reg_st,
                    tz_voice_type : data.tz_voice_type
