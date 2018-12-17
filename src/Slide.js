import React, { Component } from "react";
import Slider from "react-slick";
import Magnifier from 'react-magnifier';
import './Slide.css'
class SimpleSlider extends Component {
    render() {
        let settings = {
            dots: true,
            dotsClass:'dotsss',
            appendDots: dots => <ol type="I">{dots}</ol>,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let listanje = this.props.img.map(x=>{
            if(this.props.img.length===1){
                return <div><Magnifier zoomFactor={2}  mgShape='square' mgWidth={200} mgHeight={200} src={x} alt='imgNotFound...O.o' /><br/><p style={{visibility:'hidden'}}>a</p>
                </div>
            }
            else{
                return <div><Magnifier zoomFactor={2}  mgShape='square' mgWidth={200} mgHeight={200} src={x} alt='imgNotFound...O.o' />
                </div>
            } })
        return (
            <Slider {...settings}>
            {listanje}
               {/*  <div>
                    <Magnifier zoomFactor={2}  mgShape='square' mgWidth={200} mgHeight={200} src={this.props.img1} alt='imgNotFound...O.o' />
                </div>
                <div>
                    <Magnifier zoomFactor={2} mgShape='square' mgWidth={200} mgHeight={200} src={this.props.img2} alt='imgNotFound...O.o' />
                </div>
                <div>
                    <Magnifier zoomFactor={2} mgShape='square' mgWidth={200} mgHeight={200} src={this.props.img3} alt='imgNotFound...O.o' />
                </div> */}
            </Slider>
        );
    }
}
export default SimpleSlider 