import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOption = [],
    selectCurrency = "usd",
    currencyDisable = false,
    amountDisable = false,
    className = "",
}) {

    const amoutInputId = useId() // Used for optimization
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amoutInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amoutInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" 
                    value={amount} 
                    disabled={amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    {currenyOption.map((currency)=>(
                        <option key={currency} value={currency}>
                             {currency}
                        </option>
                      )    
                    )}
                    {/* <option value={currenyOption}>
                        usd
                    </option> */}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
