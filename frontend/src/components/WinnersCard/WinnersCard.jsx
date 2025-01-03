const WinnersCard = () => {
  return (
    <div className='flex flex-col items-center max-w-sm max-h-screen overflow-hidden p-4  hover:-translate-y-5   transition-transform duration-300'>
        <div className=' border-2 border-orange-500 shadow-lg shadow-orange-500 rounded-lg mr-4 mb-4 p-3   hover:bg-orange-500  text-white'>
            <h1 className="font-bold text-4xl mb-4 ">Problem Statement</h1>
            <p className="text-justify leading-relaxed ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ipsa facilis ducimus eius repudiandae, excepturi repellendus mollitia modi quasi! Esse quidem id vitae. Nostrum molestiae voluptatibus sed ipsa debitis. Delectus!</p>
            <div className='flex flex-col p-3 '>
                <span className='font-bold'>Person-1</span>
                <span>Person-2</span>
                <span>Person-3</span>
                <span>Person-4</span>
                <span>Person-5</span>
                <span>Person-6</span>
            </div>
        </div>
    </div>
  )
}

export default WinnersCard