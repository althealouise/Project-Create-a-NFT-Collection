/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs =[]

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _eyeColor, _shirtType, _bling, _rarity) {
   const NFT = {
      "name": _name,
      "eyeColor": _eyeColor,
      "shirtType": _shirtType,
      "bling": _bling,
      "rarity": _rarity,
      "creationDate": new Date().toISOString()
   };
   NFTs.push(NFT);
   console.log(_name + " NFT minted!");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
   for (let i = 0; i < NFTs.length; i++) {
      console.log("\nID: \t\t\t\t" + (i + 1));
      console.log("Name: \t\t\t\t" + NFTs[i].name);
      console.log("Eye color: \t\t\t" + NFTs[i].eyeColor);
      console.log("Shirt type: \t\t" + NFTs[i].shirtType);
      console.log("Bling: \t\t\t\t" + NFTs[i].bling);
      console.log("Rarity: \t\t\t" + NFTs[i].rarity);
      console.log("Creation Date: \t\t" + NFTs[i].creationDate + "\n");
      console.log("-------------------------------");
   }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   console.log("Total supply: " + NFTs.length);
   console.log("===============================");
}

// call your functions below this line
mintNFT("Althea", "Brown", "Blouse", "Rose Gold", "Rare");
mintNFT("Louise", "Black", "Halter", "Gold", "Common");
mintNFT("Fitz", "Blue", "Suit", "Silver", "Epic");
mintNFT("Olivia", "Brown", "Dress", "Gold", "Legendary");
listNFTs();
getTotalSupply();
