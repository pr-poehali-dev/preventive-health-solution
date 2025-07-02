import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Heart" className="w-4 h-4" />
                Здоровье всей семьи
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Счастливые семьи</span>{" "}
                начинаются с{" "}
                <span className="relative">
                  здоровья
                  <div className="absolute -bottom-2 left-0 w-full h-3 bg-yellow-200 opacity-50 rounded"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Комплексные программы превентивной медицины. Заботимся о
                физическом и эмоциональном благополучии каждого члена вашей
                семьи.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Записаться на консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="FileText" className="w-5 h-5 mr-2" />
                Программы диагностики
              </Button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face&auto=format"
                    alt="Семья 1"
                    className="w-12 h-12 rounded-full border-3 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b60e015e?w=48&h=48&fit=crop&crop=face&auto=format"
                    alt="Семья 2"
                    className="w-12 h-12 rounded-full border-3 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face&auto=format"
                    alt="Семья 3"
                    className="w-12 h-12 rounded-full border-3 border-white object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face&auto=format"
                    alt="Семья 4"
                    className="w-12 h-12 rounded-full border-3 border-white object-cover"
                  />
                  <div className="w-12 h-12 rounded-full bg-blue-500 border-3 border-white flex items-center justify-center text-white text-sm font-semibold">
                    +50
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    2000+ довольных семей
                  </p>
                  <p className="text-sm text-gray-600">
                    доверяют нам свое здоровье
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=700&fit=crop&auto=format"
                alt="Счастливая семья на приеме у врача"
                className="w-full h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
              />

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Icon
                      name="CheckCircle"
                      className="w-8 h-8 text-green-600"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-900">98%</p>
                    <p className="text-sm text-gray-600">
                      клиентов рекомендуют нас
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="Heart" className="w-6 h-6 text-red-500" />
                  <div>
                    <p className="font-semibold text-gray-900">5+ лет</p>
                    <p className="text-xs text-gray-600">заботы о семьях</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-green-200 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
