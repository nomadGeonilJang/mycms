import React from 'react';
import styled from 'styled-components';
import { GrDeliver } from 'react-icons/gr';
import { RiInboxArchiveFill } from 'react-icons/ri';
import { GiReturnArrow } from 'react-icons/gi';
import { AiOutlineCar } from 'react-icons/ai';

import { Color } from 'theme/Color';

function MainShopping() {
  return (
    <Container>
      <div className="shopping-info">
        <div className="items">
          <div className="item">
            <span className="title">배송중</span>
            <span className="icon"><AiOutlineCar /></span>
            <span className="cnt">0</span>
          </div>
          <div className="item">
            <span className="title">배송완료</span>
            <span className="icon"><RiInboxArchiveFill /></span>
            <span className="cnt">0</span>

          </div>
          <div className="item">
            <span className="title">뱅송중</span>
            <span className="icon"><GiReturnArrow /></span>
            <span className="cnt">0</span>
          </div>
        </div>
        <span className="link">
          찐한 상품 리뷰는 <span className="green">쇼핑MY</span>에서 확인하세요. <a href="https://shopping.naver.com/my/keep-products">쇼핑 MY &gt;</a>
        </span>
      </div>
      <div className="advertisment">
        <img src="https://phinf.pstatic.net/checkout/20200617_42/1592388877629bkr2C_PNG/PC_336x192_2.png" alt="" />
      </div>
      <div className="search">s</div>
    </Container>
  );
}

const Container = styled.section`
    display:grid;
    grid-template-columns:repeat(5, 1fr);
    grid-template-rows:repeat(5,1fr);
  
  .shopping-info{
    grid-column:1/4;
    grid-row:1/4;
    border-left:1px solid ${Color.DarkGrapText};
    background-color:${Color.Gray};

    display:flex;
    flex-direction:column;
    justify-content:center;

    .items{
      display:flex;
      justify-content:space-around;
      align-items:center;
      flex-wrap:wrap;
    }
    

    .item{
      padding:20px;
      display:grid;
      align-items:center;
      justify-items:center;
      grid-template-columns:repeat(4, 1fr);
      grid-template-rows:repeat(4,1fr);
      font-size:0.8rem;
      color:${Color.DarkGrapText};

      .title{
        grid-column:1/4;
        grid-row:1/2;
      }
    
     .icon{
        grid-column:1/4;
        grid-row:2/5;
        display:flex;
        justify-content:center;
        align-items:center;
        width:63px;
        height:63px;
        background-color:${Color.DarkGrapText};
        color:${Color.White};
        border-radius:50%;
        font-size:25px;
      }
      .cnt{
        grid-column:4/5;
        grid-row:2/5;
        font-size:40px;
        color:${Color.DarkGrapText};
      }
    }

    .link{
      align-self:flex-end;
      font-weight:bold;
      color:${Color.DarkGray};
      font-size:0.8rem;
      margin-bottom:10px;
      margin-right:10px;
      .green{
        color:${Color.Green};
      }
      a{
        color:${Color.DeepGray};  
      }
    }
  }
  .advertisment{
    grid-column:4/6;
    grid-row:1/4;
    border-right:1px solid ${Color.DarkGrapText};
    border-left:1px solid ${Color.DarkGrapText};
    background-color:${Color.Gray};

    img{
      display:block;
    }
  }
  .search{
    grid-column:1/6;
    grid-row:4/5;
    border:1px solid ${Color.DarkGrapText};
    background-color:${Color.Gray};
  }
`;

export default MainShopping;
