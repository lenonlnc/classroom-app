'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Card({ lesson }) {
    const router = useRouter()

    function goToLesson(id) {
        router.push(`/class-details/${id}`)
    }
    return (
        <div
            onClick={() => goToLesson(lesson.id)}
            className="flex  flex-col gap-4 shadow-md p-6 group bg-white hover:bg-violet-50 cursor-pointer transition ease-in duration-150s "
        >
            {/* image */}
            <Image className="rounded" src={lesson.image} width={384} height={150} alt="Couse image" />

            {/* description */}
            <div className="flex flex-col ">
                <p className="font-normal text-lg group-hover:text-violet-500 transition ease-in duration-150s">{lesson.name}</p>
                <div className="flex items-center">
                    <p className="text-zinc-500">Dificuldade: {lesson.dificulty_level}</p>
                </div>
                <p className="text-white">{lesson.id}</p>
                <div className="overflow-hidden w-96">
                    <p className="font-normal text-base text-zinc-400 break-words ">{lesson.description}</p>
                </div>
            </div>
        </div>
    )
}
