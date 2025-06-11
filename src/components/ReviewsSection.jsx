import React from 'react';

const reviews = [
  {
    name: 'Александр',
    text: 'Это было незабываемо! Маршруты крутые, природа — просто восторг. Спасибо команде!',
    avatar: 'https://i.pravatar.cc/100?img=3',
  },
  {
    name: 'Марина',
    text: 'Организация на высшем уровне, всё чётко и по делу. Вернусь ещё раз!',
    avatar: 'https://i.pravatar.cc/100?img=5',
  },
  {
    name: 'Игорь',
    text: 'Ездили всей семьёй. Дети в восторге, взрослые — тоже. Очень понравилось!',
    avatar: 'https://i.pravatar.cc/100?img=8',
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 px-6 bg-white" id="reviews">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Отзывы</h2>
        <p className="text-gray-600 mb-10">Что говорят наши гости</p>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-2xl shadow-md text-left hover:shadow-lg transition"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
