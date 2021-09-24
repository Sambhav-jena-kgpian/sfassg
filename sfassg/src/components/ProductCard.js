import React,{Component} from 'react'
import data, { Data } from './data';
import './data.js'
import './landingstyle.css';
import vacuum from './vacuum.jpeg'
import TV from './TV.jpg'
import Cart from './Cart'

class ProductCard extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             countprod1:0,
             countprod2:0,
             countprod3:0,
             countprod4:0,
             countprod5:0,
             countprod6:0,
             totalprice:0
        }
    }
    increment1(){
        this.setState({
            countprod1 : this.state.countprod1 +1
        })
        console.log(this.state.countprod1)
    }
    decrement1(){
        this.setState({
            countprod1 : this.state.countprod1 -1
        })
        console.log(this.state.countprod1)
    }
    increment2(){
        this.setState({
            countprod2 : this.state.countprod2 +1
        })
        console.log(this.state.countprod2)
    }
    decrement2(){
        this.setState({
            countprod2 : this.state.countprod2 -1
        })
        console.log(this.state.countprod2)
    }
    increment3(){
        this.setState({
            countprod3 : this.state.countprod3 +1
        })
        console.log(this.state.countprod3)
    }
    decrement3(){
        this.setState({
            countprod3 : this.state.countprod3 -1
        })
        console.log(this.state.countprod3)
    }
    increment4(){
        this.setState({
            countprod4 : this.state.countprod4 +1
        })
        console.log(this.state.countprod4)
    }
    decrement4(){
        this.setState({
            countprod4 : this.state.countprod4 -1
        })
        console.log(this.state.countprod4)
    }
    increment5(){
        this.setState({
            countprod5 : this.state.countprod5 +1
        })
        console.log(this.state.countprod5)
    }
    decrement5(){
        this.setState({
            countprod5 : this.state.countprod5 -1
        })
        console.log(this.state.countprod5)
    }
    increment6(){
        this.setState({
            countprod6 : this.state.countprod6 +1
        })
        console.log(this.state.countprod6)
    }
    decrement6(){
        this.setState({
            countprod6 : this.state.countprod6-1
        })
        console.log(this.state.countprod6)
    }
    grandTotal(){
        this.setState({
            totalprice: this.state.totalprice+ this.state.countprod1*45900 + (this.state.countprod2+this.state.countprod3+this.state.countprod4+this.state.countprod5+this.state.countprod6)*8000
        })
        console.log(this.state.totalprice)
    }
 render(){
    return(
        <section className="Products">
            <h>ELECTRONICS</h>
                    <div className="product-row-1">
                                    <div className="product-row-1-1" >
                                    <img src={TV} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[0].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[0].desc}<br/><br/>Price: {data[0].price}
                                        </div><br/><br/>
                                        <button onClick={() => this.increment1()}>Add</button>
                                        In Cart :{this.state.countprod1}
                                    <button onClick={() => this.decrement1()}>Remove</button>
                                    </div>
                                    
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>

                            <div className="product-row-1-1" >
                                <img src={vacuum} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[1].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[1].desc}<br/><br/>Price: {data[1].price}
                                        </div>
                                        <br/><br/>
                                        <button onClick={() => this.increment2()}>Add</button>
                                        In Cart :{this.state.countprod2}
                                        <button onClick={() => this.decrement2()}>Remove</button>
                                        </div>
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>

                            <div className="product-row-1-1" >
                            <img src={vacuum} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[2].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[2].desc}<br/><br/>Price: {data[2].price}
                                        </div>
                                        <br/><br/>
                                        <button onClick={() => this.increment3()}>Add</button>
                                        In Cart :{this.state.countprod3}
                                        <button onClick={() => this.decrement3()}>Remove</button>
                                    </div>
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>

                            <div className="product-row-1-1" >
                            <img src={vacuum} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[3].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[3].desc}<br/><br/>Price: {data[3].price}
                                        </div>
                                        <br/><br/>
                                        <button onClick={() => this.increment4()}>Add</button>
                                        In Cart :{this.state.countprod4}
                                        <button onClick={() => this.decrement4()}>Remove</button>
                                    </div>
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>

                            <div className="product-row-1-1" >
                            <img src={vacuum} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[4].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[4].desc}<br/><br/>Price: {data[4].price}
                                        </div>
                                        <br/><br/>
                                        <button onClick={() => this.increment5()}>Add</button>
                                        In Cart :{this.state.countprod5}
                                        <button onClick={() => this.decrement5()}>Remove</button>
                                    </div>
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>

                            <div className="product-row-1-1" >
                            <img src={vacuum} width="auto" height="180px"/>
                                        <div className="product-description">
                                            {data[5].name}
                                        </div>
                                        <br/>
                                        <div className="product-info-price">
                                            {data[5].desc}<br/><br/>Price: {data[5].price}
                                        </div>
                                        <br/><br/>
                                        <button onClick={() => this.increment6()}>Add</button>
                                        In Cart :{this.state.countprod6}
                                        <button onClick={() => this.decrement6()}>Remove</button>
                                    </div>
                            <p className="product-info-price"></p>
                            <p className="order-details"></p>
                    </div>
                    <div class="cart-details">
                        <h1 class="cart-heading">
                            CART DETAILS
                        </h1>
                        <Cart desc="Samsung SMART TV" price="45,900" value={this.state.countprod1} ></Cart>
                        <Cart desc="Philips PowerPro FC9352/01" value={this.state.countprod2} />
                        <Cart desc="Philips PowerPro FC9352/02" value={this.state.countprod3}/>
                        <Cart desc="Philips PowerPro FC9352/03" value={this.state.countprod4}/>
                        <Cart desc="Philips PowerPro FC9352/04" value={this.state.countprod5}/>
                        <Cart desc="Philips PowerPro FC9352/05" value={this.state.countprod6}/>
                        <button className="checkout" onClick={()=>this.grandTotal()}>Finalise and Compute total</button>
                        <p className="total-price">Grand Total: {this.state.totalprice}</p>
                    </div>
        </section>
    )
    }
}

export default ProductCard
