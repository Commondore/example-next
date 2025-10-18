## Проект на NEXTJS

Для запуска приложения с ORM Prisma необходимо выполнить следующие шаги:

1. Установить зависимости `npm install`
2. Запустить генерацию файлов prisma командой `npx prisma generate`
3. Создать в корне проекта файл `.env`
4. Прописать в файле `.env` переменную `DATABASE_URL`
   1. `DATABASE_URL="file:./prisma/dev.db"`
5. Запустить приложение командой `npm run dev`
