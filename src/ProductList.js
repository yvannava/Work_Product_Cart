
import rota from './images/rota2.jpg'
import opalWhite from './images/opal-white.jpg'
import toothbrush from './images/phillips kids.jpg';
import opal10 from './images/opalescense10.jpg';
import brushHeads from './images/perio tip.jpg';
import gumx from './images/gumx.jpg';
import squeezer from './images/squeezer.jpg';
import mi from './images/miPaste.jpg';
import dryMouth from './images/dryMouthgel.jpg';
import chg from './images/chg.jpg';
import stannous from './images/stannouseRinse.jpg';
import sodiumGel from './images/sodiumGel.jpg';
import antibacterial from './images/antibacterialGel.jpg';
import cleaningSol from './images/antibacterialGel.jpg';
import './Product.css';

export const products =[
    {
        id : 1,
        productImage : rota,
        productName : "ROTADENT",
        desc : "Includes: Easy-grip brush handle. Perio & Ortho tip brush.charger base with cord and travel case.",
        price : 130.00
    },
    {
        id: 2,
        productImage : toothbrush,
        productName : "Philips Sonicare for kids",
        desc : "",
        price : 49.99
    },
    {
        id : 3,
        productImage : opal10,
        productName :"Opalescence go 10-pack",
        desc : "Includes: 10 Application tray sets(upper & lower  teeth) for 10 day whitening treatment",
        price : 71.00
    },
    {
        id : 4,
        productImage : brushHeads,
        productName :"Brush heads",
        desc : "Two different options - sold individually: A)Perio Tip B)Ortho Tip",
        price : 16.00
    },
    { 
        id : 5,
        productImage : opalWhite,
        productName : "Opalescence Whitening Toothpaste",
        desc : "",
        price : 12.00
    },
    {
        id : 6,
        productImage : gumx,
        productName :"GumX defender plus+ gel",
        desc : "",
        price : 25.00
    },
    {
        id : 7,
        productImage : squeezer,
        productName : "Tube Squeezer",
        desc : "",
        price : 10.00
    },
    { 
        id : 8,
        productImage : mi,
        productName : "Mi PastePlus",
        desc : "Enamel strengthening and protecting aid.",
        price : 30.00
    },
    {
        id : 9,
        productImage : dryMouth,
        productName : "GC Dry mouth gel",
        desc : "",
        price : 15.00
    },
    {
        id : 10,
        productImage : chg,
        productName : "PRO-DENRX CHLOROHEXIDINE",
        desc : "antimicrobial oral rinse",
        price : 30.00
    },
    { id : 11,
        productImage : stannous,
        productName : "Stannous Fluoride rinse",
        desc : "",
        price : 27.00
    },
    {
        id : 12,
        productImage : sodiumGel,
        productName : "PRO-DENRX 1.1% NEUTRAL SODIUM FLUORIDE GEL",
        desc : "",
        price : 22.00
    },
    {
        id : 13,
        productImage : antibacterial,
        productName : "ANTIBACTERIAL GEL (4fl. oz)",
        desc :"helps to reduce bacteria that can cause tooth decay",
        price : 18.00
    },
    { 
        id : 14,
        productImage : cleaningSol,
        productName :"CLEANING SOLUTION(16fl.oz)",
        desc : "Large refill size - helps remove calcium deposits and prevents the return of stain and build -up of plaque.",
        price : 32.00
    }
]