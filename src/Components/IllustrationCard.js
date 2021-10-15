import React from "react";

export default function IllustrationCard(){
    return (
        <div className="col-lg-12 mb-4">
            <div className="card">
                <div className="card-header text-primary"><strong>Illustrations</strong></div>
                <div className="card-body">
                    <img className='card-img' src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" alt="card-img"/> <hr/>
                    <p className="card-text">Add some quality, svg illustrations to your project courtesy of <a href="/">unDraw </a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                    <br/> <br/>
                    <a href="/" >Browse Illustrations on unDraw →</a>
                </div>
            </div>
        </div>
    )
}