import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'


function App() {

    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState('USD')
    const [to, setTo] = useState('INR')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from).currencyCodes
    const currencyPrice = useCurrencyInfo(from).conversionRates[to]

    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(parseFloat(amount) * currencyPrice)
    }

    return (
        <>
            <h1 className='text-7xl text-white mt-20 ml-25'>Chai aur React -- 06 Currency Convertor --</h1>
            <p className='text-xl px-25 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt doloremque dicta placeat quidem necessitatibus eum incidunt a! Eius vitae cumque, unde labore non maxime nemo corporis ipsum temporibus iusto nam!</p>

            <div className="w-full mt-15 ">
                <div className="bg-gray-800 border border-slate-400 w-[70%] ml-25 p-5 rounded-xl">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                
                                label="From"
                                amount={amount}
                                currencyOptions={currencyInfo}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-gray-900 cursor-pointer rounded-md bg-blue-500 hover:bg-blue-600 text-white text-xl text-center px-4 py-2"
                                onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={currencyInfo}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white text-xl cursor-pointer hover:bg-blue-600 px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>

        </>
    );
}

export default App
