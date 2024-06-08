/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Create a variable to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, artist, year, description) {
  const nft = {
    name: name,
    artist: artist,
    year: year,
    description: description
  };

  nftCollection.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log(`  Name: ${nft.name}`);
    console.log(`  Artist: ${nft.artist}`);
    console.log(`  Year: ${nft.year}`);
    console.log(`  Description: ${nft.description}`);
    console.log('---------------------------');
  });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nftCollection.length;
}

// Call your functions below this line

// Minting some NFTs
mintNFT('CryptoKitty', 'John Doe', 2023, 'A cute crypto kitty');
mintNFT('PixelPunk', 'Jane Smith', 2024, 'A punk pixelated character');
mintNFT('DigitalDoodle', 'Sam Brown', 2023, 'A doodle in digital form');

// Listing all NFTs
listNFTs();

// Printing the total supply of NFTs
console.log(`Total NFTs minted: ${getTotalSupply()}`);


// call your functions below this line

