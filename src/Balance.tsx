import { useAccount, useBalance} from "wagmi";
import { formatUnits } from "viem";

export default function Balance() {

  const { address, isConnected } = useAccount();
  const { data, status } = useBalance ({ address }) ;

  if(!isConnected) 
    return <div>Wallet not connected. </div>
  if(status === "pending") 
    return <div>Loading balance</div>;

  return (
    <div>
      <h2>Your Balance</h2>
      {data ?  formatUnits(data.value, data.decimals) : "0"} {data?.symbol}
    </div>
  );

}
