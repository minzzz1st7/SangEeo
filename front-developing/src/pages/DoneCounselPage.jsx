import React from 'react';
import {useParams} from 'react-router-dom'
import ReviewWrite from '../components/reviewWrite/reviewWrite';


// 회원이 상담완료 후, 코멘트와 그림을 다시 확인하고 리뷰를 작성하는 페이지
function DoneCounselPage() {
  return (
    <div>
   {/* 리뷰작성 */}
    <ReviewWrite scheduleId = {useParams().scheduleNo}/>  
  </div>
  );
}

export default DoneCounselPage;
