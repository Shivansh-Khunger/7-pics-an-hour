import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";

const unsplash = createApi({
    accessKey: 'cQIQJr2YcX2GXbGjNBMWVBM24qOgeZ2ruhnW_XoWipE',
})


function Display() {
    const [data, setphotoresponse] = useState(null);

    unsplash.photos.getRandom({
        count: '1', orientation: 'landscape'
    }).then(result => {
        if (result.type != 'success') {
            console.log('Api Fault');
        }
        else {
            setphotoresponse(result);
        }
    })

    return (
        data.response.map(photo => {
            const [urls, user] = photo;
            <>
                <img src={urls.regular} alt="" />
                <a href={`https://unsplash.com/@${user.username}`}>{user.username}</a>
            </>
        })        
    )
}

export default Display;