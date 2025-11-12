import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const CMSReview = () => {
  const cmsList = [
    {
      name: "WordPress",
      description: "Самая популярная CMS в мире, изначально создавалась для блогов, сейчас универсальная платформа",
      marketShare: "43% всех сайтов",
      features: ["Огромное сообщество", "Тысячи плагинов", "Гибкость", "SEO-friendly"],
      type: "Open Source"
    },
    {
      name: "Joomla",
      description: "Мощная CMS для создания сложных веб-сайтов и порталов",
      marketShare: "2.5% всех сайтов",
      features: ["Многоязычность", "Гибкие права доступа", "Расширяемость", "Безопасность"],
      type: "Open Source"
    },
    {
      name: "Drupal",
      description: "Профессиональная CMS для крупных корпоративных проектов",
      marketShare: "1.5% всех сайтов",
      features: ["Высокая производительность", "Безопасность", "Масштабируемость", "API-first"],
      type: "Open Source"
    },
    {
      name: "Bitrix",
      description: "Российская CMS с интеграцией CRM и бизнес-инструментов",
      marketShare: "Популярна в России",
      features: ["CRM интеграция", "Интранет-портал", "Интернет-магазин", "Поддержка на русском"],
      type: "Коммерческая"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <Link to="/">
          <Button variant="link" className="mb-4 px-0">
            <Icon name="ArrowLeft" size={16} className="mr-2" />
            На главную
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-6 text-foreground">Обзор популярных CMS</h1>

        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Критерии выбора CMS</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <Icon name="Target" size={32} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Цели проекта</h3>
              <p className="text-sm text-muted-foreground">Блог, магазин, портал</p>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <Icon name="Gauge" size={32} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Производительность</h3>
              <p className="text-sm text-muted-foreground">Скорость и нагрузка</p>
            </div>
            <div className="text-center p-4 bg-accent/20 rounded-lg">
              <Icon name="Wrench" size={32} className="mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">Гибкость</h3>
              <p className="text-sm text-muted-foreground">Настройка и расширение</p>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          {cmsList.map((cms, index) => (
            <Card key={index} className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{cms.name}</h2>
                    <Badge variant={cms.type === "Open Source" ? "default" : "secondary"}>
                      {cms.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-2">{cms.description}</p>
                  <p className="text-sm font-semibold text-primary">{cms.marketShare}</p>
                </div>
                <div className="bg-muted rounded-lg flex items-center justify-center w-32 h-32 border-2 border-dashed border-border shrink-0">
                  <div className="text-center">
                    <Icon name="Image" size={32} className="mx-auto mb-1 text-muted-foreground" />
                    <p className="text-xs text-muted-foreground">Логотип</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Ключевые особенности:</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {cms.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" size={16} className="text-primary shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mt-8">
          <h2 className="text-2xl font-semibold mb-4">Дополнительные CMS-решения</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-2">Headless CMS</h3>
              <p className="text-sm text-muted-foreground mb-2">Strapi, Contentful, Sanity</p>
              <p className="text-sm">Контент через API для современных веб-приложений</p>
            </div>
            <div className="border border-border rounded-lg p-4">
              <h3 className="font-semibold mb-2">E-commerce CMS</h3>
              <p className="text-sm text-muted-foreground mb-2">Shopify, Magento, WooCommerce</p>
              <p className="text-sm">Специализированные решения для интернет-магазинов</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CMSReview;