import { useState } from "react";
import { useAccount , useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { isAddress,parseEther } from "viem";

export default function Transfer() {

    const { isConnected } = useAccount();
    const [to, setTo] = useState('');
    const [amount, setAmount] = useState('');
    const { sendTransaction, data: hash, isPending, error } = useSendTransaction();

    const btnTranferClick = () => {
        if(!isConnected) return alert("Wallet not connected");
        if(!isAddress(to)) return alert("Invalid address");
        if(!amount || Number.parseFloat(amount) <= 0) return alert("Invalid amount");
        sendTransaction({ to, value: parseEther(amount) });
    }

    const { isLoading, isSuccess } = useWaitForTransactionReceipt({ hash });
    

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 300 }}>
            <h2>Transfer Component</h2>
            {!isConnected && <div> Wallet not connected</div>}

            <input
                type="text"
                placeholder="0X...Address"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                disabled={!isConnected}
            />
            <input
                type="number"
                placeholder="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={!isConnected}
            />

                <button type="button" disabled={!isConnected || !to || !amount} onClick={btnTranferClick}>
                    { isPending ? "Sending..." : "send RTH" }
                </button>

                {error && <div style={{ color: "red" }}> Error: {error.message}</div>}
                {isLoading && <div> Waiting for transaction receipt...</div>}
                {isSuccess && <div> Transaction successful! Hash : {hash}</div>}

        </div>
    )
}