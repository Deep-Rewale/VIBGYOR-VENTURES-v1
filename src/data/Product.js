import React from 'react'
// tshirt import
import tshirtBlackF from "../assets/Products/Tshirt/Front/blackF.jpg"
import tshirtBlackB from "../assets/Products/Tshirt/Back/blackB.jpg"
import tshirtWhiteF from "../assets/Products/Tshirt/Front/whiteF.jpg"
import tshirtWhiteB from "../assets/Products/Tshirt/Back/whiteB.jpg"
import tshirtNavyF from "../assets/Products/Tshirt/Front/blueF.jpg"
import tshirtNavyB from "../assets/Products/Tshirt/Back/blueB.jpg"
import tshirtMaroonF from "../assets/Products/Tshirt/Front/maronF.jpg"
import tshirtMaroonB from "../assets/Products/Tshirt/Back/maronB.jpg"
import tshirtGrayF from "../assets/Products/Tshirt/Front/grayF.jpg"
import tshirtGrayB from "../assets/Products/Tshirt/Back/grayB.jpg"

// Bottle import

import BlackBottle from "../assets/Products/Bottles/BlackB.jpg"
import BlueBottle from "../assets/Products/Bottles/BlueB.jpg"
import SilverBottle from "../assets/Products/Bottles/SilverB.jpg"
import WhiteBottle from "../assets/Products/Bottles/WhiteB.jpg"

//  import caps

import CapBlack from "../assets/Products/Caps/CapBlack.jpg"
import CapBlue from "../assets/Products/Caps/CapBlue.jpg"
import CapWhite from "../assets/Products/Caps/CapWhite.jpg"

// import Mugs
import MugBlack from '../assets/Products/Cups/MugBlack.jpg'
import MugRed from '../assets/Products/Cups/MugRed.jpg'
import MugWhite from '../assets/Products/Cups/MugWhite.jpg'

// import diary
import DiaryBlackOpen from '../assets/Products/DiaryBooks/Open/DiaryBlackOpen.jpg' 
import DiaryBlackClose from '../assets/Products/DiaryBooks/Close/DiaryBlackClose.jpg'
import DiaryBrownOpen from '../assets/Products/DiaryBooks/Open/DiaryBrownOpen.jpg' 
import DiaryBrownClose from '../assets/Products/DiaryBooks/Close/DiaryBrownClose.jpg'
import DiaryGreenOpen from '../assets/Products/DiaryBooks/Open/DiaryGreenOpen.jpg' 
import DiaryGreenClose from '../assets/Products/DiaryBooks/Close/DiaryGreenClose.jpg'
// import Pen
import BlackPen from '../assets/Products/Pens/BlackPen.jpg'
import BluePen from '../assets/Products/Pens/BluePen.jpg'
import SilverPen from '../assets/Products/Pens/SilverPen.jpg'



export const Product = [
  {
    id: 1,
    name: "Custom T-Shirt",
    price: 499,
    colors: [
      { name: "black", imageF: tshirtBlackF , imageB : tshirtBlackB },
      { name: "white", imageF: tshirtWhiteF , imageB : tshirtWhiteB  },
      { name: "#000080", imageF: tshirtNavyF , imageB : tshirtNavyB  },
      { name: "maroon", imageF: tshirtMaroonF , imageB : tshirtMaroonB  },
      { name: "gray", imageF: tshirtGrayF , imageB : tshirtGrayB  },
    ],
  },

   {
    id: 2,
    name: "Custom Bottle",
    price: 299,
    colors: [
      { name: "black", BottleImage :  BlackBottle },
      { name: "white", BottleImage : WhiteBottle  },
      { name: "#000080", BottleImage : BlueBottle   },
      { name: "silver", BottleImage : SilverBottle   },
      
    ],
  },

  
   {
    id: 3,
    name: "Custom Cap",
    price: 199,
    colors: [
      { name: "black", CapImage : CapBlack },
      { name: "#000080", CapImage : CapBlue  },
      { name: "white", CapImage : CapWhite   },
      ],
  },

   {
    id: 4,
    name: "Custom Cup",
    price: 249,
    colors: [
      { name: "black", MugImage : MugBlack },
      { name: "red", MugImage :  MugRed  },
      { name: "white", MugImage : MugWhite   },
      ],
  },

   {
    id: 5,
    name: "Custom Diary",
    price: 149,
    colors: [
      { name: "black", diaryImageOpen : DiaryBlackOpen , diaryImageClose : DiaryBlackClose },
      { name: "brown", diaryImageOpen : DiaryBrownOpen , diaryImageClose : DiaryBrownClose },
      { name: "green", diaryImageOpen : DiaryGreenOpen , diaryImageClose : DiaryGreenClose  },
      ],
  },

   {
    id: 6,
    name: "Custom Pen",
    price: 99,
    colors: [
      { name: "black", PenImage : BlackPen },
      { name: "#000080 ", PenImage :BluePen },
      { name: "silver", PenImage : SilverPen   },
      ],
  },


];