$(document).ready(function(){
    
    var searchResults = [];

    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=dragon%age%origins&key=AIzaSyAzAOJ7_jMZq-33BUaxhdDSFJBr1LJdY8U")
        .then(function(res) {
            return res.json();
        }).then(function(data){
            console.log(data)
            searchResults = data.items
            generateVideo()
        })

        function generateVideo() {
            var videoEl = $(`<iframe width='560' height='315' src='https://www.youtube.com/embed/${searchResults[0].id.videoId}' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>`)
            $("#videoDiv").append(videoEl)
        }


})