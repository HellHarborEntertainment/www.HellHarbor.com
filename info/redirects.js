xhr({
    src: 'https://HellHarborEntertainment.github.io/www.HellHarbor.com/info/redirects.json',
    onsuccess: function () {
        var redirects = JSON.parse(this.responseText);
        var destination = redirects[slug];

        if (destination) {
            // Redirect
            var url = destination.indexOf('http') === 0 ? destination : destination;
            $('section.redirecting > p').innerHTML = 'Redirecting to <a href="' + url + '">' + url + '</a>…';
            location.href = url;
        } else {
            document.body.className = 'error not-found';
        }
    },
    
    onerror: function () {
        // Handle errors here
        // ...
    }
});
