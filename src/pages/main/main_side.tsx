import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillLock, AiFillSetting, AiFillCreditCard, AiFillAccountBook, AiFillSecurityScan, AiOutlineFieldTime,
} from 'react-icons/ai';

import { Color } from 'theme/Color';
import { Margin } from 'theme/Margin';
import { Padding } from 'theme/Padding';

const makeWon = (money:number) => money.toLocaleString();
function MainSide() {
  return (
    <Aside>
      <div className="money-profile">
        <div className="profile">
          <img src="https://phinf.pstatic.net/contact/20180801_233/15330854009452PYn6_PNG/avatar_profile.png?type=s160" alt="avatar" />
          <span>goenil jang</span>
        </div>
        <div className="point">
          <dt>my point</dt>
          <dd>{makeWon(1000000)} 원</dd>
        </div>
        <div className="control">
          <span>충전</span>
          <div className="divider" />
          <span>선물</span>
        </div>
      </div>
      <div className="money-ad">
        <a href="https://www.naver.com">
          <p>
            <strong>💝💝💝💝지금 가입하고</strong>
            <strong><span className="green">최대4%</span> <span className="r-text">더 받으세요!</span></strong>
          </p>
          <span className="goto">자세히 보기 <span>〉</span></span>
        </a>
      </div>
      <div className="money-setting">
        <ul>
          <li>
            <a href="#1">
              <span><AiFillSetting /></span>
              <span>기본 설정</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span><AiOutlineBell /></span>
              <span>알림수신 설정</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span>  <AiFillCreditCard /></span>
              <span>카드관리</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span>  <AiFillAccountBook /></span>
              <span>계좌 관리</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span>  <AiFillLock /></span>
              <span>비밀번호</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span>  <FaMapMarkerAlt /></span>
              <span>배송지 관리</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span> <AiFillSecurityScan /></span>
              <span>보안설정</span>
            </a>
          </li>
          <li>
            <a href="#1">
              <span>  <AiOutlineFieldTime /></span>
              <span>정기/예약 결제</span>
            </a>
          </li>
        </ul>
      </div>
    </Aside>
  );
}

const Aside = styled.aside`
  
    grid-column:1/4;
    background-color:red;
  

    .money-profile{
    background-color:${Color.DarkGray};
    height:300px;

    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;

    .profile{
      display:flex;
      flex-direction:column;
      img{
        width:78px;
        height:78px;
        border-radius:50%;
        margin-bottom:5px;
      }
      span{
        color:${Color.DarkGrapText};
      }
    }
    
    .point{
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      color:${Color.White};

      dt{
        margin-bottom:${Margin.Bottom};
        font-size:1.2rem;
      }
      dd{
        font-size:1.3rem;
        font-weight:bold;
      }
    }

    .control{
      font-size:1rem;
      color:${Color.White};
      display:flex;
      justify-content:space-evenly;
      align-items:center;
      border:1px solid ${Color.DarkGrapText};

      width:70%;
      height:40px;

      span{
        cursor: pointer;
        display:block;
        padding:${Padding.SM};
      }

      .divider{
        background-color:${Color.White};
        width:1px;
        height:50%;
      }
    }
  }

  .money-ad{
    color:${Color.White};
    height:90px;
    background-color:${Color.DeepGray};
    padding:${Padding.SM};

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    
    a{
      text-decoration:none;
      color:${Color.White};
      text-align:center;

      display:flex;
      flex-direction:column;
      justify-content:space-around;
      height:100%;

    }
    p{
      display:flex;
      flex-direction:column;
      align-items:center;
    }

    strong{
      font-weight:bold;
    }
    .green{
      color:${Color.Green};
    }
    .r-text{
      font-weight:normal;
      font-size:0.8rem;
    }

    span.goto{
      text-decoration:none;
      font-size:0.7rem;
      color:${Color.White};
      letter-spacing:-0.1px;
    }
  }

  .money-setting{
    ul{
      background-color:gray;
      display:grid;
      grid-template-columns:1fr 1fr;
      grid-template-rows:repeat(4, 1fr);
      grid-gap:1px;

      li{
        
        width:100%;
        height:90px;
        display:flex;
        justify-content:center;
        align-items:center;

        a{  
          border:1px solid ${Color.DarkGrapText};
          width:100%;
          height:100%;
          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          
          span:first-child{
            display:flex;
            width:50px;
            height:50px;
            font-size:1.5rem;
            background-color:${Color.IconGray};
            justify-content:center;
            align-items:center;
            margin-bottom:${Margin.Bottom};
            border-radius:50%;
            transition:transform 0.3s ease-in;
          }

          span:first-child:hover{
            transform:scale(1.1);
          }
          span{
            font-size:0.8rem;
          }
        }
      }
    }
  }
`;
export default MainSide;
