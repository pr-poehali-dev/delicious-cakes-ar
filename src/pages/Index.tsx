import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [cakeDesign, setCakeDesign] = useState({
    layers: 2,
    flavor: 'vanilla',
    filling: 'strawberry',
    decoration: 'flowers'
  });

  const cakes = [
    {
      id: 1,
      name: 'Розовая мечта',
      price: '3500₽',
      image: 'https://cdn.poehali.dev/projects/bb8f19ec-744a-4fc2-957e-844726a17ab1/files/a150dfa0-e7e3-4745-83dc-bcc3bfcb5ecf.jpg',
      description: 'Нежный торт с розовым кремом и цветами'
    },
    {
      id: 2,
      name: 'Шоколадное наслаждение',
      price: '4200₽',
      image: 'https://cdn.poehali.dev/projects/bb8f19ec-744a-4fc2-957e-844726a17ab1/files/017de808-6362-47a6-a09f-a24447a1bc0c.jpg',
      description: 'Многослойный шоколадный торт с кремом'
    },
    {
      id: 3,
      name: 'Свадебная элегантность',
      price: '8500₽',
      image: 'https://cdn.poehali.dev/projects/bb8f19ec-744a-4fc2-957e-844726a17ab1/files/bfdd6b0e-25da-4b68-86f4-732f07617868.jpg',
      description: 'Трехъярусный торт с лавандовым декором'
    }
  ];

  const ingredients = [
    { name: 'Французская мука', icon: 'Wheat', description: 'Высшего сорта из Прованса' },
    { name: 'Свежие яйца', icon: 'Egg', description: 'От местных фермеров' },
    { name: 'Натуральное масло', icon: 'Milk', description: 'Органическое сливочное масло' },
    { name: 'Бельгийский шоколад', icon: 'Cookie', description: 'Premium качество' }
  ];

  const reviews = [
    { name: 'Анна М.', text: 'Заказывала торт на день рождения дочери. Все гости в восторге! AR-конструктор помог создать идеальный дизайн.', rating: 5 },
    { name: 'Дмитрий К.', text: 'Потрясающее качество! Торт был не только красивым, но и невероятно вкусным. Доставили точно в срок.', rating: 5 },
    { name: 'Елена С.', text: 'Первый раз использовала AR для выбора торта - это просто волшебство! Результат превзошёл ожидания.', rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🎂</span>
              <h1 className="text-2xl font-bold text-primary">Delicious Cakes</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#constructor" className="hover:text-primary transition-colors">AR Конструктор</a>
              <a href="#ingredients" className="hover:text-primary transition-colors">Ингредиенты</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="ShoppingCart" size={20} />
              <span className="ml-2">Корзина</span>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Создайте торт мечты
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Используйте AR-технологии для создания уникального дизайна вашего торта
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8 hover:scale-105 transition-transform">
                <Icon name="Sparkles" size={24} />
                <span className="ml-2">Начать создание</span>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 hover:scale-105 transition-transform">
                <Icon name="Eye" size={24} />
                <span className="ml-2">Посмотреть каталог</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 text-6xl animate-pulse">🧁</div>
          <div className="absolute top-40 right-20 text-5xl animate-pulse delay-100">🍰</div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse delay-200">🎂</div>
          <div className="absolute bottom-40 right-1/3 text-6xl animate-pulse delay-300">🍓</div>
        </div>
      </section>

      <section id="constructor" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold mb-4">AR Конструктор тортов</h2>
            <p className="text-xl text-muted-foreground">Создайте свой уникальный дизайн в режиме реального времени</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader className="bg-gradient-to-br from-primary/20 to-secondary/20">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Palette" size={24} />
                  Дизайн торта
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🎂</div>
                    <Badge variant="secondary" className="mb-2">AR Preview</Badge>
                    <p className="text-sm text-muted-foreground">Наведите камеру для просмотра в реальном размере</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button size="sm" variant="outline">
                      <Icon name="Camera" size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <Label>Количество ярусов: {cakeDesign.layers}</Label>
                    <input 
                      type="range" 
                      min="1" 
                      max="5" 
                      value={cakeDesign.layers}
                      onChange={(e) => setCakeDesign({...cakeDesign, layers: parseInt(e.target.value)})}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow animate-scale-in delay-100">
              <CardHeader className="bg-gradient-to-br from-accent/20 to-muted/20">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="ChefHat" size={24} />
                  Состав и доставка
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Tabs defaultValue="ingredients" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="ingredients">Ингредиенты</TabsTrigger>
                    <TabsTrigger value="delivery">Доставка</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="ingredients" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <Label>Вкус коржей</Label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={cakeDesign.flavor}
                        onChange={(e) => setCakeDesign({...cakeDesign, flavor: e.target.value})}
                      >
                        <option value="vanilla">Ваниль</option>
                        <option value="chocolate">Шоколад</option>
                        <option value="strawberry">Клубника</option>
                        <option value="lemon">Лимон</option>
                      </select>
                    </div>
                    
                    <div className="space-y-3">
                      <Label>Начинка</Label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={cakeDesign.filling}
                        onChange={(e) => setCakeDesign({...cakeDesign, filling: e.target.value})}
                      >
                        <option value="strawberry">Клубничная</option>
                        <option value="chocolate">Шоколадная</option>
                        <option value="caramel">Карамель</option>
                        <option value="cream">Крем</option>
                      </select>
                    </div>

                    <div className="space-y-3">
                      <Label>Декор</Label>
                      <select 
                        className="w-full p-2 border rounded-md"
                        value={cakeDesign.decoration}
                        onChange={(e) => setCakeDesign({...cakeDesign, decoration: e.target.value})}
                      >
                        <option value="flowers">Цветы</option>
                        <option value="fruits">Фрукты</option>
                        <option value="chocolate">Шоколадный</option>
                        <option value="minimal">Минимализм</option>
                      </select>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="delivery" className="space-y-4 mt-4">
                    <div className="space-y-3">
                      <Label>Дата доставки</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start">
                            <Icon name="Calendar" size={16} />
                            <span className="ml-2">
                              {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                            </span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} locale={ru} />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-3">
                      <Label>Адрес доставки</Label>
                      <Input placeholder="Введите адрес" />
                    </div>

                    <div className="space-y-3">
                      <Label>Комментарий</Label>
                      <Textarea placeholder="Особые пожелания..." />
                    </div>
                  </TabsContent>
                </Tabs>

                <Button className="w-full mt-6" size="lg">
                  <Icon name="ShoppingBag" size={20} />
                  <span className="ml-2">Заказать за 5500₽</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Каталог готовых тортов</h2>
            <p className="text-xl text-muted-foreground">Выберите из нашей коллекции или создайте свой</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cakes.map((cake, index) => (
              <Card key={cake.id} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img src={cake.image} alt={cake.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle>{cake.name}</CardTitle>
                  <CardDescription>{cake.description}</CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">{cake.price}</span>
                  <Button>
                    <Icon name="ShoppingCart" size={16} />
                    <span className="ml-2">В корзину</span>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ingredients" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Натуральные ингредиенты</h2>
            <p className="text-xl text-muted-foreground">Только лучшие продукты для ваших тортов</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ingredients.map((ingredient, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={ingredient.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{ingredient.name}</CardTitle>
                  <CardDescription>{ingredient.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши покупатели</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl">Условия доставки</CardTitle>
              <CardDescription className="text-lg">Быстро и аккуратно</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 p-8">
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Срок изготовления</h3>
                <p className="text-sm text-muted-foreground">От 2 до 5 дней в зависимости от сложности</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Доставка</h3>
                <p className="text-sm text-muted-foreground">Бесплатно по городу, точно в указанное время</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="ShieldCheck" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Гарантия</h3>
                <p className="text-sm text-muted-foreground">100% качество или вернём деньги</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground mb-8">Мы всегда рады ответить на ваши вопросы</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Phone" size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold">Телефон</p>
                <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold">Email</p>
                <p className="text-sm text-muted-foreground">info@deliciouscakes.ru</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center">
                <Icon name="MapPin" size={32} className="mx-auto mb-3 text-primary" />
                <p className="font-semibold">Адрес</p>
                <p className="text-sm text-muted-foreground">г. Москва, ул. Сладкая, 10</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl">🎂</span>
            <span className="font-bold text-xl">Delicious Cakes</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 Delicious Cakes. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
