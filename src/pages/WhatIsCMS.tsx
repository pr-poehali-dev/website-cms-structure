import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WhatIsCMS = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link to="/">
          <Button variant="link" className="mb-4 px-0">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            На главную
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-foreground">Что такое CMS?</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Определение</h2>
          <p className="text-foreground leading-relaxed mb-4">
            <strong>CMS (Content Management System)</strong> — система управления контентом — это программное обеспечение, 
            которое позволяет создавать, редактировать и публиковать цифровой контент без необходимости писать код.
          </p>
          <p className="text-foreground leading-relaxed">
            CMS предоставляет графический интерфейс для управления веб-сайтом, упрощая процесс работы с контентом 
            для пользователей без технических навыков программирования.
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">История развития</h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="min-w-[120px] font-semibold text-muted-foreground">1990-е годы</div>
              <p className="text-foreground">Появление первых систем управления контентом для корпоративных сайтов</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[120px] font-semibold text-muted-foreground">2001 год</div>
              <p className="text-foreground">Запуск WordPress — одной из самых популярных CMS в мире</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[120px] font-semibold text-muted-foreground">2010-е годы</div>
              <p className="text-foreground">Развитие headless CMS и облачных решений</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="min-w-[120px] font-semibold text-muted-foreground">Сегодня</div>
              <p className="text-foreground">CMS используют более 70% всех веб-сайтов в интернете</p>
            </div>
          </div>
        </Card>

        <div className="bg-accent/30 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Место для изображения</h3>
          <div className="bg-muted rounded-lg flex items-center justify-center h-64 border-2 border-dashed border-border">
            <div className="text-center">
              <Icon name="Image" size={48} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Схема: Архитектура CMS</p>
            </div>
          </div>
        </div>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Основные компоненты CMS</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Административная панель</strong> — интерфейс для управления контентом
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>База данных</strong> — хранилище контента и настроек
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Система шаблонов</strong> — определяет внешний вид сайта
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Модули/плагины</strong> — расширяют функциональность
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <div>
                <strong>Система прав доступа</strong> — управление пользователями
              </div>
            </li>
          </ul>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Преимущества использования CMS</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-accent/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Простота использования</h3>
              <p className="text-sm text-muted-foreground">Не требуется знание программирования</p>
            </div>
            <div className="bg-accent/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Скорость разработки</h3>
              <p className="text-sm text-muted-foreground">Быстрое создание и обновление контента</p>
            </div>
            <div className="bg-accent/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Многопользовательская работа</h3>
              <p className="text-sm text-muted-foreground">Несколько редакторов одновременно</p>
            </div>
            <div className="bg-accent/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">SEO-оптимизация</h3>
              <p className="text-sm text-muted-foreground">Встроенные инструменты для продвижения</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WhatIsCMS;
