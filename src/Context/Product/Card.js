import React from "react";

function Card ({url,cardtitle,rate,button}){
    return (
        <>
        <div className="col-lg-3">
            <div className="card mb-3" style={{width:"16rem"}}>
                <img className="card-img-top ml-4" src={url}/>
                <div className="card-body">
                    <h2 className="card-title">{cardtitle}</h2>
                    <h4 className="card-text">{rate}</h4>
                    {/* <button className="btn btn-block btn-primary">{button}</button> */}
                </div>
            </div>
        </div>
        </>
    )
}
 export default Card