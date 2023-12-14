import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, dividerClasses, imageListClasses } from '@mui/material';
import './Wishcard.css'

import wishme from './wishme.png';
import dude1 from './dude1.jpg';
import dude2 from './dude2.jpg';
export default function WishCard() {

  const data = ["Happy birthday, Dude! 🎉 May your special day overflow with care, love, and passion. You bring so much joy and happiness into my life with your boundless spirit.",

  "Wishing you an extraordinary year ahead filled with beautiful moments and endless blessings. Celebrate and shine bright! 🎂💖",

  "Teri jaisi dhundhu mai milti nhi hai... Ghadi vakt ki tere bina hilti nhi hai... Ye saari luta di mujh pe khud ko... Bss tere aage meri chalti nhi hai!!!",

  "Tu Rutha Rutdha saa lagta hai... koi Tarkeeb bta manane ki , Mai Khud ko Girvi rakh dunga ,Tu Kimat bta Mushkurane ki!",

  "Khushiyan batne ko tere pass hazar dost honge, Gum batna ho to mujhe yaad kar lena:)",

  "I know i'm not a perfect bestfriend but... I will always be there if you need me:)",

  "Bahot Udaas hai koi tere chup hojane se... Ho sake tov baat kr kisi bahane se... Tu lakh khafa hi sahi Magar itna tov dekh... Koi toot gya hai tere rooth jaane se..."
];

  let [count, setCount] = useState(0);
  let nextWishList = () => {
    if (data.length - 1 > count) {
      setCount(count + 1);
    }
    else {
      setCount(0);
    }
  }
  let prevWishList = () => {
    if (0 < count) {
      setCount(count - 1);
    }
    else {
      setCount(data.length - 1);
    }
  }
  return (

    <div>
      <img className="confetti" src=" https://static.vecteezy.com/system/resources/previews/011/887/887/non_2x/memphis-round-confetti-festive-background-in-cyan-blue-pink-and-yellow-childish-pattern-and-bokeh-confetti-circles-decoration-holiday-background-free-png.png" alt="" />
      <div className="maincard">

        <div className="wishcard">
          <h1> Happy Birthday Dear</h1>
          <p>{data[count]} </p>
           
        </div>
        <div className="card">
        <Card sx={{ maxWidth: 280 , }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={dude1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
               Shivangi Rai
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "Happiest birthday, Smarty! 🎉✨ May this special day be filled with beautiful melodies of joy and sweet harmonies of love.
                Celebrate your special day in harmony, knowing that you are loved and cherished. Enjoy every precious moment! 🥳💕"
                </Typography>
            </CardContent>
          </CardActionArea>
        </Card><br />
                <button onClick={prevWishList}>prev</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={nextWishList}>next</button>
        </div>
      </div>
    </div>
  )
}