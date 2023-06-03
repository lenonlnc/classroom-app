import Image from 'next/image'

export default function Card({ name, description, rank, image }) {
    return (
        <div className="flex flex-col gap-4 shadow-md p-6 group bg-white hover:bg-violet-50 cursor-pointer transition ease-in duration-150s ">
            {/* image */}
            <Image className="rounded" src={image} width={384} height={150} alt="Couse image" />

            {/* description */}
            <div className="flex flex-col ">
                <p className="font-normal text-lg group-hover:text-violet-500 transition ease-in duration-150s">{name}</p>
                <div className="flex items-center gap-1">
                    <p className="text-zinc-500">Nota:{rank}</p>
                </div>

                <div className="overflow-hidden w-96">
                    <p className="font-normal text-base text-zinc-400 break-words ">{description}</p>
                </div>
            </div>
        </div>
    )
}
