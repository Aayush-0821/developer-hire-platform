"use client";

import { useState } from "react";
import demo1 from "../v1/images/demoSnippet1.png";
import demo2 from "../v1/images/demoSnippet2.png";
import demo3 from "../v1/images/demoSnippet3.png";
import leftArrow from "../v1/images/leftArrow.svg";
import rightArrow from "../v1/images/rightArrow.svg";
import demoUser from "../v1/images/demoUser.svg";
import bookmark from "../v1/images/bookmark.svg";
import heart from "../v1/images/heart.svg";
import filledHeart from "../v1/images/filledHeart.svg";
import filledBookmark from "../v1/images/filledBookmark.svg";
import { fileURLToPath } from "url";


export default function ProjectCard() {
    // Image slider states and functions 
    const images = [demo1, demo2, demo3];
    const [current, setCurrent] = useState(0);

    const prev = () =>
        setCurrent((i) => (i === 0 ? images.length - 1 : i - 1));

    const next = () =>
        setCurrent((i) => (i === images.length - 1 ? 0 : i + 1));



    // Bookmarked and liked
    const [like, setLike] = useState(false);
    const [bookmarked, setBookmark] = useState(false);

    const isLike = () => {
        setLike(!like);
    }

    const isBookmark = () => {
        setBookmark(!bookmarked);
    }
    return (
        <article
            className="w-full bg-[#1E1E1E] rounded-3xl overflow-hidden transition hover:shadow-lg"
        >
            {/* IMAGE SLIDER */}
            <div
                className="w-full flex items-center justify-center gap-3 pt-5 px-3"
            >
                {/* LEFT ARROW */}
                <button
                    onClick={prev}
                >
                    <img
                        src={leftArrow.src}
                        alt="Previous Arrow"
                        className="w-8 h-8 hover:scale-105 transform transition duration-200"
                    />
                </button>

                {/* IMAGE */}
                <div
                    className="relative flex-1 aspect-4/3 sm:aspect-16/10 lg:aspect-video overflow-hidden rounded-2xl">
                    <img
                        src={images[current].src}
                        alt="Project demo"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT ARROW */}
                <button
                    onClick={next}
                    className=""
                >
                    <img
                        src={rightArrow.src}
                        alt="Next"
                        className="w-8 h-8 hover:scale-105 transform transition duration-200"
                    />
                </button>
            </div>


            {/* PROJECT CONTENT */}
            <div className="p-6 space-y-3 space-x-3">
                {/* Profile + Actions */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white" >
                            <img src={demoUser.src} alt="Demo User" />
                        </div>
                        <span className="text-white text-md font-medium">
                            Britto Anand
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80 text-sm">
                        <button onClick={isBookmark}>
                            <img src={bookmarked? filledBookmark.src : bookmark.src} alt="Bookmark Button" 
                                className="h-7 w-7 transition transform hover:scale-105"
                            />
                        </button>
                        <button onClick={isLike}>
                            <img src={like? filledHeart.src : heart.src} alt="Like Button" 
                                className="h-7 w-7 transition transform hover:scale-105"
                            />
                        </button>
                    </div>
                </div>

                {/* Text */}
                <div>
                    <h3 className="text-[#e8ded8] font-semibold text-sm sm:text-base leading-snug">
                        Explore The Space - A Website to teach you stuf about space.
                    </h3>
                    <p className="text-[#B1AAA6] text-xs sm:text-sm mt-1 leading-relaxed">
                        Explore The Space - A Website to teach you stuf about space. Helps you outgrow other people who dont know how amazing the space is.
                    </p>
                </div>
            </div>
        </article>
    );
}
