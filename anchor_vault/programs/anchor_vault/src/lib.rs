use anchor_lang::prelude::*;

declare_id!("Brfz3XV7L7rAVouwQSFEDs6RVXEBDvfmvFjgVBgZmnpH");

#[program]
pub mod anchor_vault {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
