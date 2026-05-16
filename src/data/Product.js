import React from 'react'
// tshirt import
import tshirtBlackF from "../assets/Products/Tshirt/Front/blackF.jpg"
import tshirtBlackB from "../assets/Products/Tshirt/Back/blackB.jpg"
import tshirtWhiteF from "../assets/Products/Tshirt/Front/whiteF.png"
import tshirtWhiteB from "../assets/Products/Tshirt/Back/whiteB.png"
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
import WhiteBottle from "../assets/Products/Bottles/WhiteB.png"

//  import caps

import CapBlack from "../assets/Products/Caps/CapBlack.jpg"
import CapBlue from "../assets/Products/Caps/CapBlue.jpg"
import CapWhite from "../assets/Products/Caps/CapWhite.png"

// import Mugs
import MugBlack from '../assets/Products/Cups/MugBlack.jpg'
import MugRed from '../assets/Products/Cups/MugRed.jpg'
import MugWhite from '../assets/Products/Cups/MugWhite.png'

// import diary
import DiaryBlackOpen from '../assets/Products/DiaryBooks/Open/DiaryBlackOpen.png'
import DiaryBlackClose from '../assets/Products/DiaryBooks/Close/DiaryBlackClose.png'
import DiaryBrownOpen from '../assets/Products/DiaryBooks/Open/DiaryBrownOpen.png'
import DiaryBrownClose from '../assets/Products/DiaryBooks/Close/DiaryBrownClose.png'
import DiaryGreenOpen from '../assets/Products/DiaryBooks/Open/DiaryGreenOpen.png'
import DiaryGreenClose from '../assets/Products/DiaryBooks/Close/DiaryGreenClose.png'
// import Pen
import BlackPen from '../assets/Products/Pens/BlackPen.png'
import BluePen from '../assets/Products/Pens/BluePen.png'
import SilverPen from '../assets/Products/Pens/SilverPen.png'



export const Product = [
  {
    id: 1,
    name: "Custom T-Shirt",
    price: 499,
    category: "Apparel",
    description: "Premium cotton unisex t-shirt with high-quality stitching. Perfect for vibrant custom designs and daily wear.",
    colors: [
      { name: "black", imageF: tshirtBlackF, imageB: tshirtBlackB },
      { name: "white", imageF: tshirtWhiteF, imageB: tshirtWhiteB },
      { name: "#56CCF2", imageF: tshirtNavyF, imageB: tshirtNavyB },
      { name: "maroon", imageF: tshirtMaroonF, imageB: tshirtMaroonB },
      { name: "gray", imageF: tshirtGrayF, imageB: tshirtGrayB },
    ],
  },
  {
    id: 2,
    name: "Custom Bottle",
    price: 299,
    category: "Hydration",
    description: "Eco-friendly stainless steel bottle. Keeps your drinks at the perfect temperature while showcasing your unique brand.",
    colors: [
      { name: "black", BottleImage: BlackBottle },
      { name: "white", BottleImage: WhiteBottle },
      { name: "#56CCF2", BottleImage: BlueBottle },
      { name: "silver", BottleImage: SilverBottle },
    ],
  },
  {
    id: 3,
    name: "Custom Cap",
    price: 199,
    category: "Apparel",
    description: "Adjustable classic baseball cap. Breathable fabric and structured front panels for the perfect custom embroidery or print.",
    colors: [
      { name: "black", CapImage: CapBlack },
      { name: "#56CCF2", CapImage: CapBlue },
      { name: "white", CapImage: CapWhite },
    ],
  },
  {
    id: 4,
    name: "Custom Cup",
    price: 249,
    category: "Dining",
    description: "Durable ceramic mug with a smooth finish. The perfect canvas for your favorite quotes or corporate branding.",
    colors: [
      { name: "black", MugImage: MugBlack },
      { name: "red", MugImage: MugRed },
      { name: "#56CCF2", MugImage: MugWhite },
      { name: "white", MugImage: MugWhite },
    ],
  },
  {
    id: 5,
    name: "Custom Diary",
    price: 149,
    category: "Stationery",
    description: "Luxury hardbound notebook with premium ruled pages. Ideal for journaling, sketching, or professional note-taking.",
    colors: [
      { name: "black", diaryImageOpen: DiaryBlackOpen, diaryImageClose: DiaryBlackClose },
      { name: "brown", diaryImageOpen: DiaryBrownOpen, diaryImageClose: DiaryBrownClose },
      { name: "green", diaryImageOpen: DiaryGreenOpen, diaryImageClose: DiaryGreenClose },
    ],
  },
  {
    id: 6,
    name: "Custom Pen",
    price: 99,
    category: "Stationery",
    mainImage: SilverPen,
    imageF: SilverPen,
    imageB: SilverPen,
    description: "Sleek metallic ballpoint pen with smooth ink flow. Personalize it with a name or logo for a truly professional touch.",
    colors: [
      { name: "black", PenImage: SilverPen },
      { name: "navy", PenImage: BluePen },
      { name: "silver", PenImage: SilverPen },
    ],
  },
];