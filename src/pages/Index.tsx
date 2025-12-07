import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    guests: '1',
    message: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо!",
      description: "Ваш ответ принят. Мы свяжемся с вами.",
    });
    setFormData({
      name: '',
      attendance: 'yes',
      guests: '1',
      message: '',
      email: '',
      phone: ''
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-white to-secondary/30">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-center gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">
              О паре
            </button>
            <button onClick={() => scrollToSection('event')} className="hover:text-primary transition-colors">
              Мероприятие
            </button>
            <button onClick={() => scrollToSection('rsvp')} className="hover:text-primary transition-colors">
              RSVP
            </button>
            <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">
              Контакты
            </button>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center animate-fade-in-up">
          <div className="mb-8">
            <Icon name="Heart" size={48} className="mx-auto text-primary mb-6" />
          </div>
          <h1 className="font-heading text-7xl md:text-8xl font-light mb-6 text-foreground">
            Владислав <span className="text-primary">&</span> Виктория
          </h1>
          <div className="h-px w-32 bg-primary mx-auto mb-6"></div>
          <p className="text-2xl md:text-3xl font-heading font-light text-muted-foreground mb-8">
            Приглашают вас разделить радость нашего торжественного дня
          </p>
          <p className="text-xl md:text-2xl font-light text-foreground">
            20 июня 2026
          </p>
        </div>
      </section>

      <section id="about" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            О паре
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading text-3xl font-light mb-4 text-center">Владислав</h3>
                <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Человек с открытым сердцем, который верит в искренность чувств и ценит каждый момент жизни.
                </p>
              </CardContent>
            </Card>
            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-heading text-3xl font-light mb-4 text-center">Виктория</h3>
                <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Нежная душа, которая наполняет жизнь светом, теплом и вдохновением на каждый новый день.
                </p>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-12 animate-fade-in border-none shadow-lg bg-secondary/50">
            <CardContent className="p-8 md:p-12">
              <h3 className="font-heading text-3xl font-light mb-6 text-center">Наша история</h3>
              <div className="h-px w-24 bg-primary mx-auto mb-8"></div>
              <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                Наша встреча была похожа на волшебство — два сердца, которые искали друг друга, наконец соединились. 
                С тех пор каждый день мы создаем свою уникальную историю любви, наполненную смехом, поддержкой и бесконечной нежностью. 
                Теперь мы готовы сделать следующий важный шаг — стать семьёй, и хотим разделить эту радость с вами.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="event" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-heading text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            Мероприятие
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="MapPin" size={40} className="text-primary" />
                </div>
                <h3 className="font-heading text-3xl font-light mb-4 text-center">Место</h3>
                <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
                <p className="text-muted-foreground leading-relaxed text-center">
                  Торжественная церемония и банкет состоятся<br />
                  в элегантном ресторане
                </p>
                <p className="text-foreground font-medium mt-4 text-center">
                  Адрес будет сообщён дополнительно
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h3 className="font-heading text-3xl font-light mb-4 text-center">Время</h3>
                <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Начало церемонии</p>
                    <p className="text-xl font-medium text-foreground">15:00</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Банкет</p>
                    <p className="text-xl font-medium text-foreground">17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 animate-fade-in border-none shadow-lg bg-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Icon name="Shirt" size={40} className="text-primary" />
              </div>
              <h3 className="font-heading text-3xl font-light mb-4 text-center">Дресс-код</h3>
              <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground leading-relaxed text-center">
                Классический стиль. Мы будем рады видеть вас в элегантных нарядах, 
                которые подчеркнут торжественность момента.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="rsvp" className="py-24 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-heading text-5xl md:text-6xl font-light text-center mb-8 animate-fade-in">
            Подтверждение присутствия
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Пожалуйста, подтвердите своё присутствие до 1 мая 2026
          </p>
          <Card className="animate-fade-in border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Введите ваше полное имя"
                    className="border-muted"
                  />
                </div>

                <div className="space-y-3">
                  <Label>Сможете ли вы присутствовать? *</Label>
                  <RadioGroup
                    value={formData.attendance}
                    onValueChange={(value) => setFormData({ ...formData, attendance: value })}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="yes" />
                      <Label htmlFor="yes" className="font-normal cursor-pointer">
                        Да, с удовольствием приду
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="no" />
                      <Label htmlFor="no" className="font-normal cursor-pointer">
                        К сожалению, не смогу
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {formData.attendance === 'yes' && (
                  <div className="space-y-2 animate-fade-in">
                    <Label htmlFor="guests">Количество гостей *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="4"
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="border-muted"
                    />
                    <p className="text-sm text-muted-foreground">Включая вас</p>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    className="border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (___) ___-__-__"
                    className="border-muted"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Пожелания и комментарии</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Особые предпочтения в меню, аллергии или пожелания"
                    className="border-muted min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                  Отправить ответ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contacts" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-heading text-5xl md:text-6xl font-light text-center mb-16 animate-fade-in">
            Контакты
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-heading text-2xl font-light mb-2">Владислав</h3>
                <div className="h-px w-12 bg-primary mx-auto mb-4"></div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={16} />
                    <span>+7 (___) ___-__-__</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={16} />
                    <span>vladislav@example.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-none shadow-lg">
              <CardContent className="p-8 text-center">
                <Icon name="User" size={40} className="mx-auto text-primary mb-4" />
                <h3 className="font-heading text-2xl font-light mb-2">Виктория</h3>
                <div className="h-px w-12 bg-primary mx-auto mb-4"></div>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Phone" size={16} />
                    <span>+7 (___) ___-__-__</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Icon name="Mail" size={16} />
                    <span>victoria@example.com</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8 animate-fade-in border-none shadow-lg bg-primary/5">
            <CardContent className="p-8 text-center">
              <Icon name="MessageCircle" size={40} className="mx-auto text-primary mb-4" />
              <h3 className="font-heading text-2xl font-light mb-4">Вопросы?</h3>
              <p className="text-muted-foreground">
                Если у вас возникли вопросы, не стесняйтесь связаться с нами.<br />
                Мы будем рады ответить на все ваши вопросы!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <Icon name="Heart" size={32} className="mx-auto text-primary mb-4" />
          <p className="font-heading text-3xl font-light mb-2">Владислав & Виктория</p>
          <p className="text-sm text-muted-foreground">20 июня 2026</p>
          <p className="text-xs text-muted-foreground mt-4">
            С любовью создано для нашего особенного дня
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
