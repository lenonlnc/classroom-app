import Card from '@/components/genericCard'
import Filter from '@/components/genericFilter'
import Navbar from '@/components/navbar'
import { classes } from '../../data/classes'

export default function () {
    return (
        <div className="flex flex-col">
            {/* navbar */}
            <Navbar />

            {/* conteúdo */}
            <div className="p-20 flex flex-col gap-10">
                <div className="flex items-center gap-4">
                    <p className="font-bold text-3xl flex-1">Aulas obtidas</p>
                    <Filter />
                </div>

                <div className=" w-max grid grid-cols-5 gap-6">
                    {classes.map((classes) => {
                        return <Card name={classes.name} description={classes.description} rank={classes.rank} image={classes.image} />
                    })}
                </div>
            </div>
        </div>
    )
}
