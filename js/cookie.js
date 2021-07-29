var myCookie = {
    setCookie: function (name, value, time) {
        var data_ = new Date();
        data_.setDate(data_.getDate() + time);
        document.cookie = name + '=' + value + ';expirse=' + data_;
    },
    getCookie: function (name) {
        var cookie_ = document.cookie;
        var cookie_arr = cookie_.split('; ');
        for (var i = 0; i < cookie_arr.length; i++) {
            if (cookie_arr[i].split('=')[0] == name) {
                return cookie_arr[i].split('=')[1];
            }

        }
    },
    removeCookie: function (name) {
        this.setCookie(name, '', -1);
    }
}