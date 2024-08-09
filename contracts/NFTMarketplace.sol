// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFTMarketplace is Ownable {

    struct Listing {
        address seller;
        address nftContract;
        uint256 tokenId;
        uint256 price;
        bool sold;
    }

    // Mapping of listing IDs to Listings
    mapping(uint256 => Listing) public listings;
    uint256 public nextListingId;

    event NFTListed(uint256 listingId, address seller, address nftContract, uint256 tokenId, uint256 price);
    event NFTSold(uint256 listingId, address buyer, address seller, uint256 price);

    function listNFT(address _nftContract, uint256 _tokenId, uint256 _price) external {
        require(_price > 0, "Price must be greater than zero");
        require(IERC721(_nftContract).ownerOf(_tokenId) == msg.sender, "Only the owner can list this NFT");

        IERC721(_nftContract).transferFrom(msg.sender, address(this), _tokenId);

        listings[nextListingId] = Listing({
            seller: msg.sender,
            nftContract: _nftContract,
            tokenId: _tokenId,
            price: _price,
            sold: false
        });

        emit NFTListed(nextListingId, msg.sender, _nftContract, _tokenId, _price);
        nextListingId++;
    }

    function buyNFT(uint256 _listingId) external payable {
        Listing storage listing = listings[_listingId];
        require(listing.price == msg.value, "Incorrect value sent");
        require(!listing.sold, "This NFT has already been sold");

        listing.sold = true;
        IERC721(listing.nftContract).transferFrom(address(this), msg.sender, listing.tokenId);
        payable(listing.seller).transfer(msg.value);

        emit NFTSold(_listingId, msg.sender, listing.seller, msg.value);
    }

    function cancelListing(uint256 _listingId) external {
        Listing storage listing = listings[_listingId];
        require(listing.seller == msg.sender, "Only the seller can cancel this listing");
        require(!listing.sold, "Cannot cancel a sold listing");

        listing.sold = true;
        IERC721(listing.nftContract).transferFrom(address(this), msg.sender, listing.tokenId);
    }

    function getListing(uint256 _listingId) external view returns (Listing memory) {
        return listings[_listingId];
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
