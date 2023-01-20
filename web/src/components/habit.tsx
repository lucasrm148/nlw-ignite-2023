
interface HabitProps {
    completed: number
}
function Habit(props: HabitProps){
    return (
        <div className="bg-zinc-900 w-10 h-10 text-yellow-50 rounded m-2 text-center flex items-center justify-center">

            <p>{props.completed}</p>
        </div>
    )
}

export default Habit