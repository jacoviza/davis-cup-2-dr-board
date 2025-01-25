export default function Board() {
    return(
        <div className="flex h-screen">

            <div className="flex flex-col m-10 flex-grow">
                <div className="flex flex-row justify-center h-1/5 mb-10">
                    <div className="flex justify-end w-1/3 "><img src="/logos/davis-cup.png" className="object-contain"></img></div>
                    <div className="flex justify-center w-1/3 mx-32 "><img src="/logos/itf.png"></img></div>
                    <div className="flex justify-start w-1/3 "><img src="/logos/fedotenis.png" className="object-contain"></img></div>
                </div>
                <main className="flex flex-col justify-center flex-grow">

                    <div className="flex flex-row h-28 w-auto">
                        <div className="flex justify-end flex-1"><img src="/flags/dom.png"></img></div>
                        <div className="flex flex-col justify-center w-fit mx-10">
                            <div className="flex flex-row justify-center">
                                <div className="flex text-6xl tracking-wide">DOM</div>
                                <div className="flex text-xl mx-5 my-auto">vs</div>
                                <div className="flex text-6xl tracking-wide">BOL</div>
                            </div>
                            <div className="border-t-4 border-white-300 w-full font-bold mx-auto mb-5"></div>
                            <div className="flex justify-center text-2xl tracking-wide">PLAY-OFF DE GRUPO MUNDIAL II | 1-2 FEBRERO, 2025</div>

                        </div>
                        <div className="flex justify-start flex-1"><img src="/flags/bol.png"></img></div>
                    </div>

                    <div className="flex flex-col justify-center flex-grow w-10/12 mx-auto">

                        <div className="grid grid-rows-3 grid-flow-col gap-2 mt-10">
                            <div className="row-start-2 row-span-2 text-2xl tracking-wide content-center">Día 1</div>
                            <div className="text-2xl tracking-wide text-center">Dominicana</div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="row-start-2 text-2xl tracking-wide content-center">VS</div>
                            <div className="text-2xl tracking-wide content-center">VS</div>
                            <div className="text-2xl tracking-wide text-center">Bolivia</div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="row-start-2 content-center"><input type="text"
                                                                               className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                        </div>

                        <div className="grid grid-rows-4 grid-flow-col gap-2 mt-10">
                            <div className="row-span-4 text-2xl tracking-wide content-center">Día 2</div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>

                            <div className="row-span-2 text-2xl tracking-wide content-center">VS</div>
                            <div className="text-2xl tracking-wide content-center">VS</div>
                            <div className="text-2xl tracking-wide content-center">VS</div>

                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>

                            <div className="row-span-2 content-center"><input type="text" className="w-72 h-16"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>
                            <div className="content-center"><input type="text" className="w-72 h-10"></input></div>

                        </div>

                    </div>
                </main>

            </div>

        </div>
    )
}