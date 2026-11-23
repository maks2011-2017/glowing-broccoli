# Руководство: Как играть в LittleBigPlanet на PS3 с онлайн-сервером PlayBredum

![](https://raw.githubusercontent.com/CTRLSKOT/webby/refs/heads/main/sssarf2123.png)

---

**ЧТО НАМ НУЖНО**

- Прошитая PS3 на HEN или любую CFW (кастомная прошивка)
- Флешка (Для прошивки и установки [Webman](https://github.com/aldostools/webMAN-MOD/releases?ysclid=mfgs3mtyrm562094569))
- [Программа Refresher на ПК](https://github.com/LittleBigRefresh/Refresher/releases)
- [.NET 9.0 DESKTOP RUNTIME](https://dotnet.microsoft.com/en-us/download/dotnet/9.0) (если нет, без этого программа не работает)
- [Webman](https://github.com/aldostools/webMAN-MOD/releases?ysclid=mfgs3mtyrm562094569) для ПС3 - для включения PS3\_MAPI и FTP сервера --- [webMAN\_MOD\_версия\_Installer.pkg](https://github.com/aldostools/webMAN-MOD/releases/download/1.47.48/webMAN_MOD_1.47.48_Installer.pkg)

---

### Почему нужна прошивка???

Многие предполагают, что для подключения к приватным серверам достаточно сменить DNS-адреса. Однако для LittleBigPlanet этого недостаточно.

Игра использует SSL-сертификаты Sony для безопасного соединения. Без модификации системы подменить эти сертификаты невозможно, поэтому требуется джейлбрейк консоли.

### Как поставить прошивку?

Туториал на установку ХЕН (Легко, быстро) :

### Устанавливаем WEBMAN

WebMAN MOD — это очень важный мод, который добавляет функционал для управления консолью, включая запуск PS3MAPI (необходим для патчинга).

1. Скачайте последнюю версию `webMAN_MOD_версия_Installer.pkg`.
2. Скопируйте файл на флешку (FAT32) и вставьте флешку **В ЛЕВЫЙ** (это важно!) **ПОРТ ПС3**.
3. На пске включите HEN.
4. В разделе игра перейдите в папку `Управление файлами` -> `Установить файлы PKG` -> `Стандарт` ->`webMAN_MOD_версия_Installer.pkg`.
5. Устанавливаем
6. Теперь выходим обратно в раздел `Игра` и наводимся на установщик вебмана, зажмите L1, запустите приложение, при этом продолжая удерживать кнопку.
7. Теперь ПС3 запустится с включенным вебманом.

![](https://github.com/CTRLSKOT/webby/blob/main/ff1.png?raw=true)

![](https://github.com/CTRLSKOT/webby/blob/main/ff2.png?raw=true)

![](https://github.com/CTRLSKOT/webby/blob/main/ff3.png?raw=true)

![](https://github.com/CTRLSKOT/webby/blob/main/ff4.png?raw=true)

![](https://github.com/CTRLSKOT/webby/blob/main/ff6.png?raw=true)

![](https://github.com/CTRLSKOT/webby/blob/main/ff5.png?raw=true)

### Подготовка к патчу!

#### Включаем PS3\_MAPI

1. После установки WEBMAN заходим в `Информация о системе` и смотрим на наш IP адрес
2. Затем откройте браузер и введите ранее обнаруженный айпишник. Вы окажетесь в меню вебмана.
3. Перейдите в раздел `Настройки (Settings)`.
4. Найдите и поставьте галочку напротив опции `CCAPI` и `Включите PS3MAPI`.
5. Сохраните изменения. Готово!

![Информация о системе, нужен айпи адрес](https://raw.githubusercontent.com/losba78rf2/webby/refs/heads/main/photo_5341635544997821755_y.jpg)

![Нажимаем на настройки](https://raw.githubusercontent.com/losba78rf2/webby/refs/heads/main/tut1.png)

![Нажимаем на галочку CCAPI и PS3MAPI включено](https://raw.githubusercontent.com/losba78rf2/webby/refs/heads/main/tut2.png)

### А теперь патч!

1. Запустите Refresher
2. Нажмите на кнопку `Patch LBP1/2/3 for PS3`
3. В поле Console IP вводим адрес вашей консоли
4. Выбираем нужную вам игру

```
 В Server URL пишем http://playbredum.ru
```

5. В Join Key пишем такой же ключ, как и у друзей, чтобы играть вместе.

6. Нажмите на кнопку `AutoDisover`

7. Нажимаем на кнопку `Patch!`

![](https://raw.githubusercontent.com/losba78rf2/webby/refs/heads/main/rfrsh1.png)

![](https://github.com/CTRLSKOT/webby/blob/main/connect.png?raw=true)

![](https://raw.githubusercontent.com/losba78rf2/webby/refs/heads/main/rfrsh3.png)

![](https://github.com/CTRLSKOT/webby/blob/main/connect22.png?raw=true)

### Настраиваем аккаунт PlayBredum

> Это обязательный шаг! Ваш никнейм на сервере n должен полностью совпадать с вашим основным никнеймом в PSN. ИНАЧЕ РАБОТАТЬ НЕ БУДЕТ

[PlayBredum - Главная страница](https://www.playbredum.ru/)

После регистрации заходите в [настройки аккаунта](https://www.playbredum.ru/settings) и разрешаете PSN (PS3/Vita/PSP) аунтефикации.

![](https://raw.githubusercontent.com/CTRLSKOT/webby/84700ba5e224fcd49b3f32015b30c5552a0253d0/ps23.png)

---

![](https://raw.githubusercontent.com/CTRLSKOT/webby/refs/heads/main/lbpfix.png)

Всё! Теперь вы можете зайти в игру и наслаждаться онлайн-функционалом. Приятной игры, до встречи!

\_\_\_\_\_\_\_\_\_

1. **Джейлбрейк консоли** (англ. jailbreak — «побег из тюрьмы», взлом) — это процесс использования уязвимостей заблокированного устройства для установки программного обеспечения, отличного от предоставляемого производителем. Это позволяет владельцу получить доступ к операционной системе и функциям, которые были ранее недоступны.


