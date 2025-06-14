import React from 'react';
import Slider from 'react-slick';

const reviews = [
  {
    name: 'Александр',
    text: 'Это было незабываемо! Маршруты крутые, природа — просто восторг. Спасибо команде!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Марина',
    text: 'Организация на высшем уровне, всё чётко и по делу. Вернусь ещё раз!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Игорь',
    text: 'Ездили всей семьёй. Дети в восторге, взрослые — тоже. Очень понравилось!',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
  },
  {
    name: 'Анна',
    text: 'Лучшее приключение за последние годы. Настоящая перезагрузка!',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

export default function ReviewsSection() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 px-6 bg-white" id="reviews">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Отзывы</h2>
        <p className="text-gray-600 mb-10">Что говорят наши гости</p>

        <Slider {...settings}>
          {reviews.map((review, idx) => (
            <div key={idx} className="px-4">
              <div className="bg-gray-50 p-6 rounded-2xl shadow-md text-left max-w-xl mx-auto">
                <div className="flex items-center mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <h4 className="text-lg font-semibold">{review.name}</h4>
                </div>
                <p className="text-gray-700 italic">“{review.text}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
