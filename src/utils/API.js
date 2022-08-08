export const fetchVideoFromAPI = async (fbid, successCallBack) => {
    // console.log('\n\n fetchVideoFromAPI Called : ', fbid);
    const formData = new FormData();
    formData.append('fb_id', "0");
    try {
        fetch("https://api.theuwo.in/api-v1/index.php?p=showAllVideos", {
            method: 'POST',
            body: formData,

        }).then((response) => {
            response.json().then((res) => {
                // console.log('\n\n fetchVideoFromAPI success: ');
                successCallBack(res.msg, res.code);
            })
        })
    } catch (error) {
        // console.log('\n\n fetchVideoFromAPI Failed : ');
        console.error('error', error);
        successCallBack(null);
    }
}