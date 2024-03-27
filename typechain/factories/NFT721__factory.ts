/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NFT721, NFT721Interface } from "../NFT721";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620019dc380380620019dc833981016040819052620000349162000237565b8151829082906200004d906000906020850190620000de565b50805162000063906001906020840190620000de565b505050620000806200007a6200008860201b60201c565b6200008c565b5050620002f1565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000ec906200029e565b90600052602060002090601f0160209004810192826200011057600085556200015b565b82601f106200012b57805160ff19168380011785556200015b565b828001600101855582156200015b579182015b828111156200015b5782518255916020019190600101906200013e565b50620001699291506200016d565b5090565b5b808211156200016957600081556001016200016e565b600082601f83011262000195578081fd5b81516001600160401b0380821115620001b257620001b2620002db565b604051601f8301601f19908116603f01168101908282118183101715620001dd57620001dd620002db565b81604052838152602092508683858801011115620001f9578485fd5b8491505b838210156200021c5785820183015181830184015290820190620001fd565b838211156200022d57848385830101525b9695505050505050565b600080604083850312156200024a578182fd5b82516001600160401b038082111562000261578384fd5b6200026f8683870162000184565b9350602085015191508082111562000285578283fd5b50620002948582860162000184565b9150509250929050565b600281046001821680620002b357607f821691505b60208210811415620002d557634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6116db80620003016000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb46514610207578063b88d4fde1461021a578063c87b56dd1461022d578063e985e9c514610240578063f2fde38b146102535761010b565b806370a08231146101cf578063715018a6146101ef5780638da5cb5b146101f757806395d89b41146101ff5761010b565b806323b872dd116100de57806323b872dd1461018357806340c10f191461019657806342842e0e146101a95780636352211e146101bc5761010b565b806301ffc9a71461011057806306fdde0314610139578063081812fc1461014e578063095ea7b31461016e575b600080fd5b61012361011e366004610feb565b610266565b60405161013091906110e7565b60405180910390f35b6101416102ae565b60405161013091906110f2565b61016161015c366004611023565b610340565b6040516101309190611096565b61018161017c366004610fc2565b61038c565b005b610181610191366004610e78565b610424565b6101816101a4366004610fc2565b61045c565b6101816101b7366004610e78565b6104a9565b6101616101ca366004611023565b6104c4565b6101e26101dd366004610e2c565b6104f9565b604051610130919061156b565b61018161053d565b610161610588565b610141610597565b610181610215366004610f88565b6105a6565b610181610228366004610eb3565b6105b8565b61014161023b366004611023565b6105f7565b61012361024e366004610e46565b61067a565b610181610261366004610e2c565b6106a8565b60006001600160e01b031982166380ac58cd60e01b148061029757506001600160e01b03198216635b5e139f60e01b145b806102a657506102a682610719565b90505b919050565b6060600080546102bd906115e3565b80601f01602080910402602001604051908101604052809291908181526020018280546102e9906115e3565b80156103365780601f1061030b57610100808354040283529160200191610336565b820191906000526020600020905b81548152906001019060200180831161031957829003601f168201915b5050505050905090565b600061034b82610732565b6103705760405162461bcd60e51b8152600401610367906113c0565b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b6000610397826104c4565b9050806001600160a01b0316836001600160a01b031614156103cb5760405162461bcd60e51b8152600401610367906114d9565b806001600160a01b03166103dd61074f565b6001600160a01b031614806103f957506103f98161024e61074f565b6104155760405162461bcd60e51b81526004016103679061129b565b61041f8383610753565b505050565b61043561042f61074f565b826107c1565b6104515760405162461bcd60e51b81526004016103679061151a565b61041f838383610846565b61046461074f565b6001600160a01b0316610475610588565b6001600160a01b03161461049b5760405162461bcd60e51b81526004016103679061140c565b6104a58282610973565b5050565b61041f838383604051806020016040528060008152506105b8565b6000818152600260205260408120546001600160a01b0316806102a65760405162461bcd60e51b815260040161036790611342565b60006001600160a01b0382166105215760405162461bcd60e51b8152600401610367906112f8565b506001600160a01b031660009081526003602052604090205490565b61054561074f565b6001600160a01b0316610556610588565b6001600160a01b03161461057c5760405162461bcd60e51b81526004016103679061140c565b610586600061098d565b565b6006546001600160a01b031690565b6060600180546102bd906115e3565b6104a56105b161074f565b83836109df565b6105c96105c361074f565b836107c1565b6105e55760405162461bcd60e51b81526004016103679061151a565b6105f184848484610a82565b50505050565b606061060282610732565b61061e5760405162461bcd60e51b81526004016103679061148a565b6000610628610ab5565b905060008151116106485760405180602001604052806000815250610673565b8061065284610ac7565b604051602001610663929190611067565b6040516020818303038152906040525b9392505050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6106b061074f565b6001600160a01b03166106c1610588565b6001600160a01b0316146106e75760405162461bcd60e51b81526004016103679061140c565b6001600160a01b03811661070d5760405162461bcd60e51b815260040161036790611157565b6107168161098d565b50565b6001600160e01b031981166301ffc9a760e01b14919050565b6000908152600260205260409020546001600160a01b0316151590565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610788826104c4565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006107cc82610732565b6107e85760405162461bcd60e51b81526004016103679061124f565b60006107f3836104c4565b9050806001600160a01b0316846001600160a01b0316148061082e5750836001600160a01b031661082384610340565b6001600160a01b0316145b8061083e575061083e818561067a565b949350505050565b826001600160a01b0316610859826104c4565b6001600160a01b03161461087f5760405162461bcd60e51b815260040161036790611441565b6001600160a01b0382166108a55760405162461bcd60e51b8152600401610367906111d4565b6108b083838361041f565b6108bb600082610753565b6001600160a01b03831660009081526003602052604081208054600192906108e49084906115a0565b90915550506001600160a01b0382166000908152600360205260408120805460019290610912908490611574565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6104a5828260405180602001604052806000815250610be2565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610a115760405162461bcd60e51b815260040161036790611218565b6001600160a01b0383811660008181526005602090815260408083209487168084529490915290819020805460ff1916851515179055517f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3190610a759085906110e7565b60405180910390a3505050565b610a8d848484610846565b610a9984848484610c15565b6105f15760405162461bcd60e51b815260040161036790611105565b60408051602081019091526000815290565b606081610aec57506040805180820190915260018152600360fc1b60208201526102a9565b8160005b8115610b165780610b008161161e565b9150610b0f9050600a8361158c565b9150610af0565b60008167ffffffffffffffff811115610b3f57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015610b69576020820181803683370190505b5090505b841561083e57610b7e6001836115a0565b9150610b8b600a86611639565b610b96906030611574565b60f81b818381518110610bb957634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350610bdb600a8661158c565b9450610b6d565b610bec8383610d30565b610bf96000848484610c15565b61041f5760405162461bcd60e51b815260040161036790611105565b6000610c29846001600160a01b0316610e0f565b15610d2557836001600160a01b031663150b7a02610c4561074f565b8786866040518563ffffffff1660e01b8152600401610c6794939291906110aa565b602060405180830381600087803b158015610c8157600080fd5b505af1925050508015610cb1575060408051601f3d908101601f19168201909252610cae91810190611007565b60015b610d0b573d808015610cdf576040519150601f19603f3d011682016040523d82523d6000602084013e610ce4565b606091505b508051610d035760405162461bcd60e51b815260040161036790611105565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061083e565b506001949350505050565b6001600160a01b038216610d565760405162461bcd60e51b81526004016103679061138b565b610d5f81610732565b15610d7c5760405162461bcd60e51b81526004016103679061119d565b610d886000838361041f565b6001600160a01b0382166000908152600360205260408120805460019290610db1908490611574565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b3b151590565b80356001600160a01b03811681146102a957600080fd5b600060208284031215610e3d578081fd5b61067382610e15565b60008060408385031215610e58578081fd5b610e6183610e15565b9150610e6f60208401610e15565b90509250929050565b600080600060608486031215610e8c578081fd5b610e9584610e15565b9250610ea360208501610e15565b9150604084013590509250925092565b60008060008060808587031215610ec8578081fd5b610ed185610e15565b9350610edf60208601610e15565b925060408501359150606085013567ffffffffffffffff80821115610f02578283fd5b818701915087601f830112610f15578283fd5b813581811115610f2757610f27611679565b604051601f8201601f19908116603f01168101908382118183101715610f4f57610f4f611679565b816040528281528a6020848701011115610f67578586fd5b82602086016020830137918201602001949094529598949750929550505050565b60008060408385031215610f9a578182fd5b610fa383610e15565b915060208301358015158114610fb7578182fd5b809150509250929050565b60008060408385031215610fd4578182fd5b610fdd83610e15565b946020939093013593505050565b600060208284031215610ffc578081fd5b81356106738161168f565b600060208284031215611018578081fd5b81516106738161168f565b600060208284031215611034578081fd5b5035919050565b600081518084526110538160208601602086016115b7565b601f01601f19169290920160200192915050565b600083516110798184602088016115b7565b83519083019061108d8183602088016115b7565b01949350505050565b6001600160a01b0391909116815260200190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906110dd9083018461103b565b9695505050505050565b901515815260200190565b600060208252610673602083018461103b565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601c908201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604082015260600190565b60208082526024908201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646040820152637265737360e01b606082015260800190565b60208082526019908201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604082015260600190565b6020808252602c908201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b60208082526038908201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760408201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606082015260800190565b6020808252602a908201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604082015269726f206164647265737360b01b606082015260800190565b60208082526029908201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460408201526832b73a103a37b5b2b760b91b606082015260800190565b6020808252818101527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604082015260600190565b6020808252602c908201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860408201526b34b9ba32b73a103a37b5b2b760a11b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526029908201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960408201526839903737ba1037bbb760b91b606082015260800190565b6020808252602f908201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60408201526e3732bc34b9ba32b73a103a37b5b2b760891b606082015260800190565b60208082526021908201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656040820152603960f91b606082015260800190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b90815260200190565b600082198211156115875761158761164d565b500190565b60008261159b5761159b611663565b500490565b6000828210156115b2576115b261164d565b500390565b60005b838110156115d25781810151838201526020016115ba565b838111156105f15750506000910152565b6002810460018216806115f757607f821691505b6020821081141561161857634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156116325761163261164d565b5060010190565b60008261164857611648611663565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461071657600080fdfea2646970667358221220e3329a7a96379cb97b4c34520664ed8e5b92a1bbd4d510545977242d8c1c37fd64736f6c63430008010033";

export class NFT721__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<NFT721> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<NFT721>;
  }
  getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  attach(address: string): NFT721 {
    return super.attach(address) as NFT721;
  }
  connect(signer: Signer): NFT721__factory {
    return super.connect(signer) as NFT721__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFT721Interface {
    return new utils.Interface(_abi) as NFT721Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): NFT721 {
    return new Contract(address, _abi, signerOrProvider) as NFT721;
  }
}
