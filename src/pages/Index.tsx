import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [guestName, setGuestName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const schedule = [
    { time: '15:00', event: 'Прибытие гостей', icon: 'Users' },
    { time: '16:00', event: 'Церемония бракосочетания', icon: 'Heart' },
    { time: '17:30', event: 'Фотосессия и коктейли', icon: 'Camera' },
    { time: '18:30', event: 'Праздничный ужин', icon: 'UtensilsCrossed' },
    { time: '20:00', event: 'Первый танец', icon: 'Music' },
    { time: '21:00', event: 'Танцы и веселье', icon: 'Sparkles' },
  ];

  const handleRSVP = (e: React.FormEvent) => {
    e.preventDefault();
    if (guestName.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-rose-400 mb-4" />
          </div>
          
          <h1 className="font-display text-6xl md:text-7xl mb-4 text-gray-800 tracking-tight">
            Анна & Дмитрий
          </h1>
          
          <Separator className="w-24 mx-auto my-8 bg-rose-300" />
          
          <p className="text-2xl text-gray-600 mb-8">
            Приглашаем вас разделить с нами<br />
            самый счастливый день нашей жизни
          </p>
          
          <div className="space-y-3 text-lg text-gray-700">
            <div className="flex items-center justify-center gap-2">
              <Icon name="Calendar" size={20} className="text-rose-400" />
              <span className="font-medium">15 июня 2025 года</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="Clock" size={20} className="text-rose-400" />
              <span>Начало в 15:00</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} className="text-rose-400" />
              <span>Усадьба "Архангельское"<br />Московская область</span>
            </div>
          </div>
        </div>

        <Card className="p-8 md:p-12 mb-12 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <h2 className="font-display text-4xl text-center mb-8 text-gray-800">
            Расписание дня
          </h2>
          
          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-6 p-4 rounded-lg hover:bg-rose-50/50 transition-all duration-300 hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-2xl font-semibold text-rose-400">
                    {item.time}
                  </span>
                </div>
                
                <Separator orientation="vertical" className="h-12 bg-rose-200" />
                
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-100 to-purple-100 flex items-center justify-center">
                    <Icon name={item.icon as any} size={24} className="text-rose-500" />
                  </div>
                  <span className="text-lg text-gray-700">{item.event}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8 md:p-12 bg-white/80 backdrop-blur-sm shadow-xl animate-fade-in">
          <h2 className="font-display text-4xl text-center mb-6 text-gray-800">
            Подтвердите присутствие
          </h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleRSVP} className="max-w-md mx-auto space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="text-lg py-6 border-rose-200 focus:border-rose-400"
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full py-6 text-lg bg-gradient-to-r from-rose-400 to-purple-400 hover:from-rose-500 hover:to-purple-500 transition-all duration-300"
              >
                Подтвердить присутствие
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-4 animate-scale-in">
              <Icon name="CheckCircle" size={64} className="mx-auto text-green-500" />
              <p className="text-2xl text-gray-700">
                Спасибо, {guestName}!
              </p>
              <p className="text-gray-600">
                Мы рады, что вы будете с нами
              </p>
            </div>
          )}
        </Card>

        <div className="text-center mt-12 text-gray-500 animate-fade-in">
          <p className="text-sm">
            С любовью и нетерпением ждём встречи 💕
          </p>
        </div>
      </div>
    </div>
  );
}
