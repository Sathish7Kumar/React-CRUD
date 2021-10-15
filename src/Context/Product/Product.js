import React from "react";
import Card from "./Card";

 

    const Itemcart =[
        {
            url:"https://thumb7.shutterstock.com/mosaic_250/169597876/571050688/stock-vector-vector-illustration-of-laptop-icon-571050688.jpg",
            cardtitle : "Laptop",
            rate : "$599.01",
            // button : "Product"
        },
        {
            url:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-a226bzahins/gallery/in-galaxy-a22-5g-a226-396855-sm-a226bzahins-thumb-474515221?$320_320_PNG$",
            cardtitle:"Mobile",
            rate : "$299.27",
            // button : "Add to Cart"
        },
        {
            url:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
            cardtitle : "T-Shirt",
            rate : "$19.51",
            // button : "Add to Cart"
        },
        {
            url:"https://m.media-amazon.com/images/I/71297umCYeL._SL1020_.jpg",
            cardtitle : "Wallet",
            rate : "$29.13",
            // button: "Add to Cart"
        },
        {
            url:"https://assetscdn1.paytm.com/images/catalog/product/W/WA/WATHRV-COMBO-OFHRV-861049258B40AA/1562689364298_0..jpeg?imwidth=320&impolicy=hq",
            cardtitle : "Watch",
            rate : "$57.41",
            // button : "Add to Cart"
        },
        {
            url : "https://www.ikea.com/in/en/images/products/ektorp-2-seat-sofa__0818544_pe774475_s5.jpg",
            cardtitle : "Sofa",
            rate : "$341.27",
            // button : "Add to Cart"
        },
        {
            url : "https://m.media-amazon.com/images/I/61L5k+xh37L._AC_SS450_.jpg",
            cardtitle : "Kid-Toy",
            rate : "$17.61",
            // button : "Add to Cart"
        },
        {
            url : "https://www.ahhelmets.in/10089-thickbox_default/axxis-draken-gear-gloss-helmet-fluorescent-orange.jpg",
            cardtitle : "Helmet",
            rate : "$33.71",
            // button : "Add to Cart"
        },
    ]
    
    export default function Product (){
        return (
            <>
            <div className="container">
                <div className="row">
                    {Itemcart.map((value,key)=>{
                        return(
                        <div className="col-lg-3 col-md-6 col-sm-6" key={key}>
                        <Card
                        url ={value.url}
                        cardtitle={value.cardtitle}
                        rate={value.rate}
                        // button={value.button}
                        />
                        </div>     
                        )
                    })}
                </div>
            </div>
            </>
        )
    }

    
