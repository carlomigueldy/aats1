import { SendTransaction } from "../generated/AtlanteanAnalytics/AtlanteanAnalytics";
import { EncodedTransaction } from "../generated/schema";

export function handleSendTransaction(event: SendTransaction): void {
  let entity = EncodedTransaction.load(event.transaction.from.toHex());

  if (!entity) {
    entity = new EncodedTransaction(event.transaction.from.toHex());
  }

  entity.identifier = event.params.identifier;
  entity.contract_address = event.params.contractAddr;
  entity.tx_encoded_args = event.params.txEncodedArgs;

  entity.save();
}
