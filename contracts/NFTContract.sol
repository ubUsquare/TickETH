// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MusicEventNFT is ERC721, Ownable {
    enum TicketType { None, Platinum, Gold, Silver }

    struct Ticket {
        TicketType ticketType;
        bool isUsed;
    }

    mapping(uint256 => Ticket) public tickets;
    mapping(address => uint256) public platinumTicketsOwned;
    mapping(address => uint256) public goldTicketsOwned;
    mapping(address => uint256) public silverTicketsOwned;

    uint256 public nextTokenId;
    uint256 public totalTicketsSold;

    uint256 public constant PLATINUM_PRICE = 0.003 ether;
    uint256 public constant GOLD_PRICE = 0.002 ether;
    uint256 public constant SILVER_PRICE = 0.001 ether;

    event TicketMinted(address owner, uint256 tokenId, TicketType ticketType);
    event TicketValidated(address owner, uint256 tokenId);

    constructor(address _owner) ERC721("MusicEventNFT", "MENFT") Ownable(_owner) {}

    function mintTickets(TicketType _ticketType, uint256 _quantity) public payable {
        require(_ticketType != TicketType.None, "Invalid ticket type");
        require(_quantity > 0, "Quantity must be greater than zero");

        uint256 totalPrice = getPrice(_ticketType) * _quantity;
        require(msg.value >= totalPrice, "Insufficient payment");

        for (uint256 i = 0; i < _quantity; i++) {
            uint256 tokenId = nextTokenId;
            tickets[tokenId] = Ticket(_ticketType, false);
            _mint(msg.sender, tokenId);
            nextTokenId++;
            totalTicketsSold++;

            if (_ticketType == TicketType.Platinum) {
                platinumTicketsOwned[msg.sender]++;
            } else if (_ticketType == TicketType.Gold) {
                goldTicketsOwned[msg.sender]++;
            } else if (_ticketType == TicketType.Silver) {
                silverTicketsOwned[msg.sender]++;
            }

            emit TicketMinted(msg.sender, tokenId, _ticketType);
        }
    }

    function getPrice(TicketType _ticketType) public pure returns (uint256) {
        if (_ticketType == TicketType.Platinum) {
            return PLATINUM_PRICE;
        } else if (_ticketType == TicketType.Gold) {
            return GOLD_PRICE;
        } else if (_ticketType == TicketType.Silver) {
            return SILVER_PRICE;
        } else {
            revert("Invalid ticket type");
        }
    }

    function validateTicket(uint256 _tokenId) public {
        require(ownerOf(_tokenId) == msg.sender, "You are not the owner of this ticket");
        require(tickets[_tokenId].ticketType != TicketType.None, "Invalid ticket");
        require(!tickets[_tokenId].isUsed, "Ticket already used");
        tickets[_tokenId].isUsed = true;
        emit TicketValidated(msg.sender, _tokenId);
    }

    function isTicketValid(uint256 _tokenId) public view returns (bool) {
        return tickets[_tokenId].ticketType != TicketType.None && !tickets[_tokenId].isUsed;
    }

    function totalTickets() public view returns (uint256) {
        return totalTicketsSold;
    }

    function getUserTicketCounts(address _user) public view returns (uint256 platinumCount, uint256 goldCount, uint256 silverCount) {
        return (
            platinumTicketsOwned[_user],
            goldTicketsOwned[_user],
            silverTicketsOwned[_user]
        );
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
