const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  let options;
  const body = req.body;
  const address = 'zamenafiltramoscow@gmail.com';
  const address2 = "timbersaw442211@gmail.com";

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mos.filter.shop@gmail.com',
      pass: 'puppeyMiracleNs'
    }
  });

  // zamenafiltramoscow@gmail.com    awsmmedia1@gmail.com
  /////////////////////  Дальше идут варианты модалок
  switch (body.modal){
    case 1 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ звонка',
        html: `${body.name} - заказ звонка.<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 2 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Участие в акции',
        html: `${body.name} - Участие в акции.<br/>
        ${body.payload}.<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 3 :{
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Услуга замены картриджей',
        html: `${body.name} - Замена картриджей.<br/>
        Марка фильтра: ${body.payload[0]}.<br/>
        Модель фильтра: ${body.payload[1]}.<br/>
        Услуга замены: ${body.payload[2]}.<br/>
        Местоположение: ${body.payload[3]}.<br/>
        Цена: ${body.payload[4]}.<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 4 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ в один клик',
        html: `${body.name} - Заказ в один клик.<br/>
        ${body.payload[0]}.<br/>
        ${body.payload[1]}<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
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
        html: `${body.name} - Заказ из корзины.<br/>
        ${strings.join(" ")}<br/>
        Общая стоимость: ${sum} руб.<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 7 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ услуги',
        html: `${body.name} - ${body.payload}<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 10 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Запрос коммерческого предложения',
        html: `${body.name} - Запрос коммерческого предложения<br/>
        Email: ${body.email}<br/>
        Номер телефона: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    //лэндинг квиз

    case 11 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Квиз',
        html: `${body.phone} - Прошел опрос на сайте<br/>
        Модель фильтра: ${body.model}.<br/>
        Тип фильтра: ${body.typeOfFilter || body.model} <br/>
        Услуга замены: ${body.service}.<br/>
        Место: ${body.place}.<br/>
        Цена: ${body.price}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 12 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка на замену картриджей',
        html: `Имя: ${body.name || "Не указано"}<br/>
        Телефон: ${body.phone}<br/>
        Модель фильтра: ${body.model || "Не указана"}.<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 13 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка из калькулятора',
        html: `Телефон: ${body.phone} <br/>
        Картриджи: ${body.payload.title} <br/>
        Тип картриджей: ${body.payload.typeOfFilter || body.payload.title}<br/>
        Тип услуги: ${body.payload.type} <br/>
        Место: ${body.payload.place} <br/>
        Цена: ${body.payload.price}. <br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 14 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заявка из каталога товаров',
        html: `Телефон: ${body.phone}<br/>
        Модель: ${body.payload.title}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 15 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ услуги',
        html: `Телефон: ${body.phone}<br/>
        Услуга: ${body.payload.title}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }

    case 16 : {
      options = {
        from: 'mos.filter.shop@gmail.com',
        to: address,
        subject: 'Заказ обратного звонка ',
        html: `Телефон: ${body.phone}<br/>
        <a href="tel:${body.phone}">  ${body.phone} </a>`
      }
      break;
    }


    default:break;
  }

  // let phoneClear = body.phone.replace(" ","");
  // options = {...options, html: `<a href="tel:${phoneClear}">  ${body.phone} </a>`};

  const options2 = {...options, to:address2};

  const result = await transporter.sendMail(options, (err, data) => {
    if (err){
      res.status(400).json({message:"Что- то пошло не так, попробуйте позже.",status:0});
    }
    else {
      res.status(200).json({message:"Сообщение отправлено", status:1});
    }
  });

  transporter.sendMail(options2, (err, data) => {});


}
