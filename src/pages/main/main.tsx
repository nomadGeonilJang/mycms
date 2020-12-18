import React from 'react';
import styled from 'styled-components';

import { Color } from 'theme/Color';
import { Margin } from 'theme/Margin';
import { Padding } from 'theme/Padding';

const makeWon = (money:number) => money.toLocaleString();
const make = (number:string | number) => {
  let target = number;
  if (typeof target === 'number') {
    target = String(number);
  }

  const strList = target.split('');
  const len = strList.length;
  for (let i = len; i > 0; i -= 3) {
    if (i !== len) {
      strList.splice(i, 0, ',');
    }
  }
  return strList.join('');
};

function Main() {
  console.log(make(100000));
  return (
    <MainSection>
      <aside>
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
            <li><a href="#1">1</a></li>
            <li><a href="#1">2</a></li>
            <li><a href="#1">3</a></li>
            <li><a href="#1">4</a></li>
            <li><a href="#1">5</a></li>
            <li><a href="#1">6</a></li>
          </ul>
        </div>
      </aside>
      <article>content</article>
    </MainSection>
  );
}

const MainSection = styled.section`
  display:grid;
  grid-template-columns:repeat(12,1fr);
  padding-top:40px;
  height:100%;
  grid-gap:40px;
  aside{
    grid-column:1/4;
    background-color:red;
  }
  article{
    grid-column:4/13;
    background-color:blue;
  }

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
    
  }
`;

export default Main;
