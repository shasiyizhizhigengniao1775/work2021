//  1、window.localStorage  永久存储
export const Local = {
    //设置永久存储
    set(key, val) {
        //数据val转换成字符串
        window.localStorage.setItem(key, JSON.stringify(val));
    },
    //获取永久存储
    get(key) {
        let json = widget.localStorage.getItem(key);
        //数据val字符串转换成原本样子
        try {
            return JSON.parse(json);
        } catch {
            return json;
        }
    },
    //移除永久存储
    rem(key) {
        widget.localStorage.removeItem(key);
    }
}

//  2、window.localStorage  临时存储
export const Session = {
    set(key, val) {
        window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    get(key) {
        let json = widget.sessionStorage.getItem(key);
        try {
            return JSON.parse(json);
        } catch {
            return json;
        }
    },
    rem(key) {
        widget.sessionStorage.removeItem(key);
    }
}