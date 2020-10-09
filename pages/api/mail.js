// const nodemailer = require('nodemailer');
//
//
// export default async function handler(req, res) {
//
//   const address = 'timbersaw442211@gmail.com';
//
//   let transporter = await nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'mos.filter.shop@gmail.com',
//       pass: 'puppeyMiracleNs'
//     }
//   });
//
//   const body = await req.body.body;
//   let result;
//   /////////////////////  Дальше идут варианты модалок
//
//   if (body.modal === 1) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Заказ звонка',
//       text: `${body.name} - заказ звонка.
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 2) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Участие в акции',
//       text: `${body.name} - Участие в акции.
//       ${body.payload}.
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 3) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Услуга замены картриджей',
//       text: `${body.name} - Замена картриджей.
//       Марка фильтра: ${body.payload[0]}.
//       Модель фильтра: ${body.payload[1]}.
//       Услуга замены: ${body.payload[2]}.
//       Местоположение: ${body.payload[3]}.
//       Цена: ${body.payload[4]}.
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 4) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Заказ в один клик',
//       text: `${body.name} - Заказ в один клик.
//       ${body.payload[0]}.
//       ${body.payload[1]}
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 5) {
//     let sum = 0;
//     const strings = body.payload.map(item => {
//       sum += item.price*item.count;
//       return `${item.subtitle} ${item.title}. Количество: ${item.count}.`
//     });
//
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Заказ из корзины',
//       text: `${body.name} - Заказ из корзины.
//       ${strings.join(" ")}
//       Общая стоимость: ${sum} руб.
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 7) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Заказ услуги',
//       text: `${body.name} - ${body.payload}
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   if (body.modal === 10) {
//     result = await transporter.sendMail({
//       from: 'Mos-filter <mos.filter.shop@gmail.com>',
//       to: address,
//       subject: 'Запрос коммерческого предложения',
//       text: `${body.name} - Запрос коммерческого предложения
//       Email: ${body.email}
//       Номер телефона: ${body.phone}`
//     });
//   }
//
//   //////modalType 6 это слайдер с отзывами на фронте
//
//
//
//   /////////////////
//
//   if (result.rejected.length === 0) res.status(200).json({"message":"Сообщение отправлено", status:1});
//   else res.status(400).json({"message":"Что- то пошло не так, попробуйте позже.",status:0});
//
// }

const nodemailer = require('nodemailer');


export default async function handler(req, res) {

  const address = 'timbersaw442211@gmail.com';

  let transporter = await nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mos.filter.shop@gmail.com',
      pass: 'puppeyMiracleNs'
    }
  });

  const body = await req.body.body;
  let result;
  /////////////////////  Дальше идут варианты модалок


  result = await transporter.sendMail({
    from: 'Mos-filter <mos.filter.shop@gmail.com>',
    to: address,
    subject: 'Заказ звонка',
    text: `${body.name} - заказ звонка.
    Номер телефона: ${body.phone}`
  });


  if (result.rejected.length === 0) res.status(200).json({"message":"Сообщение отправлено", status:1});
  else res.status(400).json({"message":"Что- то пошло не так, попробуйте позже.",status:0});

}
