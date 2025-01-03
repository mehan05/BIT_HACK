import TeamCard from "./TeamCard"

const Team = () => {
  return (
    <div className="flex  items-center flex-col w-full">
        <div className="border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg px-5 py-5 w-[800px] " >
            <input type="text"  placeholder="Team Name" className="border-none  rounded-lg px-2 py-2 w-full font-bold text-center text-black "/>
        </div>

        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-10">
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
              <TeamCard/>
        </div>
    </div>
  )
}

export default Team