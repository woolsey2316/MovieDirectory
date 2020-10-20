import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: block;
  position: relative;
  padding-left: 55px;
  margin-bottom: 15px;
  padding-right: 60px;
`
const Avatar = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
`

const ReviewRating = styled.span`
  border-color: #48ee3b;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #fff;
  position: absolute;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -moz-box-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  right: 0;
  top: 0;
  width: 36px;
  height: 36px;
  background-color: rgba(26,25,31,0.7);
  border: 1px solid transparent;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  margin-top: 2px;
`
const SubText = styled.span`
  display: block;
  font-size: 12px;
  color: rgba(255,255,255,0.6);
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0.2px;
`

const Title = styled.span`
  display: block;
  font-size: 16px;
  color: #fff;
  line-height: 20px;
  font-weight: 400;
  letter-spacing: 0.4px;
  margin-bottom: 5px;
`
export default function() {
  <Container>
    <Avatar class="reviews__avatar" src="img/user.svg" alt=""/>
    <Title class="reviews__name">Best Marvel movie in my opinion</Title>
    <SubText class="reviews__time">24.08.2018, 17:53 by John Doe</SubText>
    <ReviewRating>8.4</ReviewRating>
  </Container>
}