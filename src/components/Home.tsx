
const Home = () => {
    return (
        <section className="flex max-w-[1182px] max-h-screen items-center justify-center m-auto pt-[120px]">
            <div>
                <img src="/images/dices 1.svg" alt="dice logo" />
            </div>
            <div>
                <h1 className="text-[90px] font-[700]">DICE GAME</h1>
                <button className="bg-black text-white border-1 border-transparent rounded-[5px] p-[10px] px-[18px] min-w-[220px] text-[16px] cursor-pointer duration-400 ease-in
                hover:bg-white hover:text-black hover:border-1 hover:border-black hover:duration-300 
                " >
                    PLAY NOW
                </button>
            </div>
        </section>
    )
}

export default Home