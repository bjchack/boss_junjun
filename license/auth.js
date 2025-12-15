(function(){

    const passwords = [
        "c2VjcmV0MTIz",   // secret123
        "YmpjMjAyNQ=="    // bjc2025
    ];

    function decode(p){
        return atob(p);
    }

    window.checkPassword = function(input){
        return passwords.some(p => input === decode(p));
    };

})();
