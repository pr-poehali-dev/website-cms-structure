import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Icon from "@/components/ui/icon";

const CMSCompare = () => {
  const comparisonData = [
    {
      criteria: "Сложность освоения",
      wordpress: "⭐⭐⭐⭐⭐ Легко",
      joomla: "⭐⭐⭐ Средне",
      drupal: "⭐⭐ Сложно",
      bitrix: "⭐⭐⭐ Средне"
    },
    {
      criteria: "Производительность",
      wordpress: "⭐⭐⭐ Средняя",
      joomla: "⭐⭐⭐⭐ Хорошая",
      drupal: "⭐⭐⭐⭐⭐ Отличная",
      bitrix: "⭐⭐⭐ Средняя"
    },
    {
      criteria: "Гибкость настройки",
      wordpress: "⭐⭐⭐⭐⭐ Очень гибкая",
      joomla: "⭐⭐⭐⭐ Гибкая",
      drupal: "⭐⭐⭐⭐⭐ Очень гибкая",
      bitrix: "⭐⭐⭐⭐ Гибкая"
    },
    {
      criteria: "Безопасность",
      wordpress: "⭐⭐⭐ Средняя",
      joomla: "⭐⭐⭐⭐ Хорошая",
      drupal: "⭐⭐⭐⭐⭐ Отличная",
      bitrix: "⭐⭐⭐⭐ Хорошая"
    },
    {
      criteria: "Размер сообщества",
      wordpress: "⭐⭐⭐⭐⭐ Огромное",
      joomla: "⭐⭐⭐ Среднее",
      drupal: "⭐⭐⭐ Среднее",
      bitrix: "⭐⭐ Небольшое"
    },
    {
      criteria: "Стоимость",
      wordpress: "Бесплатно",
      joomla: "Бесплатно",
      drupal: "Бесплатно",
      bitrix: "От 69,000₽/год"
    },
    {
      criteria: "SEO-возможности",
      wordpress: "⭐⭐⭐⭐⭐ Отличные",
      joomla: "⭐⭐⭐⭐ Хорошие",
      drupal: "⭐⭐⭐⭐⭐ Отличные",
      bitrix: "⭐⭐⭐⭐ Хорошие"
    },
    {
      criteria: "Многоязычность",
      wordpress: "⭐⭐⭐ Через плагины",
      joomla: "⭐⭐⭐⭐⭐ Встроенная",
      drupal: "⭐⭐⭐⭐⭐ Встроенная",
      bitrix: "⭐⭐⭐⭐ Хорошая"
    },
    {
      criteria: "Подходит для",
      wordpress: "Блоги, малый бизнес",
      joomla: "Порталы, сообщества",
      drupal: "Корпорации, правительство",
      bitrix: "Бизнес в России"
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

        <h1 className="text-4xl font-bold mb-6 text-foreground">Сравнительный анализ CMS</h1>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Методология сравнения</h2>
          <p className="text-foreground leading-relaxed mb-4">
            Для объективного сравнения популярных систем управления контентом были выбраны следующие критерии:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>Простота освоения и использования</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>Производительность и скорость работы</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>Гибкость настройки и расширяемость</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>Уровень безопасности</span>
            </li>
            <li className="flex items-start gap-2">
              <Icon name="ChevronRight" size={20} className="text-primary mt-0.5 shrink-0" />
              <span>Размер сообщества и поддержка</span>
            </li>
          </ul>
        </Card>

        <Card className="p-6 mb-6 overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Таблица сравнения характеристик</h2>
          <Table>
            <TableHeader>
              <TableRow className="bg-accent/30">
                <TableHead className="font-bold w-[200px]">Критерий</TableHead>
                <TableHead className="font-bold">WordPress</TableHead>
                <TableHead className="font-bold">Joomla</TableHead>
                <TableHead className="font-bold">Drupal</TableHead>
                <TableHead className="font-bold">Bitrix</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, index) => (
                <TableRow key={index} className={index % 2 === 0 ? "bg-muted/20" : ""}>
                  <TableCell className="font-semibold">{row.criteria}</TableCell>
                  <TableCell>{row.wordpress}</TableCell>
                  <TableCell>{row.joomla}</TableCell>
                  <TableCell>{row.drupal}</TableCell>
                  <TableCell>{row.bitrix}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Icon name="TrendingUp" size={24} className="text-primary" />
              Преимущества
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-1">WordPress</h3>
                <p className="text-sm text-muted-foreground">Простота, огромное сообщество, тысячи плагинов</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-1">Joomla</h3>
                <p className="text-sm text-muted-foreground">Баланс простоты и функциональности</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-1">Drupal</h3>
                <p className="text-sm text-muted-foreground">Высокая производительность, безопасность</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h3 className="font-semibold mb-1">Bitrix</h3>
                <p className="text-sm text-muted-foreground">Интеграция с бизнес-инструментами</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Icon name="TrendingDown" size={24} className="text-destructive" />
              Недостатки
            </h2>
            <div className="space-y-3">
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-semibold mb-1">WordPress</h3>
                <p className="text-sm text-muted-foreground">Уязвимости при неправильной настройке</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-semibold mb-1">Joomla</h3>
                <p className="text-sm text-muted-foreground">Меньшее количество расширений</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-semibold mb-1">Drupal</h3>
                <p className="text-sm text-muted-foreground">Высокий порог входа для новичков</p>
              </div>
              <div className="border-l-4 border-destructive pl-4">
                <h3 className="font-semibold mb-1">Bitrix</h3>
                <p className="text-sm text-muted-foreground">Высокая стоимость лицензии</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Выводы</h2>
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">
              <strong>Выбор CMS зависит от конкретных задач проекта:</strong>
            </p>
            <div className="bg-accent/20 p-4 rounded-lg">
              <p className="mb-2">🎯 <strong>Для блогов и небольших сайтов</strong> — идеально подходит WordPress</p>
              <p className="mb-2">🏢 <strong>Для корпоративных порталов</strong> — рекомендуется Joomla или Drupal</p>
              <p className="mb-2">🏛️ <strong>Для крупных enterprise-проектов</strong> — оптимальным выбором будет Drupal</p>
              <p>🇷🇺 <strong>Для российского бизнеса с CRM</strong> — стоит рассмотреть 1C-Bitrix</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CMSCompare;