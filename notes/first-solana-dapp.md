# First Solana dApp Troubleshooting Note

## Problem
I created a Solana dApp with `npm create solana-dapp@latest first-solana-dapp`.
After running `npm run dev`, the page opened at `http://localhost:5173/`.
However, the wallet section showed `No wallet connected`.


## Cause
The browser was showing `No wallet connected` since I didn't install Phantom wallet extension in my browser.
Because of that, the dApp could not detect any wallet connector, this was why it showed the problem.



## Fix

I went to the official Phantom website: [Phantom](https://phantom.com/).
I checked that it was the browser wallet extension I needed, then installed it.
I created a testing wallet for this project.
Then I refreshed the page, and the dApp showed `CONNECTED / Phantom Active`.

## Takeaway
A Solana dApp can only detect wallet extensions that are installed in the browser. 
A safe wallet connection should only expose the public key, not the private key or seed phrase.