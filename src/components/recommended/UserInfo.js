import React from 'react'
import { UserInfoSB } from './RecStyles'

export default function UserInfo({ review }) {
  return (
    <UserInfoSB>
        <img src={process.env.PUBLIC_URL + `/images/profile-img.jpg`} alt="" />
        <div>
            <h2>{review.user}</h2>
            <p>Played {review.playTime} hrs at review time</p>
            <p>{review.helpful} people found this review helpful</p>
        </div>
    </UserInfoSB>
  )
}
