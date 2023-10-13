import pic1 from '../img/메인 1.jpg'
// import pic2 from '../img/GNB바.png'
// import pic3 from '../img/전사도서관 상세페이지.png'
// import pic4 from '../img/전자도서관 메인.png'

const data = [ pic1 ];

const ImgData = (num) => {
    const cur = num.num;

    return (
        <div>
            <img src={data[cur]} alt='' width="100%" />
            {/* { data.map ((pic, index)=> {
                return <img src={pic} alt='' key={index}/>
            })} */}
        </div>
    )
}

export default ImgData;