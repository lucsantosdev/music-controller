import { useEffect, useState } from "react"
import MusicInList from "./MusicInList"

export default function MusicList() {
    const [musicList, setMusicList] = useState([])

    const fetchMusicList = async () => {
        try {
            await window.electronAPI.SendToElectron("music-get")
            await window.electronAPI.RecieveFromElectron("music-list", (event, args) => {
                setMusicList(args)
            })
        } catch (error) {
            console.log(`Error getting music list ${error}`)
        }
    }
    
    useEffect(() => {
        fetchMusicList()
    }, [])

    return (
        <div className="w-11/12">
            <h2 className="ml-5 text-white text-2xl">Music List</h2>
            {musicList.length === 0 ? <p className="text-zinc-400">Empty</p> : musicList.map((music, index) => {
                return <MusicInList key={index} music={music} />
            })
            }
        </div>
    )
}