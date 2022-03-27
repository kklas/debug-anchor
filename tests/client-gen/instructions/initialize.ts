import { PublicKey, TransactionInstruction } from "@solana/web3.js"
import BN from "bn.js"
import * as borsh from "@project-serum/borsh"
import * as types from "../types"
import { PROGRAM_ID } from "../programId"

export interface InitializeArgs {
  u8F1: number
  u8F2: number
  u8F3: number
  u8F4: number
  u8F5: number
  u8F6: number
  u8F7: number
  u8F8: number
  u8F9: number
  u8F10: number
  u8F11: number
  u8F12: number
  u128F1: BN
  u128F2: BN
  u128F3: BN
  u128F4: BN
  u128F5: BN
  u128F6: BN
  u128F7: BN
  u128F8: BN
  pubkeyField1: PublicKey
  pubkeyField2: PublicKey
  pubkeyField3: PublicKey
  pubkeyField4: PublicKey
  pubkeyField5: PublicKey
  pubkeyField6: PublicKey
  pubkeyField7: PublicKey
  pubkeyField8: PublicKey
  pubkeyField9: PublicKey
  pubkeyField10: PublicKey
  pubkeyField11: PublicKey
  pubkeyField12: PublicKey
  pubkeyField13: PublicKey
  pubkeyField14: PublicKey
  pubkeyField15: PublicKey
  pubkeyField16: PublicKey
  pubkeyField17: PublicKey
  pubkeyField18: PublicKey
  pubkeyField19: PublicKey
  pubkeyField20: PublicKey
  pubkeyField21: PublicKey
}

export interface InitializeAccounts {
  state: PublicKey
  nested: {
    clock: PublicKey
    rent: PublicKey
  }
  payer: PublicKey
  systemProgram: PublicKey
}

export const layout = borsh.struct([
  borsh.u8("u8F1"),
  borsh.u8("u8F2"),
  borsh.u8("u8F3"),
  borsh.u8("u8F4"),
  borsh.u8("u8F5"),
  borsh.u8("u8F6"),
  borsh.u8("u8F7"),
  borsh.u8("u8F8"),
  borsh.u8("u8F9"),
  borsh.u8("u8F10"),
  borsh.u8("u8F11"),
  borsh.u8("u8F12"),
  borsh.u128("u128F1"),
  borsh.u128("u128F2"),
  borsh.u128("u128F3"),
  borsh.u128("u128F4"),
  borsh.u128("u128F5"),
  borsh.u128("u128F6"),
  borsh.u128("u128F7"),
  borsh.u128("u128F8"),
  borsh.publicKey("pubkeyField1"),
  borsh.publicKey("pubkeyField2"),
  borsh.publicKey("pubkeyField3"),
  borsh.publicKey("pubkeyField4"),
  borsh.publicKey("pubkeyField5"),
  borsh.publicKey("pubkeyField6"),
  borsh.publicKey("pubkeyField7"),
  borsh.publicKey("pubkeyField8"),
  borsh.publicKey("pubkeyField9"),
  borsh.publicKey("pubkeyField10"),
  borsh.publicKey("pubkeyField11"),
  borsh.publicKey("pubkeyField12"),
  borsh.publicKey("pubkeyField13"),
  borsh.publicKey("pubkeyField14"),
  borsh.publicKey("pubkeyField15"),
  borsh.publicKey("pubkeyField16"),
  borsh.publicKey("pubkeyField17"),
  borsh.publicKey("pubkeyField18"),
  borsh.publicKey("pubkeyField19"),
  borsh.publicKey("pubkeyField20"),
  borsh.publicKey("pubkeyField21"),
])

export function initialize(args: InitializeArgs, accounts: InitializeAccounts) {
  const keys = [
    { pubkey: accounts.state, isSigner: true, isWritable: true },
    { pubkey: accounts.nested.clock, isSigner: false, isWritable: false },
    { pubkey: accounts.nested.rent, isSigner: false, isWritable: false },
    { pubkey: accounts.payer, isSigner: true, isWritable: true },
    { pubkey: accounts.systemProgram, isSigner: false, isWritable: false },
  ]
  const identifier = Buffer.from([175, 175, 109, 31, 13, 152, 155, 237])
  const buffer = Buffer.alloc(1000)
  const len = layout.encode(
    {
      u8F1: args.u8F1,
      u8F2: args.u8F2,
      u8F3: args.u8F3,
      u8F4: args.u8F4,
      u8F5: args.u8F5,
      u8F6: args.u8F6,
      u8F7: args.u8F7,
      u8F8: args.u8F8,
      u8F9: args.u8F9,
      u8F10: args.u8F10,
      u8F11: args.u8F11,
      u8F12: args.u8F12,
      u128F1: args.u128F1,
      u128F2: args.u128F2,
      u128F3: args.u128F3,
      u128F4: args.u128F4,
      u128F5: args.u128F5,
      u128F6: args.u128F6,
      u128F7: args.u128F7,
      u128F8: args.u128F8,
      pubkeyField1: args.pubkeyField1,
      pubkeyField2: args.pubkeyField2,
      pubkeyField3: args.pubkeyField3,
      pubkeyField4: args.pubkeyField4,
      pubkeyField5: args.pubkeyField5,
      pubkeyField6: args.pubkeyField6,
      pubkeyField7: args.pubkeyField7,
      pubkeyField8: args.pubkeyField8,
      pubkeyField9: args.pubkeyField9,
      pubkeyField10: args.pubkeyField10,
      pubkeyField11: args.pubkeyField11,
      pubkeyField12: args.pubkeyField12,
      pubkeyField13: args.pubkeyField13,
      pubkeyField14: args.pubkeyField14,
      pubkeyField15: args.pubkeyField15,
      pubkeyField16: args.pubkeyField16,
      pubkeyField17: args.pubkeyField17,
      pubkeyField18: args.pubkeyField18,
      pubkeyField19: args.pubkeyField19,
      pubkeyField20: args.pubkeyField20,
      pubkeyField21: args.pubkeyField21,
    },
    buffer
  )
  const data = Buffer.concat([identifier, buffer]).slice(0, 8 + len)
  const ix = new TransactionInstruction({ keys, programId: PROGRAM_ID, data })
  return ix
}
