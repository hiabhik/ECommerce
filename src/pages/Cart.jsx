import React from 'react'

import Header from '../components/Header'

import { cartdata } from '../datas/cartData'

function Cart() {

  return (
    <div>
        <Header/>
        <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)"}}>
          <h6 style={{color:"blue", textAlign:"center", padding:"1rem"}}>cart</h6>
        </div><br/><br/><br/>
        <div style={{margin:"0 20%"}}>
          <div style={{width:"100%",backgroundColor:"rgb(246, 246, 246)",margin:"2px"}}>
            <div style={{width:"40%",display:"inline-block"}}>PRODUCT</div>
            <div style={{width:"20%",display:"inline-block"}}>PRICE</div>
            <div style={{width:"20%",display:"inline-block"}}>QTY</div>
            <div style={{width:"20%",display:"inline-block"}}>UNIT PRICE</div>
          </div>
          <hr/><br/>
          

          {
          cartdata && cartdata.map((val)=>{
              return(
                <>
                  <div key={val._id} style={{width:"100%",backgroundColor:"rgb(246, 246, 246)",margin:"2px"}}>
                    <div style={{width:"40%",display:"inline-block"}}>{val.img}</div>
                    <div style={{width:"20%",display:"inline-block"}}>{val.name}</div>
                    <div style={{width:"20%",display:"inline-block"}}>{val.offer}</div>
                    <div style={{width:"20%",display:"inline-block"}}>UNIT PRICE</div>
                  </div>
                </>
              )
            })
          }
          

          
        </div>
    </div>
  )
}

export default Cart