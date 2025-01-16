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
            <figure id='vinyl' className={`transition-all duration-[3000ms] ${isPlaying ? 'animate-spin-slow' : 'animate-spin-slowdown'
                }`}>
                <section className='bg-gradient-to-b from-[#343434] to-[#282828] w-fit h-fit rounded-full px-10 py-10'>
                    <section className='bg-gradient-to-b from-[#282828] to-[#343434] rounded-full px-10 py-10'>
                        <section className='bg-gradient-to-b from-[#343434] to-[#282828] w-fit h-fit rounded-full px-10 py-10'>
                            <section className='bg-gradient-to-b from-[#282828] to-[#343434] rounded-full px-10 py-10'>
                                <section className='bg-gradient-to-b from-[#343434] to-[#282828] w-fit h-fit rounded-full px-10 py-10'>
                                    {albumArt && (
                                        <img
                                            src={albumArt}
                                            alt="Album Art"
                                            className="relative w-[200px] h-[200px] rounded-full z-10"
                                        />
                                    )}
                                </section>
                            </section>
                        </section>
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