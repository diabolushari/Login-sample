var express = require('express');
var router = express.Router();
const product = [
  {
    name: "Nike",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtj3YfelRos0pSdt-OkiDU9vxXoUnD4AV8wA&usqp=CAU",
    description:"Nike Air technology consists of pressurised air inside a tough yet flexible bag, and provides more flexibility and spring without compromising structure. The Air-Sole units maintain their given form with elasticity, reduce impact and keep the shoe snug and lightweight."
  },
  {
    name: "Adidas",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn2q1wy5RY1OWJH4-7zQedlkxpkTp-wVMFog&usqp=CAU",
    description:"Adidas AG (German: [ˈʔadiˌdas] (listen); stylized as adidas since 1949)[4] is a German multinational corporation, founded and headquartered in Herzogenaurach, Bavaria, that designs and manufactures shoes, clothing and accessories"
  },
  {
    name: "Puma",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN2M0iu5-f-KJw21_DsPqSU2nM72STQ-4144GLVXi_HZJRYzM3ubjaqK0U3o3WznaSinE&usqp=CAU",
    description:"Puma SE, branded as Puma, is a German multinational corporation that designs and manufactures athletic and casual footwear, apparel and accessories, which is headquartered in Herzogenaurach, Bavaria, Germany."
  },
  {
    name: "Woodland",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_boY0C-99RuQVaYeJ-cSwpz_sFh4msbCJA&usqp=CAU",
    description:"Woodland's parent company, Aero Group, has been a well known name in the outdoor shoe industry since the early 50s. Founded in Quebec, Canada, it entered the Indian market in 1992. Before that, Aero Group was majorly exporting its leather shoes to Russia. After the division of Russia into various states known as the USSR, the group decided to launch some of its products in India. Hence, the first hand-stitched leather shoe was launched, which took the entire shoe market by storm. That shoe made the brand 'Woodland'."
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',(req,res)=>{
  res.render('home',{product})
})

module.exports = router;
