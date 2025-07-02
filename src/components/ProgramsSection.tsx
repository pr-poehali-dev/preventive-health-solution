import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const programs = [
    {
      icon: "User",
      title: "Для взрослых (30+)",
      description: "Годовой контроль основных систем организма",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop&auto=format",
      features: [
        "Годовой контроль основных систем организма",
        "Профилактика возрастных изменений",
        "Анализ стрессоустойчивости",
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: "Users",
      title: "Для родителей и детей",
      description: "Наблюдение за развитием ребенка",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format",
      features: [
        "Наблюдение за развитием ребенка",
        "Профилактика школьных нагрузок и переутомления",
        "Контроль психологического комфорта",
      ],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: "Briefcase",
      title: "Для активных и бизнесменов",
      description: "Оптимизация энергии и продуктивности",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop&auto=format",
      features: [
        "Оптимизация энергии и продуктивности",
        "Антистресс-диагностика",
        "Индивидуальные рекомендации по балансу работы и здоровья",
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Выберите свою программу
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Персональные программы здоровья для каждого этапа жизни
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden bg-white"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div
                  className={`absolute top-4 left-4 w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}
                >
                  <Icon
                    name={program.icon as any}
                    className="w-8 h-8 text-white"
                  />
                </div>
              </div>

              <CardHeader className="text-center pb-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon name="Check" className="w-4 h-4 text-green-600" />
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full bg-gradient-to-r ${program.color} hover:opacity-90 text-white py-3 rounded-xl font-medium`}
                >
                  Узнать подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative bg-white rounded-3xl p-8 lg:p-12 shadow-xl overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop&auto=format"
              alt="Медицинское оборудование"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Единственная в Краснодаре программа, которая заботится о вас
              полностью
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Heart" className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Физическое состояние
                </h4>
                <p className="text-gray-600 text-sm">
                  кардио, гормоны, иммунитет, метаболизм
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Brain" className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Психоэмоциональное здоровье
                </h4>
                <p className="text-gray-600 text-sm">
                  уровень стресса, риски выгорания, качество сна
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Icon name="FileText" className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Персональные рекомендации
                </h4>
                <p className="text-gray-600 text-sm">
                  от врачей, нутрициологов и психологов
                </p>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl"
            >
              <Icon name="Calendar" className="w-5 h-5 mr-2" />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
