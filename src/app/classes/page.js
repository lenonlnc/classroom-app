import Card from '@/components/genericCard'
import Filter from '@/components/genericFilter'
import Navbar from '@/components/navbar'
import { courses } from '../../data/courses'
export default function () {
    return (
        <div className="flex flex-col">
            {/* navbar */}
            <Navbar />

            {/* conteúdo */}
            <div className="p-20 flex flex-col gap-10">
                <div className="flex items-center gap-4">
                    <p className="font-bold text-3xl">Cursos</p>
                    <Filter />
                </div>

                <div className=" w-max grid grid-cols-5 gap-6">
                    {courses.map((course) => {
                        return <Card />
                    })}
                </div>
            </div>
        </div>
    )
}
