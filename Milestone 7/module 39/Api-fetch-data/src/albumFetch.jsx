import { use } from "react"
import Album from "./album"

export default function AlbumFetch({albumFetchApi}){
    const saveAblum=use(albumFetchApi)
    // console.log(saveAblum)
    return(
        <>
        <div className="card">
            {
                saveAblum.map(album=><Album key={album.id} album={album}></Album>)
            }
        </div>
        </>
    )
}