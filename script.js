function calcElements() {
    var exitlinkscount=0;
    //var myhost = getDomain(window.location.hostname); This is for dynamic and it is getting null because i am running my application on local thats what consider one host name as below
    var myhost = "www.google.com"
    console.log("No of Articles:", document.getElementsByTagName("article").length);
    console.log("No of Images:", document.getElementsByTagName("img").length);
    var links = document.getElementsByTagName("a");
    console.log("No of Links", links.length);
    for(var i = 0; i < links.length; i++) {
        // Exit links couter
        var url = links[i].getAttribute("href");
        var clickhost = getDomain(url);
        if (myhost.localeCompare(clickhost)!=0) {
            exitlinkscount = exitlinkscount + 1;
        }

        // Alert link name on click
        links[i].onclick = function() {
            alert(this.text);
            if (this.getAttribute("href").includes("wiki")) {
                window.open(this.href, 'Wikipedia', 'width=600, height=400, left=24, top=24, scrollbars, resizable'); return false;
            }
        }
    }
    console.log("Exit Links:", exitlinkscount);
}

function getDomain(url) {
    var prefix = /^https?:\/\//i;
    var domain = /^[^\/:]+/;
    url = url.replace(prefix, "");
    if (url.charAt(0) === "/") {
        url = window.location.hostname + url;
    }
    var match = url.match(domain);
    if (match) {
        return(match[0]);
    }
    return(null);
}
