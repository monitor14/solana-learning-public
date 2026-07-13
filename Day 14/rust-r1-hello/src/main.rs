struct Wallet {
    owner: String,
    lamports: u64,
}

fn main(){
    let wallet = Wallet {
        owner: String::from("Alice"),
        lamports: 1500000000,
    };
    println!("Owner: {}", wallet.owner);
    println!("lamports: {}", wallet.lamports);
}