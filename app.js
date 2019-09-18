const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=qZBPCL2QV2ZeEB4EHK61ocJX67ZqJsOJz6adzzKL";

$.ajax({
    url: url,
    method: 'GET',
    success: function (data) {
        const { photos } = data;
        photos.forEach(e => {
            $('#loading').hide();
            $('#images').append(
                `<a href="${e.img_src}" target="_blank">
                    <img src="${e.img_src}" height="100" width="100">
                </a>`
            );
        });
    }
})