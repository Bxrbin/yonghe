window.onload = function () {
    sign.onclick = function () {
        sign_.style.display = 'block';
        login_.style.display = 'none';
        sign.style.backgroundColor = 'aqua';
        login.style.backgroundColor = 'aquamarine';
    }
    login.onclick = function () {
        login.style.backgroundColor = 'aqua';
        sign.style.backgroundColor = 'aquamarine';
        login_.style.display = 'block';
        sign_.style.display = 'none';
        l_name.value = myCookie.getCookie('lname');
        l_pwd.value = myCookie.getCookie('lpwd');
        l_remember.checked = myCookie.getCookie('lremember');
        l_automatic.checked = myCookie.getCookie('lautomatic');
        if (l_automatic.checked == true) {
            loginID.onclick();
        }
    }

    function fn(id_name, reg, _holder, hint) {
        var str = id_name.value;
        var qwe = reg.test(str);
        if (qwe) {
            _holder.style.display = 'none';
            return true;
        } else {
            _holder.style.display = 'block';
            _holder.innerHTML = hint;
            _holder.style.color = 'red';
            return false;
        }
    }

    //注册用户名验证
    s_name.onblur = function () {
        fn(s_name, /\d{7,11}/g, name_holder, '用户名请输入7-11位数字');
    }
    //注册密码验证
    s_pwd.onblur = function () {
        fn(s_pwd, /\S/g, pwd_holder, '密码不能为空');
    }
    s_pwd1.onblur = function () {
        var str = s_pwd1.value;
        var qwe = /\S/g;
        if (qwe.test(str)) {
            pwd1_holder.style.display = 'none';
            if (s_pwd.value != s_pwd1.value) {
                pwd1_holder.style.display = 'block';
                pwd1_holder.innerHTML = '两次输入的密码不一致，请重新输入';
                pwd1_holder.style.color = 'red';
                return false;
            } else {
                return true;
            }
        } else {
            pwd1_holder.style.display = 'block';
            pwd1_holder.innerHTML = '确认密码请输入非空字符';
            pwd1_holder.style.color = 'red';
            return false;
        }
    }

    //登录验证
    l_name.onblur = function () {
        fn(l_name, /\d{7,11}/g, lname_holder, '请输入正确格式的用户');
    }
    l_pwd.onblur = function () {
        fn(l_pwd, /\S/g, lpwd_holder, '请输入密码');
    }
}