"use client"
import  { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, } from "next/navigation";



const api_key = "3121e81a9d9edade04ccdb1e7508f35e";

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [search, setSearch] = useState("Believe");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname();
  console.log(pathname)

 

  async function getMusic(query) {
    const { data } = await axios.get(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${query}&api_key=${api_key}&format=json`
    );

    console.log(data);
    return data;
  }

  useEffect(() => {}, [search]);

  const { data, isLoading, isFetching, error } = useQuery(
    ["music", search],
    () => getMusic(search)
  );
const music = data?.results?.albummatches?.album?.filter((music:any) => `/${music.mbid }`=== pathname)

console.log(music)

 
  return (
    <>
    <Navbar search={search} setSearch={setSearch} />
   {music?.map((song:any) =>{
    return (<div key={song.mbid} className="max-w-[90%] m-auto mt-10">
    <div className=" m-auto relative w-[80%] h-[26rem] overflow-hidden rounded-md">
      <Image
        src={song.image[2]["#text"]}
        alt="music"
        layout="fill"
        objectFit="cover"
      />
    </div>

    <div className="w-[80%] m-auto mt-4">
      <p className="font-semibold text-2xl"> {song.name}</p>
      <p className="text-gray-400 ">By {song.artist}</p>

   

 
    </div>

  
  </div>)
   }) }

    </>
  );
}

export default page;
