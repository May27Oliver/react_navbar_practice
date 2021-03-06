import React, { Component } from 'react';
import styled from 'styled-components';

const TopButton = styled.div`
    display:${props=>props.showBtn?'block':'none'};
    transition:1s ease-out;
    width:59px;
    height:59px;
    background:#00829B50;
    border-radius:50%;
    position:fixed;
    top:86.1%;
    right:2.7%;
    @media (max-width: 500px) {
        width:50px;
        height:50px;
        top:80%;
        right:1.9%;
    }
`
const UpIcon = styled.div`
    width:8.32px;
    height:8.32px;
    &:before {
        content:'';
        position:absolute;
        top:28px;
        right:26px;
        transform:rotate(-45deg);
        width:21px;
        height:4px;
        border-radius:3px;
        background:#F5F4F4;
        @media (max-width: 500px) {
            top:22px;
            right:21px; 
        }
    }
    &:after {
        content:'';
        position:absolute;
        top:28px;
        left:26px;
        transform:rotate(45deg);
        width:21px;
        height:4px;
        border-radius:3px;
        background:#F5F4F4;
        @media (max-width: 500px) {
            top:23px;
            left:21px;
        }
    }
`

class topButtom extends Component {
    constructor(){
        super();
        this.state = {
            showBtn:false//起始時回到上頭按鈕先隱藏
        };
    }
    componentDidMount(){
        window.addEventListener('scroll',this.onScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onScroll);
    }
    onScroll=()=>{
        if(window.scrollY > 200){
            this.setState({
                showBtn:true
            })
            document.getElementById('to-the-top').style.display="block";
        }else{
            this.setState({
                showBtn:false
            })
            document.getElementById('to-the-top').style.display="none";
        }
    }
    toTheTop=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        const {showBtn} = this.state;
        return (
            <TopButton id="to-the-top" showBtn={showBtn} onClick={this.toTheTop}>
                <UpIcon></UpIcon>
            </TopButton>
        );
    }
}

export default topButtom;