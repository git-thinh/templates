
window.addEventListener('DOMContentLoaded', (event) => {
    var css__ = location.hostname;
    if (css__.startsWith('dev-')) css__ = css__.substr(4);
    if (css__.endsWith('.ibds.co')) css__ = '__' + css__.substr(0, css__.length - 8);
    else css__ = '';
    if (css__.length > 0) {
        var v = document.body.getAttribute('class') + ' ' + css__.toLowerCase();
        document.body.setAttribute('class', v);
        setTimeout(function () {
            if (__SITE && __SITE.replaces) {
                __SITE.replaces.forEach(function (r) {
                    var val = r.value;
                    if (r.valid && r.valid.attr && val) {
                        var attr = r.valid.attr;
                        var tag = r.valid.tag;
                        var v_check = r.valid.value;
                        console.log(tag, attr, v_check, val);
                        document.querySelectorAll(tag).forEach(function (el) {
                            if (el.hasAttribute(attr)) {
                                if (el.getAttribute(attr) == v_check) {
                                    //console.log(el);
                                    switch (r.type) {
                                        case 'phone':
                                            el.setAttribute('href', 'tel:' + val);
                                            el.innerHTML = val;
                                            break;
                                    }
                                }
                            }
                        });
                    }
                });
            }
        }, 1000);
    }
});