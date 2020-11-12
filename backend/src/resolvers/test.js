await new Promise((resolve, reject) => {
    const streamLoad = cloudinary.v2.uploader.upload_stream(function (error, result) {
        if (result) {
            resultUrl = result.secure_url;
            resultSecureUrl = result.secure_url;
            resolve(resultUrl)
        } else {
            reject(error);
        }
    });

    stream.pipe(streamLoad);
});