import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const tableOfContents = [
    { number: 1, title: "Что такое CMS?", path: "/what-is-cms" },
    { number: 2, title: "Обзор популярных CMS", path: "/cms-review" },
    { number: 3, title: "Сравнительный анализ", path: "/cms-compare" }
  ];

  const resources = [
    { title: "WordPress.org", url: "https://wordpress.org" },
    { title: "Joomla.org", url: "https://www.joomla.org" },
    { title: "Drupal.org", url: "https://www.drupal.org" },
    { title: "1C-Bitrix", url: "https://www.1c-bitrix.ru" },
    { title: "Wikipedia: CMS", url: "https://ru.wikipedia.org/wiki/Система_управления_содержимым" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="bg-primary text-primary-foreground p-8 rounded-lg mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Управление контентом сайта: CMS</h1>
          <p className="text-lg opacity-90">Учебный проект</p>
        </header>

        <Card className="p-6 mb-6 bg-accent/20">
          <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
            <Icon name="User" size={24} className="text-primary" />
            Информация о студенте
          </h2>
          <div className="space-y-2">
            <p className="text-foreground">
              <strong>ФИО:</strong> Иванов Иван Иванович
            </p>
            <p className="text-foreground">
              <strong>Группа:</strong> ИС-101
            </p>
            <p className="text-foreground">
              <strong>Тема работы:</strong> Системы управления контентом веб-сайтов
            </p>
          </div>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="FileText" size={24} className="text-primary" />
            Аннотация
          </h2>
          <p className="text-foreground leading-relaxed mb-4">
            Данная работа посвящена изучению систем управления контентом (CMS) — важнейшего инструмента 
            современной веб-разработки. В работе рассматриваются основные концепции CMS, история их 
            развития, а также проводится детальный анализ наиболее популярных платформ.
          </p>
          <p className="text-foreground leading-relaxed mb-4">
            Особое внимание уделяется сравнительному анализу четырёх ведущих CMS: WordPress, Joomla, 
            Drupal и 1C-Bitrix. Рассматриваются их архитектурные особенности, преимущества и недостатки, 
            области применения.
          </p>
          <p className="text-foreground leading-relaxed">
            Работа будет полезна студентам, изучающим веб-технологии, а также всем, кто интересуется 
            современными подходами к управлению цифровым контентом.
          </p>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="List" size={24} className="text-primary" />
            Оглавление
          </h2>
          <ol className="space-y-3">
            {tableOfContents.map((item) => (
              <li key={item.number} className="flex items-start gap-3 hover:bg-accent/10 p-2 rounded transition-colors">
                <span className="font-bold text-primary min-w-[30px]">{item.number}.</span>
                <Link to={item.path} className="flex-1">
                  <Button variant="link" className="h-auto p-0 text-left text-primary hover:underline">
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ol>
        </Card>

        <Card className="p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Icon name="Link" size={24} className="text-primary" />
            Использованные ресурсы
          </h2>
          <ul className="space-y-2">
            {resources.map((resource, index) => (
              <li key={index} className="flex items-start gap-2">
                <Icon name="ExternalLink" size={16} className="text-primary mt-1 shrink-0" />
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {resource.title}
                </a>
              </li>
            ))}
          </ul>
        </Card>

        <div className="bg-muted/30 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Icon name="Image" size={20} className="text-primary" />
            Место для изображения
          </h3>
          <div className="bg-background rounded-lg flex items-center justify-center h-48 border-2 border-dashed border-border">
            <div className="text-center">
              <Icon name="LayoutDashboard" size={48} className="mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Диаграмма: Популярность CMS в мире</p>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-border pt-6">
          <div className="flex justify-end">
            <div className="text-right space-y-1">
              <p className="text-foreground font-semibold">Иванов Иван Иванович</p>
              <p className="text-muted-foreground flex items-center gap-2 justify-end">
                <Icon name="Mail" size={16} />
                <a href="mailto:ivanov@example.com" className="text-primary hover:underline">
                  ivanov@example.com
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
