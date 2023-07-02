"use client";
import Music from "@/components/Music";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const api_key = "3121e81a9d9edade04ccdb1e7508f35e";
const api_shared_key = "f2a40d5eb25e82f46eb8beeb8eb4e08d"
const user_name = "amrit_ghimire"

async function getMusic() {
 const {data} = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${api_key}&format=json`)



 return data;
}


export default function Home() {
  const { data, isLoading, isFetching, error } = useQuery(["music"], getMusic);

  // console.log(data.tracks.track);

  if (isLoading) return <div className="max-[40px]">Loading...</div>;

  if (error) return <div className="max-[40px]">error...</div>;
  return (
    <div className="grid gap-8 cols-4 max-w-[90%] m-auto ">
      {data.tracks.track?.map((music: any) => {
        return <Music key={music.name} music={music} />;
      })}
    </div>
  );
}
