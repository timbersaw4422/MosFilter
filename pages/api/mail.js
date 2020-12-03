const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  let options;
  const body = req.body;
  const address = 'timbersaw442211@gmail.com';

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mos.filter.shop@gmail.com',
      pass: 'puppeyMiracleNs'
    }
  });

  /////////////////////  Дальше идут варианты модалок
  switch (body.modal){
    case 1 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ звонка',
        text: `${body.name} - заказ звонка.
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 2 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Участие в акции',
        text: `${body.name} - Участие в акции.
        ${body.payload}.
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 3 :{
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Услуга замены картриджей',
        text: `${body.name} - Замена картриджей.
        Марка фильтра: ${body.payload[0]}.
        Модель фильтра: ${body.payload[1]}.
        Услуга замены: ${body.payload[2]}.
        Местоположение: ${body.payload[3]}.
        Цена: ${body.payload[4]}.
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 4 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ в один клик',
        text: `${body.name} - Заказ в один клик.
        ${body.payload[0]}.
        ${body.payload[1]}
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 5 : {
      let sum = 0;
      const strings = body.payload.map(item => {
        sum += item.price*item.count;
        return `${item.subtitle} ${item.title}. Количество: ${item.count}.`
      });
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ из корзины',
        text: `${body.name} - Заказ из корзины.
        ${strings.join(" ")}
        Общая стоимость: ${sum} руб.
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 7 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ услуги',
        text: `${body.name} - ${body.payload}
        Номер телефона: ${body.phone}`
      }
      break;
    }

    case 10 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Запрос коммерческого предложения',
        text: `${body.name} - Запрос коммерческого предложения
        Email: ${body.email}
        Номер телефона: ${body.phone}`
      }
      break;
    }

    //лэндинг квиз

    case 11 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Квиз',
        text: `${body.phone} - Прошел опрос на сайте
        Модель фильтра: ${body.model}.
        Услуга замены: ${body.service}.
        Место: ${body.place}.
        Цена: ${body.price}`
      }
      break;
    }

    case 12 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка на замену картриджей',
        text: `Имя: ${body.name || "Не указано"}
        Телефон: ${body.phone}
        Модель фильтра: ${body.model || "Не указана"}.`
      }
      break;
    }

    case 13 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка из калькулятора',
        text: `Телефон: ${body.phone}
        Картриджи: ${body.payload.title}
        Тип услуги: ${body.payload.type}
        Место: ${body.payload.place}
        Цена: ${body.payload.price}.`
      }
      break;
    }

    case 14 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка из каталога товаров',
        text: `Телефон: ${body.phone}
        Модель: ${body.payload.title}`
      }
      break;
    }

    case 15 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ услуги',
        text: `Телефон: ${body.phone}
        Услуга: ${body.payload.title}`
      }
      break;
    }

    case 16 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ обратного звонка ',
        text: `Телефон: ${body.phone}`
      }
      break;
    }


    default:break;
  }

  const result = await transporter.sendMail(options, (err, data) => {
    if (err){
      res.status(400).json({message:"Что- то пошло не так, попробуйте позже.",status:0});
    }
    else {
      res.status(200).json({message:"Сообщение отправлено", status:1});
    }
  });

}
