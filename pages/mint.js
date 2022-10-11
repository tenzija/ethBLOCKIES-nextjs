import { useState, useEffect } from 'react'
import { initOnboard } from "../utils/onboard"
import { config } from '../dapp.config'
import {
    getTotalMinted,
    getMaxSupply,
    isPausedState,
    isPreSaleState,
    isPublicSaleState,
    presaleMint
} from '../utils/interact'

export default function Mint() {

    const [maxSupply, setMaxSupply] = useState(0)
    const [totalMinted, setTotalMinted] = useState(0)
    const [maxMintAmount, setMaxMintAmount] = useState(0)
    const [paused, setPaused] = useState(false)
    const [isPublicSale, setIsPublicSale] = useState(false)
    const [isPreSale, setIsPreSale] = useState(false)

    const [status, setStatus] = useState(null)
    const [mintAmount, setMintAmount] = useState(1)
    const [isMinting, setIsMinting] = useState(false)
    const [onboard, setOnboard] = useState(null)
    const [walletAddress, setWalletAddress] = useState('')

    useEffect(() => {
        const init = async() => {
            setMaxSupply(await getMaxSupply())
            setTotalMinted(await getTotalMinted())

            setPaused(await isPausedState())
            setIsPublicSale(await isPublicSaleState())
            const isPreSale = await isPreSaleState()
            setIsPreSale(isPreSale)

            setMaxMintAmount(isPreSale ? config.presaleMaxMintAmount : config.maxMintAmount)
        }

        init()
    }, [])

    useEffect(() => {
        const onboardData = initOnboard({
            address: address => setWalletAddress(address ? address : ''),
            wallet: wallet => {
                if(wallet.provider) {
                    window.localStorage.setItem('selectedWallet', wallet.name)
                } else {
                    window.localStorage.removeItem('selectedWallet')
                }
            }
        })

        setOnboard(onboardData)
    }, [])

    const previouslySelectedWallet = typeof window != 'undefined' && window.localStorage.getItem('selectedWallet')

    useEffect(() => {
        if(previouslySelectedWallet != null && onboard) {
            onboard.walletSelect(previouslySelectedWallet)
        }
    }, [onboard, previouslySelectedWallet])

    const connectWalletHandler = async() => {
        const walletSelected = await onboard.walletSelect()
        if(walletSelected) {
            await onboard.walletCheck()
            window.location.reload(true)
        }
    }

    const incrementMintAmount = () => {
        if(mintAmount < maxMintAmount) {
            setMintAmount(mintAmount + 1)
        }
    }
    
    const decrementMintAmount = () => {
        if (mintAmount > 1) {
            setMintAmount(mintAmount - 1)
        }
    }

    const presaleMintHandler = async() => {
        setIsMinting(true)

        const { success, status } = await presaleMint(mintAmount)

        setStatus({
            success,
            message: status
        })

        setIsMinting(false)
    }

    const publicMintHandler = async() => {
        
    }
    
    return(
        <div className="min-h-screen h-full -w-full overflow-hidden flex flex-col items-center justify-center bg-brand-background">
            <div className="relative w-full h-full- flex flex-col items-center justify-center">
                <img className="absolute mintBG inset-auto block w-full h-full object-cover animate-pulse"/>
                
                <div className="flex flex-col items-center justify-center mt-8 mb-8 min-h-screen w-full px-2 md:px-10">
                    <div className="z-1 md:max-w-3xl w-full bg-gray-900/90 filter backdrop-blur-sm py-4 rounded-md px-2 md:px-10 flex flex-col items-center">
                        <h1 className="font-mono  font-bold text-3xl md:text-4xl bg-gradient-to-br  from-brand-purple-dark to-brand-blue-mid bg-clip-text text-transparent mt-3 mb-3">
                            { paused ? 'pAused' : isPreSale ? 'pRe-sAle' : 'public sAle'}
                        </h1>
                        <h3 className="text-sm text-center text-brand-blue-mid tracking-widest break-all ...">
                            {walletAddress
                            ? walletAddress : ''}
                        </h3>
                        <div className="flex flex-col md:flex-row md:space-x-14 w-full mt-10 md:mt-14">
                            <div className="relative w-full">
                                <div className="font-mono z-10 absolute top-2 left-2 opacity-80 filter backdrop-blur-lg text-base px-4 py-2 bg-black border border-brand-purple-mid rounded-md flex items-center justify-center text-brand-blue-mid font-semibold">
                                    <p>
                                        <span className="text-brand-purple-mid">
                                            {totalMinted}
                                        </span> / {maxSupply}
                                    </p>
                                </div>
                                <img src="/images/auto.png" className="object-cover w-full sm:h-[280px] md:w-[280px] rounded-md"/>
                            </div>
                            <div className="flex flex-col items-center w-full px-4 mt-16 md:mt-0">
                                <div className="font-mono flex items-center justify-between w-full">
                                    <button className="w-16 h-12 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-brand-blue-mid font-bold rounded-md"
                                    onClick={incrementMintAmount}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                        </svg>
                                    </button>
                                    <p className="flex items-center justify-center flex-1 grow text-center font-bold text-brand-blue-mid text-3xl md:text-4xl">
                                        {mintAmount}
                                    </p>
                                    <button className="w-16 h-12 md:w-16 md:h-12 flex items-center justify-center text-brand-background hover:shadow-lg bg-brand-blue-mid font-bold rounded-md"
                                    onClick={decrementMintAmount}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="text-sm text-brand-blue-mid tracking-widest mt-3">
                                    Max Mint Amount: {maxMintAmount}
                                </p>
                                <div className="border-t border-b py-4 mt-10 w-full border-brand-purple-mid">
                                    <div className="w-full text-xl font-mono flex items-center justify-between text-brand-blue-mid">
                                        <p>totAl</p>
                                        <div className="flex items-center space-x-3">
                                            <p>
                                                <b>{Number.parseFloat(config.price * mintAmount).toFixed(2)} eth</b>
                                            </p>
                                            <span className="text-brand-purple-mid">
                                                + <b>gAs</b>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Mint button && wallet connect button */}
                                { walletAddress ? (<button className={`${paused || isMinting ? 'bg-gradient-to-br from-brand-blue-mid  to-brand-purple-dark cursor-not-allowed' : 'bg-gradient-to-br from-brand-purple-dark to-brand-blue-mid shadow-lg hover:shadow-gray-400/50'} px-6 py-3 rounded-md text-2xl text-black font-mono mt-7 w-full mx-4 tracking-wide`}
                                disabled={paused || isMinting}
                                onClick={isPreSale ? presaleMintHandler : publicMintHandler}
                                >
                                    <b>{isMinting ? 'MintinG ...' : 'Mint'}</b>
                                </button>) : (<button className="font-mono mt-7 w-full bg-gradient-to-br from-brand-purple-dark to-brand-blue-mid shadow-lg px-6 py-3 rounded-md text-2xl text-black hover:shadow-gray-400/50 mx-4 tracking-wide"
                                onClick={connectWalletHandler}
                                >
                                    <b>connect WAllet</b>
                                </button>)}
                                
                            </div>
                        </div>
                        
                        {/* Status */}
                        {
                            status && (
                                <div className={`border ${status.success ? 'border-brand-blue-mid' : 'border-brand-purple-mid'}  rounded-md text-start h-full px-4 py-4 w-full mx-auto mt-8 md:mt-4`}>
                                    <p className={`flex flex-col space-y-2 ${status.success ? 'text-brand-blue-mid' : 'text-brand-purple-mid'} text-sm text-center md:text-base break-words ...`}>
                                        {status.message}
                                    </p>
                                </div>
                            )
                        }
                        

                        {/* Contract Address */}
                        <div className="border-t border-brand-blue-mid flex flex-col items-center mt-8 py-2 w-full">
                            <h3 className="font-mono text-2xl text-brand-blue-mid mt-6">
                                <b>contRAct AddRess</b>
                            </h3>
                            <a 
                            href={`https://goerli.etherscan.io/address/${config.contractAddress}#readContract`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-blue-mid mt-4">
                                <span className="text-center items-center break-all ...">
                                    {config.contractAddress}
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
