import { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, dividerClasses, imageListClasses } from '@mui/material';
import './Wishcard.css'

import png from './png.png';
import song from './Song.mp3'
import wishme from './wishme.png'; 
import pic1 from './dude1.jpg';
import pic2 from './dude2.jpg';
import pic3 from './dude3.png';
import pic4 from './dude4.png';
import pic5 from './dude5.jpg'; 
import pic7 from './dude7.jpg';
import pic8 from './dude8.jpg';
import pic9 from './dude9.jpg';
import pic10 from './dude10.jpg';
import pic11 from './dude11.jpg';
import pic12 from './dude12.jpg';
import pic13 from './dude13.png';
import pic14 from './dude14.png';
import pic15 from './dude15.png';
import pic16 from './dude16.jpg';

export default function WishCard() {

  const data = ["Happy birthday, Dude! 🎉 May your special day overflow with care, love, and passion. You bring so much joy and happiness into my life with your boundless spirit.",

  "Wishing you an extraordinary year ahead filled with beautiful moments and endless blessings. Celebrate and shine bright! 🎂💖",
  
  " & I know i'm not a perfect bestfriend but... I will always be there whenever you need me:)",

  "Khushiyan batne ko tere pass hazar dost honge, Gum batna ho to mujhe yaad kar lena:)",

  "& Tu irreplaceable hi rahegi yaar <3.. Chahe kitni bhi ladayi q na ho jaye",
  
  "You don't get enough credits but... tu important hai yaar!... & there are some line for you!",
  
  " Chandi sona ek taraf, Tera Hona ek taraf... Ek taraf teri Aankhen👀, Jaadu tona ek Taraf!",

  "Tu Rutha Rutdha saa lagta hai... koi Tarkeeb bta manane ki , Mai Khud ko Girvi rakh dunga ,Tu Kimat bta Mushkurane ki!",
  
  "Teri jaisi dhundhu mai milti nhi hai... ⌚Ghadi vakt ki tere bina hilti nhi hai... Ye saari lutadi mujhpe khudko... Bss tere aage meri chalti nhi hai!!!",

  "Bahot Udaas hai koi tere chup hojane se... Ho sake tov baat kr kisi bahane se... Tu lakh khafa hi sahi Magar itna tov dekh... Koi toot gya hai tere rooth jaane se...",

  "Rishton Se Badi Chahat Kya Hogi... Dosti Se Badi ibadat kya Hogi... Jise Dost Mil Jaaye Tum Jaisa Use Zindagi Se Fir Shikayat Kya Hogi..!!❤️🤍",

  "Mai Din Hu- Meri sham Tum Ho... Mai Neend Hu- Mera Khwab Tum Ho👐 Mai Lab Hu- Meri Baat Tum Ho👉 Mai Tab Hu- Jab Mere Sath Tum Ho..!!"

];

const pic = [{pic1  },{pic2 },{pic3 },{pic4 },{pic5 },{pic7 },{pic8 },{pic9 },{  pic10 },{ pic11 },{ pic12 },{  pic13},{ pic14},{ pic15},{ pic16} ];
 
 let [view, setView] = useState( );
const changePic = ()=>{
  if(0<count){
    setView(view + 1);
  }else{
    setView(0);
  }
}
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
        <Card sx={{ maxWidth: 380 , }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={0==count? wishme
              :1==count?pic1
              :2==count?pic2
              :3==count?pic3
              :4==count?pic16
              :5==count?pic5
              :6==count?pic13
              :7==count?pic8
              :8==count?pic12
              :9==count?pic14
              :10==count?pic15
              :pic9
            }

              alt={wishme}
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
                <button onClick={nextWishList} >next</button> 
        </div>
      </div>
    </div>
  )
}