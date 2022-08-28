
import { useEffect, useState } from "react";
import { getDatabase, ref, query, orderByKey, get, startAt, limitToFirst } from 'firebase/database';
export default function UserVideoList(page) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [videoList, setVideos] = useState([]);
    const [hasmore,sethasMore] =useState(true);
    useEffect(() => {
        async function userVideoFetch() {
            const db = getDatabase();
            const videoRef = ref(db, 'videos');
            const videoQuery = query(
                videoRef,
                orderByKey(),
                startAt("" + page),
                limitToFirst(8)
            )
            try {
                setError(false);
                setLoading(true);
                const result = await get(videoQuery);
                setLoading(false);
                if (result.exists()) {
                    setVideos((prevideos) => {
                        return [...prevideos, Object.values(result.val())];
                    })
                }else{
                    sethasMore(false);
                }
            } catch (err) {
                setLoading(false);
                setError(true);
            }
        }
       // setTimeout(() => {
            userVideoFetch();
        //}, 1000);
       
    }, [page]);
    return {
        loading,
        error,
        videoList,
        hasmore,
    }

}