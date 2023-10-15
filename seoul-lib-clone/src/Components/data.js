import pic1 from '../img/메인 1.jpg'
import pic2 from '../img/GNB바.jpg'
import pic3 from '../img/전자도서관 상세페이지 1.jpg'
import pic4 from '../img/전자도서관 메인 1.jpg'
import pic5 from '../img/전자도서관 검색결과.jpg'
import pic6 from '../img/도서 상세페이지.jpg'
import pic7 from '../img/대출 안내창.jpg'
import pic8 from '../img/내서재 이동 안내창.jpg'

const data = [ pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8 ];

const ImgData = (num) => {
    const cur = num.num;
    console.log(cur);

    return (
        <div>
            { (cur >= data.length) ? 
            <div> end </div> : <img src={data[cur]} alt='' width="100%" /> }
            
        </div>
    )
}

export default ImgData;