import { useState, useEffect } from "react";

export default function Images() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.unsplash.com/photos/random/?client_id=cQIQJr2YcX2GXbGjNBMWVBM24qOgeZ2ruhnW_XoWipE&count=7&orientation=landscape")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])
    
    if (loading) {
        return (
            <div>loading</div>
        )
    }

    if (error) {
        return (
            <div>and error has occured</div>
        )
    }

    return (
        <>
            {data.map((photo) => (
                <div id = {photo.id + "-container"}>
                    <img src={photo.urls.regular} alt="" key={photo.id} className="w-[50vh]" />
                    <p className="flex justify-end pr-6 pt-1 text-xl">
                        by {'  '}<a href={photo.links.html} target="_blank" className="ml-2 "><i className="underline underline-offset-2"><b>{photo.user.name} ...</b></i></a>
                    </p>
                </div>
            ))}
        </>
    )

}