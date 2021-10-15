import React from 'react'
import Data from './Data'
import Project from './Project'
import ColorSystem from './ColorSystem'
import Footer from './Footer'
import IllustrationCard from './IllustrationCard'

function Dashboard() {
    const datas = [
        {
            Earnings : "Earnings (Monthly)",
            value : "$40,000",
            symbol : "fas fa-calendar",
            bar : 0,
            color:"primary"
        },
        {
            Earnings : "Earnings (Annual)",
            value : "$215,000",
            symbol : "fas fa-dollar-sign",
            bar : 0,
            color : "success"
        },
        {
            Earnings : "Tasks",
            value : "50%",
            symbol : "fas fa-clipboard-list",
            bar : 1,
            color:"info"
        },
        {
            Earnings : "Pending Requests",
            value : "18",
            symbol : "fas fa-comments",
            bar : 0,
            color:"warning"
        }
    ]
    
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 ml-1">Dashboard</h1>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> 
                    Generate Report
                </a>
            </div>
            <div className="row ml-2">
            {
                datas.map((data,index) => {
                return <Data key = {index} data = {data} />
                })
            }
            </div>
            <div className="row ml-2">
                <div className="col-lg-6 mb-4">
                    <Project /><br/><hr/><br/>
                    <IllustrationCard />
                </div>
              <div className="col-lg-6 mb-4"> 
                        <ColorSystem />
                </div> 
            </div>
        </>
    )
}

export default Dashboard