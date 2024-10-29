import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Vault } from "../target/types/vault";

describe("vault", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Vault as Program<Vault>;

  it("Is initialized!", async () => {
    // Init test
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
  it("deposit", async () => {
    const tx = await program.methods.deposit(new anchor.BN(0.2)).rpc();
    console.log("Your transaction signature", tx);
  });
  it("withdraw", async () => {
    const tx = await program.methods.withdraw(new anchor.BN(0.1)).rpc();
    console.log("Your transaction signature", tx);
  });
});

//done testing here are the details Your transaction signature 2pHivz2N8Uo6RhWxyYXKaYWpqnTSUoT49St8aAkTCbAZDzQMhfxv429iUEg9mddUDhA86G6WWGvde3WQhyeVVHVn
    // ✔ Is initialized! (479ms)
    // Your transaction signature f6DkFavAMs7YXoyJwCtX7Ja6oup8CxWEthNPtzYamamFZDpnAGyB84YWCrHRMkFiZN7DJqrujaDDXEw2CHxMByV
    //     ✔ deposit (462ms)
    // Your transaction signature qXFgaoz5eyP3CP4X6dhYBb49jHFVHgHXczoVQX6gSUNwELQ23mpXUqeA2mAnRZHdPVooKWNHSG3qV5XcwdK6me7