import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Полная диагностика здоровья –{" "}
                <span className="text-blue-600">на год вперед</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Комплексные программы превентивной медицины для взрослых и
                детей. Контроль физического и психического состояния – без
                стресса и очередей.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="Calendar" className="w-5 h-5 mr-2" />
                Записаться на консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg rounded-xl"
              >
                <Icon name="Search" className="w-5 h-5 mr-2" />
                Подобрать программу
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center">
                  <Icon name="Heart" className="w-5 h-5 text-blue-600" />
                </div>
                <div className="w-10 h-10 rounded-full bg-green-100 border-2 border-white flex items-center justify-center">
                  <Icon name="Shield" className="w-5 h-5 text-green-600" />
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-100 border-2 border-white flex items-center justify-center">
                  <Icon name="Users" className="w-5 h-5 text-purple-600" />
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Уже{" "}
                <span className="font-semibold text-gray-900">2000+ семей</span>{" "}
                доверяют нам свое здоровье
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Icon name="Heart" className="w-8 h-8 text-red-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Кардиология
                  </h3>
                  <p className="text-sm text-gray-500">Контроль сердца</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Icon name="Brain" className="w-8 h-8 text-purple-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Психология
                  </h3>
                  <p className="text-sm text-gray-500">Ментальное здоровье</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Icon
                    name="Activity"
                    className="w-8 h-8 text-green-500 mb-3"
                  />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Диагностика
                  </h3>
                  <p className="text-sm text-gray-500">Полная проверка</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <Icon name="Users" className="w-8 h-8 text-blue-500 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Семейный подход
                  </h3>
                  <p className="text-sm text-gray-500">Для всей семьи</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
