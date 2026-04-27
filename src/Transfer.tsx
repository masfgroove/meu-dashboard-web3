import { useState } from "react";
import { useAccount , useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { isAddress, parseEther } from "viem";

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
        /* Aumentamos o maxWidth para 100% para ele obedecer o limite do App.tsx e centralizamos com margin auto */
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", maxWidth: "100%", margin: "0 auto", textAlign: "center" }}>
            
            <h2 style={{ fontSize: "18px", color: "#94a3b8", marginBottom: "10px" }}>Transfer Assets</h2>
            
            {!isConnected && <div style={{ color: "#ef4444", fontSize: "14px" }}>⚠️ Wallet not connected</div>}

            <input
                type="text"
                placeholder="0X...Recipient Address"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                disabled={!isConnected}
            />
            
            <input
                type="number"
                placeholder="0.00 ETH"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={!isConnected}
            />

            {/* O botão agora ocupará a mesma largura que os inputs e estará centralizado */}
            <button 
                type="button" 
                disabled={!isConnected || !to || !amount || isPending} 
                onClick={btnTranferClick}
                style={{ alignSelf: "center" }} // Garante o alinhamento central
            >
                { isPending ? "Processing..." : "SEND ETH" }
            </button>

            {/* Mensagens de Feedback centralizadas */}
            <div style={{ marginTop: "15px", fontSize: "14px" }}>
                {error && <div style={{ color: "#f87171" }}> Error: {error.shortMessage || "Transaction failed"}</div>}
                {isLoading && <div style={{ color: "#38bdf8" }}> ⏳ Waiting for confirmation...</div>}
                {isSuccess && (
                    <div style={{ color: "#22c55e", wordBreak: "break-all" }}> 
                        ✅ Success! <br/>
                        <span style={{ fontSize: "11px", color: "#64748b" }}>Hash: {hash}</span>
                    </div>
                )}
            </div>

        </div>
    )
}