import { YMaps , Map, Placemark } from 'react-yandex-maps';

const YandexMap = () => {

  const coordinate = [55.714815, 37.677069]


  return(

      <YMaps>
        <Map width="100%" height="48rem" border= "1px solid red" defaultState={{ center: [55.714713, 37.676969], zoom: 17 }}>
            <Placemark options={{
                  iconColor:"tomato"
               }}
               geometry={coordinate} />
        </Map>
      </YMaps>

  )
}





export default YandexMap;
