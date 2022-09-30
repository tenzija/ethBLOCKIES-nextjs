export default function Mint() {
    
    return(
        <div className="min-h-screen h-full -w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
            <div className="relative w-full h-full- flex flex-col items-center justify-center">
                <img className="absolute mintBG inset-auto block w-full min-h-screen object-cover animate-pulse"/>
                <div className="flex flex-col items-center justify-center h-full w-full px-2 md:px-10">
                    <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
                        <h1 className="font-mono  font-bold text-3xl md:text-4xl bg-gradient-to-br  from-brand-purple-dark to-brand-blue-mid bg-clip-text text-transparent mt-3 mb-3">
                            pRe-sAle
                        </h1>
                        <h3 className="text-sm text-brand-blue-mid tracking-widest break-all ...">
                            0xF8494aD2A8393944d0e3A12c57423309E48B4A77 
                        </h3>
                        <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
                            <div className="relative w-full">
                                <div className="font-mono z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple-mid rounded-md flex items-center justify-center text-brand-blue-mid font-semibold">
                                    <p>
                                        <span className="text-brand-purple-mid">
                                            0
                                        </span> / 2222
                                    </p>
                                </div>
                                <img src="/images/auto.png" className="object-cover w-full sm:h-[280px] md:w-[280px] rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                                <div className="font-mono flex items-center justify-between w-full">
                                    <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-brand-blue-mid font-bold rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                    <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-blue-mid text-3xl md:text-4xl">
                                        1
                                    </p>
                                    <button className="w-14 h-10 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-brand-blue-mid font-bold rounded-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-brand-blue-mid tracking-widest mt-3">
                                    Max Mint Amount: 5
                                </p>
                                <div className="border-t border-b py-4 mt-16 w-full border-brand-purple-mid">
                                    <div className="w-full text-xl font-mono flex items-center justify-between text-brand-blue-mid">
                                        <p>totAl</p>
                                        <div className="flex items-center space-x-3">
                                            <p>
                                                0.01 eth
                                            </p>
                                            <span className="text-brand-purple-mid">
                                                + gAs
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mint button */}
                                <button className="font-mono mt-12 w-full bg-gradient-to-br from-brand-purple-dark to-brand-blue-mid shadow-lg px-6 py-3 rounded-md text-2xl text-black hover:shadow-gray-400/50 mx-4 tracking-wide">
                                    connect WAllet
                                </button>
                            </div>
                        </div>
                        
                        {/* Status */}
                        <div className="border border-brand-purple-mid rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4">
                            <p className="flex flex-col space-y-2 text-brand-purple-mid text-sm md:text-base break-words ...">
                                Smth went wrong
                            </p>
                        </div>

                        {/* Contract Address */}
                        <div className="border-t border-brand-blue-mid flex flex-col items-center mt-10 py-2 w-full">
                            <h3 className="font-mono text-2xl text-brand-blue-mid mt-6">
                                contRAct AddRess
                            </h3>
                            <a 
                            href={`https://rinkeby.etherscan.io/address/0xF8494aD2A8393944d0e3A12c57423309E48B4A77/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue-mid mt-4">
                                <span className="break-all ...">
                                    0xF8494aD2A8393944d0e3A12c57423309E48B4A77
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
