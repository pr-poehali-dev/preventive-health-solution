import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Мария и Денис Соколовы",
      role: "Родители двоих детей",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face&auto=format",
      content:
        "Уже третий год наблюдаемся в Медсонар всей семьей. Детям нравится – без страха идут к врачу. А нам спокойно за их здоровье.",
      rating: 5,
    },
    {
      name: "Елена Петрова",
      role: "Мама Саши, 8 лет",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b60e015e?w=100&h=100&fit=crop&crop=face&auto=format",
      content:
        "Выявили проблемы с осанкой у ребенка на ранней стадии. Благодаря рекомендациям врачей исправили все без серьезного лечения.",
      rating: 5,
    },
    {
      name: "Андрей Михайлов",
      role: "Предприниматель",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
      content:
        "Программа для бизнесменов – это находка! Помогли разобраться со стрессом и улучшить качество сна. Чувствую себя намного лучше.",
      rating: 5,
    },
    {
      name: "Анна и Игорь Волковы",
      role: "Семья с тремя детьми",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format",
      content:
        "Индивидуальный подход к каждому ребенку поразил. Составили персональные рекомендации для всех троих с учетом возраста и особенностей.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Star" className="w-4 h-4" />
            Отзывы наших клиентов
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Истории счастливых семей
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Более 2000 семей уже доверили нам свое здоровье. Вот что они говорят
            о нашей работе.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-3 border-blue-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Users" className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">2000+</h3>
            <p className="text-gray-600">семей под нашей заботой</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Heart" className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">довольных клиентов</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Icon name="Award" className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">5+</h3>
            <p className="text-gray-600">лет успешной работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
