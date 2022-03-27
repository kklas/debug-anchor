import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestProgram } from "../target/types/test_program";
import {
  initialize,
} from "./client-gen/instructions";
import {
  Transaction,
  PublicKey,
  Keypair,
  SystemProgram,
  SYSVAR_CLOCK_PUBKEY,
  SYSVAR_RENT_PUBKEY,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import BN from "bn.js";

describe("test-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  // const program = anchor.workspace.TestProgram as Program<TestProgram>;


  it("with generated client", async () => {
    const provider = anchor.getProvider();
    const state = new Keypair();

    const fooPubkey = new PublicKey("11111111111111111111111111111111")

    const ix = initialize(
      {
        u8F1: 253,
        u8F2: 253,
        u8F3: 253,
        u8F4: 253,
        u8F5: 253,
        u8F6: 253,
        u8F7: 253,
        u8F8: 253,
        u8F9: 253,
        u8F10: 253,
        u8F11: 253,
        u8F12: 253,
        u128F1: new BN("170141183460469231731687303715884105740"),
        u128F2: new BN("170141183460469231731687303715884105740"),
        u128F3: new BN("170141183460469231731687303715884105740"),
        u128F4: new BN("170141183460469231731687303715884105740"),
        u128F5: new BN("170141183460469231731687303715884105740"),
        u128F6: new BN("170141183460469231731687303715884105740"),
        u128F7: new BN("170141183460469231731687303715884105740"),
        u128F8: new BN("170141183460469231731687303715884105740"),
        pubkeyField1: fooPubkey,
        pubkeyField2: fooPubkey,
        pubkeyField3: fooPubkey,
        pubkeyField4: fooPubkey,
        pubkeyField5: fooPubkey,
        pubkeyField6: fooPubkey,
        pubkeyField7: fooPubkey,
        pubkeyField8: fooPubkey,
        pubkeyField9: fooPubkey,
        pubkeyField10: fooPubkey,
        pubkeyField11: fooPubkey,
        pubkeyField12: fooPubkey,
        pubkeyField13: fooPubkey,
        pubkeyField14: fooPubkey,
        pubkeyField15: fooPubkey,
        pubkeyField16: fooPubkey,
        pubkeyField17: fooPubkey,
        pubkeyField18: fooPubkey,
        pubkeyField19: fooPubkey,
        pubkeyField20: fooPubkey,
        pubkeyField21: fooPubkey,
      },
      {
        state: state.publicKey,
        payer: provider.wallet.publicKey,
        nested: {
          clock: SYSVAR_CLOCK_PUBKEY,
          rent: SYSVAR_RENT_PUBKEY,
        },
        systemProgram: SystemProgram.programId,
      }
    );
    const tx = new Transaction();
    tx.add(ix);
    await provider.send(tx, [state])
  });
});
