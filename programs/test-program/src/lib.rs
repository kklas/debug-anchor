use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod test_program {
    use super::*;

    pub fn initialize(
        ctx: Context<Initialize>,
        u8_f1: u8,
        u8_f2: u8,
        u8_f3: u8,
        u8_f4: u8,
        u8_f5: u8,
        u8_f6: u8,
        u8_f7: u8,
        u8_f8: u8,
        u8_f9: u8,
        u8_f10: u8,
        u8_f11: u8,
        u8_f12: u8,
        u128_f1: u128,
        u128_f2: u128,
        u128_f3: u128,
        u128_f4: u128,
        u128_f5: u128,
        u128_f6: u128,
        u128_f7: u128,
        u128_f8: u128,
        pubkey_field1: Pubkey,
        pubkey_field2: Pubkey,
        pubkey_field3: Pubkey,
        pubkey_field4: Pubkey,
        pubkey_field5: Pubkey,
        pubkey_field6: Pubkey,
        pubkey_field7: Pubkey,
        pubkey_field8: Pubkey,
        pubkey_field9: Pubkey,
        pubkey_field10: Pubkey,
        pubkey_field11: Pubkey,
        pubkey_field12: Pubkey,
        pubkey_field13: Pubkey,
        pubkey_field14: Pubkey,
        pubkey_field15: Pubkey,
        pubkey_field16: Pubkey,
        pubkey_field17: Pubkey,
        pubkey_field18: Pubkey,
        pubkey_field19: Pubkey,
        pubkey_field20: Pubkey,
        pubkey_field21: Pubkey,
    ) -> Result<()> {
        msg!(
            "{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}",
            u8_f1,
            u8_f2,
            u8_f3,
            u8_f4,
            u8_f5,
            u8_f6,
            u8_f7,
            u8_f8,
            u8_f9,
            u8_f10,
            u8_f11,
            u8_f12,
        );

        Ok(())
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub enum FooEnum {
    StructKind {
        bool_field: bool,
        u8_field: u8,
    },
    TupleKind(Vec<bool>),
    DiscriminantKind,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct BarStruct {
    some_field: bool,
    other_field: u8,
}

impl Default for BarStruct {
    fn default() -> Self {
        return BarStruct {
            some_field: true,
            other_field: 10,
        };
    }
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone)]
pub struct FooStruct {
    field1: u8,
    field2: u16,
    nested: BarStruct,
    vec_nested: Vec<BarStruct>,
    option_nested: Option<BarStruct>,
    enum_field: FooEnum,
}

#[account]
pub struct State {
    bool_field: bool,
    u8_field: u8,
    i8_field: i8,
    u16_field: u16,
    i16_field: i16,
    u32_field: u32,
    i32_field: i32,
    f32_field: f32,
    u64_field: u64,
    i64_field: i64,
    f64_field: f64,
    u128_field: u128,
    i128_field: i128,
    bytes_field: Vec<u8>,
    string_field: String,
    pubkey_field: Pubkey,
    vec_field: Vec<u64>,
    vec_struct_field: Vec<BarStruct>,
    option_field: Option<bool>,
    option_struct_field: Option<BarStruct>,
    struct_field: BarStruct,
    array_field: [bool; 3],
    enum_field_1: FooEnum,
    enum_field_2: FooEnum,
    enum_field_3: FooEnum,
    enum_field_4: FooEnum,
    vec_of_u8: Vec<u8>,
}

#[derive(Accounts)]
pub struct NestedAccounts<'info> {
    clock: Sysvar<'info, Clock>,
    rent: Sysvar<'info, Rent>,
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init,
        space = 8 + 1000, // TODO: use exact space required
        payer = payer,
    )]
    state: Account<'info, State>,

    nested: NestedAccounts<'info>,

    #[account(mut)]
    payer: Signer<'info>,
    system_program: Program<'info, System>,
}

