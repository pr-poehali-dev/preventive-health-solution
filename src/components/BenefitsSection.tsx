import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Eye",
      title: "Выявить скрытые риски",
      description: "до появления симптомов",
      color: "text-blue-600 bg-blue-100",
    },
    {
      icon: "Shield",
      title: "Избежать хронических заболеваний",
      description: "благодаря раннему выявлению",
      color: "text-green-600 bg-green-100",
    },
    {
      icon: "Heart",
      title: "Снизить стресс и тревожность",
      description: "за свое здоровье",
      color: "text-purple-600 bg-purple-100",
    },
    {
      icon: "Banknote",
      title: "Сэкономить время и деньги",
      description: "на лечении в будущем",
      color: "text-orange-600 bg-orange-100",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Предупредить – проще, чем лечить
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ежегодная комплексная диагностика позволяет:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 rounded-2xl ${benefit.color} mx-auto mb-6 flex items-center justify-center`}
                >
                  <Icon name={benefit.icon as any} className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-6xl font-bold text-blue-600 mb-2">
                70%
              </div>
              <p className="text-xl text-gray-700 font-medium">
                серьезных заболеваний можно предотвратить
              </p>
              <p className="text-gray-600 mt-2">
                при своевременной диагностике
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <Icon name="TrendingUp" className="w-10 h-10 text-white" />
              </div>
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <Icon name="Check" className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
