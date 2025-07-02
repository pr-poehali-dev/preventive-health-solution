import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ProgramsSection = () => {
  const programs = [
    {
      icon: "User",
      title: "Для взрослых (30+)",
      description: "Годовой контроль основных систем организма",
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
              className={`${program.bgColor} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${program.color} mx-auto mb-6 flex items-center justify-center shadow-lg`}
                >
                  <Icon
                    name={program.icon as any}
                    className="w-10 h-10 text-white"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 mt-0.5">
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

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="text-center">
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
