import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from "react-icons/fa";

export default function FeaturedMovie({movie={}, isCompact = true}) {
  const {poster_path, title, overview} = movie
  return (
    <div className="movie-wrapper">
        <h1>{title}</h1>
        <p className={`overvirew ${isCompact ? "short-overlay" : ""}`} >
            {overview}
        </p>
        <div className="action-buttons">
            <Link className="add-btn play" href={`/movie/${movie.id}`}>
                Play
            </Link>
            <button className="add-btn ">
                <FaPlus/>
            </button>
        </div>
        <div className="movie-poster">
            <div className="poster-ov">
               <Image
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    alt={title}
                    fill
                />
            </div>
        </div>
    </div>
  )
}
