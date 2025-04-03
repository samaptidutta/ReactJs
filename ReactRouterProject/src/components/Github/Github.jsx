import React, {useEffect,useState} from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response=>response.json())
    //     .then(data=>setData(data))
    // },[])
    return (
        <div>
            <img src={data.avatar_url} alt="git image" />
            Github Follower:{data.followers}
        </div>
    )
}

export default Github

export const githubInfo = async ()=>{
    const response = await  fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}