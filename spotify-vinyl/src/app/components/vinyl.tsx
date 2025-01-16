import React, { useEffect } from 'react'

interface VinylProps {
    isPlaying: boolean;
    albumArt?: string;
    title?: string;
    artist?: string;
}

const Vinyl = ({ isPlaying, albumArt, title, artist }: VinylProps) => {
    useEffect(() => {
        if (isPlaying) {
            document.getElementById('vinyl')?.classList.add('animate-spin-speedup');
            setTimeout(() => {
                document.getElementById('vinyl')?.classList.remove('animate-spin-speedup');
            }, 500);
        }
    }, [isPlaying]);
    return (
        <div>
            <figure id='vinyl' className={`transition-all duration-[3000ms] ${
                isPlaying ? 'animate-spin-slow' : 'animate-spin-slowdown'
            }`}>
                <section className='bg-[#282828] rounded-full px-10 py-10'>
                    <section className='bg-[#343434] w-fit h-fit rounded-full px-40 py-40'>
                        {albumArt && (
                            <img
                                src={albumArt}
                                alt="Album Art"
                                className="relative w-32 h-32 rounded-full z-10"
                            />
                        )}
                    </section>
                </section>
            </figure>
            <figcaption className="text-center text-white mt-4">
            <h3 className="text-sm font-bold">{title}</h3>
            <p className="text-xs">{artist}</p>
                </figcaption>
        </div>
    );
};

export default Vinyl;