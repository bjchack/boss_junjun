(function(){

    const SECRET = "BJC_PRIME_2025";
    const MAX_DEVICES = 3;

    function hash(str){
        let h = 0;
        for(let i=0;i<str.length;i++){
            h = (h<<5) - h + str.charCodeAt(i);
            h |= 0;
        }
        return Math.abs(h).toString(36).toUpperCase();
    }

    function isValidFormat(key){
        return /^BJC-2025-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(key);
    }

    function getDeviceId(){
        let id = localStorage.getItem("device_id");
        if(!id){
            id = "DEV-" + Math.random().toString(36).substr(2,9).toUpperCase();
            localStorage.setItem("device_id", id);
        }
        return id;
    }

    window.checkPassword = function(input){

        if(!isValidFormat(input)) return false;

        // LICENSE VALIDATION
        const base = input.substring(0, 14);
        const expected = hash(base + SECRET).substring(0,4);
        if(!input.endsWith(expected)) return false;

        // DEVICE LIMIT
        const deviceId = getDeviceId();
        const key = "license_devices_" + input;
        let devices = JSON.parse(localStorage.getItem(key) || "[]");

        if(!devices.includes(deviceId)){
            if(devices.length >= MAX_DEVICES){
                alert("❌ License already used on 3 devices");
                return false;
            }
            devices.push(deviceId);
            localStorage.setItem(key, JSON.stringify(devices));
        }

        return true;
    };

})();
