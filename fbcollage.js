height_array = []
scroll_friends = setInterval(function() {
    height_array.push(document.body.scrollHeight)
    window.scrollTo(0, h);
    setPrev = setInterval(function() {
        if (height_array.length > 10) {
            prev = height_array[height_array.length - 10]
            if (height_array.length > 50) {
                height_array = height_array.slice(height_array.length - 30)
            }
        }
    }, 5000);
    if (prev == document.body.scrollHeight) {
        clearInterval(scroll_friends);
        clearInterval(setPrev);
        (function() {
            fb = document;
            i = 0;
            w = window.open();
            while (i < fb.images.length) {
                if ("_s0 _rv img" == fb.images[i].className) w.document.write("<img src=" + fb.images[i].src + "></image>");
                i++;
            }
        }());
    }
}, 1e3);