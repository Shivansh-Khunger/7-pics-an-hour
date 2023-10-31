import { useEffect, useState, Fragment } from "react";
import { createApi } from "unsplash-js";
import BgGrid from "./bg-grid";

function Content() {
    return (
        <div className="relative p-10 pb-20">
            <BgGrid />
            <div className="relative flex flex-wrap gap-9 justify-center items-center z-10 top-10">
                <ImageComp/>
            </div>
        </div>
    )
}


function ImageComp() {
    const unsplash = createApi({ accessKey: "cQIQJr2YcX2GXbGjNBMWVBM24qOgeZ2ruhnW_XoWipE" })

    const [data, setphotoresponse] = useState(null);

    useEffect(() => {
        unsplash.photos.getRandom({
        count: 7,
        }).then(result => {
            if (result.type === 'success') {
                setphotoresponse(result);
            }
        })
    })

    if (data == null) {
        console.log("Data is empty");
    }
    else {
        return (
            Image(data.response.results.map(photo => {
                <Image photo = {photo}/>
            }))
        )
    }

}

function Image({photo}) {

    const { user, urls } = photo;
    return (
        <div className="flex-col">
            <img src={urls.regular} alt="" className="w-[56vh]" />
            <p className="pl-1">by - <a href={`https://unsplash.com/${user.username}`}><i>Makhija</i></a></p>
        </div>
    )
}

export default Content;