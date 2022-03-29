use anchor_lang::{prelude::*, InstructionData};
use solana_program_test::*;
use solana_sdk::{instruction::Instruction, signature::Keypair, transaction::Transaction};
use solana_sdk::signature::Signer;
use std::str::FromStr;

pub fn to_instruction<I: InstructionData, M: ToAccountMetas>(
    program_id: Pubkey,
    instruction: I,
    accounts: M,
) -> Instruction {
    return Instruction::new_with_bytes(
        program_id,
        &instruction.data(),
        accounts.to_account_metas(None),
    );
}

#[tokio::test]
async fn test_ix() {
    let test = ProgramTest::new("test_program", ::test_program::ID, None);
    let (mut banks_client, payer, recent_blockhash) = test.start().await;

    let state = Keypair::new();

    let foo_pubkey = Pubkey::from_str("11111111111111111111111111111111").unwrap();

    let ix = to_instruction(
        ::test_program::ID,
        ::test_program::instruction::Initialize{
        u8_f1: 253,
        u8_f2: 253,
        u8_f3: 253,
        u8_f4: 253,
        u8_f5: 253,
        u8_f6: 253,
        u8_f7: 253,
        u8_f8: 253,
        u8_f9: 253,
        u8_f10: 253,
        u8_f11: 253,
        u8_f12: 253,
        u128_f1: 170141183460469231731687303715884105740,
        u128_f2: 170141183460469231731687303715884105740,
        u128_f3: 170141183460469231731687303715884105740,
        u128_f4: 170141183460469231731687303715884105740,
        u128_f5: 170141183460469231731687303715884105740,
        u128_f6: 170141183460469231731687303715884105740,
        u128_f7: 170141183460469231731687303715884105740,
        u128_f8: 170141183460469231731687303715884105740,
        pubkey_field1: foo_pubkey.clone(),
        pubkey_field2: foo_pubkey.clone(),
        pubkey_field3: foo_pubkey.clone(),
        pubkey_field4: foo_pubkey.clone(),
        pubkey_field5: foo_pubkey.clone(),
        pubkey_field6: foo_pubkey.clone(),
        pubkey_field7: foo_pubkey.clone(),
        pubkey_field8: foo_pubkey.clone(),
        pubkey_field9: foo_pubkey.clone(),
        pubkey_field10: foo_pubkey.clone(),
        pubkey_field11: foo_pubkey.clone(),
        pubkey_field12: foo_pubkey.clone(),
        pubkey_field13: foo_pubkey.clone(),
        pubkey_field14: foo_pubkey.clone(),
        pubkey_field15: foo_pubkey.clone(),
        pubkey_field16: foo_pubkey.clone(),
        pubkey_field17: foo_pubkey.clone(),
        pubkey_field18: foo_pubkey.clone(),
        pubkey_field19: foo_pubkey.clone(),
        pubkey_field20: foo_pubkey.clone(),
        pubkey_field21: foo_pubkey.clone(),
    }, ::test_program::accounts::Initialize{
        state: state.pubkey(),
        nested: ::test_program::accounts::NestedAccounts {
           clock: anchor_lang::solana_program::sysvar::clock::ID,
           rent: anchor_lang::solana_program::sysvar::rent::ID,
        },
        system_program: anchor_lang::solana_program::system_program::ID,
        payer: payer.pubkey(),
    });

    let tx = Transaction::new_signed_with_payer(&vec![ix], Some(&payer.pubkey()), &vec![&payer, &state], recent_blockhash);
    banks_client.process_transaction(tx).await.unwrap();
}

